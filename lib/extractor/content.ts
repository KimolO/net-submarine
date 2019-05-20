import puppeteer from 'puppeteer';

export enum NodeType {
    Image = 'IMAGE',
    TextNode = 'TEXT_NODE',
}

interface ItoExtract {
    images?: string[];
    text?: boolean;
    style?: string[];
    links?: boolean;
    size?: boolean;
}

interface IrectSize {
    width: number;
    height: number;
    top: number;
    left: number;
}

interface InodeData {
    nodeType: NodeType;
    containers: string[];
    imageAttribute?: string[];
    style?: { [s: string]: string; } ;
    size?: IrectSize;
    href?: string;
}

export interface IcontentItem {
    name: string;
    properties: InodeData;
}

export interface IcontentJson extends Array<IcontentItem> {}

export const extractDOMContent = async (
  page: puppeteer.Page,
  toExtract: ItoExtract,
): Promise<IcontentJson> => {

  return page.evaluate(async (wantText, imageUrls, styles, wantLinks, wantSize) => {
    enum NodeType { // need to be copied in the browser context to be used
        Image = 'IMAGE',
        TextNode = 'TEXT_NODE',
    }

    const NO_TEXT_TAG = ['SCRIPT', 'BODY', 'STYLE', 'DESC'];
    const results: IcontentJson = [];

    const utils = {
      getHrefWraping: (element: HTMLElement): string | undefined => {
        while ( element && element !== document.body) {
          const href = ( element as HTMLAnchorElement).href;

          if (href) {
              return href;
          } else if (element.parentElement) {
              element = element.parentElement;
          } else {
            return undefined;
          }
        }
        return undefined;
      },
      getRectSize : (element: HTMLElement): IrectSize => {
        const rect = element.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
        };
      },
      getStyle : (element: HTMLElement, style: string[]): { [s: string]: string; } => {
        const result: { [s: string]: string; }  = {};

        style.forEach((p: string) => {
            result[p] = getComputedStyle(element, null).getPropertyValue(p);
        });

        return result;
      },
    };

    const buildNodeData = (node: HTMLElement, nodeType: NodeType): InodeData => {
      const data: InodeData = {
        containers: [],
        nodeType,
      };

      let temp: HTMLElement | null = node;
      while ( temp && temp !== document.body) {
        data.containers.push(temp.tagName.toUpperCase());
        temp = temp.parentElement;
      }

      if ( styles ) {
        data.style = utils.getStyle(node, styles);
      }
      if ( wantSize ) {
        data.size = utils.getRectSize(node);
      }
      if ( wantLinks ) {
        data.href = utils.getHrefWraping(node);
      }

      return data;
    };

    if (document.body.firstChild) {
      let n: Node = document.body.firstChild;
      while (!!n) {
        if (wantText) {
          if (n.nodeType === Node.TEXT_NODE && n.textContent) {
            const parent = n.parentElement;
            const text = parent && parent.textContent ? parent.textContent.trim() : '' ;

            if (text.length !== 0 && parent && !NO_TEXT_TAG.includes(parent.tagName.toUpperCase())) {
              results.push( {
                   name: text,
                   properties : buildNodeData(parent, NodeType.TextNode),
              });
            }
          }
        }

        if (imageUrls) {
          if ( n.nodeType === Node.ELEMENT_NODE ) {

            (n as HTMLElement).getAttributeNames().forEach( (attr) => {
                const value = (n as HTMLElement).getAttribute(attr) || '';
                const foundSrc = imageUrls.filter( (url: string) => value.indexOf(url) >= 0 )[0];

                if (foundSrc) {
                    const nodeData = buildNodeData((n as HTMLElement), NodeType.Image);
                    nodeData.imageAttribute = [attr, (n as HTMLElement).getAttribute(attr) || ''];

                    results.push({
                        name: foundSrc,
                        properties : nodeData,
                   });
                }
            });
          }
        }

        if (n.firstChild) {
          n = n.firstChild;
        } else if (n.nextSibling) {
          n = n.nextSibling;
        } else {
          let parent = n.parentNode;
          while (parent !== document.body && parent != null) {
            if (parent.nextSibling) {
              n = parent.nextSibling;
              break;
            }
            parent = parent.parentNode;
          }
          if (parent === document.body || parent == null) {
            break;
          }
        }
      }
    }

    return results;
  }, toExtract.text || false,
     toExtract.images || false,
     toExtract.style || false,
     toExtract.links || false,
     toExtract.size || false);
};

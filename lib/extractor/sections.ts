import { hostname } from 'os';
import { URL } from 'url';
import {
    IcontentItem,
    IcontentJson,
    NodeType,
} from './content';

interface IOptions {
    removeDuplicates?: boolean;
}

const wordsCount = (str: string) => {
    return str.split(' ').length;
};

const getRelevantUrl = (url: URL): string =>
    url.host + url.pathname + url.search;

const isInSomeTagContained = (arr: string[], element: IcontentItem): boolean =>
    arr.some((r) => element.properties.containers.includes(r));

export const findSectionLinks = (url: string, contentJson: IcontentJson, options?: IOptions): IcontentJson => {
    const pageUrl = new URL(url);
    const seen: Array<string|undefined> = [ getRelevantUrl(pageUrl) ];

    const sections  = contentJson.filter(
        (element) => {
            const hrefUrl = element.properties.href && new URL(element.properties.href);
            if (hrefUrl) {
                const relevantUrl = getRelevantUrl(hrefUrl);
                if (!seen.includes(relevantUrl)) {
                    const isValid = (
                        element.properties.nodeType === NodeType.TextNode
                        && isInSomeTagContained(['NAV', 'UL', 'HEADER'], element)
                        && !isInSomeTagContained(['FOOTER'], element)
                        && (wordsCount(element.name) < 4)
                        && pageUrl.hostname === hrefUrl.hostname
                    );
                    if (isValid && options && options.removeDuplicates && hrefUrl) {
                        seen.push(getRelevantUrl(hrefUrl));
                    }
                    return isValid;
                }
            }
            return false;
        },
    );

    return sections;
};

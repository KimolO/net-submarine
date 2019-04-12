import puppeteer from 'puppeteer';

type FunctionRequestCallback = (data: puppeteer.Request) => void;
type FunctionResponseCallback = (data: puppeteer.Response) => void;

export type Request = puppeteer.Request;
export type Response = puppeteer.Response;
export type ResourceType = puppeteer.ResourceType;

interface Iobserver {
  filter: (request: puppeteer.Request) => boolean;
  reqCB?: FunctionRequestCallback;
  resCB?: FunctionResponseCallback;
  matchingUrls?: string[];
  abort?: boolean;
}

class RequestObserver {
  public static async addObserver(page: puppeteer.Page, observer: Iobserver) {
    const pageID: string = this.getPageId(page);

    if (pageID in this.pageObservers) {
      this.pageObservers[pageID].push(observer);
    } else {
      this.pageObservers[pageID] = [observer];

      // 1st time initialization
      await this.initializeRequestInterception(page, pageID);
    }
  }

  private static pageObservers: { [pageId: string]: Iobserver[] } = {};

  private static async initializeRequestInterception(
    page: puppeteer.Page,
    pageID: string,
  ) {
    await page.setRequestInterception(true);

    page.on('request', (request: puppeteer.Request) => {
      const observers = this.pageObservers[pageID];
      let toAbortRequest = false;

      for (const ob of observers) {
        if (ob.filter(request)) {
          if (ob.resCB) {
            if (ob.matchingUrls) {
              ob.matchingUrls.push(request.url());
            } else {
              ob.matchingUrls = [request.url()];
            }
          }
          if (ob.reqCB) {
            ob.reqCB(request);
          }
          if (ob.abort) {
            toAbortRequest = true;
          }
        }
      }

      toAbortRequest ?  request.abort() : request.continue();
    });

    page.on('response', (response: puppeteer.Response) => {
      const observers = this.pageObservers[pageID];

      for (const ob of observers) {
        if (
          ob.resCB &&
          ob.matchingUrls &&
          ob.matchingUrls.includes(response.url())
        ) {
          ob.resCB(response);
        }
      }
    });
  }

  private static getPageId(page: puppeteer.Page): string {
    const target: any = page.target();

    return target._targetId;
  }
}

export const observe = {
  async request(
    page: puppeteer.Page,
    filter: (request: puppeteer.Request) => boolean,
    reqCB: FunctionRequestCallback,
    resCB?: FunctionResponseCallback,
  ) {
    RequestObserver.addObserver(page, {
      filter,
      reqCB,
      resCB,
    });
  },

  async requestType(
    page: puppeteer.Page,
    type: ResourceType,
    reqCB: FunctionRequestCallback,
    resCB?: FunctionResponseCallback,
  ) {
    this.request(page, (request) => request.resourceType() === type, reqCB, resCB);
  },
  async urlMatch(
    page: puppeteer.Page,
    regex: RegExp,
    reqCB: FunctionRequestCallback,
    resCB?: FunctionResponseCallback,
  ) {
    this.request(page, (request) => regex.test(request.url()), reqCB, resCB);
  },
};

export const abort = {
  async request(
    page: puppeteer.Page,
    filter: (request: puppeteer.Request) => boolean,
  ) {
    RequestObserver.addObserver(page, { filter, abort: true });
  },

  async requestType(
    page: puppeteer.Page,
    type: ResourceType,
  ) {
    this.request(page, (request) => request.resourceType() === type);
  },
  async urlMatch(
    page: puppeteer.Page,
    regex: RegExp,
  ) {
    this.request(page, (request) => regex.test(request.url()));
  },
};

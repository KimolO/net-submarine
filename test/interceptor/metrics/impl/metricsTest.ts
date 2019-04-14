jest.mock('interceptor/interceptorBase');

import { Page, Request } from 'puppeteer';
import { observe } from '../../../../lib/interceptor/interceptorBase';
import * as metrics from '../../../../lib/interceptor/metrics';

const callMetrics = async (
  name: string,
  page: Page,
  callback: (o: object) => void,
) => {
  switch (name) {
    case 'alexa':
      metrics.alexa(page, callback);
      break;
    case 'blueKai':
      metrics.blueKai(page, callback);
      break;
    case 'chartbeat':
      metrics.chartbeat(page, callback);
      break;
    case 'comscore':
      metrics.comscore(page, callback);
      break;
    case 'dataxpand':
      metrics.dataxpand(page, callback);
      break;
    case 'effective':
      metrics.effective(page, callback);
      break;
    case 'facebookAudiences':
      metrics.facebookAudiences(page, callback);
      break;
    case 'getClicky':
      metrics.getClicky(page, callback);
      break;
    case 'googleAnalytics':
      metrics.googleAnalytics(page, callback);
      break;
    case 'jetpack':
      metrics.jetpack(page, callback);
      break;
    case 'lotame':
      metrics.lotame(page, callback);
      break;
    case 'quantcast':
      metrics.quantcast(page, callback);
      break;
    default:
      throw new Error(`Wrong metrics name: ${name}`);
  }
};

export const execTest = (
  testName: string,
  testData: Array<[string, object]>,
) => {
  if (testData.length === 0) {
    throw new Error(`‎${testName} : Empty dataset[] to test ‎⚠️`);
  }
  const page = new Object() as jest.Mocked<Page>;
  const request: jest.Mocked<Request> = { url: jest.fn() } as any;
  const mockCallback = jest.fn();

  describe(`Metrics ${testName} :`, () => {
    let observedPage: Page;
    let rgx: RegExp;
    let reqCB: (r: Request) => void;

    beforeAll(async () => {
      observe.urlMatch = jest.fn((mypage, myrgx, myreqCB) => {
        observedPage = mypage;
        rgx = myrgx;
        reqCB = myreqCB;
        return Promise.resolve();
      });

      await callMetrics(testName, page, mockCallback);
    });

    it(`calls observe.urlMatch and observe correct page `, () => {
      expect(observe.urlMatch).toHaveBeenCalledTimes(1);
      expect(observedPage).toBe(page);
    });

    describe('validate on dataset :', () => {
      testData.forEach((x: [string, object]) => {
        const url: string = x[0];
        const result: object = x[1];

        it(`is valid request.url :  ${url}`, () => {
          expect(rgx.test(url)).toBe(true);
        });

        it(`${JSON.stringify( result )} is extracted  from url :  ${url} `, () => {
          request.url.mockImplementation(() => url);
          reqCB(request);
          expect(mockCallback).toHaveBeenCalledWith(result);
        });
      });
    });
  });
};

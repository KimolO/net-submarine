import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import { observe } from '../../interceptorBase';
import { IGetClicky } from '../interface';

export const getClicky = async (
  page: puppeteer.Page,
  callback: (x: IGetClicky) => void,
) => {
  observe.urlMatch(
    page,
    /^https:\/\/in\.getclicky\.com\/in\.php\?/,
    (request: puppeteer.Request) => {
      const url = request.url();
      const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

      callback({
        siteId: searchParams.get('site_id') || 'ERROR: site_id not found',
      });
    },
  );
};

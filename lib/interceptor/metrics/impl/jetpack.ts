import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import { observe } from '../../interceptorBase';
import { IJetpack } from '../interface';

export const jetpack = async (
  page: puppeteer.Page,
  callback: (x: IJetpack) => void,
) => {
  observe.urlMatch(
    page,
    /^https:\/\/pixel\.wp\.com\/g\.gif\?/,
    (request: puppeteer.Request) => {
      const url = request.url();
      const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

      callback({
        blog: searchParams.get('blog') || 'ERROR: blog not found',
        tz: searchParams.get('tz') || 'ERROR: tz not found',
      });
    },
  );
};

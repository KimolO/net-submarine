import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import { observe } from '../../interceptorBase';
import { IEffective } from '../interface';

export const effective = async (
  page: puppeteer.Page,
  callback: (x: IEffective) => void,
) => {
  observe.urlMatch(
    page,
    /^https:\/\/collector\.effectivemeasure\.net\/pixel\?/,
    (request: puppeteer.Request) => {
      const url = request.url();
      const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

      callback({
        frame: searchParams.get('vn') || 'ERROR: uid not found',
      });
    },
  );
};

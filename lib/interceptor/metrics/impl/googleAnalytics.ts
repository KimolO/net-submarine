import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IGoogleAnalytics} from '../interface';

const getDimensions = (searchParams: URLSearchParams) => {
    const dimensions: { [s: string]: string; } = {};

    for (const key of searchParams.keys()) {
       const match = /cd(\d+)/.exec(key);
       if (match) {
          const num = match[1];
          dimensions[`dimension${num}`] = (searchParams.get(key) || '');
       }
    }

    return dimensions;
};

export const googleAnalytics = async (page: puppeteer.Page, callback: (x: IGoogleAnalytics) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/www\.google-analytics\.com\/.*collect\?/,
        {request : (request: puppeteer.Request) => {

            const url = request.url();
            const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));
            const dimensions = getDimensions(searchParams);

            callback({
                dimensions: Object.entries(dimensions).length > 0 ? dimensions : undefined,
                uaCode: searchParams.get('tid') || 'ERROR: tid not found',
            });
        }},
    );
};

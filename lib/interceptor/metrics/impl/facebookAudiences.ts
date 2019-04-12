import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IFacebookAudiences} from '../interface';

export const facebookAudiences = async (page: puppeteer.Page, callback: (x: IFacebookAudiences) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/www\.facebook\.com\/tr\/?.*(ev=PageView|ev=PixelInitialized).*/,
        (request: puppeteer.Request) => {
            const url = request.url();
            const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

            callback({
                pixelId: searchParams.get('id') || 'ERROR: id not found',
            });
        },
    );
};

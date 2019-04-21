import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IComscore} from '../interface';

export const comscore = async (page: puppeteer.Page, callback: (x: IComscore) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/sb\.scorecardresearch\.com\/b\?/,
        {request : (request: puppeteer.Request) => {
            const url = request.url();
            const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

            callback({
                c2Var: searchParams.get('c2') || 'ERROR: a not found',
                extraUrlParams: searchParams.get('comscorekw') || undefined,
            });
        }},
    );
};

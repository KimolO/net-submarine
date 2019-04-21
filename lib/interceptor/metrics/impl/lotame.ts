import puppeteer from 'puppeteer';
import {observe} from '../../interceptorBase';
import {ILotame} from '../interface';

export const lotame = async (page: puppeteer.Page, callback: (x: ILotame,
    ) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/.+\.crwdcntrl\.net\/5\/c=.+/,
        {request : (request: puppeteer.Request) => {
            const c = /\/c=(.+?)\//.exec(request.url());

            callback({
                account : (c && c.length > 1) ? c[1] : 'ERROR: lotame account not found',
            });
        }},
    );
};

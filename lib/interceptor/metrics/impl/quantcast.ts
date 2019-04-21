import {Page, Request} from 'puppeteer';
import {observe} from '../../interceptorBase';
import {IQuantcast} from '../interface';

export const quantcast = async (page: Page, callback: (x: IQuantcast) => void) => {
    observe.urlMatch(
        page,
        /^http[s]?:\/\/pixel\.quantserve\.com\/pixel;/,
        {request : (request: Request) => {
            const data = request.url().split(';');
            const a = data.find((x) => x.indexOf('a=') === 0);

            callback({
                pcode: a ? a.slice(2) : 'ERROR: a not found',
            });
        }},
    );
};

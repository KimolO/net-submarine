import {Page, Request} from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IPanmetrics} from '../interface';

export const panmetrics = async (page: Page, callback: (x: IPanmetrics) => void) => {
    observe.urlMatch(
        page,
        /^http[s]?:\/\/id\.cxense\.com\/public\/user\/id\?/,
        {request : (request: Request) => {
            const url = request.url();
            const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));
            try {
                const json = searchParams.get('json');
                if (json) {
                    const siteId = JSON.parse(json).siteId;
                    callback({
                        siteId,
                    });
                }
            } catch (e) {}

            callback({
                siteId: 'ERROR: siteId not found',
            });
        }},
    );
};

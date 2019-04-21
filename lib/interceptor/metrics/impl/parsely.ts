import {Page, Request} from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IParsely} from '../interface';

export const parsely = async (page: Page, callback: (x: IParsely) => void) => {
    observe.urlMatch(
        page,
        /pixel\.parsely\.com/,
        {request : (request: Request) => {
            const url = request.url();
            const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

            callback({
                apiKey: searchParams.get('idsite') || 'ERROR: siteId not found',
            });
        }},
    );
};

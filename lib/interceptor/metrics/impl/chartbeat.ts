import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IChartbeat} from '../interface';

export const chartbeat = async (page: puppeteer.Page, callback: (x: IChartbeat) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/ping\.chartbeat\.net\/ping\?/,
        (request: puppeteer.Request) => {
            const url = request.url();
            const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

            callback({
                uid: searchParams.get('g') || 'ERROR: uid not found',
            });
        },
    );
};

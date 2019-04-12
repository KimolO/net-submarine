import puppeteer from 'puppeteer';
import {observe} from '../../interceptorBase';
import {IBlueKai} from '../interface';

export const blueKai = async (page: puppeteer.Page, callback: (x: IBlueKai) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/stags\.bluekai\.com\/site\/.+\?/,
        (request: puppeteer.Request) => {
            let id = request.url().substr('https://stags.bluekai.com/site/'.length);
            id = id.substr(0, id.indexOf('?'));

            callback({
                id,
            });
        },
    );
};

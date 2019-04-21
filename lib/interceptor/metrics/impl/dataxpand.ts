import puppeteer from 'puppeteer';
import {observe} from '../../interceptorBase';
import {IDataxpand} from '../interface';

export const dataxpand = async (page: puppeteer.Page, callback: (x: IDataxpand) => void) => {
    const dataspanRegex: RegExp =  new RegExp('^https:\/\/tc\.dataxpand\.com\/tc\/(.+?)\.js');

    observe.urlMatch(
        page,
        dataspanRegex,
        {request : (request: puppeteer.Request) => {
            const match = dataspanRegex.exec(request.url());

            callback({
                siteId: match ? match[1] : 'ERROR: siteId not found',
            });
        }},
    );
};

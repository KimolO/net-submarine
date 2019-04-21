import puppeteer from 'puppeteer';
import { URLSearchParams } from 'url';
import {observe} from '../../interceptorBase';
import {IAlexa} from '../interface';

export const alexa = async (page: puppeteer.Page, callback: (x: IAlexa) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/certify\.alexametrics\.com\/atrk\.gif\?/,
        {request : (request: puppeteer.Request) => {
                const url = request.url();
                const searchParams = new URLSearchParams(url.substr(url.indexOf('?')));

                callback({
                    acctNum: searchParams.get('account') || 'ERROR: account not found',
                    domain: searchParams.get('domain') || 'ERROR: domain not found',
                });
        }},
    );
};

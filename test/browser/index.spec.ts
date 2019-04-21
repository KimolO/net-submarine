jest.mock('puppeteer');

import puppeteer, { Browser } from 'puppeteer';
import * as netSubmarine from '../../lib';

describe('Browser', () => {
    it ('launch browser with options', async () => {
        puppeteer.launch = jest.fn(() => {
            const _page: puppeteer.Page = {setUserAgent: jest.fn()} as any;
            const _browser: puppeteer.Browser = {
                pages: jest.fn(() => [_page]),
            } as any;

            return Promise.resolve(_browser);
        });
        const options: netSubmarine.IPageOptions = {
            launchOptions: { headless: true },
            userAgent: netSubmarine.UserAgent.mobile,
        };

        expect(puppeteer.launch).not.toHaveBeenCalled();
        const { page, browser} = await netSubmarine.getPageAndBrowser(options);
        expect(puppeteer.launch).toHaveBeenCalled();
        expect(puppeteer.launch).toHaveBeenCalledWith(options.launchOptions);
        expect(page.setUserAgent).toHaveBeenCalledWith(netSubmarine.UserAgent.mobile);
        expect(browser.pages).toHaveBeenCalled();
    });

    it ('not launch browser if provided', async () => {
        const p: puppeteer.Page = {setUserAgent: jest.fn()} as any;
        const browser: puppeteer.Browser = {
            newPage: jest.fn(() => p),
            pages: jest.fn(),
        } as any;

        puppeteer.launch = jest.fn();

        expect(puppeteer.launch).not.toHaveBeenCalled();
        expect(browser.newPage).not.toHaveBeenCalled();
        const page = await netSubmarine.getPage(undefined, browser);
        expect(puppeteer.launch).not.toHaveBeenCalled();
        expect(browser.newPage).toHaveBeenCalled();
        expect(page.setUserAgent).not.toHaveBeenCalled();
    });

});

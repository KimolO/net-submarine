import puppeteer from 'puppeteer';

interface IPageAndBrowser {
    readonly page: puppeteer.Page;
    readonly browser: puppeteer.Browser;
}

const pageAndBrowser =
    async (pageOptions: IPageOptions, optionalBrowser?: puppeteer.Browser):
        Promise<IPageAndBrowser> => {
        const browser: puppeteer.Browser =
            optionalBrowser || await puppeteer.launch(pageOptions.launchOptions);
        const page: puppeteer.Page = optionalBrowser ? await browser.newPage() : (await browser.pages())[0];

        if (pageOptions.userAgent) {
            page.setUserAgent(pageOptions.userAgent);
        }
        if (pageOptions.url) {
            await page.goto(pageOptions.url);
        }

        return { page, browser };
    };

export enum UserAgent {
    mobile = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)'
    + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3679.0 Mobile Safari/537.36',
    desktop = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6)'
    + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
}

export interface IPageOptions {
    readonly launchOptions?: puppeteer.LaunchOptions;
    readonly url?: string;
    readonly userAgent?: UserAgent;
}

export const getPage =
    async (pageOptions: IPageOptions, browser?: puppeteer.Browser):
        Promise<puppeteer.Page> => {
        await puppeteer.launch(pageOptions.launchOptions);

        const { page } = await pageAndBrowser(pageOptions, browser);

        return page;
    };

export const getPageAndBrowser =
    async (pageOptions: IPageOptions):
        Promise<IPageAndBrowser> => {
        const { page, browser } = await pageAndBrowser(pageOptions);

        return { page, browser };
    };

import * as puppeteer from 'puppeteer';
import { URLSearchParams, resolve } from 'url';
import { abort, observe } from "../lib/interceptor";

const MOBILE_USER_AGENT : string = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3679.0 Mobile Safari/537.36';

const main = async function() {
    const browser : puppeteer.Browser = await puppeteer.launch({ headless: true});
    const page : puppeteer.Page = (await browser.pages())[0];
    page.setUserAgent(MOBILE_USER_AGENT)

    const regex : RegExp = /securepubads.g.doubleclick.net\/gampad\/ads\?/;

    const callback = function( r : puppeteer.Request) {
        const params = new URLSearchParams(r.url())
        const scp = params.get('scp')
        console.warn("MARFEEL")
        console.log(scp);
        browser.close();
    }

    observe.urlMatch(page, regex, callback);
    try{
        await page.goto('https://autoweek.com/article/car-reviews/2019-porsche-panamera-4-essentials-relatively-affordable-one');
    }catch(e){
    }
}

const mainDesktop = async function() {
    const browser : puppeteer.Browser = await puppeteer.launch({ headless: true});
    const page : puppeteer.Page = (await browser.pages())[0];
    page.setUserAgent(MOBILE_USER_AGENT)

    const regex : RegExp = /securepubads.g.doubleclick.net\/gampad\/ads\?/;

    const callback = function( r : puppeteer.Request) {
        const params = new URLSearchParams(r.url())
        const scp = params.get('scp')
        console.warn("DESKTOP")
        console.log(scp);
    }

    const type : puppeteer.ResourceType = "script";

    //abort.requestType(page, type, callback);

    observe.urlMatch(page, regex, callback);
    try{
        await page.goto('https://autoweek.com/article/car-reviews/2019-porsche-panamera-4-essentials-relatively-affordable-one?fromt=yes');
    }catch(e){
    }
}

//mainDesktop();
main().then(mainDesktop);
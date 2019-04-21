import puppeteer from 'puppeteer';
import {observe} from '../../interceptorBase';
import {IOnthe} from '../interface';

export const onthe = async (page: puppeteer.Page, callback: (x: IOnthe,
    ) => void) => {
    observe.urlMatch(
        page,
        /^https:\/\/cdn\.onthe\.io\/io\.js/,
        {request : (request: puppeteer.Request) => {
            const projectId = /^https:\/\/cdn\.onthe\.io\/io\.js\/(.*)/.exec(request.url());

            callback({
                projectId : (projectId && projectId.length > 1) ? projectId[1] : 'ERROR: projectId account not found',
            });
        }},
    );
};

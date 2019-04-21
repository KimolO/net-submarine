import {
    IPerformanceJSON,
    sizeType,
} from './index';
import { Isize } from './interface';

export const buildJsonObject = (): IPerformanceJSON => ({
  document: [],
  stylesheet: [],
  image: [],
  media: [],
  font: [],
  script: [],
  texttrack: [],
  xhr: [],
  fetch: [],
  eventsource: [],
  websocket: [],
  manifest: [],
  other: [],
});

export const buildJsonInterceptor = (
  json: IPerformanceJSON,
  page: any,
): void => {
    sizeType(page, 'document', (x: Isize) => {
        json.document.push(x);
    });
    sizeType(page, 'stylesheet' , (x: Isize) => {
        json.stylesheet.push(x);
    });
    sizeType(page, 'image', (x: Isize) => {
        json.image.push(x);
    });
    sizeType(page, 'media', (x: Isize) => {
        json.media.push(x);
    });
    sizeType(page, 'font', (x: Isize) => {
        json.font.push(x);
    });
    sizeType(page, 'script', (x: Isize) => {
        json.script.push(x);
    });
    sizeType(page, 'texttrack', (x: Isize) => {
        json.texttrack.push(x);
    });
    sizeType(page, 'xhr', (x: Isize) => {
        json.xhr.push(x);
    });
    sizeType(page, 'fetch', (x: Isize) => {
        json.fetch.push(x);
    });
    sizeType(page, 'eventsource', (x: Isize) => {
        json.eventsource.push(x);
    });
    sizeType(page, 'websocket', (x: Isize) => {
        json.websocket.push(x);
    });
    sizeType(page, 'manifest', (x: Isize) => {
        json.manifest.push(x);
    });
    sizeType(page, 'other', (x: Isize) => {
        json.other.push(x);
    });
};

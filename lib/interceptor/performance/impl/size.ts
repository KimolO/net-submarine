import puppeteer from 'puppeteer';
import { observe } from '../../interceptorBase';
import { Isize } from './../interface';

const items: any = [];

export const sizeType = async (
  page: puppeteer.Page,
  type: puppeteer.ResourceType,
  responseCallback: (r: Isize) => void,
) => {
  observe.requestType(page, type, {
    response: async (data) => {
      try {
        const bufferSize = (await data.buffer()).length;
        const item: Isize = {
          bufferSize,
          HeaderContentEncoding: data.headers()['content-encoding'],
          HeaderContentLenght: data.headers()['content-length'],
          url: data.url(),
        };
        responseCallback(item);
      } catch (e) {}
    },
  });
};

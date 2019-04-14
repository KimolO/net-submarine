jest.mock('puppeteer');

import puppeteer from 'puppeteer';
import { Page, Request, Response } from 'puppeteer';
import { abort, observe } from '../../lib/interceptor';

type FunctionRequestCallback = (data: puppeteer.Request) => void;
type FunctionResponseCallback = (data: puppeteer.Response) => void;

describe('Observe', () => {
  let page: jest.Mocked<Page>;
  let page2: jest.Mocked<Page>;
  let request: jest.Mocked<Request>;
  let response: jest.Mocked<Response>;
  let mockCallbackRq: FunctionRequestCallback;
  let mockCallbackResponse: FunctionResponseCallback;
  let idCounter = 0;

  beforeEach(() => {
    const pageId = `id${++idCounter}`;
    const pageId2 = `id${++idCounter}`;

    page = {
      on: jest.fn(),
      setRequestInterception: jest.fn(),
      target: jest.fn(() => ({ _targetId: pageId })),
    } as any;

    page2 = {
      on: jest.fn(),
      setRequestInterception: jest.fn(),
      target: jest.fn(() => ({ _targetId: pageId2 })),
    } as any;

    request = {
      continue: jest.fn(),
      resourceType: jest.fn(),
      url: jest.fn(),
    } as any;

    response = { url: jest.fn() } as any;

    mockCallbackRq = jest.fn();
    mockCallbackResponse = jest.fn();
  });

  it('Initialize 1 page', async () => {
    expect(page.setRequestInterception).not.toHaveBeenCalled();

    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );
    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );

    expect(page.setRequestInterception).toHaveBeenCalledWith(true);
    expect(page.setRequestInterception).toHaveBeenCalledTimes(1);
    expect(page.on).toHaveBeenCalledTimes(2);
  });

  it('Initialize 2 pages', async () => {
    expect(page.setRequestInterception).not.toHaveBeenCalled();

    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );
    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );
    await observe.request(
      page2,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );
    await observe.request(
      page2,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );

    expect(page.setRequestInterception).toHaveBeenCalledWith(true);
    expect(page.setRequestInterception).toHaveBeenCalledTimes(1);
    expect(page.on).toHaveBeenCalledTimes(2);
    expect(page2.setRequestInterception).toHaveBeenCalledWith(true);
    expect(page2.setRequestInterception).toHaveBeenCalledTimes(1);
    expect(page2.on).toHaveBeenCalledTimes(2);
  });

  it('Request and Response intercepted', async () => {
    expect(page.setRequestInterception).not.toHaveBeenCalled();

    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );

    expect(page.on).toHaveBeenCalledTimes(2);
    expect(page.on.mock.calls).toEqual([
      ['request', expect.anything()],
      ['response', expect.anything()],
    ]);
  });

  it('Filter-Passing request triggers callback', async () => {
    expect(page.setRequestInterception).not.toHaveBeenCalled();

    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );

    expect(mockCallbackRq).not.toHaveBeenCalled();
    page.on.mock.calls[0][1](request); // page.on request fired
    expect(mockCallbackRq).toHaveBeenCalledWith(request);

    expect(mockCallbackResponse).not.toHaveBeenCalled();
    page.on.mock.calls[1][1](response); // page.on response fired
    expect(mockCallbackResponse).toHaveBeenCalledWith(response);
  });

  it('NOT Filter-Passing request do not trigger callback', async () => {
    expect(page.setRequestInterception).not.toHaveBeenCalled();

    await observe.request(
      page,
      (r: Request) => false,
      mockCallbackRq,
      mockCallbackResponse,
    );

    expect(mockCallbackRq).not.toHaveBeenCalled();
    page.on.mock.calls[0][1](request);
    expect(mockCallbackRq).not.toHaveBeenCalled();
    expect(mockCallbackResponse).not.toHaveBeenCalled();
  });

  it('2 VALID request triggers 2 callbacks', async () => {
    const callback2: FunctionRequestCallback = jest.fn();
    const callbackResponse2: FunctionResponseCallback = jest.fn();
    expect(page.setRequestInterception).not.toHaveBeenCalled();

    await observe.request(
      page,
      (r: Request) => true,
      mockCallbackRq,
      mockCallbackResponse,
    );
    await observe.request(
      page,
      (r: Request) => true,
      callback2,
      callbackResponse2,
    );

    expect(mockCallbackRq).not.toHaveBeenCalled();
    expect(callback2).not.toHaveBeenCalled();
    page.on.mock.calls[0][1](request);
    expect(mockCallbackRq).toHaveBeenCalledWith(request);
    expect(callback2).toHaveBeenCalledWith(request);

    expect(mockCallbackResponse).not.toHaveBeenCalled();
    expect(callbackResponse2).not.toHaveBeenCalled();
    page.on.mock.calls[1][1](response);
    expect(mockCallbackResponse).toHaveBeenCalledWith(response);
    expect(callbackResponse2).toHaveBeenCalledWith(response);
  });
});

describe('requestType + urlMatch', () => {
  let page: jest.Mocked<Page>;
  let request: jest.Mocked<Request>;
  let mockCallbackRq: FunctionRequestCallback;
  let mockCallbackResponse: FunctionResponseCallback;

  beforeAll(() => {
    request = {
      continue: jest.fn(),
      resourceType: jest.fn(),
      url: jest.fn(),
    } as any;
  });

  it('observe.requestType: calls observe.requerst and filter by request resourceType', async () => {
    observe.request = jest.fn((p, filter, m1, m2) => {
      request.resourceType.mockImplementation(() => 'script');
      expect(filter(request)).toBe(true);
      request.resourceType.mockImplementation(() => 'font');
      expect(filter(request)).toBe(false);
      return Promise.resolve();
    });

    await observe.requestType(
      page,
      'script',
      mockCallbackRq,
      mockCallbackResponse,
    );
    expect(observe.request).toHaveBeenCalled();
  });
  it('observe.urlMatch: calls observe.requerst and filter by request uri + regex', async () => {
    observe.request = jest.fn((p, filter, m1, m2) => {
      request.url.mockImplementation(() => 'easyMatch');
      expect(filter(request)).toBe(true);
      request.url.mockImplementation(() => 'notMatching');
      expect(filter(request)).toBe(false);
      return Promise.resolve();
    });

    await observe.urlMatch(
      page,
      /easyMatch/,
      mockCallbackRq,
      mockCallbackResponse,
    );
    expect(observe.request).toHaveBeenCalled();
  });

  it('abort.requestType: calls abort.requerst and filter by request resourceType', async () => {
    abort.request = jest.fn((p, filter) => {
      request.resourceType.mockImplementation(() => 'script');
      expect(filter(request)).toBe(true);
      request.resourceType.mockImplementation(() => 'font');
      expect(filter(request)).toBe(false);
      return Promise.resolve();
    });

    await abort.requestType(page, 'script');
    expect(abort.request).toHaveBeenCalled();
  });

  it('abort.urlMatch: calls abort.requerst and filter by request uri + regex', async () => {
    abort.request = jest.fn((p, filter) => {
      request.url.mockImplementation(() => 'easyMatch');
      expect(filter(request)).toBe(true);
      request.url.mockImplementation(() => 'notMatching');
      expect(filter(request)).toBe(false);
      return Promise.resolve();
    });

    await abort.urlMatch(page, /easyMatch/);
    expect(abort.request).toHaveBeenCalled();
  });
});

import { IPanmetrics } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'panmetrics';
const DATA_SET: Array<[string, IPanmetrics]> = [
  [
    'https://id.cxense.com/public/user/id?json=%7B%22identities%22%3A%5B%7B%22type%22%3A%22ckp%22%2C%22id%22%3A%22juadpgpbkxb2fsa6%22%7D%5D%2C%22siteId%22%3A%221134025428813637072%22%2C%22location%22%3A%22https%3A%2F%2Fde.euronews.com%2F%22%7D&callback=cXJsonpCBjuq592og53mt5rvo',
    { siteId: '1134025428813637072' },
  ],
  [
    'https://id.cxense.com/public/user/id?json=%7B%22identities%22%3A%5B%7B%22type%22%3A%22ckp%22%2C%22id%22%3A%22juq5acmjpkdozwri%22%7D%5D%2C%22siteId%22%3A%221138479773402378570%22%2C%22location%22%3A%22https%3A%2F%2Fwww.ziaruldeiasi.ro%2F%22%7D&callback=cXJsonpCBjuq5acsjey7keons',
    { siteId: '1138479773402378570' },
  ],
  [
    'https://id.cxense.com/public/user/id?json=123',
    { siteId: 'ERROR: siteId not found' },
  ],
];

execTest(TEST_NAME, DATA_SET);

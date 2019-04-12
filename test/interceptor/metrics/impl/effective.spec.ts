import { IEffective } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'effective';
const DATA_SET: Array<[string, IEffective]> = [
  [
    'https://collector.effectivemeasure.net/pixel?et=pageview&ed=&vn=494af32&tz=2&pu=https%3A%2F%2Fwww.timeslive.co.za%2F&pr=&sh=667&sw=375&tt=TimesLIVE&t=1555246013410&vt=89a81cb1-f1d1-4247-a1d5-5a76b8bc0b34-1695d387b92-1dc6e9bc&c3=1&vi=36a62551-cdd7-4b8f-9212-be3399724195-16a1be2d9b1-eb591499&du=0&dt=0&c1=1&pc=0',
    {
      frame: '494af32',
    },
  ],
  [
    'https://collector.effectivemeasure.net/pixel?et=pageview&ed=&vn=494af32&tz=2&pu=https%3A%2F%2Fcitizen.co.za%2F&pr=&sh=667&sw=375&tt=The%20Citizen%20%E2%80%93%20More%20News%20Your%20Way&t=1555246205291&vt=89a81cb1-f1d1-4247-a1d5-5a76b8bc0b34-1695d387b92-1dc6e9bc&c3=1&vi=816d99be-47f5-492b-80b1-20b2a2b745a5-16a1be5c840-d0c0d21c&du=0&dt=0&c1=1&pc=0',
    {
      frame: '494af32',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

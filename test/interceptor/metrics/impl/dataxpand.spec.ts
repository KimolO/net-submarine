import { IDataxpand } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'dataxpand';
const DATA_SET: Array<[string, IDataxpand]> = [
  [
    'https://tc.dataxpand.com/tc/fcb7b3c.js',
    {
      siteId: 'fcb7b3c',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

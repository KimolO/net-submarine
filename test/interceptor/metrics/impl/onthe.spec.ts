import { IOnthe } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'onthe';
const DATA_SET: Array<[string, IOnthe]> = [
  [
    'https://cdn.onthe.io/io.js/eKP1RDXegADD',
    { projectId: 'eKP1RDXegADD' },
  ],
  [
    'https://cdn.onthe.io/io.js/NgBcKVJBj50g',
    { projectId: 'NgBcKVJBj50g' },
  ],
  [
    'https://cdn.onthe.io/io.js/xMgldxPWopXO',
    { projectId: 'xMgldxPWopXO' },
  ],
];

execTest(TEST_NAME, DATA_SET);

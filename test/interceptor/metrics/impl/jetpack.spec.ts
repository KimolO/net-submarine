import { IJetpack } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'jetpack';
const DATA_SET: Array<[string, IJetpack]> = [
  [
    'https://pixel.wp.com/g.gif?v=ext&j=1%3A4.0.3&blog=68476802&post=0&tz=1&srv=aidersonprochain.com&host=aidersonprochain.com&ref=&rand=0.866102988642363',
    {
      blog: '68476802',
      tz: '1',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

import { ILotame } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'lotame';
const DATA_SET: Array<[string, ILotame]> = [
  [
    'https://ad.crwdcntrl.net/5/c=5328/pe=y/callback=lotameBeacon?callback=lotameBeacon',
    {
      account: '5328',
    },
  ],
  [
    'https://bcp.crwdcntrl.net/5/c=13981/rand=958518320/pv=y/int=%23OpR%2350186%23www.yucatan.com.mx%20%3A%20Total%20Site%20Traffic/rt=ifr',
    {
      account: '13981',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

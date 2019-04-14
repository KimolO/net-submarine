import { IFacebookAudiences } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'facebookAudiences';
const DATA_SET: Array<[string, IFacebookAudiences]> = [
  [
    'https://www.facebook.com/tr/?id=477371192450518&ev=PageView&dl=https%3A%2F%2Fhighexistence.com%2F&rl=&if=false&ts=1555068896340&sw=375&sh=667&v=2.8.47&r=stable&ec=0&o=30&fbp=fb.1.1554853391824.413995370&it=1555068895798&coo=false&rqm=GET',
    {
      pixelId: '477371192450518',
    },
  ],
  [
    'https://www.facebook.com/tr/?id=1037353429671984&ev=PixelInitialized&dl=https%3A%2F%2Fwww.all4women.co.za%2F&rl=https%3A%2F%2Fwww.all4women.co.za%2F&if=false&ts=1555069053250',
    {
      pixelId: '1037353429671984',
    },
  ],
  [
    'https://www.facebook.com/tr/?id=681275721958365&ev=PixelInitialized&dl=https%3A%2F%2Fwww.elsol.com.ar%2F&rl=https%3A%2F%2Fwww.elsol.com.ar%2F&if=false&ts=1555069158058',
    {
      pixelId: '681275721958365',
    },
  ],
  [
    'https://www.facebook.com/tr/?id=1891185461167609&ev=PageView&dl=https%3A%2F%2Fwww.goalcast.com%2F&rl=&if=false&ts=1555069257493&sw=375&sh=667&v=2.8.47&r=stable&ec=0&o=30&fbp=fb.1.1555069249602.1283059897&it=1555069257400&coo=false&rqm=GET',
    {
      pixelId: '1891185461167609',
    },
  ],
  [
    'https://www.facebook.com/tr/?ev=PageView',
    {
      pixelId: 'ERROR: id not found',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

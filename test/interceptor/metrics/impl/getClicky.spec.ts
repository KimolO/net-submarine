import { IGetClicky } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'getClicky';
const DATA_SET: Array<[string, IGetClicky]> = [
  [
    'https://in.getclicky.com/in.php?site_id=101158009&type=pageview&href=%2F&title=Home%20-%20Passivepreneur&res=375x667&lang=en&jsuid=3228480604&mime=js&x=0.33161327061865564',
    {
      siteId: '101158009',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

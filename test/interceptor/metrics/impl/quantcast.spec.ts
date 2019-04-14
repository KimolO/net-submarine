import { IQuantcast } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'quantcast';
const DATA_SET: Array<[string, IQuantcast]> = [
  [
    'https://pixel.quantserve.com/pixel;r=408049412;rf=0;a=p-fbFZFDIZ_p3uo;url=https%3A%2F%2Fadage.com%2F;fpan=0;fpa=P0-472415359-1554391368549;ns=0;ce=1;qjs=1;qv=4c19192-20180628134937;cm=;ref=;je=0;sr=375x667x24;enc=n;dst=1;et=1555013755823;tzo=-120;ogl=title.AdAge',
    { pcode: 'p-fbFZFDIZ_p3uo' },
  ],
  [
    'http://pixel.quantserve.com/pixel;r=1366600632;rf=3;a=p-02tqRLd8QHtFI;url=http%3A%2F%2Fwww.ohgizmo.com%2F;fpan=1;fpa=P0-751567159-1555013949775;ns=0;ce=1;qjs=1;qv=4c19192-20180628134937;cm=;gdpr=1;gdpr_consent=BOew0yQOe3ExqC1ABBENCN-AAAAmd7_______9______5uz_Ov_v_f__33e8__9v_l_7_-___u_-3zd4-_1vf99yfm1-7etr3tp_87ues2_Xur__59__3z3_9phPrsk89ryw;ref=;je=0;sr=375x667x24;enc=n;dst=1;et=1555013949775;tzo=-120;ogl=image.',
    { pcode: 'p-02tqRLd8QHtFI' },
  ],
  [
    'http://pixel.quantserve.com/pixel;ErrorCase',
    { pcode: 'ERROR: a not found' },
  ],
];

execTest(TEST_NAME, DATA_SET);

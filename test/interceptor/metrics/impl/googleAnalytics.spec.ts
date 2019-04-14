import { IGoogleAnalytics } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'googleAnalytics';
const DATA_SET: Array<[string, IGoogleAnalytics]> = [
  [
    'https://www.google-analytics.com/j/collect?v=1&_v=j73&a=644355843&t=pageview&ds=marfeel_browser&_s=1&dl=https%3A%2F%2Fwww.modernmom.com%2F&dp=%2F&dh=www.modernmom.com&ul=en-us&de=UTF-8&dt=ModernMom%20-%20The%20premiere%20destination%20for%20moms&sd=24-bit&sr=375x667&vp=375x667&je=0&_u=aAjAAAABCAQCAC~&jid=1586293231&gjid=1767224096&cid=866553538.1555069366&tid=UA-9629029-1&_gid=1390891321.1555069367&_r=1&z=537806984',
    {
      uaCode: 'UA-9629029-1',
    },
  ],
  [
    'https://www.google-analytics.com/j/collect?v=1&_v=j73&a=1123773495&t=pageview&_s=1&dl=https%3A%2F%2Fautoweek.com%2F&dp=%2F&ul=en-us&de=UTF-8&dt=Autoweek%20%7C%20Get%20the%20latest%20car%20news%2C%20car%20reviews%2C%20auto%20show%20updates%2C%20and%20racing%20news%20from%20Autoweek.%20News%20for%20the%20auto%20enthusiast.&sd=24-bit&sr=375x667&vp=375x667&je=0&_u=QACAAEABAAAAAC~&jid=849681589&gjid=190853303&cid=522223240.1552990874&tid=UA-11570513-4&_gid=923494731.1555068352&_r=1&cg1=homepage&cd1=homepage&cd10=%2F&cd11=marfeel&cd14=jam.awk.home.mob&cd15=autoweek.com&z=457931199',
    {
      dimensions: {
        dimension1: 'homepage',
        dimension10: '/',
        dimension11: 'marfeel',
        dimension14: 'jam.awk.home.mob',
        dimension15: 'autoweek.com',
      },
      uaCode: 'UA-11570513-4',
    },
  ],
  [
    'https://www.google-analytics.com/j/collect?t=pageview',
    {
      uaCode: 'ERROR: tid not found',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

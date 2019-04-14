import { IChartbeat } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'chartbeat';
const DATA_SET: Array<[string, IChartbeat]> = [
  [
    'https://ping.chartbeat.net/ping?h=nation.co.ke&p=%2F&u=p-TrjBuIIx8C9Lxx8&d=mobile.nation.co.ke&g=63208&g0=No%20Section&g1=No%20Author&n=0&f=f0009&c=0&x=0&m=0&y=3917&o=379&w=667&j=45&R=1&W=0&I=0&E=0&e=0&r=&b=4116&t=3s6alBHPqd3BEJHDZC8VUJ2C5Thkc&V=113&i=Daily%20Nation%3A%20Mobile%20-%20Breaking%20News%2C%20Kenya%2C%20Africa%2C%20Politics%2C%20Business%2C%20Sports%20%7C%20HOME&tz=-120&sn=1&sv=DAmksCtsa6xDlrOSQCaxOMKDHKD1k&sd=1&im=062b0f5a&_',
    {
      uid: '63208',
    },
  ],
  [
    'https://ping.chartbeat.net/ping?h=slashfilm.com&p=%2F&u=BQUQw5D8tjhYDgPR3i&d=slashfilm.com&g=1129&g0=No%20Section&g1=No%20Author&nc=1&c=0&x=0&m=0&y=10919&o=379&w=667&j=45&R=1&W=0&I=0&E=0&e=0&r=&b=2976&t=CuV_DtBxm10SDZkEbcLyONbBrr6UU&V=113&i=%2FFilm%20%7C%20Blogging%20the%20Reel%20World&tz=-120&sn=1&sv=BK7ibNBbXeKBDgtiUrCqmu_oC7T-wU&sd=1&im=067b0ff2&_',
    {
      uid: '1129',
    },
  ],
  [
    'https://ping.chartbeat.net/ping?h=highexistence.com&p=%2F&u=DaU5E9CWsv6hi6bkT&d=highexistence.com&g=62375&g0=No%20Section&g1=No%20Author&n=0&f=3000b&c=0&x=0&m=0&y=9005&o=390&w=667&j=45&R=1&W=0&I=0&E=0&e=0&r=&b=2139&t=C5sVwVCAMBv_Bd3BfqBdAdsRCz1JXR&V=113&i=HighExistence%20%7C%20Challenging%20The%20Way%20You%20Live!&tz=-120&sn=1&sv=CzS0WwD8leeWwxkCeCa0_7qDwV3xN&sd=1&im=067b2ff3&_',
    {
      uid: '62375',
    },
  ],
  [
    'https://ping.chartbeat.net/ping?h=houstonpress.com&p=%2F&u=BsC3MFCE7-_27_dYo&d=houstonpress.com&g=10424&g0=%2Fhome&g1=houstonpress.com&n=1&f=00001&c=0&x=0&m=0&y=7207&o=375&w=667&j=45&R=1&W=0&I=0&E=0&e=0&r=&b=5412&t=CPD_e0Bxtfy_C071P7BPz107D8lBaj&V=113&i=Houston%20Press%20%7C%20The%20Leading%20Independent%20News%20Source%20in%20Houston%2C%20Texas&tz=-120&sn=1&sv=gfoSmB5eXVrCF0gBrDVeo3LBQbZ95&sd=1&im=067bfff3&_',
    {
      uid: '10424',
    },
  ],
  [
    'https://ping.chartbeat.net/ping?',
    {
      uid: 'ERROR: uid not found',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

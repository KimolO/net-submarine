import { IBlueKai } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'blueKai';
const DATA_SET: Array<[string, IBlueKai]> = [
  [
    'https://stags.bluekai.com/site/51518?ret=html&phint=__bk_t%3DTimesLIVE&phint=__bk_k%3DBreaking%20news%2C%20general%2C%20politics%2C%20sport%2C%20entertainment%2C%20lifestyle%2C%20weird%2C%20world%2C%20africa%2C%20news%2C%20extra%2C%20Sunday%20times%2C%20times%2C%20the%20times%2C%20business%20times%2C%20tshisa%20live&phint=__bk_l%3Dhttps%3A%2F%2Fb.marfeel.com%2Fwww.timeslive.co.za%2Findex.html&limit=1&r=41085076',
    {
      id: '51518',
    },
  ],
  [
    'https://stags.bluekai.com/site/44111?ret=html&phint=section%3D&phint=Category%3D&phint=a_id%3Dsin-cookie&phint=articleTags%3D&phint=__bk_t%3DMujerpandora.com%2C%20la%20web%20de%20las%20mujeres&phint=__bk_k%3DMagaly%20Medina%2C%20Beto%20Ortiz%2C%20Ollanta%20Humala%2C%20Nadine%20Heredia%2C%20Karina%20Calmet%2C%20M%C3%B3nica%20S%C3%A1nchez%2C%20Eyal%20Berkover%2C%20Beyonc%C3%A9%2C%20Jennifer%20L%C3%B3pez&phint=__bk_l%3Dhttps%3A%2F%2Fmujerpandora.com%2F&limit=1&r=99638943',
    {
        id: '44111',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

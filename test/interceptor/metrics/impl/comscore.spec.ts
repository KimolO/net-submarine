import { IComscore } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'comscore';
const DATA_SET: Array<[string, IComscore]> = [
  [
    'https://sb.scorecardresearch.com/b?c1=2&c2=6906409&ns__t=1555068194746&ns_c=UTF-8&cv=3.1m&c8=TyC%20Sports%20-%20Las%20noticias%20de%20deportes%20del%20canal%20l%C3%ADder%20en%20Argentina&c7=https%3A%2F%2Fwww.tycsports.com%2F&c9=',
    {
      c2Var: '6906409',
    },
  ],
  [
    'https://sb.scorecardresearch.com/b?c1=2&c2=3005694&c4=www.laineygossip.com%2F&cs_ucfr=1&ns__t=1555068318485&ns_c=UTF-8&cv=3.1m&c8=Celebrity%20Gossip%2C%20News%2C%20Photos%2C%20Rumours%20%7C%20Lainey%20Gossip&c7=https%3A%2F%2Fwww.laineygossip.com%2F&c9=',
    {
      c2Var: '3005694',
    },
  ],
  [
    'https://sb.scorecardresearch.com/b?c1=2&c2=9547786&c4=autoweek.com%2F&cs_ucfr=1&ns__t=1555068351716&ns_c=UTF-8&cv=3.1me&c8=Autoweek%20%7C%20Get%20the%20latest%20car%20news%2C%20car%20reviews%2C%20auto%20show%20updates%2C%20and%20racing%20news%20from%20Autoweek.%20News%20for%20the%20auto%20enthusiast.&c7=https%3A%2F%2Fautoweek.com%2F&c9=',
    {
      c2Var: '9547786',
    },
  ],
  [
    'https://sb.scorecardresearch.com/b?c1=2&c2=22052904&c4=www.esdiario.com%2F&cs_ucfr=1&ns__t=1555068405938&ns_c=UTF-8&cv=3.1m&c8=ESdiario%20-%20Informaci%C3%B3n%20para%20decidir&c7=https%3A%2F%2Fwww.esdiario.com%2F&c9=',
    {
      c2Var: '22052904',
    },
  ],
  [
    'https://sb.scorecardresearch.com/b?c1=2&c2=13184057&c4=https%3A%2F%2Feldesmarque.com%2Factualidad%2F&cs_ucfr=1&ns__t=1555068457668&ns_c=UTF-8&cv=3.1m&c8=Noticias%20de%20F%C3%BAtbol%20y%20Deporte%20en%20Espa%C3%B1a%20y%20el%20Mundo%20en%20El%20Desmarque&c7=https%3A%2F%2Feldesmarque.com%2Factualidad%2F&c9=',
    {
      c2Var: '13184057',
    },
  ],
  [
    'https://sb.scorecardresearch.com/b?c1=2&c2=18881191&c4=www.ipadizate.es%2F&cs_ucfr=1&ns__t=1555068614673&ns_c=UTF-8&cv=3.1m&c8=iPadizate%20-%20iPad%2C%20iPhone%20y%20Tecnolog%C3%ADa&c7=https%3A%2F%2Fwww.ipadizate.es%2F&c9=',
    {
      c2Var: '18881191',
    },
  ],
  [
    'https://sb.scorecardresearch.com/b?',
    {
      c2Var: 'ERROR: a not found',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

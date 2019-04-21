import { IParsely } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'parsely';
const DATA_SET: Array<[string, IParsely]> = [
  [
    'https://srv-2019-04-21-00.pixel.parsely.com/plogger/?rand=1555804820944&plid=36390381&idsite=upworthy.com&url=https%3A%2F%2Fwww.upworthy.com%2F&urlref=&screen=375x667%7C375x667%7C24&data=%7B%22parsely_uuid%22%3A%22374d5ebd-a3fe-49a8-9b37-73352fa12573%22%2C%22parsely_site_uuid%22%3A%228ed87631-e7e0-4ca6-beb9-166b8aca1100%22%7D&sid=2&surl=https%3A%2F%2Fwww.upworthy.com%2F&sref=&sts=1555804820931&slts=1554849583804&title=Upworthy%3A+Because+we%E2%80%99re+all+part+of+the+same+story.&date=Sun+Apr+21+2019+02%3A00%3A20+GMT%2B0200+(Central+European+Summer+Time)&action=pageview&u=8ed87631-e7e0-4ca6-beb9-166b8aca1100',
    { apiKey: 'upworthy.com' },
  ],
  [
    'https://srv-2019-04-21-00.pixel.parsely.com/plogger/?rand=1555804995529&plid=45033800&idsite=nationalreview.com&url=https%3A%2F%2Fwww.nationalreview.com%2F&urlref=&screen=375x667%7C375x667%7C24&data=%7B%22parsely_uuid%22%3A%22374d5ebd-a3fe-49a8-9b37-73352fa12573%22%2C%22parsely_site_uuid%22%3A%22319b9a64-c6df-4ea3-82bb-c6bd143675b7%22%7D&sid=1&surl=https%3A%2F%2Fwww.nationalreview.com%2F&sref=&sts=1555804995521&slts=0&title=National+Review%3A+Conservative+News%2C+Opinion%2C+Politics%2C+Policy%2C+%26+Current+Events&date=Sun+Apr+21+2019+02%3A03%3A15+GMT%2B0200+(Central+European+Summer+Time)&action=pageview&u=319b9a64-c6df-4ea3-82bb-c6bd143675b7',
    { apiKey: 'nationalreview.com' },
  ],
];

execTest(TEST_NAME, DATA_SET);


import { IAlexa } from '../../../../lib/interceptor/metrics/interface';
import { execTest } from './metricsTest';

/* tslint:disable:max-line-length */
const TEST_NAME: string = 'alexa';
const DATA_SET: Array<[string, IAlexa]> = [
  [
    'https://certify.alexametrics.com/atrk.gif?frame_height=667&frame_width=375&iframe=0&title=Home%20-%20When%20In%20Manila&time=1555066395548&time_zone_offset=-120&screen_params=375x667x24&java_enabled=0&cookie_enabled=1&ref_url=&host_url=https%3A%2F%2Fwww.wheninmanila.com%2F&random_number=11515317705&sess_cookie=38969a9b16a112e1b99e0e4858b&sess_cookie_flag=1&user_cookie=d923f7a2169d893a8942499260d&user_cookie_flag=0&dynamic=true&domain=www.wheninmanila.com&account=FDs7n1a4KM10L7&jsv=20130128&user_lang=en-US',
    {
      acctNum: 'FDs7n1a4KM10L7',
      domain: 'www.wheninmanila.com',
    },
  ],
  [
    'https://certify.alexametrics.com/atrk.gif?frame_height=667&frame_width=375&iframe=0&title=GHANA%20PAGE%20-%20Ghana%20Latest%20News%20Page&time=1555066520126&time_zone_offset=-120&screen_params=375x667x24&java_enabled=0&cookie_enabled=1&ref_url=&host_url=https%3A%2F%2Fwww.ghpage.com%2F&random_number=5467734399&sess_cookie=21d1ea6e16a1130023d5b3ea333&sess_cookie_flag=1&user_cookie=21d1ea6e16a1130023d5b3ea333&user_cookie_flag=1&dynamic=true&domain=www.ghpage.com&account=0+S2o1QolK10vg&jsv=20130128&user_lang=en-US',
    {
      acctNum: '0 S2o1QolK10vg',
      domain: 'www.ghpage.com',
    },
  ],
  [
    'https://certify.alexametrics.com/atrk.gif?frame_height=667&frame_width=375&iframe=0&title=Xing&time=1555066656669&time_zone_offset=-120&screen_params=375x667x24&java_enabled=0&cookie_enabled=1&ref_url=&host_url=https%3A%2F%2Fwww.dailyxing.com%2F&random_number=19008934754&sess_cookie=72f04a9916a113217985dc2b499&sess_cookie_flag=1&user_cookie=68dba45e16a071cb20866c2687c&user_cookie_flag=0&dynamic=true&domain=dailyxing.com&account=ADPyi1a8Dy00o5&jsv=20130128&user_lang=en-US',
    {
      acctNum: 'ADPyi1a8Dy00o5',
      domain: 'dailyxing.com',
    },
  ],
  [
    'https://certify.alexametrics.com/atrk.gif?frame_height=667&frame_width=375&iframe=0&title=List%C3%ADn%20Diario%2C%20el%20peri%C3%B3dico%20de%20los%20dominicanos.%20Noticias%20Santo%20Domingo.&time=1555066709333&time_zone_offset=-120&screen_params=375x667x24&java_enabled=0&cookie_enabled=1&ref_url=&host_url=https%3A%2F%2Flistindiario.com%2F&random_number=588944488&sess_cookie=31cf379116a1132e544e7c690c6&sess_cookie_flag=1&user_cookie=31cf379116a1132e544e7c690c6&user_cookie_flag=1&dynamic=true&domain=listindiario.com&account=8cobl1asWhy3/9&jsv=20130128&user_lang=en-US',
    {
      acctNum: '8cobl1asWhy3/9',
      domain: 'listindiario.com',
    },
  ],
  [
    'https://certify.alexametrics.com/atrk.gif?frame_height=667&frame_width=375&iframe=0&title=Vanguardia%20%7C%20Las%20Noticias%20de%20M%C3%A9xico%2C%20Coahuila%20y%20Saltillo.&time=1555066813774&time_zone_offset=-120&screen_params=375x667x24&java_enabled=0&cookie_enabled=1&ref_url=&host_url=https%3A%2F%2Fvanguardia.com.mx%2F&random_number=5067700923&sess_cookie=def9ba1316a11347d4d9ae30086&sess_cookie_flag=1&user_cookie=55c32edf169b0bca5f77a56b767&user_cookie_flag=0&dynamic=true&domain=vanguardia.com.mx&account=aLwom1akKd60Io&jsv=20130128&user_lang=en-US',
    {
      acctNum: 'aLwom1akKd60Io',
      domain: 'vanguardia.com.mx',
    },
  ],
  [
    'https://certify.alexametrics.com/atrk.gif?frame_height=667&frame_width=375&iframe=0&title=Home%20-%20Ubitennis&time=1555067140359&time_zone_offset=-120&screen_params=375x667x24&java_enabled=0&cookie_enabled=1&ref_url=&host_url=https%3A%2F%2Fwww.ubitennis.com%2F&random_number=7093849106&sess_cookie=7acfce1f16a11394bde5bda6bf7&sess_cookie_flag=0&user_cookie=7acfce1f16a11394bde5bda6bf7&user_cookie_flag=0&dynamic=true&domain=www.ubitennis.com&account=K1so1IW1810uW&jsv=20130128&user_lang=en-US',
    {
      acctNum: 'K1so1IW1810uW',
      domain: 'www.ubitennis.com',
    },
  ],
  [
    'https://certify.alexametrics.com/atrk.gif?',
    {
      acctNum: 'ERROR: account not found',
      domain: 'ERROR: domain not found',
    },
  ],
];

execTest(TEST_NAME, DATA_SET);

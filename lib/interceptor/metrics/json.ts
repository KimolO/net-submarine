import {
  alexa,
  blueKai,
  chartbeat,
  comscore,
  dataxpand,
  effective,
  facebookAudiences,
  getClicky,
  googleAnalytics,
  IAlexa,
  IBlueKai,
  IChartbeat,
  IComscore,
  IDataxpand,
  IEffective,
  IFacebookAudiences,
  IGetClicky,
  IGoogleAnalytics,
  IJetpack,
  ILotame,
  IMetricsJSON,
  IOnthe,
  IPanmetrics,
  IParsely,
  IQuantcast,
  jetpack,
  lotame,
  onthe,
  panmetrics,
  parsely,
  quantcast,
} from './index';

export const buildJsonObject = (): IMetricsJSON => ({
    alexa: [],
    blueKai: [],
    chartbeat: [],
    comscore: [],
    dataxpand: [],
    effective: [],
    facebookAudiences: [],
    getClicky: [],
    googleAnalytics : [],
    jetpack: [],
    lotame: [],
    onthe: [],
    panmetrics: [],
    parsely: [],
    quantcast: [],
});

export const buildJsonInterceptor = (json: IMetricsJSON, page: any): void => {
  alexa(page, (x: IAlexa) => {
    json.alexa.push(x);
  });
  blueKai(page, (x: IBlueKai) => {
    json.blueKai.push(x);
  });
  chartbeat(page, (x: IChartbeat) => {
    json.chartbeat.push(x);
  });
  comscore(page, (x: IComscore) => {
    json.comscore.push(x);
  });
  dataxpand(page, (x: IDataxpand) => {
    json.dataxpand.push(x);
  });
  effective(page, (x: IEffective) => {
    json.effective.push(x);
  });
  facebookAudiences(page, (x: IFacebookAudiences) => {
    json.facebookAudiences.push(x);
  });
  getClicky(page, (x: IGetClicky) => {
    json.getClicky.push(x);
  });
  googleAnalytics(page, (x: IGoogleAnalytics) => {
    json.googleAnalytics.push(x);
  });
  jetpack(page, (x: IJetpack) => {
    json.jetpack.push(x);
  });
  lotame(page, (x: ILotame) => {
    json.lotame.push(x);
  });
  onthe(page, (x: IOnthe) => {
    json.onthe.push(x);
  });
  panmetrics(page, (x: IPanmetrics) => {
    json.panmetrics.push(x);
  });
  parsely(page, (x: IParsely) => {
    json.parsely.push(x);
  });
  quantcast(page, (x: IQuantcast) => {
    json.quantcast.push(x);
  });
};

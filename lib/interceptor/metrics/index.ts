import {IMetricsJSON} from './interface';

export * from './impl/alexa';
export * from './impl/blueKai';
export * from './impl/chartbeat';
export * from './impl/comscore';
export * from './impl/dataxpand';
export * from './impl/effective';
export * from './impl/facebookAudiences';
export * from './impl/getClicky';
export * from './impl/googleAnalytics';
export * from './impl/jetpack';
export * from './impl/lotame';
export * from './impl/quantcast';

export * from './interface';
export const createEmptyMetricsJson = (): IMetricsJSON => ({
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
    quantcast: [],
});

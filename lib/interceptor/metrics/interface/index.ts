export interface IAlexa {
    acctNum: string;
    domain: string;
}

export interface IBlueKai {
    id: string;
}

export interface IChartbeat {
    uid: string;
}

export interface IComscore {
    c2Var: string;
    nsSite?: string;
    options?: string;
    extraUrlParams?: string;
}

export interface IDataxpand {
    siteId: string;
}

export interface IEffective {
    frame: string;
}

export interface IFacebookAudiences {
    pixelId: string;
}

export interface IGetClicky {
    siteId: string;
}

export interface IGoogleAnalytics {
    uaCode: string;
    dimensions?: { [s: string]: string; };
}

export interface IJetpack {
    blog: string;
    tz: string;
}

export interface ILotame {
    account: string;
}
export interface IQuantcast {
    pcode: string;
}

export interface IMetricsJSON {
    alexa: IAlexa[];
    blueKai: IBlueKai[];
    effective: IEffective[];
    chartbeat: IChartbeat[];
    comscore: IComscore[];
    dataxpand: IDataxpand[];
    facebookAudiences: IFacebookAudiences[];
    getClicky: IGetClicky[];
    googleAnalytics: IGoogleAnalytics[];
    jetpack: IJetpack[];
    lotame: ILotame[];
    quantcast: IQuantcast[];
 }

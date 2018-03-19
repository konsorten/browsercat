export declare function CssVariableProxy(targetElement?: HTMLElement): Proxy;
export declare type ProxyHandlerGet = (target: any, key: string) => string;
export declare type ProxyHandlerSet = (target: any, key: string, value: string) => boolean;
export interface IProxyHandler {
    get: ProxyHandlerGet;
    set: ProxyHandlerSet;
}
export declare class Proxy {
    constructor(target: any, handler: IProxyHandler);
}

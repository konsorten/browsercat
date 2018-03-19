export function CssVariableProxy(targetElement: HTMLElement = document.documentElement) {
    const handler: IProxyHandler = {
        get(target, key) {
            return targetElement.style.getPropertyValue(`--${key}`);
        },
        set(target, key, value) {
            targetElement.style.removeProperty(`--${key}`);
            targetElement.style.setProperty(`--${key}`, value);
            return true;
        },
      };
    return new Proxy({}, handler);
}

export declare type ProxyHandlerGet = (target: any, key: string) => string;
export declare type ProxyHandlerSet = (target: any, key: string, value: string) => boolean;
export declare interface IProxyHandler {
    get: ProxyHandlerGet;
    set: ProxyHandlerSet;
}
export declare class Proxy {
    constructor(target: any, handler: IProxyHandler);
}

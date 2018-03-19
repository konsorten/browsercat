import { Observable } from "rxjs/Observable";
/**
 *
 *
 * @export
 * @class LifecycleStateObserver
 */
export declare class LifecycleStateObserver {
    changed$(): Observable<{}>;
    completed$(): Observable<{}>;
    loading$(): Observable<{}>;
    ready$(): Observable<{}>;
}

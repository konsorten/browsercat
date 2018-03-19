import { Observable } from "rxjs/Observable";
import * as lcState from "./State";

/**
 *
 *
 * @export
 * @class LifecycleStateObserver
 */
export class LifecycleStateObserver {

    public changed$() {
        return new Observable((observer) => {
            // subscribe for future events
            document.addEventListener("readystatechange", () => {
                observer.next(lcState.currrentState());
            });
        });
    }

    public completed$() {
        return new Observable((observer) => {

            // initial trigger, if document is already loaded
            if (lcState.isCompleted())
                observer.next();

            // subscribe for future events
            document.addEventListener("readystatechange", () => {
                if (lcState.isCompleted())
                    observer.next();
            });
        });
    }

    public loading$() {
        return new Observable((observer) => {

            // initial trigger, if document is already loaded
            if (document.readyState === "loading")
                observer.next();

            // subscribe for future events
            document.addEventListener("readystatechange", () => {
                if (document.readyState === "loading")
                    observer.next();
            });
        });
    }

    public ready$() {
        return new Observable((observer) => {

            // initial trigger, if document is already loaded
            if (document.readyState === "interactive")
                observer.next();

            // subscribe for future events
            document.addEventListener("readystatechange", () => {
                if (document.readyState === "interactive")
                    observer.next();
            });
        });
    }

}

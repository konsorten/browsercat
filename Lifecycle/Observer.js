"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const lcState = __importStar(require("./State"));
/**
 *
 *
 * @export
 * @class LifecycleStateObserver
 */
class LifecycleStateObserver {
    changed$() {
        return new Observable_1.Observable((observer) => {
            // subscribe for future events
            document.addEventListener("readystatechange", () => {
                observer.next(lcState.currrentState());
            });
        });
    }
    completed$() {
        return new Observable_1.Observable((observer) => {
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
    loading$() {
        return new Observable_1.Observable((observer) => {
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
    ready$() {
        return new Observable_1.Observable((observer) => {
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
exports.LifecycleStateObserver = LifecycleStateObserver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTGlmZWN5Y2xlL09ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdEQUE2QztBQUM3QyxpREFBbUM7QUFFbkM7Ozs7O0dBS0c7QUFDSDtJQUVXLFFBQVE7UUFDWCxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDL0IsOEJBQThCO1lBQzlCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7Z0JBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxVQUFVO1FBQ2IsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBRS9CLGlEQUFpRDtZQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVwQiw4QkFBOEI7WUFDOUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtnQkFDL0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN0QixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxRQUFRO1FBQ1gsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBRS9CLGlEQUFpRDtZQUNqRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXBCLDhCQUE4QjtZQUM5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO2dCQUMvQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQztvQkFDbEMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUUvQixpREFBaUQ7WUFDakQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxhQUFhLENBQUM7Z0JBQ3RDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVwQiw4QkFBOEI7WUFDOUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtnQkFDL0MsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxhQUFhLENBQUM7b0JBQ3RDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBeERELHdEQXdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBsY1N0YXRlIGZyb20gXCIuL1N0YXRlXCI7XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgTGlmZWN5Y2xlU3RhdGVPYnNlcnZlclxuICovXG5leHBvcnQgY2xhc3MgTGlmZWN5Y2xlU3RhdGVPYnNlcnZlciB7XG5cbiAgICBwdWJsaWMgY2hhbmdlZCQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSBmb3IgZnV0dXJlIGV2ZW50c1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobGNTdGF0ZS5jdXJycmVudFN0YXRlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wbGV0ZWQkKCkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGluaXRpYWwgdHJpZ2dlciwgaWYgZG9jdW1lbnQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGlmIChsY1N0YXRlLmlzQ29tcGxldGVkKCkpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCgpO1xuXG4gICAgICAgICAgICAvLyBzdWJzY3JpYmUgZm9yIGZ1dHVyZSBldmVudHNcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGNTdGF0ZS5pc0NvbXBsZXRlZCgpKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRpbmckKCkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGluaXRpYWwgdHJpZ2dlciwgaWYgZG9jdW1lbnQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIilcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCk7XG5cbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSBmb3IgZnV0dXJlIGV2ZW50c1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkeSQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcblxuICAgICAgICAgICAgLy8gaW5pdGlhbCB0cmlnZ2VyLCBpZiBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCk7XG5cbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSBmb3IgZnV0dXJlIGV2ZW50c1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==
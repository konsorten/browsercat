"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isReady() {
    return currrentState() === LifecycleState.READY;
}
exports.isReady = isReady;
function isLoading() {
    return currrentState() === LifecycleState.LOADING;
}
exports.isLoading = isLoading;
function isCompleted() {
    return currrentState() === LifecycleState.COMPLETED;
}
exports.isCompleted = isCompleted;
function currrentState() {
    switch (document.readyState) {
        case "loading": return LifecycleState.LOADING;
        case "interactive": return LifecycleState.READY;
        case "complete": return LifecycleState.COMPLETED;
        default: throw new Error("Unknown document ready state");
    }
}
exports.currrentState = currrentState;
var LifecycleState;
(function (LifecycleState) {
    LifecycleState[LifecycleState["LOADING"] = 0] = "LOADING";
    LifecycleState[LifecycleState["READY"] = 1] = "READY";
    LifecycleState[LifecycleState["COMPLETED"] = 2] = "COMPLETED";
})(LifecycleState = exports.LifecycleState || (exports.LifecycleState = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTGlmZWN5Y2xlL1N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFDSSxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNwRCxDQUFDO0FBRkQsMEJBRUM7QUFFRDtJQUNJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3RELENBQUM7QUFGRCw4QkFFQztBQUVEO0lBQ0ksTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDeEQsQ0FBQztBQUZELGtDQUVDO0FBRUQ7SUFFSSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxQixLQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxLQUFLLGFBQWEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNoRCxLQUFLLFVBQVUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUNqRCxTQUFTLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0FBRUwsQ0FBQztBQVRELHNDQVNDO0FBRUQsSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3RCLHlEQUFTLENBQUE7SUFDVCxxREFBTyxDQUFBO0lBQ1AsNkRBQVcsQ0FBQTtBQUNmLENBQUMsRUFKVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUl6QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc1JlYWR5KCkge1xuICAgIHJldHVybiBjdXJycmVudFN0YXRlKCkgPT09IExpZmVjeWNsZVN0YXRlLlJFQURZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2FkaW5nKCkge1xuICAgIHJldHVybiBjdXJycmVudFN0YXRlKCkgPT09IExpZmVjeWNsZVN0YXRlLkxPQURJTkc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBsZXRlZCgpIHtcbiAgICByZXR1cm4gY3VycnJlbnRTdGF0ZSgpID09PSBMaWZlY3ljbGVTdGF0ZS5DT01QTEVURUQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXJycmVudFN0YXRlKCk6IExpZmVjeWNsZVN0YXRlIHtcblxuICAgIHN3aXRjaCAoZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgICAgICBjYXNlIFwibG9hZGluZ1wiOiByZXR1cm4gTGlmZWN5Y2xlU3RhdGUuTE9BRElORztcbiAgICAgICAgY2FzZSBcImludGVyYWN0aXZlXCI6IHJldHVybiBMaWZlY3ljbGVTdGF0ZS5SRUFEWTtcbiAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6IHJldHVybiBMaWZlY3ljbGVTdGF0ZS5DT01QTEVURUQ7XG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZG9jdW1lbnQgcmVhZHkgc3RhdGVcIik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIExpZmVjeWNsZVN0YXRlIHtcbiAgICBcIkxPQURJTkdcIixcbiAgICBcIlJFQURZXCIsXG4gICAgXCJDT01QTEVURURcIixcbn1cbiJdfQ==
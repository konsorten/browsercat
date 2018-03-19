export function isReady() {
    return currrentState() === LifecycleState.READY;
}

export function isLoading() {
    return currrentState() === LifecycleState.LOADING;
}

export function isCompleted() {
    return currrentState() === LifecycleState.COMPLETED;
}

export function currrentState(): LifecycleState {

    switch (document.readyState) {
        case "loading": return LifecycleState.LOADING;
        case "interactive": return LifecycleState.READY;
        case "complete": return LifecycleState.COMPLETED;
        default: throw new Error("Unknown document ready state");
    }

}

export enum LifecycleState {
    "LOADING",
    "READY",
    "COMPLETED",
}

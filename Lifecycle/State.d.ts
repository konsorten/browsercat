export declare function isReady(): boolean;
export declare function isLoading(): boolean;
export declare function isCompleted(): boolean;
export declare function currrentState(): LifecycleState;
export declare enum LifecycleState {
    "LOADING" = 0,
    "READY" = 1,
    "COMPLETED" = 2,
}

/**
 * This class contains functions to determine whether the WebP image file format (https://l.konsorten.de/2Gz1RXq) is
 * supported by the browser.
 *
 * Based upon the following article by google: https://l.konsorten.de/2DxWogA
 *
 * @export
 * @class WebPFeatureDetector
 */
export declare class WebPFeatureDetector {
    /**
     * This array of strings contains base64 encoded WebP image files used to determine feature availability
     *
     * @private
     * @memberof WebPFeatureDetector
     */
    private imageTestData;
    /**
     * This function determines whether the browser used supports the WebP image file format in any way
     *
     * @returns {Promise<boolean>}
     * @memberof WebPFeatureDetector
     *
     * @example
     * ```typescript
     *
     * const result: boolean = await detect();
     * console.log("WebP is " + result ? "supported" : "not supported");
     *
     * ```
     */
    detect(): Promise<boolean>;
    /**
     * This function determines the general availability of the WebP file format within the current browser environment
     * and also provides information about the availability of the following WebP features:
     *
     * - lossy
     * - lossless
     * - alpha
     * - animation
     *
     * @returns {Promise<IWebPFeatureDetectionResult>}
     * @memberof WebPFeatureDetector
     */
    detectFeatures(): Promise<IWebPFeatureDetectionResult>;
    /**
     * This function determines whether a specific WebP feature is available at the current browser environment. It
     * supports checking for the following features:
     *
     * - lossy
     * - lossless
     * - alpha
     * - animation
     *
     * @param {WebPFeature} feature - The feature to detect
     * @returns {Promise<boolean>} - true if the feature is supported
     * @memberof WebPFeatureDetector
     *
     * @example
     * ```typescript
     *
     * const result: boolean = await detectFeature(WebPFeature.ALPHA);
     * console.log("WebP Alpha is " + result ? "supported" : "not supported");
     *
     * ```
     */
    detectFeature(feature: WebPFeature): Promise<boolean>;
}
/**
 *
 *
 * @export
 * @enum {number}
 */
export declare enum WebPFeature {
    /**
     * Lossy WebP compression uses predictive coding to encode an image, the same method used by the VP8 video codec to
     * compress keyframes in videos. Predictive coding uses the values in neighboring blocks of pixels to predict the
     * values in a block, and then encodes only the difference.
     */
    LOSSY = 0,
    /**
     * Lossless WebP compression uses already seen image fragments in order to exactly reconstruct new pixels. It can
     * also use a local palette if no interesting match is found.
     */
    LOSSLESS = 1,
    /**
     * 8-bit alpha channel is useful for graphical images. The Alpha channel can be used along with lossy RGB, a feature
     * that's currently not available with any other format.
     */
    ALPHA = 2,
    /**
     * WebP-Equivalent to animated gifs
     */
    ANIMATION = 3,
}
/**
 *
 *
 * @export
 * @interface WebPFeatureDetectionResult
 */
export interface IWebPFeatureDetectionResult {
    /**
     * Determines if any type of WebP is supported at the current browser environment
     *
     * @type {boolean}
     * @memberof WebPFeatureDetectionResult
     */
    isAvailable: boolean;
    /**
     * Determines if the WebP "lossy" feature is supported at the current browser environment
     *
     * @type {boolean}
     * @memberof WebPFeatureDetectionResult
     * @see [[WebPFeature.LOSSY]]
     */
    lossy: boolean;
    /**
     * Determines if the WebP "lossless" feature is supported at the current browser environment
     *
     * @type {boolean}
     * @memberof WebPFeatureDetectionResult
     * @see [[WebPFeature.LOSSLESS]]
     */
    lossless: boolean;
    /**
     * Determines if the WebP "alpha" feature is supported at the current browser environment
     *
     * @type {boolean}
     * @memberof WebPFeatureDetectionResult
     * @see [[WebPFeature.ALPHA]]
     */
    alpha: boolean;
    /**
     * Determines if the WebP "animation" feature is supported at the current browser environment
     *
     * @type {boolean}
     * @memberof WebPFeatureDetectionResult
     * @see [[WebPFeature.ANIMATION]]
     */
    animation: boolean;
}

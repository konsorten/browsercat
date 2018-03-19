"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class contains functions to determine whether the WebP image file format (https://l.konsorten.de/2Gz1RXq) is
 * supported by the browser.
 *
 * Based upon the following article by google: https://l.konsorten.de/2DxWogA
 *
 * @export
 * @class WebPFeatureDetector
 */
class WebPFeatureDetector {
    constructor() {
        /**
         * This array of strings contains base64 encoded WebP image files used to determine feature availability
         *
         * @private
         * @memberof WebPFeatureDetector
         */
        this.imageTestData = {
            [WebPFeature.LOSSY]: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            [WebPFeature.LOSSLESS]: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            [WebPFeature.ALPHA]: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/" +
                "Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            [WebPFeature.ANIMATION]: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////" +
                "AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
        };
    }
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
    detect() {
        return __awaiter(this, void 0, void 0, function* () {
            // lossy is the oldest feature available (https://l.konsorten.de/2piSuTH)
            return yield this.detectFeature(WebPFeature.LOSSY);
        });
    }
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
    detectFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            const [alpha, animation, lossless, lossy] = (yield Promise.all([
                this.detectFeature(WebPFeature.ALPHA),
                this.detectFeature(WebPFeature.ANIMATION),
                this.detectFeature(WebPFeature.LOSSLESS),
                this.detectFeature(WebPFeature.LOSSY),
            ]));
            return {
                alpha,
                animation,
                isAvailable: alpha || animation || lossless || lossy,
                lossless,
                lossy,
            };
        });
    }
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
    detectFeature(feature) {
        return new Promise((resolve, reject) => {
            // create a new image element
            const img = new Image();
            // the image loaded
            img.addEventListener("load", () => {
                return resolve(img.width > 0 && img.height > 0);
            });
            // loading of the image failed
            img.addEventListener("error", () => {
                return resolve(false);
            });
            img.src = `data:image/webp;base64,${this.imageTestData[feature]}`;
        });
    }
}
exports.WebPFeatureDetector = WebPFeatureDetector;
/**
 *
 *
 * @export
 * @enum {number}
 */
var WebPFeature;
(function (WebPFeature) {
    /**
     * Lossy WebP compression uses predictive coding to encode an image, the same method used by the VP8 video codec to
     * compress keyframes in videos. Predictive coding uses the values in neighboring blocks of pixels to predict the
     * values in a block, and then encodes only the difference.
     */
    WebPFeature[WebPFeature["LOSSY"] = 0] = "LOSSY";
    /**
     * Lossless WebP compression uses already seen image fragments in order to exactly reconstruct new pixels. It can
     * also use a local palette if no interesting match is found.
     */
    WebPFeature[WebPFeature["LOSSLESS"] = 1] = "LOSSLESS";
    /**
     * 8-bit alpha channel is useful for graphical images. The Alpha channel can be used along with lossy RGB, a feature
     * that's currently not available with any other format.
     */
    WebPFeature[WebPFeature["ALPHA"] = 2] = "ALPHA";
    /**
     * WebP-Equivalent to animated gifs
     */
    WebPFeature[WebPFeature["ANIMATION"] = 3] = "ANIMATION";
})(WebPFeature = exports.WebPFeature || (exports.WebPFeature = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViUC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9GZWF0dXJlRGV0ZWN0aW9uL1dlYlAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0g7SUFBQTtRQUVJOzs7OztXQUtHO1FBQ0ssa0JBQWEsR0FBRztZQUNwQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSwwREFBMEQ7WUFDL0UsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsa0RBQWtEO1lBQzFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUNmLDJEQUEyRDtnQkFDM0QseURBQXlEO1lBQzdELENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUNuQiwwREFBMEQ7Z0JBQzFELGtFQUFrRTtTQUN6RSxDQUFDO0lBMEZOLENBQUM7SUF4Rkc7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNVLE1BQU07O1lBQ2YseUVBQXlFO1lBQ3pFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ1UsY0FBYzs7WUFFdkIsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDeEMsQ0FBQyxDQUFRLENBQUM7WUFFWCxNQUFNLENBQUM7Z0JBQ0gsS0FBSztnQkFDTCxTQUFTO2dCQUNULFdBQVcsRUFBRSxLQUFLLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxLQUFLO2dCQUNwRCxRQUFRO2dCQUNSLEtBQUs7YUFDUixDQUFDO1FBQ04sQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ0ksYUFBYSxDQUFDLE9BQW9CO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUU1Qyw2QkFBNkI7WUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUV4QixtQkFBbUI7WUFDbkIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUVILDhCQUE4QjtZQUM5QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxHQUFHLEdBQUcsMEJBQTBCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTNHRCxrREEyR0M7QUFFRDs7Ozs7R0FLRztBQUNILElBQVksV0FzQlg7QUF0QkQsV0FBWSxXQUFXO0lBRW5COzs7O09BSUc7SUFDSCwrQ0FBSyxDQUFBO0lBQ0w7OztPQUdHO0lBQ0gscURBQVEsQ0FBQTtJQUNSOzs7T0FHRztJQUNILCtDQUFLLENBQUE7SUFDTDs7T0FFRztJQUNILHVEQUFTLENBQUE7QUFDYixDQUFDLEVBdEJXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBc0J0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBmdW5jdGlvbnMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIFdlYlAgaW1hZ2UgZmlsZSBmb3JtYXQgKGh0dHBzOi8vbC5rb25zb3J0ZW4uZGUvMkd6MVJYcSkgaXNcbiAqIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci5cbiAqXG4gKiBCYXNlZCB1cG9uIHRoZSBmb2xsb3dpbmcgYXJ0aWNsZSBieSBnb29nbGU6IGh0dHBzOi8vbC5rb25zb3J0ZW4uZGUvMkR4V29nQVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBXZWJQRmVhdHVyZURldGVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWJQRmVhdHVyZURldGVjdG9yIHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgYXJyYXkgb2Ygc3RyaW5ncyBjb250YWlucyBiYXNlNjQgZW5jb2RlZCBXZWJQIGltYWdlIGZpbGVzIHVzZWQgdG8gZGV0ZXJtaW5lIGZlYXR1cmUgYXZhaWxhYmlsaXR5XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZW1iZXJvZiBXZWJQRmVhdHVyZURldGVjdG9yXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbWFnZVRlc3REYXRhID0ge1xuICAgICAgICBbV2ViUEZlYXR1cmUuTE9TU1ldOiBcIlVrbEdSaUlBQUFCWFJVSlFWbEE0SUJZQUFBQXdBUUNkQVNvQkFBRUFEc0QrSmFRQUEzQUFBQUFBXCIsXG4gICAgICAgIFtXZWJQRmVhdHVyZS5MT1NTTEVTU106IFwiVWtsR1Job0FBQUJYUlVKUVZsQTRUQTBBQUFBdkFBQUFFQWNRRVJHSWlQNEhBQT09XCIsXG4gICAgICAgIFtXZWJQRmVhdHVyZS5BTFBIQV06XG4gICAgICAgICAgICBcIlVrbEdSa29BQUFCWFJVSlFWbEE0V0FvQUFBQVFBQUFBQUFBQUFBQUFRVXhRU0F3QUFBQVJCeEFSL1wiICtcbiAgICAgICAgICAgIFwiUTlFUlA4REFBQldVRGdnR0FBQUFCUUJBSjBCS2dFQUFRQUFBUDRBQUEzQUFQN210UUFBQUE9PVwiLFxuICAgICAgICBbV2ViUEZlYXR1cmUuQU5JTUFUSU9OXTpcbiAgICAgICAgICAgIFwiVWtsR1JsSUFBQUJYUlVKUVZsQTRXQW9BQUFBU0FBQUFBQUFBQUFBQVFVNUpUUVlBQUFELy8vLy9cIiArXG4gICAgICAgICAgICBcIkFBQkJUazFHSmdBQUFBQUFBQUFBQUFBQUFBQUFBR1FBQUFCV1VEaE1EUUFBQUM4QUFBQVFCeEFSRVlpSS9nY0FcIixcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJyb3dzZXIgdXNlZCBzdXBwb3J0cyB0aGUgV2ViUCBpbWFnZSBmaWxlIGZvcm1hdCBpbiBhbnkgd2F5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICAgKiBAbWVtYmVyb2YgV2ViUEZlYXR1cmVEZXRlY3RvclxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpcbiAgICAgKiBjb25zdCByZXN1bHQ6IGJvb2xlYW4gPSBhd2FpdCBkZXRlY3QoKTtcbiAgICAgKiBjb25zb2xlLmxvZyhcIldlYlAgaXMgXCIgKyByZXN1bHQgPyBcInN1cHBvcnRlZFwiIDogXCJub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAqXG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGRldGVjdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgLy8gbG9zc3kgaXMgdGhlIG9sZGVzdCBmZWF0dXJlIGF2YWlsYWJsZSAoaHR0cHM6Ly9sLmtvbnNvcnRlbi5kZS8ycGlTdVRIKVxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZXRlY3RGZWF0dXJlKFdlYlBGZWF0dXJlLkxPU1NZKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgdGhlIGdlbmVyYWwgYXZhaWxhYmlsaXR5IG9mIHRoZSBXZWJQIGZpbGUgZm9ybWF0IHdpdGhpbiB0aGUgY3VycmVudCBicm93c2VyIGVudmlyb25tZW50XG4gICAgICogYW5kIGFsc28gcHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGF2YWlsYWJpbGl0eSBvZiB0aGUgZm9sbG93aW5nIFdlYlAgZmVhdHVyZXM6XG4gICAgICpcbiAgICAgKiAtIGxvc3N5XG4gICAgICogLSBsb3NzbGVzc1xuICAgICAqIC0gYWxwaGFcbiAgICAgKiAtIGFuaW1hdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVdlYlBGZWF0dXJlRGV0ZWN0aW9uUmVzdWx0Pn1cbiAgICAgKiBAbWVtYmVyb2YgV2ViUEZlYXR1cmVEZXRlY3RvclxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBkZXRlY3RGZWF0dXJlcygpOiBQcm9taXNlPElXZWJQRmVhdHVyZURldGVjdGlvblJlc3VsdD4ge1xuXG4gICAgICAgIGNvbnN0IFthbHBoYSwgYW5pbWF0aW9uLCBsb3NzbGVzcywgbG9zc3ldID0gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RmVhdHVyZShXZWJQRmVhdHVyZS5BTFBIQSksXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZlYXR1cmUoV2ViUEZlYXR1cmUuQU5JTUFUSU9OKSxcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RmVhdHVyZShXZWJQRmVhdHVyZS5MT1NTTEVTUyksXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZlYXR1cmUoV2ViUEZlYXR1cmUuTE9TU1kpLFxuICAgICAgICBdKSkgYXMgYW55O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIGFuaW1hdGlvbixcbiAgICAgICAgICAgIGlzQXZhaWxhYmxlOiBhbHBoYSB8fCBhbmltYXRpb24gfHwgbG9zc2xlc3MgfHwgbG9zc3ksXG4gICAgICAgICAgICBsb3NzbGVzcyxcbiAgICAgICAgICAgIGxvc3N5LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3BlY2lmaWMgV2ViUCBmZWF0dXJlIGlzIGF2YWlsYWJsZSBhdCB0aGUgY3VycmVudCBicm93c2VyIGVudmlyb25tZW50LiBJdFxuICAgICAqIHN1cHBvcnRzIGNoZWNraW5nIGZvciB0aGUgZm9sbG93aW5nIGZlYXR1cmVzOlxuICAgICAqXG4gICAgICogLSBsb3NzeVxuICAgICAqIC0gbG9zc2xlc3NcbiAgICAgKiAtIGFscGhhXG4gICAgICogLSBhbmltYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7V2ViUEZlYXR1cmV9IGZlYXR1cmUgLSBUaGUgZmVhdHVyZSB0byBkZXRlY3RcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gLSB0cnVlIGlmIHRoZSBmZWF0dXJlIGlzIHN1cHBvcnRlZFxuICAgICAqIEBtZW1iZXJvZiBXZWJQRmVhdHVyZURldGVjdG9yXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKlxuICAgICAqIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGF3YWl0IGRldGVjdEZlYXR1cmUoV2ViUEZlYXR1cmUuQUxQSEEpO1xuICAgICAqIGNvbnNvbGUubG9nKFwiV2ViUCBBbHBoYSBpcyBcIiArIHJlc3VsdCA/IFwic3VwcG9ydGVkXCIgOiBcIm5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZGV0ZWN0RmVhdHVyZShmZWF0dXJlOiBXZWJQRmVhdHVyZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgaW1hZ2UgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgICAgIC8vIHRoZSBpbWFnZSBsb2FkZWRcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nLndpZHRoID4gMCAmJiBpbWcuaGVpZ2h0ID4gMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gbG9hZGluZyBvZiB0aGUgaW1hZ2UgZmFpbGVkXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBgZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwke3RoaXMuaW1hZ2VUZXN0RGF0YVtmZWF0dXJlXX1gO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZW51bSBXZWJQRmVhdHVyZSB7XG5cbiAgICAvKipcbiAgICAgKiBMb3NzeSBXZWJQIGNvbXByZXNzaW9uIHVzZXMgcHJlZGljdGl2ZSBjb2RpbmcgdG8gZW5jb2RlIGFuIGltYWdlLCB0aGUgc2FtZSBtZXRob2QgdXNlZCBieSB0aGUgVlA4IHZpZGVvIGNvZGVjIHRvXG4gICAgICogY29tcHJlc3Mga2V5ZnJhbWVzIGluIHZpZGVvcy4gUHJlZGljdGl2ZSBjb2RpbmcgdXNlcyB0aGUgdmFsdWVzIGluIG5laWdoYm9yaW5nIGJsb2NrcyBvZiBwaXhlbHMgdG8gcHJlZGljdCB0aGVcbiAgICAgKiB2YWx1ZXMgaW4gYSBibG9jaywgYW5kIHRoZW4gZW5jb2RlcyBvbmx5IHRoZSBkaWZmZXJlbmNlLlxuICAgICAqL1xuICAgIExPU1NZLFxuICAgIC8qKlxuICAgICAqIExvc3NsZXNzIFdlYlAgY29tcHJlc3Npb24gdXNlcyBhbHJlYWR5IHNlZW4gaW1hZ2UgZnJhZ21lbnRzIGluIG9yZGVyIHRvIGV4YWN0bHkgcmVjb25zdHJ1Y3QgbmV3IHBpeGVscy4gSXQgY2FuXG4gICAgICogYWxzbyB1c2UgYSBsb2NhbCBwYWxldHRlIGlmIG5vIGludGVyZXN0aW5nIG1hdGNoIGlzIGZvdW5kLlxuICAgICAqL1xuICAgIExPU1NMRVNTLFxuICAgIC8qKlxuICAgICAqIDgtYml0IGFscGhhIGNoYW5uZWwgaXMgdXNlZnVsIGZvciBncmFwaGljYWwgaW1hZ2VzLiBUaGUgQWxwaGEgY2hhbm5lbCBjYW4gYmUgdXNlZCBhbG9uZyB3aXRoIGxvc3N5IFJHQiwgYSBmZWF0dXJlXG4gICAgICogdGhhdCdzIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlIHdpdGggYW55IG90aGVyIGZvcm1hdC5cbiAgICAgKi9cbiAgICBBTFBIQSxcbiAgICAvKipcbiAgICAgKiBXZWJQLUVxdWl2YWxlbnQgdG8gYW5pbWF0ZWQgZ2lmc1xuICAgICAqL1xuICAgIEFOSU1BVElPTixcbn1cblxuLyoqXG4gKlxuICpcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgV2ViUEZlYXR1cmVEZXRlY3Rpb25SZXN1bHRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElXZWJQRmVhdHVyZURldGVjdGlvblJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbnkgdHlwZSBvZiBXZWJQIGlzIHN1cHBvcnRlZCBhdCB0aGUgY3VycmVudCBicm93c2VyIGVudmlyb25tZW50XG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgV2ViUEZlYXR1cmVEZXRlY3Rpb25SZXN1bHRcbiAgICAgKi9cbiAgICBpc0F2YWlsYWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIFdlYlAgXCJsb3NzeVwiIGZlYXR1cmUgaXMgc3VwcG9ydGVkIGF0IHRoZSBjdXJyZW50IGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBXZWJQRmVhdHVyZURldGVjdGlvblJlc3VsdFxuICAgICAqIEBzZWUgW1tXZWJQRmVhdHVyZS5MT1NTWV1dXG4gICAgICovXG4gICAgbG9zc3k6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBXZWJQIFwibG9zc2xlc3NcIiBmZWF0dXJlIGlzIHN1cHBvcnRlZCBhdCB0aGUgY3VycmVudCBicm93c2VyIGVudmlyb25tZW50XG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgV2ViUEZlYXR1cmVEZXRlY3Rpb25SZXN1bHRcbiAgICAgKiBAc2VlIFtbV2ViUEZlYXR1cmUuTE9TU0xFU1NdXVxuICAgICAqL1xuICAgIGxvc3NsZXNzOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgV2ViUCBcImFscGhhXCIgZmVhdHVyZSBpcyBzdXBwb3J0ZWQgYXQgdGhlIGN1cnJlbnQgYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFdlYlBGZWF0dXJlRGV0ZWN0aW9uUmVzdWx0XG4gICAgICogQHNlZSBbW1dlYlBGZWF0dXJlLkFMUEhBXV1cbiAgICAgKi9cbiAgICBhbHBoYTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIFdlYlAgXCJhbmltYXRpb25cIiBmZWF0dXJlIGlzIHN1cHBvcnRlZCBhdCB0aGUgY3VycmVudCBicm93c2VyIGVudmlyb25tZW50XG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgV2ViUEZlYXR1cmVEZXRlY3Rpb25SZXN1bHRcbiAgICAgKiBAc2VlIFtbV2ViUEZlYXR1cmUuQU5JTUFUSU9OXV1cbiAgICAgKi9cbiAgICBhbmltYXRpb246IGJvb2xlYW47XG59XG4iXX0=
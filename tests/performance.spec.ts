import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("性能", () => {
  test("Navigation Timing", async ({ page }) => {
    const type = "navigationTiming";
    await genPageAndGoto({
      path: `./src/performance/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.timing).toBeDefined();
    expect(body.timing.category).toBe("resource_timing");

    [
      "connectEnd",
      "connectStart",
      "domainLookupEnd",
      "domainLookupStart",
      "domComplete",
      "domContentLoadedEventEnd",
      "domContentLoadedEventStart",
      "domInteractive",
      "domLoading",
      "fetchStart",
      "loadEventEnd",
      "loadEventStart",
      "navigationStart",
      "now",
      "redirectEnd",
      "redirectStart",
      "requestStart",
      "responseEnd",
      "responseStart",
      "secureConnectionStart",
      "sendTime",
      "unloadEventEnd",
      "unloadEventStart",
    ].forEach((k) => {
      expect(body.timing[k]).toBeDefined();
    });
  });
});

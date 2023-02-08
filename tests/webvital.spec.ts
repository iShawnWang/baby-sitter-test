import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("CustomReport", () => [
  test("webvital", async ({ page }) => {
    const type = "webvital";
    await genPageAndGoto({
      path: `./src/webvital/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.webVital?.length).toBeGreaterThan(0)
    expect(body.webVital?.[0].category).toBe("web_vitals");
    expect(body.webVital?.[0].name).toBeDefined()
    expect(body.webVital?.[0].navigationType).toBeDefined()
    expect(body.webVital?.[0].page).toBeDefined()
    expect(body.webVital?.[0].rating).toBeDefined()
    expect(body.webVital?.[0].timestamp).toBeDefined()
    expect(body.webVital?.[0].value).toBeDefined()
  }),
]);

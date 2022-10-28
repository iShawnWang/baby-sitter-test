import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("SDKAPI", () => [
  test("ignoreUrls", async ({ page }) => {
    const type = "ignoreUrls";
    await genPageAndGoto({
      path: `./src/SDKAPI/${type}`,
      filename: type,
      page,
      template: `src/SDKAPI/${type}.html`,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.fetch).toHaveLength(1);
    expect(body.fetch[0].async).toBe(true);
    expect(body.fetch[0].category).toBe("Fetch");
    expect(body.fetch[0].cbTime).toBeGreaterThan(0);
    expect(body.fetch[0].method).toBe("GET");
    expect(body.fetch[0].msg).toBe("");
    expect(body.fetch[0].status).toBe(200);
    expect(body.fetch[0].url?.length).toBeGreaterThan(10);
    expect(body.fetch[0].url).toMatch(/.+?jsonplaceholder.typicode.com.+/);
    expect(body.fetch[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "fetch",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  }),
]);

import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("CustomReport", () => [
  test("direct", async ({ page }) => {
    const type = "direct";
    await genPageAndGoto({
      path: `./src/customReport/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.customEvents?.length).toBe(1);
    expect(body.customEvents[0].category).toBe("custom_event");
    expect(body.customEvents[0].page).toBeDefined()
    expect(body.customEvents[0].pvId).toBeDefined();
    expect(body.customEvents[0].timestamp).toBeDefined();
    expect(body.customEvents[0].data).toBeDefined()
    expect(body.customEvents[0].data.name).toBeDefined()
    expect(body.customEvents[0].data.attributes.source).toBeDefined()
    expect(body.customEvents[0].data.metrics.value).toBeDefined()
  }),
  test("startEnd", async ({ page }) => {
    const type = "startEnd";
    await genPageAndGoto({
      path: `./src/customReport/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.customEvents?.length).toBe(1);
    expect(body.customEvents[0].category).toBe("custom_event");
    expect(body.customEvents[0].page).toBeDefined()
    expect(body.customEvents[0].pvId).toBeDefined();
    expect(body.customEvents[0].timestamp).toBeDefined();
    expect(body.customEvents[0].data).toBeDefined()
    expect(body.customEvents[0].data.name).toBeDefined()
    expect(body.customEvents[0].data.attributes.channel).toBeDefined()
    expect(body.customEvents[0].data.attributes.status).toBeDefined()
    expect(body.customEvents[0].data.metrics.value).toBeDefined()
    expect(body.customEvents[0].data.metrics._duration).toBeDefined()
    expect(body.customEvents[0].data.metrics._startTime).toBeDefined()
    expect(body.customEvents[0].data.metrics._endTime).toBeDefined()
  }),
]);

import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("History", () => [
  test("history", async ({ page }) => {
    const type = "history";
    await genPageAndGoto({
      path: `./src/route/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.events?.length).toBe(2);
    expect(body.events[1].category).toBe("pv");
    expect(body.events[1].from).toContain("/history");
    expect(body.events[1].timestamp).toBeGreaterThan(1);
    expect(body.events[1].to).toBe("/a=1");
    expect(body.events[1].type).toBe("pushState");
  }),
]);

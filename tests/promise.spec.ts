import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("Promise", () => {
  test("Promise.reject", async ({ page }) => {
    const type = "reject";
    await genPageAndGoto({
      path: `./src/promise/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toBeDefined();
    expect(body.error?.length).toBe(1);
    expect(body.error[0].category).toBe("promise_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.msg).toBe("rejected Promise");
    expect(body.error[0].logInfo.stack?.length).toBeGreaterThanOrEqual(1);
  });

  test("await", async ({ page }) => {
    const type = "await";
    await genPageAndGoto({
      path: `./src/promise/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toBeDefined();
    expect(body.error?.length).toBe(1);
    expect(body.error[0].category).toBe("promise_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.msg).toBe("await promise reject");
    expect(body.error[0].logInfo.stack?.length).toBeGreaterThanOrEqual(1);
  });
});

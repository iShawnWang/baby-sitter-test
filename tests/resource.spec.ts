import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("资源", () => {
  test("css200", async ({ page }) => {
    const type = "css200";
    await genPageAndGoto({
      path: `./src/resource/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.resource?.length).toBeGreaterThanOrEqual(1);
    const findResource = body.resource?.find((r) =>
      r.name.includes("demo.css")
    );
    expect(findResource.category).toBe("resource");
    expect(findResource.page.length).toBeGreaterThanOrEqual(1);
    expect(findResource.name.length).toBeGreaterThanOrEqual(1);
    expect(findResource.startTime).toBeGreaterThanOrEqual(1);
    expect(findResource.responseEnd).toBeGreaterThanOrEqual(1);
    expect(findResource.initiatorType).toBe("link");
  });

  test("img200", async ({ page }) => {
    const type = "img200";
    await genPageAndGoto({
      path: `./src/resource/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.resource?.length).toBeGreaterThanOrEqual(1);
    const findResource = body.resource?.find((r) =>
      r.name.includes("demo.webp")
    );
    expect(findResource.category).toBe("resource");
    expect(findResource.page.length).toBeGreaterThanOrEqual(1);
    expect(findResource.name.length).toBeGreaterThanOrEqual(1);
    expect(findResource.startTime).toBeGreaterThanOrEqual(1);
    expect(findResource.responseEnd).toBeGreaterThanOrEqual(1);
    expect(findResource.initiatorType).toBe("img");
  });

  test("img404", async ({ page }) => {
    // 无法获取 status
    // https://stackoverflow.com/questions/28545619/javascript-which-parameters-are-there-for-the-onerror-event-with-image-objects/35634509#35634509
    const type = "img404";
    await genPageAndGoto({
      path: `./src/resource/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error?.length).toBe(1);
    expect(body.error[0]?.category).toBe("resource_error");
    expect(body.error[0]?.logType).toBe("Warning");
    expect(body.error[0]?.logInfo.col).toBe(-1);
    expect(body.error[0]?.logInfo.line).toBe(-1);
    expect(body.error[0]?.logInfo.page?.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0]?.logInfo.type).toBe("IMG");
    expect(body.error[0]?.logInfo.msg).toBe("加载 IMG 资源错误");
    expect(body.error[0]?.logInfo.url?.length).toBeGreaterThanOrEqual(1);
  });
});

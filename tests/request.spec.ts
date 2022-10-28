import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("网络请求", () => {
  test("fetch200", async ({ page }) => {
    const type = "fetch200";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
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
    expect(body.fetch[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "fetch",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("fetchPOST200", async ({ page }) => {
    const type = "fetchPOST200";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.fetch).toHaveLength(1);
    expect(body.fetch[0].async).toBe(true);
    expect(body.fetch[0].category).toBe("Fetch");
    expect(body.fetch[0].cbTime).toBeGreaterThan(0);
    expect(body.fetch[0].method).toBe("POST");
    expect(body.fetch[0].msg).toBe("");
    expect(body.fetch[0].status).toBe(200);
    expect(body.fetch[0].url?.length).toBeGreaterThan(10);
    expect(body.fetch[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "fetch",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("fetch404", async ({ page }) => {
    const type = "fetch404";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.fetch).toHaveLength(1);
    expect(body.fetch[0].async).toBe(true);
    expect(body.fetch[0].category).toBe("Fetch");
    expect(body.fetch[0].cbTime).toBeGreaterThan(0);
    expect(body.fetch[0].method).toBe("GET");
    expect(body.fetch[0].msg).toBe("");
    expect(body.fetch[0].status).toBe(404);
    expect(body.fetch[0].url?.length).toBeGreaterThan(10);
    expect(body.fetch[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "fetch",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("fetch500", async ({ page }) => {
    const type = "fetch500";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.fetch).toHaveLength(1);
    expect(body.fetch[0].async).toBe(true);
    expect(body.fetch[0].category).toBe("Fetch");
    expect(body.fetch[0].cbTime).toBeGreaterThan(0);
    expect(body.fetch[0].method).toBe("GET");
    expect(body.fetch[0].msg).toBe("");
    expect(body.fetch[0].status).toBe(500);
    expect(body.fetch[0].url?.length).toBeGreaterThan(10);
    expect(body.fetch[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "fetch",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("fetchPolyfill200", async ({ page }) => {
    const type = "fetchPolyfill200";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.ajax).toHaveLength(1);
    expect(body.ajax[0].async).toBe(true);
    expect(body.ajax[0].category).toBe("Ajax");
    expect(body.ajax[0].cbTime).toBeGreaterThan(0);
    expect(body.ajax[0].method).toBe("GET");
    expect(body.ajax[0].msg).toBe("");
    expect(body.ajax[0].type?.length).toBeGreaterThan(4);
    expect(body.ajax[0].status).toBe(200);
    expect(body.ajax[0].url?.length).toBeGreaterThan(10);
    expect(body.ajax[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "xmlhttprequest",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("fetchSlow", async ({ page }) => {
    const type = "fetchSlow";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    const body2 = (await waitNextRequest(page)).postDataJSON();

    expect(body2.fetch).toHaveLength(1);
    expect(body2.fetch[0].async).toBe(true);
    expect(body2.fetch[0].category).toBe("Fetch");
    expect(body2.fetch[0].cbTime).toBeGreaterThan(3000);
    expect(body2.fetch[0].method).toBe("GET");
    expect(body2.fetch[0].msg).toBe("");
    expect(body2.fetch[0].status).toBe(200);
    expect(body2.fetch[0].url?.length).toBeGreaterThan(10);
    expect(body2.fetch[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "fetch",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("fetchTimeout", async ({ page }) => {
    const type = "fetchTimeout";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    const body2 = (await waitNextRequest(page, 31)).postDataJSON();

    expect(body2.error).toHaveLength(1);
    expect(body2.error[0].category).toBe("promise_error");
    expect(body2.error[0].logType).toBe("Warning");
    expect(body2.error[0].logInfo).toBeDefined();
    expect(body2.error[0].logInfo.col).toBe(-1);
    expect(body2.error[0].logInfo.line).toBe(-1);
    expect(body2.error[0].logInfo.msg).toBe(
      "Failed to fetch : GET - https://baby-sitter-test-api.vercel.app/api/slow/31000"
    );
    expect(body2.error[0].logInfo.type).toBe("TypeError");
    expect(body2.error[0].logInfo.url?.length).toBeGreaterThan(1);
    expect(body2.error[0].logInfo.stack?.length).toBeGreaterThan(1);
  });

  test("xhr200", async ({ page }) => {
    const type = "xhr200";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.ajax).toHaveLength(1);
    expect(body.ajax[0].async).toBe(true);
    expect(body.ajax[0].category).toBe("Ajax");
    expect(body.ajax[0].cbTime).toBeGreaterThan(0);
    expect(body.ajax[0].method).toBe("GET");
    expect(body.ajax[0].msg).toBe("");
    expect(body.ajax[0].type?.length).toBeGreaterThan(4);
    expect(body.ajax[0].status).toBe(200);
    expect(body.ajax[0].url?.length).toBeGreaterThan(10);
    expect(body.ajax[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "xmlhttprequest",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("xhr404", async ({ page }) => {
    const type = "xhr404";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.ajax).toHaveLength(1);
    expect(body.ajax[0].async).toBe(true);
    expect(body.ajax[0].category).toBe("Ajax");
    expect(body.ajax[0].cbTime).toBeGreaterThan(0);
    expect(body.ajax[0].method).toBe("GET");
    expect(body.ajax[0].msg).toBe("");
    expect(body.ajax[0].type?.length).toBeGreaterThan(4);
    expect(body.ajax[0].status).toBe(404);
    expect(body.ajax[0].url?.length).toBeGreaterThan(10);
    expect(body.ajax[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "xmlhttprequest",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("xhr500", async ({ page }) => {
    const type = "xhr500";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.ajax).toHaveLength(1);
    expect(body.ajax[0].async).toBe(true);
    expect(body.ajax[0].category).toBe("Ajax");
    expect(body.ajax[0].cbTime).toBeGreaterThan(0);
    expect(body.ajax[0].method).toBe("GET");
    expect(body.ajax[0].msg).toBe("");
    expect(body.ajax[0].type?.length).toBeGreaterThan(4);
    expect(body.ajax[0].status).toBe(500);
    expect(body.ajax[0].url?.length).toBeGreaterThan(10);
    expect(body.ajax[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "xmlhttprequest",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("xhrPOST200", async ({ page }) => {
    const type = "xhrPOST200";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.ajax).toHaveLength(1);
    expect(body.ajax[0].async).toBe(true);
    expect(body.ajax[0].category).toBe("Ajax");
    expect(body.ajax[0].cbTime).toBeGreaterThan(0);
    expect(body.ajax[0].method).toBe("POST");
    expect(body.ajax[0].msg).toBe("");
    expect(body.ajax[0].type?.length).toBeGreaterThan(4);
    expect(body.ajax[0].status).toBe(200);
    expect(body.ajax[0].url?.length).toBeGreaterThan(10);
    expect(body.ajax[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "xmlhttprequest",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });

  test("axios200", async ({ page }) => {
    const type = "axios200";
    await genPageAndGoto({
      path: `./src/request/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });

    expect(body.ajax).toHaveLength(1);
    expect(body.ajax[0].async).toBe(true);
    expect(body.ajax[0].category).toBe("Ajax");
    expect(body.ajax[0].cbTime).toBeGreaterThan(0);
    expect(body.ajax[0].method).toBe("GET");
    expect(body.ajax[0].msg).toBe("");
    expect(body.ajax[0].type?.length).toBeGreaterThan(4);
    expect(body.ajax[0].status).toBe(200);
    expect(body.ajax[0].url?.length).toBeGreaterThan(10);
    expect(body.ajax[0].timing).toInlucdesProps({
      duration: "",
      mark: true,
      initiatorType: "xmlhttprequest",
      decodedBodySize: "",
      fetchStart: "",
      name: "",
      responseEnd: "",
    });
  });
});

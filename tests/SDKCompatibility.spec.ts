import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitAllRequest, waitNextRequest } from "../playwright.config";

test.describe("SDKAPI", () => [
  test("ilog", async ({ page }) => {
    const type = "ilog";
    await genPageAndGoto({
      path: `./src/SDKCompatibility/${type}`,
      filename: type,
      page,
      template: `src/SDKCompatibility/${type}.html`,
    });

    const reqs = await waitAllRequest(page)
    expect(reqs?.length).toBeGreaterThan(3)

    reqs.forEach(r => {
      const postBody = r.postData()

      if(r.url().includes('xflow')){
        // ilog 上报请求
        const ilogBody = JSON.parse(decodeURIComponent(postBody))
        expect(ilogBody).toBeDefined()
        expect(ilogBody.sdk_type).toBe('web')
        expect(ilogBody.session_id).toBeDefined()
        expect(ilogBody.trace_id).toBeDefined()
        expect(ilogBody.url?.length).toBeGreaterThan(10)
      }else {
        const body = JSON.parse(postBody)
        //六翼上报请求
        if(body.ajax){
          expect(body).toHaveCommonPropties({ type });
          expect(body.ajax?.length).toBeGreaterThan(1);
          expect(body.ajax[0].async).toBe(true);
          expect(body.ajax[0].category).toBe("Ajax");
          expect(body.ajax[0].cbTime).toBeGreaterThan(0);
          expect(body.ajax[0].method).toBe("POST");
          expect(body.ajax[0].msg).toBe("");
          expect(body.ajax[0].status).toBe(200);
          expect(body.ajax[0].url?.length).toBeGreaterThan(10);
          expect(body.ajax[0].url).toMatch(/cloud_web_sdk_req_body.gif/);
          expect(body.ajax[0].timing).toInlucdesProps({
            duration: "",
            mark: true,
            initiatorType: "xmlhttprequest",
            decodedBodySize: "",
            fetchStart: "",
            name: "",
            responseEnd: "",
          });
        }
      }
    });
  }),
  test("sentry", async ({ page }) => {
    const type = "sentry";
    await genPageAndGoto({
      path: `./src/SDKCompatibility/${type}`,
      filename: type,
      page,
      template: `src/SDKCompatibility/${type}.html`,
    });

    const reqs = await waitAllRequest(page)
    expect(reqs?.length).toBeGreaterThan(1)

    reqs.forEach(r => {
      const postBody = r.postData()
      if(r.url().includes('sentry')){
        // sentry 上报请求
        const bodys = postBody.split('\n')
        expect(bodys?.length).toBeGreaterThan(1)
      }else {
        const body = JSON.parse(postBody)
        //六翼上报请求
        expect(body).toHaveCommonPropties({ type });
        expect(body.fetch?.length).toBeGreaterThan(0);
        expect(body.fetch[0].async).toBe(true);
        expect(body.fetch[0].category).toBe("Fetch");
        expect(body.fetch[0].cbTime).toBeGreaterThan(0);
        expect(body.fetch[0].method).toBe("GET");
        expect(body.fetch[0].msg).toBe("");
        expect(body.fetch[0].status).toBe(200);
        expect(body.fetch[0].url?.length).toBeGreaterThan(10);
        expect(body.fetch[0].url).toBeDefined()
        expect(body.fetch[0].timing).toInlucdesProps({
          duration: "",
          mark: true,
          initiatorType: "fetch",
          decodedBodySize: "",
          fetchStart: "",
          name: "",
          responseEnd: "",
        });
      }
    });
  }),

  test("arms", async ({ page }) => {
    const type = "arms";
    await genPageAndGoto({
      path: `./src/SDKCompatibility/${type}`,
      filename: type,
      page,
      template: `src/SDKCompatibility/${type}.html`,
    });

    const reqs = await waitAllRequest(page)
    expect(reqs?.length).toBeGreaterThan(1)

    reqs.forEach(r => {
      const postBody = r.postData()
      if(!r.url().includes('aliyun')){
        const body = JSON.parse(postBody)
        //六翼上报请求
        expect(body).toHaveCommonPropties({ type });
        if(body.fetch?.length > 0){
          expect(body.fetch.length).toBeGreaterThan(1);
          expect(body.fetch[0].async).toBe(true);
          expect(body.fetch[0].category).toBe("Fetch");
          expect(body.fetch[0].cbTime).toBeGreaterThan(0);
          expect(body.fetch[0].msg).toBe("");
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
        }else {
          expect(body.ajax.length).toBeGreaterThanOrEqual(1);
        }
      }else {
        const u = r.url()
        expect(u).toMatch('pid')
        expect(u).toMatch('pv_id')
      }
    });
  }),

  test("baidu", async ({ page }) => {
    const type = "baidu";
    await genPageAndGoto({
      path: `./src/SDKCompatibility/${type}`,
      filename: type,
      page,
      template: `src/SDKCompatibility/${type}.html`,
    });

    const body = await (await waitNextRequest(page)).postDataJSON()
    expect(body).toHaveCommonPropties({type})
    expect(body.resource.find(r => r.name.includes('hm.baidu.com'))).toBeDefined()
  }),
]);

import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

// js Error 分类 : (InternalError 只有 Firefox 支持, 直接忽略)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
test.describe("JS 错误", () => {
  test("EvalError", async ({ page }) => {
    const type = "eval";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe(
      "Uncaught EvalError: unable to eval"
    );
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("EvalError");
  });

  test("RangeError", async ({ page }) => {
    const type = "range";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe(
      "Uncaught RangeError: Invalid array length"
    );
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("RangeError");
  });

  test("ReferenceError", async ({ page }) => {
    const type = "reference";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe(
      "Uncaught ReferenceError: a is not defined"
    );
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("ReferenceError");
  });

  test("SyntaxError", async ({ page }) => {
    const type = "syntax";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      template: "src/jserror/SyntaxError.html",
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe(
      "Uncaught SyntaxError: Invalid or unexpected token"
    );
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(0);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("SyntaxError");
  });

  test("TypError", async ({ page }) => {
    const type = "type";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe(
      "Uncaught TypeError: Cannot read properties of null (reading 'f')"
    );
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("TypeError");
  });

  test("URIError", async ({ page }) => {
    const type = "uri";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe("Uncaught URIError: URI malformed");
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("URIError");
  });

  test("AggregateError", async ({ page }) => {
    const type = "aggregate";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe("Uncaught AggregateError: Hello");
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("AggregateError");
  });
});

test.describe("其它 JS 错误", () => {
  test("trycatch", async ({ page }) => {
    const type = "trycatch";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe(
      "Uncaught Error: unsupport param: e"
    );
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("Error");
  });

  test("setTimeout", async ({ page }) => {
    const type = "setTimeout";
    await genPageAndGoto({
      path: `./src/jserror/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body.error).toHaveLength(1);
    expect(body.error[0].category).toBe("js_error");
    expect(body.error[0].logType).toBe("Warning");
    expect(body.error[0].logInfo.msg).toBe("Uncaught Error: async error");
    expect(body.error[0].logInfo.url).toBeDefined();
    expect(body.error[0].logInfo.stack.length).toBeGreaterThanOrEqual(1);
    expect(body.error[0].logInfo.line).toBeDefined();
    expect(body.error[0].logInfo.col).toBeDefined();
    expect(body.error[0].logInfo.type).toBe("Error");
  });
});

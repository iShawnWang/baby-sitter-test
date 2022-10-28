import { expect, test } from "@playwright/test";
import { genPageAndGoto, waitNextRequest } from "../playwright.config";

test.describe("Trace", () => [
  test("trace", async ({ page }) => {
    const type = "trace";
    await genPageAndGoto({
      path: `./src/trace/${type}`,
      filename: type,
      page,
    });

    const body = (await waitNextRequest(page)).postDataJSON();
    const body2 = (await waitNextRequest(page)).postDataJSON();
    expect(body).toHaveCommonPropties({ type });
    expect(body2).toBeDefined();
    const span = body2.resourceSpans[0];
    expect(span.resource.attributes?.length).toBeGreaterThan(1);
    expect(span.scopeSpans.length).toBe(1);
    expect(span.scopeSpans[0].scope.name).toBe(
      "@opentelemetry/instrumentation-fetch"
    );
    expect(span.scopeSpans[0].spans.length).toBe(1);
    expect(span.scopeSpans[0].spans[0].name).toBe("HTTP GET");
    expect(span.scopeSpans[0].spans[0].spanId).toBeDefined();
    expect(span.scopeSpans[0].spans[0].traceId).toBeDefined();
    expect(span.scopeSpans[0].spans[0].startTimeUnixNano).toBeDefined();
    expect(span.scopeSpans[0].spans[0].events?.length).toBeGreaterThan(1);
  }),
]);

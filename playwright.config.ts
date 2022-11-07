import type { PlaywrightTestConfig, Request, Page } from "@playwright/test";
import { devices, expect } from "@playwright/test";
import webpack from "webpack";
import webpackConf from "./src/webpack.conf";

export const genPage = ({ path, filename, template }) => {
  return new Promise<{ filepath: string; stat: any }>((resolve, reject) => {
    webpack(
      webpackConf({ entry: path, filename, template }),
      async (err, stat) => {
        await expect(err).toBeNull;
        await expect(stat).toBeDefined();
        if (err) {
          reject(err);
        }
        resolve({
          stat: stat,
          filepath: `http://localhost:23333/${filename}.html`, // 用 localhost: 而不是 file: 防止 "Script Error."
        });
      }
    );
  });
};

export const genPageAndGoto = async ({
  path,
  filename,
  page,
  template,
}: {
  path: string;
  filename: string;
  page: Page;
  template?: string;
}) => {
  const { filepath } = await genPage({ path, filename, template });
  await page.goto(filepath);
};

export const waitNextRequest = async (page, timeout = 6) => {
  return new Promise<Request>((resolve, reject) => {
    page.on("request", (request: Request) => {
      resolve(request);
    });
    setTimeout(() => {
      reject("timeout !");
    }, timeout * 1000);
  });
};

expect.extend({
  toInlucdesProps(received, argument) {
    if (!received) {
      return {
        pass: false,
        message: `received: ${this.utils.printReceived(received)}`,
      };
    }
    if (!argument) {
      return {
        pass: false,
        message: `argument: ${this.utils.printReceived(argument)}`,
      };
    }
    const ks = Object.keys(argument);
    const valid = ks.every((k) => String(received[k]).includes(argument[k]));
    return {
      pass: !!valid,
      message: () =>
        `expected ${this.utils.printReceived(
          received
        )} to contain props ${this.utils.printExpected(argument)}`,
    };
  },
  toIncludesObject(received, argument) {
    if (!received) {
      return {
        pass: false,
        message: `received: ${this.utils.printReceived(received)}`,
      };
    }
    if (!argument) {
      return {
        pass: false,
        message: `argument: ${this.utils.printReceived(argument)}`,
      };
    }
    const ks = Object.keys(argument);
    const find = received.find((r) =>
      ks.every((k) => String(r[k]).includes(argument[k]))
    );
    return {
      pass: !!find,
      message: () =>
        `expected ${this.utils.printReceived(
          received
        )} to contain object ${this.utils.printExpected(argument)}`,
    };
  },
  toHaveCommonPropties(received, argument) {
    if (!received) {
      return {
        pass: false,
        message: `received: ${this.utils.printReceived(received)}`,
      };
    }
    expect(received).toBeDefined();
    expect(received.source).toBe("H5");
    expect(received.env).toBe("prd");
    expect(received.jsSdkVersion).toBe("2.0.0");
    expect(received.url).toBeDefined();
    expect(received.seraphId).toBeDefined();
    expect(received.sessionId).toBeDefined();
    expect(received.network).toBeDefined();
    expect(received.userAgent).toBeDefined();
    expect(received.deviceId).toBeDefined();
    expect(received.userId).toBeDefined();
    expect(received.events).toIncludesObject({
      to: `http://localhost:23333/${argument.type}`,
      from: "",
      category: "pv",
      type: "init",
      timestamp: 166,
    });
    return {
      pass: true,
      message: () =>
        `expected ${this.utils.printReceived(
          received
        )} to contain common properties ${this.utils.printExpected(argument)}`,
    };
  },
});


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 4,
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: "http://localhost:23333",
    actionTimeout: 0,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run serve",
    port: 23333,
    timeout: 15 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  projects: process.env.CI ? [
    {
      name: 'Desktop Edge',
      use: {
        ...devices['Desktop Edge']
      }
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'iPhone 6',
      use: {
        ...devices['iPhone 6'],
      },
    },
    {
      name: 'Nexus 4',
      use: {
        ...devices['Nexus 4']
      }
    },
  ] : [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;

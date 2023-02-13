# baby-sitter-test

[![Playwright Tests](https://github.com/iShawnWang/baby-sitter-test/actions/workflows/playwright.yml/badge.svg)](https://github.com/iShawnWang/baby-sitter-test/actions/workflows/playwright.yml)


# 目录说明

- api: next.js 项目, 作为 mock server
- chrome-extension-injector: Chrome 插件(实验性), 可以把 SDK 注入到任意页面, 查看上报效果
- cpa: Conpetitive Product Analysis 竞品分析, 其它平台 SDK
- example: 本地开发测试的demo项目
- next: 最新 SDK 实现的想法 // 可忽略
- src: 用例对用的case脚本, 创建错误或者发起请求等
- tests: PlayWright 测试用例

# PreRequirement
1. pnpm install
2. PlayWright 文档 + VSCode 插件

# 执行 Demo 项目调试
1. cd example/umi3 && pnpm install
2. npm run start
3. 点击按钮, 选择 url 或者 npm 包方式加载六翼 SDK
4. 点击其它case按钮, 观察采集上报结果

# 测试用例开发
1. 将新版本SDK放到 dist/ 目录下
2. 新增case: 在 src 增加创建对应场景的js代码, 如 throw 一个 Error 或者 Exception
3. tests 目录新增测试用例, 运行上述 case, 并验证 SDK 采集结果是否符合预期

# 执行测试用例

### 1. VSCode 插件方式(推荐)
1. 安装插件 https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
2. 左侧点击对应用例运行或者 Debug

### 2. 代码方式
1. run specific test: `npx playwright -g fetch200`
2. debug: `npx playwright test -g setTimeout --headed --debug --project='iPhone 6'`

import { appendScript } from './util'
import {MonitorJS} from '@za/seraph-sdk'

export const createSeraphMonitorSDK = () => {
  // const s = appendScript({ src: window.location.href.indexOf('localhost') !== -1 ? 'http://localhost:3000/index.umd.js' : 'https://s.zhongan.io/seraph-js-sdk/dist/js/monitor.1.0.5.js' })

  // s.onload = () => {
  //   window._SERAPH_ = MonitorJS({
  //     siteId: "test",
  //     debug: true,
  //     trace: {
  //       serviceName: 'wangshuai-demo',
  //       serviceId: '2333',
  //       companyId: '79002',
  //       env: 'prd',
  //       corsUrls: [/jsonplaceholder/, /example/],
  //     },
  //   });
  // }

    window._SERAPH_ = MonitorJS({
      seraphId: "test",
      debug: true,
      trace: {
        serviceName: 'wangshuai-demo',
        serviceId: '2333',
        companyId: '79002',
        env: 'prd',
        corsUrls: [/jsonplaceholder/, /example/],
      },
    });
}


export const createAliArmsSDK = () => {
  const s = appendScript({ src: 'https://retcode.alicdn.com/retcode/bl.js' })
  s.onload = () => {
    window.__bl = {
      config: {
        pid: "",
        appType: "web",
        imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
        sendResource: true,
        enableLinkTrace: true,
        behavior: true,
        enableSPA: true
      }
    }
  }
}

export const createByteVoiceSDK = () => {
  const s = appendScript({ src: 'https://apm.volccdn.com/mars-web/apmplus/web/browser.cn.js?aid=0&globalName=apmPlus' })
  s.onload = () => {
    window.apmPlus("init", {
      aid: 0
    });
    window.apmPlus("start");
  }
}

export const createSentrySDK = () => {
  const s = appendScript({ src: 'https://browser.sentry-cdn.com/7.15.0/bundle.tracing.min.js' })
  s.onload = () => {
    Sentry.init({
      dsn: "https://78da206fb0b0464499a3aea217b55cb5@o163026.ingest.sentry.io/5728691",
      release: "0.0.1",
      integrations: [new Sentry.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }
}
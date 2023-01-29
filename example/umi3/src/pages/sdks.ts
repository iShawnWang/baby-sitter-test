import { appendScript } from './util'
import SeraphSDK from '@za/seraph-sdk'

export const createSeraphMonitorSDKRemote = () => {
  const s = appendScript({ src: 'http://localhost:3000/dist/monitor.trace.umd.js' })

  s.onload = () => {
    MonitorJS({
      seraphId: "test-remote",
      H5Version: "9.9.9",
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
}

export const createSeraphMonitorSDKLocal = () => {
    window._SERAPH_ = SeraphSDK({
      seraphId: "test-local",
      debug: true,
      H5Version: "9.9.9",
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
export const appendScript = ({ src }: { src: string }) => {
  var s = document.createElement("script");
  s.src = "https://seraph-oss-config-test.oss-cn-hangzhou.aliyuncs.com/sourcemap/monitor.2.0.0.trace.js?OSSAccessKeyId=LTAI5t6ih9QjZ2EVMs9X7NnD&Expires=1667288612&Signature=gKp%2FL7DTXmTgWQ6mpMXrTOwEWp0%3D";
  s.crossOrigin = "anonymous";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(s, firstScriptTag);
  s.onload = () => {
    window._SERAPH_ = MonitorJS({
      seraphId: "test",
      debug: true,
      trace: {
        serviceName: 'wangshuai-demo',
        serviceId: '2333',
        companyId: '79002',
        env: 'prd',
      },
    });
  }
  return s
}
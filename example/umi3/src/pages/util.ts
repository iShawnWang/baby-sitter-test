export const appendScript = ({ src }: { src: string }) => {
  var s = document.createElement("script");
  s.src = src;
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
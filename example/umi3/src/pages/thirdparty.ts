export const createILogInject = () => {
  var za = document.createElement("script");
  za.src = "//static.zhongan.com/resource/js/ilog-v3.js?d79cb";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode?.insertBefore(za, s);
  return za
}

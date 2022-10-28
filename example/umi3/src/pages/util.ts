export const appendScript = ({ src }: { src: string }) => {
  var s = document.createElement("script");
  s.src = src;
  s.crossOrigin = "anonymous";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(s, firstScriptTag);
  return s
}
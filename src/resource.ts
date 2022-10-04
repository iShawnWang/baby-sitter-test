export const createScript200 = () => {
  var script = document.createElement('script');
  script.src = 'https://baby-sitter-test-api.vercel.app/demo.js'
  document.head.appendChild(script);
  return script
}

export const createScript404 = () => {
  var script = document.createElement('script');
  script.src = 'https://baby-sitter-test-api.vercel.app/notexist.js'
  document.head.appendChild(script);
  return script
}

export const createCSS200 = () => {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://baby-sitter-test-api.vercel.app/demo.css";
  document.getElementsByTagName("head")[0].appendChild(link)
  return link
}
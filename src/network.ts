export const createFetch200 = () => {
  return fetch("https://baby-sitter-test-api.vercel.app/api/status/200");
};

export const createSlowFetch = () => {
  // TODO 3s以上
  return fetch('https://baby-sitter-test-api.vercel.app/api/slow/3000')
}

export const createFetchPOST200 = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
};

export const createFetch404 = () => {
  return fetch("https://baby-sitter-test-api.vercel.app/api/status/404");
};

export const createFetch500 = () => {
  return fetch("https://baby-sitter-test-api.vercel.app/api/status/500");
};

export const createXhr200 = () => {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "https://baby-sitter-test-api.vercel.app/api/status/200");
  oReq.send();
};

export const createXhrPOST200 = () => {
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "https://jsonplaceholder.typicode.com/posts");
  oReq.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
  oReq.send(JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }))
};

export const createXhr404 = () => {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "https://baby-sitter-test-api.vercel.app/api/status/404");
  oReq.send();
};
export const createXhr500 = () => {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "https://baby-sitter-test-api.vercel.app/api/status/500");
  oReq.send();
};
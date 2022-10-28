var oReq = new XMLHttpRequest();
oReq.open("POST", "https://baby-sitter-test-api.vercel.app/api/status/200");
oReq.setRequestHeader("Content-type", "application/json; charset=UTF-8");
oReq.send(
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  })
);

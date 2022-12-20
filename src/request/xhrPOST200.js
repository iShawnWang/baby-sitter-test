var oReq = new XMLHttpRequest();
oReq.open("POST", "http://localhost:9996/api/status/200");
oReq.setRequestHeader("Content-type", "application/json; charset=UTF-8");
oReq.send(
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  })
);

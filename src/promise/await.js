(async function () {
  await Promise.reject(new Error("await promise reject"));
})();

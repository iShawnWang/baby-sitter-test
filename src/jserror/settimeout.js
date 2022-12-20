setTimeout(() => {
  throw new Error("async error");
}, 500);

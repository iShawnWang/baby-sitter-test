fetch("http://localhost:9996/api/slow/2000", {
  signal: AbortSignal.timeout(1000),
});

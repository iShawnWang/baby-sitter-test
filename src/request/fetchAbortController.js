fetch("https://baby-sitter-test-api.vercel.app/api/slow/2000", {
  signal: AbortSignal.timeout(1000),
});

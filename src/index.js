if (url.pathname === "/api/bazaar") {
  return new Response(
    JSON.stringify({
      status: "ok",
      source: "worker",
      message: "Bazaar API reachable"
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}

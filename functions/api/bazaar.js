export async function onRequest(context) {
  return new Response(
    JSON.stringify({
      status: "ok",
      source: "pages-function",
      message: "Bazaar API reachable"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

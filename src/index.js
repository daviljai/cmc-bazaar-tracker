export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/bazaar") {
      const res = await fetch(
        "https://api.craftersmc.net/v1/bazaar/items",
        {
          headers: {
            "X-API-Key": env.CMC_API_KEY
          }
        }
      );

      const data = await res.json();

      return new Response(JSON.stringify(data, null, 2), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};
const server = {}

export default {
  async fetch(req: Request) {
    const url = new URL(req.url);

    // Handle specific routes
    if (url.pathname === "/health") {
      return new Response("OK", {
        status: 200,
        headers: { "content-type": "text/plain" }
      });
    }

    console.log('Supabase Server', url.pathname)

    /*
    return Response.json({
      message: 'Hello from Supabase Server',
      path: url.pathname,
    });
      */
  }
}

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

function handler(_req: Request) {
  const data = {
    Hello: "World!",
  };
  return Response.json(data);
}

console.log("Listening on http://localhost:8000");
serve(handler);

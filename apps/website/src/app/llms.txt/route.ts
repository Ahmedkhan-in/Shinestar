import { llmsTxt } from "@/lib/llms";

// Served at /llms.txt — a short guide to the site for AI assistants (see lib/llms.ts)
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

import { llmsFullTxt } from "@/lib/llms";

// Served at /llms-full.txt — every package and visa guide in one plain-text file (see lib/llms.ts)
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

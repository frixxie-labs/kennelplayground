import { App, staticFiles } from "fresh";
import type { State } from "./utils.ts";

export const app = new App<State>();

const uniqueVisitors = new Set<string>();

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]
    .trim();

  return forwardedFor ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown";
}

function shouldTrackVisitor(pathname: string): boolean {
  return !pathname.startsWith("/metrics") &&
    !pathname.startsWith("/status/") &&
    !pathname.includes(".");
}

function getMetrics(): string {
  return [
    "# HELP kennelplayground_unique_visitors Unique visitors seen since process start.",
    "# TYPE kennelplayground_unique_visitors gauge",
    `kennelplayground_unique_visitors ${uniqueVisitors.size}`,
    "",
  ].join("\n");
}

app.use(async (ctx) => {
  const url = new URL(ctx.req.url);
  const timestamp = new Date().toISOString();
  const started = performance.now();

  if (shouldTrackVisitor(url.pathname)) {
    const userAgent = ctx.req.headers.get("user-agent") || "unknown";
    uniqueVisitors.add(`${getClientIp(ctx.req)}|${userAgent}`);
  }

  try {
    const res = await ctx.next();
    const elapsed = performance.now() - started;
    console.log(
      `${timestamp} ${ctx.req.method} ${url.pathname} ${res.status} ${
        elapsed.toFixed(1)
      }ms`,
    );
    return res;
  } catch (err) {
    const elapsed = performance.now() - started;
    console.log(
      `${timestamp} ${ctx.req.method} ${url.pathname} error ${
        elapsed.toFixed(1)
      }ms`,
    );
    throw err;
  }
});

app.get("/status/ping", () =>
  new Response("pong", {
    headers: { "content-type": "text/plain" },
  }));

app.get("/status/health", () =>
  Response.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  }));

app.get("/metrics", () =>
  new Response(getMetrics(), {
    headers: { "content-type": "text/plain; version=0.0.4; charset=utf-8" },
  }));

app.use(staticFiles());

// Include file-system based routes here
app.fsRoutes();

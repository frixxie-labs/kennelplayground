FROM denoland/deno:latest AS deps

WORKDIR /app

COPY deno.json deno.lock ./
RUN deno install --frozen

FROM deps AS build

COPY . .
RUN deno task check
RUN deno task build

FROM denoland/deno:latest

WORKDIR /app
ENV PORT=8000

COPY --from=build /app/deno.json /app/deno.lock ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/_fresh ./_fresh
COPY --from=build /app/static ./static

EXPOSE 8000
USER deno

CMD ["deno", "serve", "-A", "--host", "0.0.0.0", "--port", "8000", "_fresh/server.js"]

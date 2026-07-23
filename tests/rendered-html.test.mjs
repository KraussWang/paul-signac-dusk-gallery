import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Paul Signac home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Paul Signac/);
  assert.match(html, /An architecture of colour/);
  assert.match(html, /Avignon\. Soir/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("server-renders every requested route", async () => {
  for (const [path, text] of [
    ["/about", "A modern life built in colour"],
    ["/journey", "A compass set toward light"],
    ["/works", "The eye completes the painting"],
    ["/contact", "Ideas travel, too"],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(text));
  }
});

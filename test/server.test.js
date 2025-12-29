const { test } = require('node:test');
const assert = require('node:assert');
const { createApp } = require('../server');

function startServer() {
  const server = createApp();
  return new Promise((resolve) => {
    server.listen(0, () => resolve(server));
  });
}

test('GET / returns hello page with timestamp', async (t) => {
  const server = await startServer();
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/`);
  const body = await res.text();

  assert.strictEqual(res.status, 200);
  assert.ok(body.includes('Hello from Rampo'));
  assert.ok(body.includes('<p>'));
});

test('GET /unknown returns 404', async (t) => {
  const server = await startServer();
  t.after(() => new Promise((resolve) => server.close(resolve)));

  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/unknown`);

  assert.strictEqual(res.status, 404);
});

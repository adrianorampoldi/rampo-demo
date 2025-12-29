const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

function handler(req, res) {
  if (req.url === '/') {
    const now = new Date();
    const body = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello from Rampo</title>
  <style>
    body {
      margin: 0;
      background: #f6f8fa;
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .card {
      background: #fff;
      padding: 32px 40px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      text-align: center;
    }
    h1 {
      margin: 0 0 12px;
      font-size: 1.8rem;
      color: #0f172a;
    }
    p {
      margin: 0;
      color: #334155;
      font-size: 1.05rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello from Rampo</h1>
    <p>${now.toISOString()}</p>
  </div>
</body>
</html>`;

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': Buffer.byteLength(body),
    });
    res.end(body);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
}

function createApp() {
  return http.createServer(handler);
}

if (require.main === module) {
  const server = createApp();
  server.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
  });
}

module.exports = { createApp };

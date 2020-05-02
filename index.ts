// @ts-ignore
const cookieParser = require('cookie-parser');
const express = require('express');
const next = require('next');
const routesJs = require('./routes');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// @ts-ignore
const handler = routesJs.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

(async () => {
  try {
    await app.prepare();

    const server = express();

    server.use(cookieParser());

    server
      // @ts-ignore
      .get('/healthz', (req, res) => {
        res.send('OK');
      })
      .use(handler)
      .listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line
      });
  } catch (error) {
        console.error(error.stack); // eslint-disable-line
    process.exit(1);
  }
})();

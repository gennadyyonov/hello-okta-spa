const {createProxyMiddleware} = require('http-proxy-middleware');

const bffTarget = process.env.BASE_URL;

const options = {
  target: bffTarget,
  changeOrigin: true,
  secure: false,
  onProxyReq: function(proxyReq, req, res) {
    // CORS
    proxyReq.setHeader('origin', bffTarget);
  },
};

module.exports = function(app) {
  app.use(
    '/bff',
    createProxyMiddleware(options),
  );
};

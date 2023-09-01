const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // La ruta base de tu API
    createProxyMiddleware({
      target: 'http://localhost:8000', 
      changeOrigin: true,
    })
  );
};
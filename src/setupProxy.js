import { createProxyMiddleware } from 'http-proxy-middleware';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(app) {
  app.use(
    '/https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    createProxyMiddleware({
      target: 'https://localhost:44369',
      changeOrigin: true,
      pathRewrite: {
        '^/https://maps.googleapis.com/maps/api/place/nearbysearch/json': '/api',
      },
    })
  );
};

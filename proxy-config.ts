import http from 'node:http';

import { HttpsProxyAgent } from 'https-proxy-agent';
import { CommonServerOptions, HttpProxy } from 'vite';

interface ProxyConfigOptions {
  backendBaseUrl?: string;
  backendCorporateProxy?: string;
}

const errorHandler: HttpProxy.ErrorCallback = (err: Error, _: http.IncomingMessage, res: http.ServerResponse): void => {
  console.error('Proxy error handled:\n', err);
  res.writeHead(504, { 'Content-Type': 'text/plain' });
  res.end('Service Unavailable');
};

const proxyConfig = (options: ProxyConfigOptions): CommonServerOptions['proxy'] => {
  const { backendBaseUrl, backendCorporateProxy } = options;

  return {
    '/bff': {
      target: backendBaseUrl,
      changeOrigin: true,
      secure: false,
      ...(backendCorporateProxy ? { agent: new HttpsProxyAgent(backendCorporateProxy) } : {}),
      configure: (proxy, _) => {
        proxy.on('proxyReq', (proxyReq) => {
          // Fixes apollo client CORS issue by hiding localhost:3000
          proxyReq.removeHeader('origin');
        });
        proxy.on('error', errorHandler);
      },
    },
  };
};

export default proxyConfig;

import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const exportedAssetDirectories = [
  '696a99fdabc03596762256a7',
  '696a99fdabc03596762256b9',
  'site-js',
  'gsap',
  'lenis@1.3.4',
  'jquery.validation',
  'js',
  'npm',
];

function copyExportedAssets() {
  return {
    name: 'copy-exported-assets',
    apply: 'build',
    closeBundle() {
      const outputDirectory = path.resolve('dist');
      exportedAssetDirectories.forEach((directory) => {
        fs.cpSync(path.resolve(directory), path.join(outputDirectory, directory), { recursive: true });
      });
    },
  };
}

const appRoutes = new Set([
  '/',
  '/it',
  '/about',
  '/it/about',
  '/services',
  '/it/services',
  '/contact',
  '/it/contact',
  '/work',
  '/it/work',
  '/work-1',
  '/work-2',
  '/work-3',
  '/work-4',
  '/work-5',
  '/work-6',
  '/it/work-1',
  '/it/work-2',
  '/it/work-3',
  '/it/work-4',
  '/it/work-5',
  '/it/work-6',
  '/legals/privacy-policy',
  '/legals/cookie-policy',
  '/it/legals/privacy-policy',
  '/it/legals/cookie-policy',
  '/ta',
  '/ta/about',
  '/ta/services',
  '/ta/contact',
  '/ta/work',
  '/ta/work-1',
  '/ta/work-2',
  '/ta/work-3',
  '/ta/work-4',
  '/ta/work-5',
  '/ta/work-6',
  '/ta/legals/privacy-policy',
  '/ta/legals/cookie-policy',
]);

function reactRouteFallback() {
  return {
    name: 'react-route-fallback',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        const pathname = request.url?.split('?')[0].replace(/\/$/, '') || '/';
        if (appRoutes.has(pathname)) {
          request.url = '/';
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [copyExportedAssets(), react(), reactRouteFallback()],
  publicDir: false,
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});

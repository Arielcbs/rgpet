import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');
  return {
    plugins: [{ name: 'legacy-jsx', enforce: 'pre', async transform(code, id) {
      if (/\/src\/.*\.js$/.test(id)) return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'transform' });
    } }, react({ jsxRuntime: 'classic' })],
    define: { 'process.env': JSON.stringify({ ...env, PUBLIC_URL: '' }) },
    optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
    build: { outDir: 'build' },
    test: { environment: 'jsdom', globals: true, include: ['src/**/*.test.{js,jsx,ts,tsx}'] },
  };
});

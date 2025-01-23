import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.test/setup.ts'],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.idea/**',
      '**/.git/**',
      '**/.cache/**',
      '**/templates/**',
      '**/*.stories.{js,jsx,ts,tsx}',
      '**/*stories.{js,jsx,ts,tsx}', // Ignorar arquivos stories
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'], // Formatos de saída do coverage
      reportsDirectory: '../.coverage',
      exclude: [
        '**/node_modules/**', // Ignorar dependências
        '**/public/**', // Ignorar arquivos públicos
        '**/.test/**', // Ignorar arquivos de configuração de teste
        '**/.spec/**', // Ignorar arquivos de configuração de teste
        '**/*.stories.{js,jsx,ts,tsx}', // Ignorar arquivos stories
        '**/*stories.{js,jsx,ts,tsx}', // Ignorar arquivos stories
        '**/config/**', // Ignorar arquivos de configuração
        '**/lib/**', // Ignorar bibliotecas
        '**/templates/**', // Ignorar templates
        '**/styles/**', // Ignorar estilos
        '**/app/**', // Ignorar arquivos do app
        '**/dist/**', // Ignorar builds
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/app': path.resolve(__dirname, './src/app'),
    },
  },
});

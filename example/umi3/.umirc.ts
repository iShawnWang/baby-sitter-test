import { defineConfig } from 'umi';
import { SeraphWebpackPlugin } from '@za/sourcemap-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  hash: true,
  devtool: 'source-map',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  webpack5: {},
  esbuild: {},
  chainWebpack(memo) {
    memo.plugin('seraph-webpack-plugin').use(SeraphWebpackPlugin, [
      {
        env: 'test',
        companyId: '79002',
        appId: 'f800ffffffd04920',
        version: '1.0.0',
        enable: process.env.NODE_ENV !== 'development',
      },
    ]);
  },
});

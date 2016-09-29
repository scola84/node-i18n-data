import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/i18n-data.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    '@scola/api-http',
    '@scola/api-model',
    '@scola/api-router',
    '@scola/validator',
    '@scola/api-ws'
  ],
  plugins: [
    buble()
  ]
};

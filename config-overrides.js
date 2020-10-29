const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' }
    }
  }),
  addWebpackAlias({
    //路径别名
    // eslint-disable-next-line no-useless-computed-key
    ['@']: path.resolve(__dirname, './src')
  }),
);

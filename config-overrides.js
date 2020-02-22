const {
  override,
  overrideDevServer,
  fixBabelImports,
  setWebpackTarget,
  addWebpackAlias
} = require('customize-cra');
const path = require('path');

const appPath = target => path.resolve(__dirname, target);


module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': appPath('src'),
      '@components': appPath('src/components'),
      '@assets': appPath('src/assets'),
      '@layouts': appPath('src/layouts'),
      '@store': appPath('src/store'),
      '@actions': appPath('src/store/actions'),
      '@apis': appPath('src/apis'),
      '@router': appPath('src/router'),
      '@pages': appPath('src/pages'),
      '@utils': appPath('src/utils'),
      '@hooks': appPath('src/hooks')
    })
  ),
  paths: (paths, env) => {
    return paths;
  }
};

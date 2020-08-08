const {
  override,
  overrideDevServer,
  fixBabelImports,
  setWebpackTarget,
  addWebpackAlias,
  disableEsLint
} = require('customize-cra');
const path = require('path');
const { addReactRefresh } = require("customize-cra-react-refresh")

const appPath = target => path.resolve(__dirname, target);

const devServerConfig = () => config => {
  return {
    ...config,
    compress: true,
    proxy: {
      '/nxpwest/**': {
        target: 'http://www.ljhhhx.com:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/nxpwest': '/nxpwest'
        }
      }
    }
  }
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': appPath('src'),
      '@store': appPath('src/store'),
      '@apis': appPath('src/services/apis'),
      '@hooks': appPath('src/hooks'),
    }),
    addReactRefresh(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    disableEsLint()
  ),
  devServer: overrideDevServer(
    devServerConfig()
  ),
  paths: (paths, env) => {
    return paths;
  }
};
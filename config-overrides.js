const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去console插件
const CompressionWebpackPlugin = require('compression-webpack-plugin') // gzip压缩插件
const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackAlias
} = require('customize-cra')

const addCustom = () => config => {
  let plugins = [
    new UglifyJsPlugin({
      // 删除生产环境的console.log
      uglifyOptions: {
        compress: {
          // warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new CompressionWebpackPlugin({
      // 开启gzip
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  ]
  if (process.env.NODE_ENV !== 'development') {
    config.plugins = [...config.plugins, ...plugins]
  }
  config.module.unknownContextCritical = false // 忽略模块上下文警告信息
  return config
}

module.exports = override(
  fixBabelImports(
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    },
    {
      libraryName: 'react-use',
      libraryDirectory: 'lib',
      camel2DashComponentName: false
    }
  ),
  addDecoratorsLegacy(), //装饰器
  addWebpackAlias({ '@': path.resolve(__dirname, 'src') }),
  addCustom()
)

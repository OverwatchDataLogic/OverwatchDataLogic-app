export default {
  entry: 'src/index.js',
  //theme: "./theme.config.js",
  disableCSSModules: true,
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        [
          'import',
          {
            libraryName: 'antd',
            style: true
          }
        ]
      ]
    },
    production: {
      extraBabelPlugins: [
        [
          'import',
          {
            libraryName: 'antd',
            style: true
          }
        ]
      ]
    }
  }
}

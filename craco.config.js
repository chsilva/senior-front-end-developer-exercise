const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#bc3c3b' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}

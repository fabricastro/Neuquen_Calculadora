const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_datepicker.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
          @import "@/assets/styles/_fonts.scss";
          @import "@/assets/styles/_animations.scss";
          @import "@/assets/styles/_components.scss";
          @import "@/assets/styles/_layout.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
}

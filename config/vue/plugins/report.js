const { isProductionFn } = require("../../utiles");
function createReport(config) {
  config.when(isProductionFn(),config=>{
    config
      .plugin("webpack-bundle-analyzer")
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  })
}
module.exports = {
  createReport
};

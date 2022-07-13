const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { 
          prependData: '@import "@/assets/scss/style.scss";'
        }
      }
    }
  }
})

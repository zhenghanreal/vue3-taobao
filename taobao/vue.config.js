const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    plugins: [
        require('unplugin-auto-import/webpack')({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue', 'vue-router','vuex'],
            eslintrc: {
                enabled: true, // <-- this
            },
        }),
    ],
},
})

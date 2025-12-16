import {defineConfig} from '@rsbuild/core'
import {pluginBabel} from '@rsbuild/plugin-babel'
import {pluginVue} from '@rsbuild/plugin-vue'
import {pluginVueJsx} from '@rsbuild/plugin-vue-jsx'
import {SemiRspackPlugin} from '@douyinfe/semi-rspack-plugin'

export default defineConfig({
  source: {
    entry: {
      index: './demos/index.js',
    },
  },

  server: {
    port: 5050,
  },

  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
  ],

  tools: {
    rspack: { //Rspack 或 webpack 插件
      plugins: [
        new SemiRspackPlugin({
          cssLayer:true
        })
      ],
    },
  },
})
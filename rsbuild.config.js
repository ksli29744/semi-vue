import {defineConfig} from '@rsbuild/core'
import {pluginBabel} from "@rsbuild/plugin-babel"
import {pluginVue} from "@rsbuild/plugin-vue"
import {pluginVueJsx} from "@rsbuild/plugin-vue-jsx"

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
})
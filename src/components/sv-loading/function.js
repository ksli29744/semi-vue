/* 用法示例：
  const loading = new SvLoading({
    // size: 'large',
    tip: '上传中',
  })
  setTimeout(() => {
    loading.hide()
  }, 10000)
*/
import {createApp} from 'vue'
import LoadingCom from './index.vue'

class Loading {
  constructor(config = {}) {
    if (!config.delay) config.delay = 0
    if (!config.fullscreen) config.fullscreen = true

    this.loadingInstance = createApp(LoadingCom, config).mount(document.createElement('div'))
    document.body.appendChild(this.loadingInstance.$el)
    // this.timer = setTimeout(() => {
    //   document.body.appendChild(this.loadingInstance.$el)
    // }, config.delay)
  }

  hide() {
    clearTimeout(this.timer)
    const body = document.body
    const loadingEl = this.loadingInstance.$el
    if (body.contains(loadingEl)) body.removeChild(loadingEl)
  }
}

function showSvLoading(config) {
  return new Loading(config)
}

export {showSvLoading}
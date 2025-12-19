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
    config.delay = 0
    //默认全屏显示
    if (config.fullscreen === undefined) config.fullscreen = true

    this.app = createApp(LoadingCom, config)
    this.loadingInstance = this.app.mount(document.createElement('div'))
    this.timer = setTimeout(() => {
      document.body.appendChild(this.loadingInstance.$el)
    }, config.delay)
  }

  hide() {
    clearTimeout(this.timer)
    this.app.unmount()
  }
}

function showSvLoading(config) {
  return new Loading(config)
}

export {showSvLoading}
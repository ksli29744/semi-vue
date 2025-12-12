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
  constructor(config = {delay: 0}) {
    this.loadingInstance = createApp(LoadingCom, config).mount(document.createElement('div'))

    this.timer = setTimeout(() => {
      document.body.appendChild(this.loadingInstance.$el)
    }, config.delay)
  }

  hide() {
    clearTimeout(this.timer)
    const body = document.body
    const loadingEl = this.loadingInstance.$el
    if (body.contains(loadingEl)) body.removeChild(loadingEl)
  }
}

export default Loading
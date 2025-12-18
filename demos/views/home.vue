<template>
  <div class="p-24" style="height: 2000px;">
    home

    <Button @click="testLoading">按钮</Button>

    <sv-input v-model="input" class="mt-8" @change="onChange" />
    
    <div class="" style="width: 100px;">电视剧福克斯大幅低开水电费是的看水电费是的开发上岛咖啡开始的焚枯食淡饭卡是打发苏卡达放大山卡拉分三大开发机苏卡达飞机快三大飞机送达了开发科利达说法凯撒代发上课的法律手段发快递说法</div>

    <sv-loading :loading="loading" :delay="1000" />

    <!-- <div style="width: 500px" class="mt-96">
      <Spin tip="加载中">
        I am loading...
      </Spin>
    </div> -->
    
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Button, Spin, SvInput, SvLoading, showSvLoading} from '/src/index.js'

function onChange(value) {
  console.log('onChange', value)
}

function testLoading() {
  //loading.value = !loading.value

  const loading = showSvLoading({delay: 10})
  setTimeout(() => {
    loading.hide()
  }, 1500)
}

let input = ref(''),
  loading = ref(false)
</script>
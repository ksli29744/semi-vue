<template>
  <div class="p-24" style="height: 2000px;">
    home

    <Button @click="testLoading">按钮</Button>

    <sv-input v-model="input" class="mt-8" @change="onChange" />

    <sv-loading tip="加载中"  />

    <div style="width: 500px" class="mt-96">
      <Spin tip="加载中">
        I am loading...
      </Spin>
    </div>
    
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Button, Spin, SvInput, SvLoading, showSvLoading} from '/src/index.js'

function onChange(value) {
  console.log('onChange', value)
}

function testLoading() {
  const loading = showSvLoading({delay: 1000})
  setTimeout(() => {
    loading.hide()
  }, 10000)
}

let input = ref('')
</script>
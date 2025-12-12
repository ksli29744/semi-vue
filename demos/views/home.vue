<template>
  <div class="p-24" style="height: 2000px;">
    home

    <Button @click="showLoading">按钮</Button>

    <sv-input v-model="input" size="small" class="mt-8" @change="onChange" />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Button, SvInput, SvLoading} from '/src/index.js'

function onChange(value) {
  console.log('onChange', value)
}

function showLoading() {
  const loading = new SvLoading({delay: 1000})
  setTimeout(() => {
    loading.hide()
  }, 10000)
}

let input = ref('')
</script>
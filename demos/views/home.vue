<template>
  <div class="p-24">
    home

    <Button>按钮</Button>

    <sv-input v-model="input" size="small" class="mt-8" @change="onChange" />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Button, SvInput} from '/src/index.js'

function onChange(value) {
  console.log('onChange', value)
}

let input = ref('')
</script>
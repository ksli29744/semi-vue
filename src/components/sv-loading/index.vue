<!--
  与Spin相同的属性直接透传到Spin组件
-->
<template>
  <div v-if="visible" class="sv-loading" :class="{fullscreen}" :style="{background}">
		<Spin :size="size" :tip="tip" />
	</div>
</template>

<script setup>
import {Spin} from '@kousum/semi-ui-vue'
import {useAttrs} from 'vue'

const attrs = useAttrs()
const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: 'middle',
  },
  tip: {
    type: String,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  background: String,
})

</script>

<style scoped>
.sv-loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sv-loading.fullscreen {
  position: fixed;
  z-index: 1090;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.sv-loading :deep(.semi-spin) {
  display: inline-flex;
  width: auto;
  height: auto;
}

.sv-loading :deep(.semi-spin-wrapper) {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  transform: none;
}

.sv-loading :deep([x-semi-prop=tip]) {
  width: max-content;
  /* position: relative;
  left: 50%;
  transform: translateX(-50%); */
}
</style>
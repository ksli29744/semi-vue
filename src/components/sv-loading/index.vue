<template>
  <div class="loading">
		<Spin v-bind="attrs" />
	</div>
</template>

<script setup>
import {Spin} from '@kousum/semi-ui-vue'
import {useAttrs} from 'vue'

const attrs = useAttrs()
</script>

<style scoped>
.loading {
  position: fixed;
  z-index: 1040;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.semi-spin :deep([x-semi-prop=tip]) {
  width: max-content;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
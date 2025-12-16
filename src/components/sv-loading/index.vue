<template>
  <div class="sv-loading">
		<Spin v-bind="attrs" />
	</div>
</template>

<script setup>
import {Spin} from '@kousum/semi-ui-vue'
import {useAttrs} from 'vue'

const attrs = useAttrs()
</script>

<style scoped>
.sv-loading {
  /* position: fixed;
  z-index: 1040;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
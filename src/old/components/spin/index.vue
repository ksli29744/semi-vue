<!-- 
  用法示例：
  <s-spin size="small" /> 
-->
<template>
  <div :class="`semi-spin semi-spin-${size}`">
    <icon />
  </div>
</template>

<script setup>
import Icon from './icon.vue'

let props = defineProps({
  size: {
    type: String,
    default: 'middle',
  }
})
</script>

<style scoped>
.semi-spin {
  display: inline-flex;
  color: var(--semi-color-primary);
}

@keyframes semi-animation-rotate {
  0% {
    transform: rotate(0)
  }

  to {
    transform: rotate(1turn)
  }
}

.semi-spin > svg {
  animation: semi-animation-rotate .6s linear infinite;
  animation-fill-mode: forwards;
}

.semi-spin-small svg {
  width: .14rem;
  height: .14rem;
}

.semi-spin-middle svg {
  width: .2rem;
  height: .2rem;
}

.semi-spin-large svg {
  width: .32rem;
  height: .32rem;
}
</style>
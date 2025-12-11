<template>
  <svg
    v-bind="svgAttrs"
    :class="className"
    width="48"
    height="48"
    viewBox="0 0 36 36"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    data-icon="spin">
    <defs>
      <linearGradient
        x1="0%"
        y1="100%"
        x2="100%"
        y2="100%"
        :id="gradientId">
        <stop stop-color="currentColor" stop-opacity="0" offset="0%" />
        <stop stop-color="currentColor" stop-opacity="0.50" offset="39.9430698%" />
        <stop stop-color="currentColor" offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect fill-opacity="0.01" fill="none" x="0" y="0" width="36" height="36" />
      <path
        d="M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951"
        :stroke="`url(#${gradientId})`"
        stroke-width="4"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import {isNullOrUndefined} from '../../utils/index.js'

let _id = -1

//定义 props
const props = defineProps({
    id: {
      type: Number,
      default: undefined
    },
    component: {
      type: [Object, String],
      default: null
    },
    size: {
      type: Number,
      default: undefined
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    customIconCls: {
      type: String,
      default: ''
    }
  }),
  //SVG 的其他属性（排除已单独处理的 props）
  svgAttrs = computed(() => {
    const {id, component, size, className, customIconCls, type, ...rest} = props
    return rest
  }),
  //生成唯一的渐变 ID
  gradientId = computed(() => {
    let currentId = props.id
    
    if (isNullOrUndefined(currentId)) {
      _id++
      currentId = _id
    }
    
    return `linearGradient-${currentId}`
  })
</script>
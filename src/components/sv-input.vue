<script lang="jsx">
import {defineComponent, h} from 'vue'
import {Input} from '@kousum/semi-ui-vue'

export default defineComponent({
  name: 'SvInput',
  props: ['modelValue'],
  emits: ['update:modelValue', 'change'],
  setup(props, {emit}) {
    function handleChange(value) {
      emit('update:modelValue', value)
      emit('change', value)
    }

    return () => <Input value={props.modelValue} onChange={handleChange} />
  }
})
</script>
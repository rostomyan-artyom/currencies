<template>
  <form>
    <ul class="flex flex-col gap-5 md:gap-8">
      <VFormItem
        v-for="formItem in formData"
        :key="formItem.id"
        :label="formItem.label"
      >
        <VInput v-bind="formItem.options" @input="$emit('changeValue', [$event, formItem.prop])" />
      </VFormItem>
    </ul>
  </form>
</template>

<script>
import VFormItem from '@/components/common/forms/VForm/VFormItem';
import VInput from '@/components/common/ui/VInput';

export default {
  name: 'VForm',
  components: {
    VInput,
    VFormItem,
  },

  props: {
    propForm: {
      type: Object,
      default: () => ({}),
    },
    formData: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>

</style>

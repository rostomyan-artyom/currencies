<template>
  <div class="v-input">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder"
      class="
        px-[20px]
        border-[#DFDFDF]
        border
        w-full
        rounded-[5px]
        text-12
        h-[46px]
        placeholder-gray-300
        2xl:text-14
      "
    >
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit('input', value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <li>
    <p
      v-if="label"
      class="
        mb-[12px]
        text-dark
        text-14
        leading-4
        font-medium
        2xl:text-16
      "
    >
      {{ label }}
    </p>

    <slot />
  </li>
</template>

<script>
export default {
  name: 'VFormItem',

  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

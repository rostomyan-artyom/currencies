<template>
  <div
    :class="[
      'inline-flex',
      'justify-center',
      'items-center',
      'rounded-tr-bl',
      'border-4',
      'inline-block',
      `border-${borderColor}`,
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'IconWrapper',

  props: {
    borderColor: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style lang="scss" scoped>
// динамически подгружаемый стиль не "прилепал", принял решение вписать локально
.border-bizRed {
  border-color: #E02025;
}

.border-primary {
  border-color: #0F4471;
}
</style>

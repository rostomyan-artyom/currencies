<template>
  <div>
    <h1 class="font-bold text-primary text-20 leading-[28px] container md:font-medium xl:text-26 2xl:text-34">
      <slot name="title" />
    </h1>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageWrapper'
}
</script>

<style lang="scss" scoped>

</style>

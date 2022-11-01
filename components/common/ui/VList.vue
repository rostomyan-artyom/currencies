<template>
  <ul class="flex flex-col gap-5 md:gap-[22px]">
    <li
      v-for="(listItem, index) in list"
      :key="index"
      class="
        list__item
        text-text-main
        text-14
        leading-[115%]
        pl-[15px]
        md:text-13
        xl:text-14
        2xl:text-18
        2xl:pl-[20px]
      "
    >
      {{ listItem[prop] }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VList',

  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
    prop: {
      type: String,
      default: 'title',
    },
  },
}
</script>

<style lang="scss" scoped>
.list__item {
  position: relative;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 7.66px;
    min-width: 7.66px;
    height: 7.65px;
    border: 2px solid #E02025;
    border-radius: 50%;
  }
}
</style>

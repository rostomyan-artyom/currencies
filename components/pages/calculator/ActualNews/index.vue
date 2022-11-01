<template>
  <div
    class="
      bg-secondary
      rounded-16
      border
      border-[#DFE1F0]
      pt-7
      pb-5
      px-[15px]
      md:pt-5
      md:pb-4
      xl:px-[25px]
      2xl:px-[30px]
    "
  >
    <p class="text-13 text-primary font-medium leading-[135%] uppercase xl:text-15 2xl:text-18">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
    </p>

    <div class="mt-[30px] md:flex md:mt-[25px] 2xl:justify-between">
      <VList :list="list"/>

      <div class="mt-[30px] md:mt-0 md:ml-5 xl:ml-[30px]">
        <ul
          class="
            flex
            gap-2
            justify-between
            md:flex-col
            md:gap-[5px]
            xl:grid
            xl:grid-cols-2
            xl:grid-rows-2
            xl:gap-[10px]
            xl:min-w-[242px]
            2xl:gap-[15px]
            2xl:min-w-[307px]
          "
        >
          <li
            v-for="(imageItem, index) in images"
            :key="imageItem.id"
            :class="[
              'h-[46px]',
              'w-[100%]',
              'overflow-hidden',
              index % 2 === 0 ? 'rounded-tr-bl' : 'rounded-tl-br',
              'md:h-[58px]',
              'xl:w-[116px]',
              'xl:h-[116px]',
              'xl:rounded-none',
              index === 1 ? 'xl:rounded-tr-[50px]' : '',
              index === 2 ? 'xl:rounded-bl-[50px]' : '',
              '2xl:w-[146px]',
              '2xl:h-[146px]',
            ]"
          >
            <img
              :src="imageItem.url"
              alt="#"
              class="h-[100%] w-[100%] object-cover"
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VList from '@/components/common/ui/VList';

export default {
  name: 'ActualNews',
  components: {
    VList,
  },

  data: () => ({
    list: [
      {
        id: 0,
        title: 'Incididunt ut labore et dolore magna aliqua',
      },
      {
        id: 1,
        title: 'Incididunt ut labore et',
      },
      {
        id: 2,
        title: 'Incididunt ut labore et dolore',
      },
      {
        id: 3,
        title: 'Labore et dolore',
      },
      {
        id: 4,
        title: 'Incididunt ut',
      },
      {
        id: 5,
        title: 'Incididunt ut labore et dolore',
      },
      {
        id: 6,
        title: 'Incididunt ut labore',
      },
    ],
    images: [
      {
        id: 0,
        url: require('@/assets/images/img-1.jpg'),
      },
      {
        id: 1,
        url: require('@/assets/images/img-2.jpg'),
      },
      {
        id: 2,
        url: require('@/assets/images/img-3.jpg'),
      },
      {
        id: 3,
        url: require('@/assets/images/img-4.png'),
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>

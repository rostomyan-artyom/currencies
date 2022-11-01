<template>
  <header
    class="
      bg-[#F8F8F8]
      pl-[13px]
      h-[50px]
      flex
      items-center
    "
  >
    <div class="container">
      <nav>
        <ul class="flex gap-[29.78px]">
          <li
            v-for="navigationItem in navigation"
            :key="navigationItem.key"
          >
            <nuxt-link
              v-if="navigationItem.to"
              :to="navigationItem.to"
              class="the-header__link text-[#666] text-12 leading-[14px] font-medium"
            >
              {{ navigationItem.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',

  data: () => ({
    navigation: [
      {
        id: 0,
        to: '/',
        title: 'Калькулятор',
      },
      {
        id: 1,
        to: '/currencies',
        title: 'Курс рубля',
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
::v-deep .the-header__link.nuxt-link-exact-active {
  color: #343434;
}
</style>

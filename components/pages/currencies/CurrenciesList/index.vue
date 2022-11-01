<template>
  <ul class="flex flex-wrap gap-[20px] md:grid md:grid-cols-2 xl:grid-cols-3 2xl:gap-[30px]">
    <CurrencyItem
      v-for="(currencyItem, index) in currenciesList"
      :key="currencyItem.CharCode"
      :currencyData="currencyItem"
      :theme="index % 2 === 0 ? 'primary' : 'bizRed'"
      class="w-[100%] md:w-auto"
    />
  </ul>
</template>

<script>
import CurrencyItem from '@/components/pages/currencies/CurrenciesList/CurrencyItem';

export default {
  name: 'CurrenciesList',
  components: {
    CurrencyItem,
  },

  props: {
    currenciesList: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>

</style>

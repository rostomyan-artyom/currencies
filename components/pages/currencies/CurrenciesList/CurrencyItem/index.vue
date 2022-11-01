<template>
  <li
    class="
      bg-gray
      pt-[25px]
      pb-[40px]
      px-[25px]
      rounded-16
      ease-in
      duration-150
      hover:shadow-biz
      2xl:pt-[34px]
      2xl:pb-[44px]
      2xl:px-[30px]
    "
  >
    <IconWrapper
      :borderColor="theme"
      class="w-[50px] h-[50px] md:w-[52px] md:h-[52px] xl:w-[55px] xl:h-[55px] 2xl:w-[70px] 2xl:h-[70px]"
    >
      <MoneyIcon :class="['currency-item__icon', `currency-item__icon_${ theme }`]" />
    </IconWrapper>

    <div class="mt-[22px]">
      <p
        class="
          font-bold
          text-primary
          mb-[22px]
          leading-[100%]
          text-17
          md:text-18
          xl:text-20
          xl:mb-[30px]
        "
      >
        {{ currencyData.CharCode }}
      </p>

      <p
        class="
          leading-[140%]
          text-text-gray-950
          text-14
          xl:text-15
          xl:max-w-[300px]
          2xl:text-16
          2xl:max-w-[350px]
        "
      >
        {{ currencyData.Name }}
      </p>

      <VList
        v-if="currencyData.info.length"
        :list="currencyData.info"
        class="mt-[28px] currency-item__list"
      />
    </div>
  </li>
</template>

<script>
import IconWrapper from '@/components/common/ui/IconWrapper';
import VList from '@/components/common/ui/VList';
import MoneyIcon from '@/assets/icons/money.svg';

export default {
  name: 'CurrencyItem',
  components: {
    IconWrapper,
    VList,
    MoneyIcon,
  },

  props: {
    theme: {
      type: String,
      default: 'primary',
    },
    currencyData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .currency-item__icon {
  &_bizRed {
    path {
      fill: #E02025;
    }
  }
}

::v-deep .currency-item__list {
  li {
    font-weight: 500 !important;

    @media (min-width: 1600px) {
      font-size: 16px !important;
    }
  }
}
</style>

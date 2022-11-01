<template>
  <PageWrapper>
    <template v-slot:title>
      Валютный калькулятор
    </template>

      <div class="container mt-[24px] md:flex md:items-start xl:mt-[30px] 2xl:mt-[40px]">
        <CalculatorForm class="md:w-[100%]" />

        <ActualNews class="mt-[17px] md:ml-7 md:mt-0 xl:ml-10 xl:min-w-[570px] 2xl:min-w-[705px]" />
      </div>

    <div class="mt-[21.5px] md:container xl:mt-[25px] 2xl:mt-[40px]">
      <TheSupport class="md:rounded-[10px]" />
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from '@/components/layout/PageWrapper';
import CalculatorForm from '@/components/pages/calculator/CalculatorForm';
import ActualNews from '@/components/pages/calculator/ActualNews';
import TheSupport from '@/components/pages/calculator/TheSupport';

export default {
  name: 'IndexPage',
  components: {
    PageWrapper,
    CalculatorForm,
    ActualNews,
    TheSupport,
  },

  async fetch({ store: { state, dispatch } }) {
    const currencies = state['currencies']['currencies'];

    if (!Object.keys(currencies).length) await dispatch('currencies/fetchCurrencies')
  },
}
</script>

<style lang="scss" scoped>
</style>

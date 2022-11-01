<template>
  <div >
    <PageWrapper>
      <template v-slot:title>
        Курс рубля
      </template>

      <div class="container mt-[20px]">
        <CurrenciesList v-if="filteredCurrencies" :currenciesList="filteredCurrencies" />

        <TheInfo class="mt-[16px]" />
      </div>
    </PageWrapper>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PageWrapper from '@/components/layout/PageWrapper';
import CurrenciesList from '@/components/pages/currencies/CurrenciesList';
import TheInfo from '@/components/pages/currencies/TheInfo';

export default {
  name: 'CurrencyPage',
  components: {
    PageWrapper,
    CurrenciesList,
    TheInfo,
  },

  computed: {
    ...mapState('currencies', [
      'currencies',
    ]),

    filteredCurrencies() {
      if (!Object.keys(this.currencies).length) return;

      return  Object.values(this.currencies).reduce((acc, item) => {
        acc.push({
          CharCode: item.CharCode,
          Name: item.Name,
          info: [
            {
              title: 'Номинал ' + item.Nominal,
            },
            {
              title: 'Курс ' + item.Value,
            },
          ],
        })

        return acc;
      }, [])
    }
  },


  async fetch({ store: { state, dispatch } }) {
    const currencies = state['currencies']['currencies'];

    if (!Object.keys(currencies).length) await dispatch('currencies/fetchCurrencies')
  },
}
</script>

<style lang="scss" scoped>

</style>

export const state = () => ({
  currencies: {},
})

export const mutations = {
  SET_CURRENCIES(state, currencies) {
    state.currencies = currencies;
  },
}

export const actions = {
  async fetchCurrencies({ commit }) {
    const response = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js');

    if (response.Valute) commit('SET_CURRENCIES', response.Valute);

    return response;
  }
}

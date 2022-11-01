<template>
  <div>
    <VForm
      :propForm="form"
      :formData="formData"
      @changeValue="changeValue"
    />

    <div
      class="
        flex
        items-center
        bg-secondary
        mt-5
        px-6
        py-5
        rounded-16
        md:py-10
        2xl:mt-[31px]
      "
    >
      <IconWrapper
        borderColor="bizRed"
        class="
          w-[42px]
          min-w-[42px]
          h-[42px]
          md:w-[40px]
          md:min-w-[40px]
          md:w-[40px]
          xl:w-[45px]
          xl:min-w-[45px]
          xl:h-[45px]
          2xl:w-[50px]
          2xl:min-w-[50px]
          2xl:h-[50px]
        "
      >
        <InfoIcon />
      </IconWrapper>

      <p class="text-primary font-bold leading-[140%] text-14 md:text-16 xl:text-20 2xl:text-24  ml-4 xl:ml-7">
        Итого: {{ result }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VForm from '@/components/common/forms/VForm';
import IconWrapper from '@/components/common/ui/IconWrapper';
import InfoIcon from '@/assets/icons/info.svg';

export default {
  name: 'CalculatorForm',
  components: {
    VForm,
    IconWrapper,
    InfoIcon,
  },

  data: () => ({
    form: {
      currencyOne: '',
      currencyTwo: '',
      quantity: '',
    },
    formData: [
      {
        id: 0,
        label: 'Валюта 1',
        prop: 'currencyOne',
        options: {
          placeholder: 'Введите название или код',
        },
      },
      {
        id: 1,
        label: 'Валюта 2',
        prop: 'currencyTwo',
        options: {
          placeholder: 'Введите название или код',
        },
      },
      {
        id: 2,
        label: 'Количество',
        prop: 'quantity',
        options: {
          placeholder: 'Введите число',
        },
      },
    ],
  }),
  computed: {
    ...mapState('currencies', [
      'currencies',
    ]),

    result() {
      const currencyOne = this.form.currencyOne;
      const currencyTwo = this.form.currencyTwo;
      const quantity = this.form.quantity

      if (
        !currencyOne ||
        !currencyTwo ||
        !quantity
      ) return '...';

      const currencyOneValue = this.currencyValue(currencyOne);
      const currencyTwoValue = this.currencyValue(currencyTwo);

      if (!currencyOneValue || !currencyTwoValue)
        return 'валюта 1 или валюта 2 введены неверно';

      if (quantity < 0) return 'Количество не может быть отрицательным'

      const value = currencyOneValue * quantity / currencyTwoValue
      return isNaN(value) ? 'Проверьте корректность введенных данных' : value;
    },
  },

  methods: {
    changeValue([value, key]) {
      this.form[key] = value;
    },
    currencyValue(text) {
      for (let value of Object.values(this.currencies)) {
        if (value.CharCode.toLowerCase() === text.toLowerCase()) return value.Value / value.Nominal;
        if (value.Name.toLowerCase() === text.toLowerCase()) return value.Value / value.Nominal;
      }

      return false;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

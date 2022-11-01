<template>
  <div class="bg-gray rounded-16 py-[32px] px-[28px] md:flex md:items-center">
    <IconWrapper class="w-[42px] h-[42px] md:w-[40px] md:h-[40px] xl:w-[45px] xl:h-[45px]">
      <InfoIcon class="the-info__icon" />
    </IconWrapper>

    <div
      class="
        text-16
        text-primary
        font-bold
        max-w-[230px]
        mt-[30px]
        leading-[140%]
        md:max-w-none
        md:ml-[25px]
        md:mt-0
        md:text-18
        md:leading-[100%]
        xl:text-20
        xl:ml-[20px]
      "
    >
      Телефон:
      <a href="tel:+7-800-888-90-28">
        8 (800) 888-90-28
      </a>, email: <a href="mailto:info@example.ru">
        info@example.ru
      </a>.
    </div>
  </div>
</template>

<script>
import IconWrapper from '@/components/common/ui/IconWrapper';
import InfoIcon from '@/assets/icons/info.svg';

export default {
  name: 'TheInfo',
  components: {
    IconWrapper,
    InfoIcon,
  },
}
</script>

<style lang="scss" scoped>
::v-deep .the-info__icon {
  path {
    fill: #0F4471;
  }
}
</style>

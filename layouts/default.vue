<template>
  <div>
    <TheHeader />

    <div class="py-5 xl:py-9">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },
}
</script>

<style lang="css">
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

html {
  font-size: 12px;
}

body {
  @apply font-roboto text-text-main;
  font-size: 1.4rem;
  overflow-x: hidden;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
</style>

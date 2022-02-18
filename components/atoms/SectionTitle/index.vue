<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <h2 class="section__title text-4xl relative font-bold ml-3.5 text-purple-600 font-rubik">{{ title }}</h2>
</template>

<style lang="scss">
.section__title::before {
  @apply block absolute -top-3.5 -left-3.5;
  background-image: url('/images/dots-bg.svg');
  content: '';
  width: 37px;
  height: 37px;
}
</style>

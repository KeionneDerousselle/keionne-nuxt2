<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SectionTitle from '@/components/atoms/SectionTitle/index.vue'

export default defineComponent({
  components: {
    SectionTitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <section>
    <SectionTitle :title="title" class="mb-16" />
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Section from '@/components/molecules/Section/index.vue'

export default defineComponent({
  name: 'AboutMe',

  components: {
    Section,
  },
})
</script>

<template>
  <Section title="About Me"> Some text about me. </Section>
</template>

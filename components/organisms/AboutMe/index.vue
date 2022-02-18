<template>
  <SectionTitle title="About Me"></SectionTitle>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import SectionTitle from '@/components/atoms/SectionTitle/index.vue'

export default defineComponent({
  name: 'AboutMe',

  components: {
    SectionTitle,
  },
})
</script>

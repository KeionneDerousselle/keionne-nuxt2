<template>
  <AboutMe class="pt-28" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AboutMe from '@/components/organisms/AboutMe/index.vue'

export default defineComponent({
  name: 'HomePage',

  components: {
    AboutMe,
  },
})
</script>

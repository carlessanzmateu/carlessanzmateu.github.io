<template>
  <div class="home">
    <Cover/>
    <QuoteSeparator
      :quote="quote"/>
    <Bio/>
    <SocialMediaSeparator
      :quote="quote"/>
  </div>
</template>

<script>
import Cover from '@/views/home/components/Cover.component.vue'
import QuoteSeparator from '@/components/QuoteSeparator.component.vue'
import SocialMediaSeparator from '@/components/SocialMediaSeparator.component.vue'
import Bio from '@/views/home/components/Bio.component.vue'

export default {
  name: 'Home',
  components: {
    Cover,
    QuoteSeparator,
    Bio,
    SocialMediaSeparator
  },
  data: () => ({
    quote: 'Normalmente escribo para ordenadores, pero en mis ratos libres adoro escribir para soñadores'
  })
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>

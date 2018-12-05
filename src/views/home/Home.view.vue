<template>
  <div class="home">
    <Cover/>
    <QuoteSeparator
      :quote="quote"/>
    <Bio/>
    <Resume/>
    <Footer></Footer>
  </div>
</template>

<script>
import Cover from '@/views/home/components/Cover.component.vue'
import QuoteSeparator from '@/components/QuoteSeparator.component.vue'
import Bio from '@/views/home/components/Bio.component.vue'
import Resume from '@/views/home/components/Resume.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Cover,
    QuoteSeparator,
    Bio,
    Resume,
    Footer
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

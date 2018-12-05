<template>
  <div class="developer">
    <Cover/>
    <Experience/>
    <Footer></Footer>
  </div>
</template>

<script>
import Cover from '@/views/developer/components/Cover.component.vue'
import Experience from '@/views/developer/components/Experience.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Cover,
    Experience,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.developer {
  height: 100vh;
}
</style>

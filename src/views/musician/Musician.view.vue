<template>
  <div class="musician">
    <Cover/>
    <Footer/>
  </div>
</template>

<script>
import Cover from '@/views/musician/components/Cover.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Musician',
  components: {
    Cover,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.musician {
  height: 100vh;
}
</style>

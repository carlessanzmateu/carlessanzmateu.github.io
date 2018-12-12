<template>
  <div class="writter">
    <Cover/>
    <Footer/>
  </div>
</template>

<script>
import Cover from '@/views/writter/components/Cover.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Writter',
  components: {
    Cover,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.writter {
  height: 100vh;
}
</style>

<template>
  <div class="developer">
    <Cover/>
    <Presentation/>
    <Experience/>
    <Skills/>
    <Footer></Footer>
  </div>
</template>

<script>
import Cover from '@/views/developer/components/Cover.component.vue'
import Presentation from '@/views/developer/components/Presentation.component.vue'
import Experience from '@/views/developer/components/Experience.component.vue'
import Skills from '@/views/developer/components/Skills.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Cover,
    Presentation,
    Experience,
    Footer,
    Skills
  }
}
</script>

<style lang="scss" scoped>
.developer {
  height: 100vh;
}
</style>

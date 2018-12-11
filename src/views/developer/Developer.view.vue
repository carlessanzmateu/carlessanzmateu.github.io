<template>
  <div class="developer">
    <Cover/>
    <GoHome/>
    <Presentation/>
    <Experience/>
    <Skills/>
    <GoHome/>
    <Footer></Footer>
  </div>
</template>

<script>
import Cover from '@/views/developer/components/Cover.component.vue'
import Presentation from '@/views/developer/components/Presentation.component.vue'
import Experience from '@/views/developer/components/Experience.component.vue'
import Skills from '@/views/developer/components/Skills.component.vue'

import GoHome from '@/components/GoHome.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Cover,
    Presentation,
    Experience,
    Footer,
    Skills,
    GoHome
  }
}
</script>

<style lang="scss" scoped>
.developer {
  height: 100vh;
}

.go-home {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>

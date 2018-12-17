<template>
  <div class="musician">
    <Cover/>
    <GoHome/>
    <Presentation/>
    <Recommendations/>
    <GoHome/>
    <Footer/>
  </div>
</template>

<script>
import Cover from '@/views/musician/components/Cover.component.vue'
import Presentation from '@/views/musician/components/Presentation.component.vue'
import Recommendations from '@/views/musician/components/Recommendations.component.vue'

import GoHome from '@/components/GoHome.component.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Musician',
  components: {
    Cover,
    Presentation,
    Recommendations,
    GoHome,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.musician {
  height: 100vh;
}

.go-home {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>

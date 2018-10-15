<template>
  <div class="home">
    <Cover/>
  </div>
</template>

<script>
import Cover from '@/views/home/components/Cover.component.vue'

export default {
  name: 'Home',
  components: {
    Cover
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>

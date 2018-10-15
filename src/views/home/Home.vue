<template>
  <div class="home">
    <Cover msg="Welcome to Your Vue.js App"/>
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

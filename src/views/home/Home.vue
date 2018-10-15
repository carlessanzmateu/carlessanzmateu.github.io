<template>
  <div class="home">
    <Cover msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from '@/views/home/components/Cover.component.vue'

export default {
  name: "home",
  components: {
    Cover
  }
};
</script>

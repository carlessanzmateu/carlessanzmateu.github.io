<template>
  <section class="cover">
    <h1>{{ msg }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.cover {
  height: 100vh;
  width: 100vw;
  background-color: red;
}
</style>

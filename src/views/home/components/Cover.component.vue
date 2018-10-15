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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  background-image: url('../../../assets/cover.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 3rem;
  text-align: right;
}
</style>

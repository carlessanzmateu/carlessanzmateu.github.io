<template>
  <section class="cover">
    <h1>Hi! I'm working as a charm hello world!</h1>
  </section>
</template>

<script>
export default {
  name: "Cover",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cover {
  height: 100vh;
  width: 100vw;
  background-color: red;
}
</style>

<template>
  <section
    class="go-home"
    @click="goHome()">
    <span class="go-home-button">Volver a Inicio</span>
  </section>
</template>

<script>
export default {
  name: 'GoHome',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.go-home {
  cursor: pointer;
}

.go-home-button {
  display: inline-block;
  padding: 7px 25% 7px 7px;
  border-radius: 2px;
  color: var(--main-palette-base-contrast);
  background-color: var(--main-palette-primary-complementary);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--main-palette-primary-complementary);
    border-right: 5px solid var(--main-palette-primary-complementary);
    background-color: transparent;
  }
}
</style>

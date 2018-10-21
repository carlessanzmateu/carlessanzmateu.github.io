<template>
  <footer class="footer">
    <a class="link-icon" href="https://medium.com/@csanzmateu/" target="_blank">
      <i class="fab fa-medium-m"></i>
    </a>
    <a class="link-icon" href="https://www.instagram.com/playmaker1509/" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
    <a class="link-icon" href="https://twitter.com/carlessanzmateu" target="_blank">
      <i class="fab fa-twitter"></i>
    </a>
    <a class="link-icon" href="https://github.com/carlessanzmateu" target="_blank">
      <i class="fab fa-github"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  height: 130px;
  width: 100%;
  background-color: var(--main-palette-base-contrast);
  align-items: center;
  justify-content: space-around;
  outline: 8px var(--main-palette-primary-complementary) solid;
}

.fab {
  color: var(--main-palette-base);
  font-size: 4rem !important;
  &:hover {
    color: var(--main-palette-primary);
  }
}

.link-icon:active {
  color: var(--main-palette-base);
}
</style>


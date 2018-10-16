<template>
  <section class="bio">
    <div class="image-container">
      <div class="image-wrapper"/>
    </div>
    <div class="text-container">
      <p class="text">Entusiasta de la tecnología, programador, friki y en mis ratos libres músico y escritor. Fanático de los mundos de fantasía y de toda la magia que los envuelve. Admito que en ocasiones también me gusta perderme por el espacio o dejarme embargar por el miedo en alguna vieja mansión.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bio'
}
</script>

<style scoped lang="scss">
.bio {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  width: 80%;
  height: 80%;
  background-image: url('../../../assets/carles.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-container {
  display: flex;
  justify-content: center;
  text-align: left;
}

.text {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .bio {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
}
}

// @media (max-width: 320px) {
// }
</style>

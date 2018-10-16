<template>
  <section class="bio">
    <div class="image-container">
      <div class="image-wrapper"/>
    </div>
    <div class="text-container">
      <!-- <p>Entusiasta de la tecnología, programador, friki y en mis ratos libres músico y escritor. Fanático de los mundos de fantasía y de toda la magia que los envuelve. Admito que en ocasiones también me gusta perderme por el espacio o dejarme embargar por el miedo en alguna vieja mansión.</p> -->
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
  display: flex;
  height: 100%;
  width: 100%;
}

.image-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
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
  flex-grow: 1;
  display: flex;
  background-color: purple;
}

// @media (max-width: 768px) {
// }

// @media (max-width: 320px) {
// }
</style>

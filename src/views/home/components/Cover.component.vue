<template>
  <section class="cover">
    <!-- <h2 class="lights-out">/</h2>
    <h2 v-if="lightsOutAnimation" class="lights-out text1">Oh my god! Run you fools!</h2> -->
    <h1 class="title">Carles Sanz Mateu</h1>
    <h3 class="subtitle">Escritor, músico y programador</h3>
  </section>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style scoped lang="scss">
.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background-image: url('../../../assets/home-cover.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title,
.subtitle {
  margin-right: 5%;
}

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 1.5rem;
}

.lights-out.text1 {
  transform: rotate(-37deg) translateX(-90%) translateY(-806%) scale(2);
}

@media (max-width: 768px) {
  .title,
  .subtitle {
    margin-right: 2%;
  }
  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }
}

@media (max-width: 320px) {
  .title,
  .subtitle {
    margin-right: 1%;
  }
  .title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>

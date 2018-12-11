<template>
  <section class="cover">
    <h1 class="title">Programador</h1>
    <h3 class="subtitle">Full Stack developer</h3>
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
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background-image: url('../../../assets/developer-cover.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 8px solid var(--main-palette-primary);
}

.title,
.subtitle {
  margin-left: 5%;
  color: var(--main-palette-primary);
}

.title {
  font-size: 4rem;
  padding: 0 9px;
  background-color: rgba(235, 145, 255, 0.5);
}

.subtitle {
  font-size: 1.5rem;
  padding-left: 5px;
  padding-right: 174px;
  background-color: rgba(235, 145, 255, 0.9);
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

<template>
  <section class="resume">
    <div class="title">
      <h3 class="top-text">Mis proyectos</h3>
      <h5 class="bottom-text">Conoce lo que hago</h5>
    </div>
    <ResumeCard
      text="Escritor"
      class="card"
      background-image="url('https://cdn-images-1.medium.com/max/1600/1*i8qafJIoxH3MYFB4xKqS1A.jpeg')"/>
      <ResumeCard
      text="Programador"
      class="card"
      background-image="url('https://cdn-images-1.medium.com/max/2000/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg')"/>
      <ResumeCard
      text="Músico"
      class="card"
      background-image="url('https://i.pinimg.com/originals/15/d3/0e/15d30e53e4430e21210baf2eec1f9edd.jpg')"/>
  </section>
</template>

<script>
import ResumeCard from '@/views/home/components/ResumeCard.component.vue'

export default {
  name: 'Resume',
  components: {
    ResumeCard
  }
}
</script>

<style scoped lang="scss">
.resume {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}

.title {
  width: 80%;
  text-align: right;
}

.top-text {
  color: var(--main-palette-primary);
  font-size: 1.5rem;
}

.bottom-text {
  font-size: 3.5rem;
  font-family: 'Raleway', sans-serif;
}

.card, .title {
  margin-bottom: 30px;
}
</style>

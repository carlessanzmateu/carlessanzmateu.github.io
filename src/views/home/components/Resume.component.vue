<template>
  <section class="resume">
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

.card {
  margin-bottom: 30px;
}
</style>

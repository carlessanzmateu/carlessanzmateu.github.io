<template>
  <section class="resume">
    <ResumeCard class="card"/>
    <ResumeCard class="card"/>
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
  background-color: orange;
}

.card {
  margin-bottom: 30px;
}
</style>

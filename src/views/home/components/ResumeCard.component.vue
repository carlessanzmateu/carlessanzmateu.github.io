<template>
  <section
    class="resume-card"
    :style="{'background-image': backgroundImage}">
    <h3 class="text">{{text}}</h3>
  </section>
</template>

<script>
export default {
  name: 'ResumeCard',
  props: {
    text: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.resume-card {
  height: 300px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-size: auto;
  }

  &:hover .text {
    background-color: purple;
    color: white;
  }
}

.text {
  margin: 0;
  font-size: 2rem;
  background-color: orange;
  padding: 0 10px;
  border-radius: 3px;
}
</style>

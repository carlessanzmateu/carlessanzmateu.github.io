<template>
  <section
    class="resume-card"
    @click="onClick">
    <div
      class="resume-card-image"
      :style="{'background-image': backgroundImage}">
        <h3 class="text">{{text}}</h3>
      </div>
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
  },
  methods: {
    onClick() {
      this.$emit('click')
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
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;

  &:hover .text {
    background-color: var(--main-palette-primary);
    color: var(--main-palette-base);
  }
}

.resume-card-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.text {
  margin: 0;
  font-size: 2rem;
  background-color: var(--main-palette-primary-complementary);
  padding: 0 10px;
  border-radius: 3px;
  transition: all .5s ease-in-out;
}
</style>

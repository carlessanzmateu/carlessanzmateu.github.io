<template>
  <section class="social-media-separator">
    <h3 class="quote">{{quote}}</h3>
    <i class="fa-medium-m"></i>
  </section>
</template>

<script>
export default {
  name: 'SocialMediaSeparator',
  props: {
    quote: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.social-media-separator {
  display: flex;
  align-items: center;
  min-height: 200px;
  width: 100%;
}

.quote {
  font-size: 2rem;
}
</style>

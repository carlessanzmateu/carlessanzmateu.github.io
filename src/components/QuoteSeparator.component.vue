<template>
  <section class="quote-separator">
    <h3 class="quote">{{quote}}</h3>
  </section>
</template>

<script>
export default {
  name: 'QuoteSeparator',
  props: {
    quote: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.quote-separator {
  display: flex;
  align-items: center;
  min-height: 200px;
  width: 100%;
  justify-content: center;
}

.quote {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .quote {
    font-size: 1.5rem;
  }
}

@media (max-width: 320px) {
  .quote {
    font-size: 1rem;
  }
}
</style>

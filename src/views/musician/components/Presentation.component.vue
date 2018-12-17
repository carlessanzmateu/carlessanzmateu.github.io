<template>
  <section class="presentation">
    <h3 class="quote">"Study Bach: there you will find everything".</h3>
    <p class="sign">—Johannes Brahms</p>
    <p class="text initial">Tal vez definiría a la música, cómo el arte más completo que conozco. En una sola disciplina se mezclan
      la complejidad y la belleza de la física, las matemáticas, la escritura, la lectura y las emociones de cada uno, comprendidas
      de una forma única que solo conocemos nosotros mismos.
    </p>
    <p class="text">Y es que la música nos acompaña siempre de una forma u otra en nuestra vida. Imagina un momento especial en tu vida, seguro
      que había música de fondo, antes de que ocurriera o incluso después, cuando hacía días que había pasado, pero una canción aleatoria en tu
      play list lo trajo de vuelta.
    </p>
    <p class="text">Yo no concivo ya mi vida sin formar parte de la música y es por eso que me he embarcado en varios proyectos para formar parte de ella: Enamorado desde pequeñito
      del piano y alentado por mi abuela, a una edad más avanzada de lo deseado me uní a la banda de un pueblo en el que sin ser forastero, empezaba una nueva vida en él. Así es cómo
      me uní a una de las dos bandas de mi pueblo, me integré lo mejor que pude (o supe) con mi trombón nuevo y terminé por presentarme como vicepresidente. Allí, en la <strong>banda primitiva de benetússer</strong>,
      luchamos día a día siendo una entidad pequeñita por crecer y hacer realidad nuestros proyectos, llevando la música a donde nos piden y
      un poquito más allá.
    </p>
    <p class="text">Ahora, además toda esta locura de bandas, eventos, actos y acabar con los labios destrozados con mi viejo trombón, es el momento de mi autentico primer amor musical: el piano. No tengo mucho que contar
      sobre mis pinitos sobre las teclas, pero darme un par de años y nos ponemos al día de cómo me va.
    </p>
    <p class="text"><strong>P.d.:</strong> Si queréis, nos vemos en el próximo concierto, seguro que lo disfrutáis tanto como nosotros preparandolo.</p>
  </section>
</template>

<script>
export default {
  name: 'Presentation'
}
</script>

<style lang="scss" scoped>
.presentation {
  padding-bottom: 20px;
  text-align: justify;
  text-justify: inter-character;
}

.sign {
  width: 80%;
  margin-left: 10%;
  text-align: right;
}

.quote {
  width: 80%;
  margin-left: 10%;
  margin-top: 25px;
  font-size: 25px;
}

.text {
  width: 80%;
  margin-left: 10%;
  line-height: 1.5;

  &.initial:first-letter {
    margin-top: 15px;
    font-size: 35px;
  }
}
</style>

<template>
  <section class="presentation">
    <p class="text">Desde pequeño me he críado entre videoconsolas, ordenadores y un afán personal por entender la tecnología que me rodea.</p>
    <p class="text">Ya en el comienzo de mis estudios superiores, siempre he encontrado en la programación una vocación más satisfactoria
      que cualquiera de las otras "ciencias" que tenía que estudiar. Desde mis primeras líneas con ese primer <strong>"Hola Mundo"</strong> en un <strong>.exe</strong> con
      <strong>C++</strong> donde apenas entendía cómo funcionaba un bucle for por esos días, hasta hoy, capaz de construir sitios complejos para banca, redes sociales o diseñar una web
      cómo la que estas viendo ahora, han pasado varios años. Día a día, mi afán por mejorar, por ser capaz entender la última tecnología y
      aplicarla para conseguir el mejor resultado con la máxima calidad se ha convertido en la mejor fuente de energía para conseguir una motivación escepcional y no dejar de progresar cómo profesional
      y seguir apasionado de este mundo lleno de <strong>magia</strong> aún por descubrir.
    </p>
    <p class="text sign"><span class="lights-out">Dev Land Marauder</span><strike><span class="sign-name">Carles Sanz Mateu</span></strike></p>
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

.text {
  width: 80%;
  margin-left: 10%;
  line-height: 1.5;

  &:first-child::first-letter {
    font-size: 35px;
  }
}

.sign {
  text-align: right;

  .sign-name {
    color: var(--main-palette-base-contrast);
  }
}

.lights-out {
  display: inline-block;
  margin-right: 15px;
  transform: rotate(-15deg) translateX(230px) translateY(90px);
}

strike {
  color: var(--main-palette-fourth);
}

.lights-out,
strike {
  font-size: 20px;
}

strong {
  color: var(--main-palette-primary);
}

@media (max-width: 768px) {
  .lights-out {
    transform: rotate(15deg) translateX(120px);
  }
}
</style>

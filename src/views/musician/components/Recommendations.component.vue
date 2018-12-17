<template>
  <section class="recommendations">
    <div class="title">
      <h3 class="top-text">Recomendaciones</h3>
      <h5 class="bottom-text">Por si te apetece...</h5>
    </div>
    <div class="recommendations-list">
      <h3 class="recommendation-item">Conciertos y obras varias</h3>
      <p class="description">Nunca puedo resistirme a estas grandes obras, son largas, pero si las empiezo no puedo evitar quedarme hasta el final. A ver que te parecen:</p>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=T0BwuChMlt8" target="_blank">Novena simfonía - Beethoven</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=neDnpgZPPvY" target="_blank">Misa para difuntos en Re menor - Mozart</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=HSg3tBzAVFk" target="_blank">Epilogue - La La Land BSO</a>
        </li>
      </ul>

      <h3 class="recommendation-item">Para trombón</h3>
      <p class="description">Tuba mirum, un clásico de audiciones para trombón y czardas, una obra para violin tocada de una forma más que increíble en el trombón.</p>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=kwuAv8YbEQE" target="_blank">Misa para difuntos en Re menor, Tuba Mirum - Mozart</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=EaPmysTfVFI" target="_blank">Czardas, solo para trombón - Vittorio Monti</a>
        </li>
      </ul>
      <h3 class="recommendation-item">Para piano</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=H1Dvg2MxQn8" target="_blank">La campanella - Paganini / Liszt</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=7Blf8Y527DY" target="_blank">Etude nº6 - Paganini / Liszt</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=oAXXSFKfjLs" target="_blank">City of stars - La La Land BSO</a>
        </li>
      </ul>
      <h3 class="recommendation-item">Para oboe</h3>
      <p class="description">Realmente yo no toco este instrumento y en su momento no me era muy conocido, pero me han echo apreciarlo cómo si fuera mío propio y encontrar en él una belleza única:</p>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=elN81gwyBUg" target="_blank">Cimarosa, concierto para Oboe</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=z1MXVo13cWo" target="_blank">Concierto para oboe en La menor, RV 461 - Vivaldi</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=gpsHUUHZb9w" target="_blank">Danzón número 2 - Arturo Márquez</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=S1JLFgHnykE" target="_blank">Concierto para oboe "Legacy" - Oscar Navarro</a>
        </li>
      </ul>
      <h3 class="recommendation-item">Para cuerdas</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=nGdFHJXciAQ" target="_blank">Las cuatro estaciones, Invierno - Vivaldi</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=qZSJvyBag8A" target="_blank">Song from a secret garden - Secret garden</a>
        </li>
      </ul>
      <h3 class="recommendation-item">...más personal</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=krLYZmPRtnc" target="_blank">Leo P en las proms de BBC</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<style scoped lang="scss">
.recommendations {
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
  margin-top: 5%;
  margin-bottom: 50px;
}

.top-text {
  color: var(--main-palette-fourth);
  font-size: 1.5rem;
}

.bottom-text {
  font-size: 1.3rem;
  font-family: 'Raleway', sans-serif;
}

.recommendations-list {
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: justify;
  text-justify: inter-character;
}

.recommendation-item {
  font-family: 'Raleway', sans-serif;
  color: var(--main-palette-primary);
  margin-bottom: 5px;
}

.description {
  margin-bottom: 0;
}

li {
  list-style-type: lao;

  a {
    text-decoration: none;
    font-family: 'Kurale', serif;
    color: var(--main-palette-fourth);

    &:hover {
      color: var(--main-palette-primary);
    }
  }
}
</style>

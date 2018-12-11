<template>
  <section class="experience">
    <div class="title">
      <h3 class="top-text">Carrera laboral</h3>
      <h5 class="bottom-text">Empresas y responsabilidades</h5>
    </div>
    <div class="company-history">
      <div class="company">
        <h3 class="company-title">Sopra Steria <span class="date current">07/2017 - Actualidad</span></h3>
        <h6>Full stack developer</h6>
        <p>
          Desarrollador full stack en tecnologías cómo <strong>AngujarJS, Angular 2+ o VueJs</strong>.
        </p>
        <p>Los proyectos en los que participo son de diferente dificultad y envergadura. Algunos de los clientes para los que he trabajado son: <strong>Bankia, BBVA, Santander y Bankinter</strong>.</p>
      </div>
      <div class="company">
        <h3 class="company-title">Finametrix <span class="date">09/2015 - 07/2015</span></h3>
        <h6>Full stack developer / Analista soporte informático / Sysadmin</h6>
        <p>
          Responsable del departamento de Soporte en Finametrix y desarrollo de aplicaciones Fintech para clientes cómo: <strong>azValor, Magallanes, Capital Radio y Deutsche Bank</strong>.
        </p>
        <p>
          Encargado de dirigir y coordinar un equipo de cuatro personas multidisciplinares para crear soluciones a medida a nivel frontend con AngularJS o administración de los servidores que alojaban las aplicaciones CMS. Además, también resolvíamos las incidencias en tiempo real que pudieran provocar errores o privaciones de servicio en los productos desarrollados. Tanto a nivel frontend cómo backend. También era el encargado de realizar los despliegues en los servidores de las aplicaciones.
        </p>
      </div>
      <div class="company">
        <h3 class="company-title">BeLike Software <span class="date">02/2015 - 06/2015</span></h3>
        <h6>Frontend developer (becario)</h6>
        <p>Periodo de prácticas al finalizar el grado superior en desarrollo de aplicaciones web. Desarrollo de soluciones frontend con <strong>AngularJS, Angular Materials y SCSS</strong></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience'
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

.company-history {
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  text-align: justify;
  text-justify: inter-character;
}

.company {
  margin-bottom: 30px;

  .company-title {
    padding-bottom: 8px;
    font-family: 'Raleway', sans-serif;
  }

  strong {
    color: var(--main-palette-fourth);
  }
}

.date {
  color: var(--main-palette-primary);

  &.current {
    color: var(--main-palette-fourth);
  }
}
</style>

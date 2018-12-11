<template>
  <section class="skills">
    <div class="title">
      <h3 class="top-text">Habilidades</h3>
      <h5 class="bottom-text">Tecnologías que conozco</h5>
    </div>
    <div class="skills-history">
    <div class="skill-container">
      <h2 class="skill-type-header">Front End</h2>
      <Skill
        v-for="skill in frontEndSkills"
        :image-name="skill.imageName"
        :level="skill.level"
        :clarification="skill.clarification"/>
    </div>
    <div class="skill-container">
      <h2 class="skill-type-header">Back End</h2>
      <Skill
        v-for="skill in backEndSkills"
        :image-name="skill.imageName"
        :level="skill.level"
        :clarification="skill.clarification"/>
    </div>
    <div class="skill-container">
      <h2 class="skill-type-header">Databases</h2>
      <Skill
        v-for="skill in databasesSkills"
        :image-name="skill.imageName"
        :level="skill.level"
        :clarification="skill.clarification"/>
    </div>
    <div class="skill-container">
      <h2 class="skill-type-header">Design</h2>
      <Skill
        v-for="skill in designSkills"
        :image-name="skill.imageName"
        :level="skill.level"
        :clarification="skill.clarification"/>
    </div>
    </div>
  </section>
</template>

<script>
import Skill from '@/views/developer/components/Skill.component.vue'
import { FRONT_END, BACK_END, DATABASES, DESIGN } from '@/const/skills.developer'

export default {
  name: 'Skills',
  components: {
    Skill
  },
  data: () => ({
    frontEndSkills: FRONT_END,
    backEndSkills: BACK_END,
    databasesSkills: DATABASES,
    designSkills: DESIGN
  })
}
</script>

<style scoped lang="scss">
.skills {
  margin-bottom: 130px;
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

.skills-history {
  height: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-gap: 10%;
  margin-left: 10%;
}

.skill-type-header {
  margin-bottom: 25px;
  &:not(:first-child) {
    margin-top: 35px;
  }
}

.skill {
  margin-bottom: 30px;
}

@media (max-width: 425px){
  .skills {
    margin-bottom: 0;
  }

  .skills-history {
    display: flex;
    flex-direction: column;
  }
}

</style>

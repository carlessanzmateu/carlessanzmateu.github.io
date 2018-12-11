<template>
  <section class="skill">
    <div class="top-info">
      <img class="skill-logo" v-bind:src="fullImagePath()"/>
      <div class="level">
        <div :class="levelClass"><span class="level-text">{{ levelText }}</span></div>
      </div>
    </div>
    <div class="bottom-info" v-if="clarification">
      <p class="clarification">*{{ clarification }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    imageName: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    clarification: {
      type: String,
      required: false
    }
  },
  computed: {
    levelClass () {
      return {
        'level-bar': true,
        'basic': this.level === 0,
        'medium': this.level === 1,
        'expert': this.level === 2
      }
    },
    levelText () {
      return this.levels[this.level]
    }
  },
  data: () => ({
    levels: ['Basic', 'Medium', 'Expert']
  }),
  methods: {
    fullImagePath () {
      try {
        return require(`@/assets/skills-developer/${this.imageName}`)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.skill {
  display: flex;
  flex-direction: column;
}

.top-info {
  display: grid;
  grid-template-columns: 10% 80%;
  grid-gap: 10%;
}

.skill-logo {
  height: 50px;
}

.level {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
}

.level-bar {
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}

.level-text {
  font-family: 'Raleway', sans-serif;
}

.expert {
  background-color: var(--main-palette-fourth);
  color: var(--main-palette-base);
  width: 90%;
}

.medium {
  background-color: var(--main-palette-primary-complementary);
  width: 60%;
}

.basic {
  background-color: var(--main-palette-third);
  width: 35%;
}

.expert,
.medium,
.basic {
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--main-palette-primary);
    
    .level-text {
      color: var(--main-palette-base);
    }
  }
}
</style>

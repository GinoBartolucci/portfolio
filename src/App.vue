<template>
  <header-component></header-component>
  <div :class="{'dark-mode': cssMode}" class="main" >
    <div class="container">
      <DarkModeToggle @GetDarkMode="SetDarkMode"></DarkModeToggle>
      <profile-about></profile-about>
      <skills-component></skills-component>
      <portfolio-experience></portfolio-experience>
      <social-media></social-media>
      
    </div>
  </div>
</template>

<script>
import PortfolioExperience from "./components/PortfolioExperience.vue";
import ProfileAbout from "./components/ProfileAbout.vue";
import SocialMedia from "./components/SocialMedia.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import DarkModeToggle from "./components/childsComponents/DarkModeToggle.vue";

export default {
  components: {
    ProfileAbout,
    PortfolioExperience,
    SocialMedia,
    SkillsComponent,
    HeaderComponent,
    DarkModeToggle
},
  mounted() {
    document.title = "Gino Bartolucci";
  },
  data() {
    return {
      cssMode: false, 
    }
  },
  methods:{
    SetDarkMode(onOff){
      this.cssMode= onOff;
      console.log(onOff)
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 * {
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}
:root {
  --dark-color: #161616;
  --dark-2-color: #363636;
  --dark-3-color: #1b1b1b;

  --light-color: #f4f4f4;
  --light-2-color: #b1b1b1;
  --light-3-color:#f0f0f0;

  --error-color: #f15e5e;
}
body {
  margin: 0;
}
.container {
  max-width: 1320px;
  margin: auto;
  background-color: transparent;
}
.main {
  background-color: var(--light-color);
  padding: 20px 1rem;
  color: var(--dark-color);
  transition: 200ms;
}
.titles {
  color: var(--dark-color);
  margin: 1rem 0 0 0;
  font-family: "Bebas Neue", sans-serif, Helvetica, Arial;;
  font-size: calc(3rem + 3vw);
  font-weight: 400;
  letter-spacing: 1vw;
}
#app {
  font-family: 'Fira Sans', sans-serif, Helvetica, Arial;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.dark-mode {
  background-color: var(--dark-color);
  color: var(--light-2-color);
  transition: 200ms;
}
.dark-mode .titles{
  color: var(--light-2-color);
}
</style>

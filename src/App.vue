<template>  
<header-component> </header-component>
   <!--<div >
    <div class="toggles">
      <DarkModeToggle @GetDarkMode="SetDarkMode"></DarkModeToggle>
      <LanguageToggle @GetLanguageMode="SetLanguageMode"></LanguageToggle>
    </div>
  </div> -->
  <div :class="{ 'dark-mode': cssMode }" class="main">
    <div class="toggle-transitions">
      <div class="container">
        <profile-about></profile-about>
        <portfolio-experience></portfolio-experience>
        <skills-component></skills-component>
        <social-media></social-media>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioExperience from "./components/PortfolioComponent.vue";
import ProfileAbout from "./components/AboutComponent.vue";
import SocialMedia from "./components/ContactComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
// import DarkModeToggle from "./components/childsComponents/DarkModeToggle.vue";
// import LanguageToggle from "./components/childsComponents/LanguageToggle.vue";
import { gsap } from "gsap";
import { computed } from "vue";
export default {
  components: {
    ProfileAbout,
    PortfolioExperience,
    SocialMedia,
    SkillsComponent,
    HeaderComponent,
    // DarkModeToggle,
    // LanguageToggle,
  },
  mounted() {
    document.title = "Gino Bartolucci";
  },
  data() {
    return {
      cssMode: false,
      languageMode: "es",
    };
  },
  provide() {
    return {
      language: computed(() => this.languageMode),
    };
  },
  methods: {
    SetDarkMode(onOff) {
      this.cssMode = onOff;
      gsap.from(".toggle-transitions", {
        duration: 1,
        opacity: 0,
      });
    },
    SetLanguageMode(esen) {
      this.languageMode = esen;
      gsap.from(".toggle-transitions", {
        duration: 1,
        opacity: 0,
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
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
  --dark-3-color: #131313;

  --light-color: #f4f4f4;
  --light-2-color: #b1b1b1;
  --light-3-color: #f0f0f0;

  --error-color: #fd603f ;
  --correct-color: #59ca39 ;
}
body {
  margin: 0;
}
.toggle-transitions {
  background-color: transparent;
}
.container {
  max-width: 1200px;
  margin: auto;
  background-color: transparent;  
  padding-bottom: 5vh;
}
.main {
  background-color: var(--light-color);
  padding: 20px 1rem;
  color: var(--dark-color);
  transition: 200ms;
}
.toggles {
  background-color: var(--dark-3-color);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0.5rem;
}
.toggles div {
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  margin-right: 3%;
  margin-left: 1%;
}
.titles {
  color: var(--dark-color);
  margin: 1.2rem 0 0 0;
  font-family: "Fira Sans", sans-serif, Helvetica, Arial;
  font-size: calc(1.8rem + 3vw);
  font-weight: 450;
  letter-spacing: 0.05rem;
}
#app {
  font-family: "Fira Sans", sans-serif, Helvetica, Arial;
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
.dark-mode .titles {
  color: var(--light-2-color);
}
</style>

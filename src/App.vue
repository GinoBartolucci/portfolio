<template>
  <div id="container">
    <header-component></header-component>
    <skills-component></skills-component>
    <profile-about></profile-about>
    <portfolio-experience></portfolio-experience>
    <social-media></social-media>
  </div>
</template>

<script>
import PortfolioExperience from "./components/PortfolioExperience.vue";
import ProfileAbout from "./components/ProfileAbout.vue";
import SocialMedia from "./components/SocialMedia.vue";
import SkillsComponent from "./components/SkillsComponent.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: {
    ProfileAbout,
    PortfolioExperience,
    SocialMedia,
    SkillsComponent,
    HeaderComponent,
  },
  mounted() {
    document.title = "Gino Bartolucci"
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".titles").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 100%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        duration: 0.7,
        opacity: 0,
      });
    });
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap");

body {
  margin: 0;
}
.container {
  max-width: 1320px;
  margin: auto;
}
.titles {
  color: #1b1b1b;
  margin: 2rem;
  font-family: "Bebas Neue", cursive;
  font-size: calc(3rem + 3vw);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

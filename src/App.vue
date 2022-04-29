<template>
  <div>   
    <header-component></header-component> 
    <skills-component></skills-component> 
    <profile-about></profile-about>        
    <portfolio-experience></portfolio-experience>
    <social-media></social-media>    
  </div>

</template>

<script>
import PortfolioExperience from './components/PortfolioExperience.vue';
import ProfileAbout from './components/ProfileAbout.vue';
import SocialMedia from './components/SocialMedia.vue';
import SkillsComponent from './components/SkillsComponent.vue';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: { ProfileAbout, PortfolioExperience, SocialMedia, SkillsComponent, HeaderComponent},
   mounted() {
    console.log(`the component is now mounted.`)
    gsap.registerPlugin(ScrollTrigger);
    
    // ScrollTrigger.create({
    //   trigger: "#main-about",
    //   start: "top top",
    //   end:"bottom top",
    //   pin: true,
    //   pinSpacing: false,
    // })
    // ScrollTrigger.create({
    //   trigger: "#main-skills",
    //   start: "top top",
    //   end:"bottom bottom",
    //   markers: true,
    //   pin: true,
    //   pinSpacing: false,
    // })
    // ScrollTrigger.create({
    //   trigger: "#main-portfolio-experience",
    //   start: "top top",
    //   end:"top top",
    //   pin: true,
    //   pinSpacing: false,
    // })
  },
  data(){
      return{
      }              
    }
}   
</script>

<style>
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
.triger{
  height: 100px; background-color: red;
}
.cambiarcolor{
  background-color: blue;
}
</style>

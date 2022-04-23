<template>
  <div>
    <profile-about></profile-about>
    <skills-component></skills-component>
    <portfolio-experience></portfolio-experience>
    <social-media></social-media>    
  </div>
</template>

<script>
import PortfolioExperience from './components/PortfolioExperience.vue';
import ProfileAbout from './components/ProfileAbout.vue';
import SocialMedia from './components/SocialMedia.vue';
import SkillsComponent from './components/SkillsComponent.vue';

export default {
  components: { ProfileAbout, PortfolioExperience, SocialMedia, SkillsComponent},
  data(){
    
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
</style>

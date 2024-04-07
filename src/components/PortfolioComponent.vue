<template>
  <h1 class="titles">{{title}}</h1>
  <div class="card-container-experience">
    <card-portfolio
      v-for="card in cards"
      :key="card.id"
      class="experience-card"
      :DataCard="card"
    >
    </card-portfolio>
  </div>
</template>

<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import CardPortfolio from "./childsComponents/CardPortfolio.vue";

  export default {
    inject: ["language"],
    components: { CardPortfolio },
    mounted() {
      this.defineLanguage(this.idioma)
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".experience-card").forEach((cardE) => {
        gsap.from(cardE, {
          scrollTrigger: {
            trigger: cardE,
            start: "0 90%",
            toggleActions: "play none none none",
          },
          duration: 1.2,
          opacity: 0,
        });
      });      
      fetch("https://raw.githubusercontent.com/GinoBartolucci/portfolio/main/src/assets/data.json")
        .then((response) => response.json())
        .then((data) => {
          this.cards = data.proyectos;
          console.log(data);
        });      
        
    },
    data() {
      return {
        title:'',
        idioma: this.language,
        cards: [],
      };
    },
    watch: {
      idioma(newValue) {
        this.defineLanguage(newValue);
      },
    },
    methods: {      
      defineLanguage(lang) {
        if (lang == "es") {
          this.title = "Proyectos";
        }
        if (lang == "en") {
          this.title = "Projets";
        }
      },
    },
  };
</script>

<style scoped>
  .card-container-experience {
    display: flex;
    max-width: 1000px;
    margin: auto;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <div>
    <h1 class="titles">{{ title }}</h1>
  </div>
  <div class="card-container-skills">
    <div>
      <img alt="español Logo" src="../assets/logos/arg-logo.png" />
      <p>Español</p>
    </div>
    <div>
      <img alt="english Logo" src="../assets/logos/eng-logo.png" />
      <p>English</p>
    </div>
  </div>
  <div class="card-container-skills">
  <skils-logo
      v-for="logo in logos"
      :key="logo.nombre"
      :nombre = "logo.nombre"
      :imagen = "logo.logo"
    >
    </skils-logo>
  </div>  
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkilsLogo from "./childsComponents/SkilsLogo.vue";

export default {
  inject: ["language"],  
  components: { SkilsLogo },
  mounted() {
    this.defineLanguage(this.idioma);
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".card-container-skills div").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "100 100%",
          toggleActions: "play none none none",
        },
        scale: 0.9,
        duration: 0.6,
        opacity: 0,
      });
    });
    fetch("https://raw.githubusercontent.com/GinoBartolucci/portfolio/main/src/assets/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.logos = data.skils;
      });
  },
  data() {
    return {
      title: "",
      idioma: this.language,
      logos: {},
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
        this.title = "Competencias";
      }
      if (lang == "en") {
        this.title = "Skils";
      }
    },
  },
};
</script>

<style scoped>
.card-container-skills {
  display: flex;
  max-width: 1000px;
  margin: auto;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
.card-container-skills div {
  padding: 1rem;
  margin: 2rem 3%;
  max-height: 130px;
  max-width: 130px;
}
.card-container-skills div img {
  max-width: 130px;
  max-height: 130px;
  object-fit: contain;
}
.card-container-skills div p {
  font-size: 1rem;
  margin: auto;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.3rem;
  word-wrap: break-word;
}
</style>

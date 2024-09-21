<template>
  <h1 class="titles">About</h1>
  <div id="about-container">
    <div id="profile-image">
      <img alt="profile-image" src="../assets/imgs/profile.jpg" />
    </div>
    <div class="about-text" v-html="textAbout"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  inject: ["language"],
  mounted() {
    //this.defineLanguage(this.idioma);
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".about-text").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 90%",
          toggleActions: "play none none none",
        },
        y: 0,
        duration: 1.2,
        opacity: 0,
      });
    });
    gsap.from("#profile-image", {
      scrollTrigger: {
        trigger: "#profile-image",
        start: "0 90%",
        toggleActions: "play none none none",
      },
      y: 0,
      duration: 1,
      opacity: 0,
    });
    fetch("https://raw.githubusercontent.com/GinoBartolucci/portfolio/main/src/assets/data.json")
        .then((response) => response.json())
        .then((data) => {
          this.about = data.titulos.about;
          this.textAbout = data.titulos.about.text.español;
        });
  },
  data() {
    return {
      about: {},
      textAbout: "",
      idioma: this.language,
    };
  },
  // watch: {
  //   idioma(newValue) {
  //     this.defineLanguage(newValue);
  //   },
  // },
  methods: {
    // defineLanguage(lang) {
    //   if (lang == "es") {
    //     this.textAbout = this.about.text.español;
    //   }
    //   if (lang == "en") {
    //     this.textAbout = this.about.text.english;
    //   }
    // },
  },
};
</script>
<style>
.about-text {
  max-width: 800px;
  font-size: calc(1.3rem + 0.3vw);
  text-align: center;
  padding: 0 0.5rem 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
}
.about-text p {
  padding: 1rem 0.5rem;
}
</style>
<style scoped>
#about-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
#profile-image img {
  margin: 0 2.5rem;
  box-shadow: -2px 4px 10px 0px var(--dark-2-color);
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
}
</style>

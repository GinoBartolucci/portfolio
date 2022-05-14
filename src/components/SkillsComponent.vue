<template>
  <div>
    <h1 class="titles">{{ title }}</h1>
  </div>
  <div class="card-container-skills">
    <div>
      <img alt="Node.js Logo" src="../assets/logos/node-logo.png" />
      <p>Node</p>
    </div>
    <div>
      <img alt="mysql Logo" src="../assets/logos/mql-logo.png" />
      <p>SQL</p>
    </div>
    <div>
      <img alt="express Logo" src="../assets/logos/exp-logo.png" />
      <p>Express</p>
    </div>
    <div>
      <img alt="css Logo" src="../assets/logos/css-logo.png" />
      <p>CSS</p>
    </div>
    <div>
      <img alt="html Logo" src="../assets/logos/html-logo.png" />
      <p>HTML</p>
    </div>
    <div>
      <img alt="java script Logo" src="../assets/logos/javascript-logo.png" />
      <p>Java Script</p>
    </div>
    <div>
      <img alt="csharp Logo" src="../assets/logos/csharp-logo.png" />
      <p>C#</p>
    </div>
    <div>
      <img alt="Python Logo" src="../assets/logos/pyt-logo.png" />
      <p>Python</p>
    </div>
    <div>
      <img alt="git Logo" src="../assets/logos/git-logo.png" />
      <p>Git</p>
    </div>
    <div>
      <img alt="vue Logo" src="../assets/logos/vue-logo.png" />
      <p>Vue</p>
    </div>
    <div>
      <img alt="Net Framework Logo" src="../assets/logos/net-logo.png" />
      <p>.Net Framework</p>
    </div>
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
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  inject: ["language"],
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
  },
  data() {
    return {
      title: "",
      idioma: this.language,
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

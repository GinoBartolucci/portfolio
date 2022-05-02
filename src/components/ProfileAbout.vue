<template>
  <div id="main-about">
    <div class="container">
      <div id="about-conteiner">
        <h1 class=titles>About</h1>
        <p id="about-text">
          ¡Hola! Mi nombre es Gino
          Bartolucci, vivo en argentina. Estoy estudiando Ingeniería en Sistemas, 
          aunque también soy autodidacta. Siempre estoy conociendo tecnologías nuevas 
          o estudiando las que ya se para mejorar. Lo que más me gusta hacer es Experiencia 
          de Usuario y Diseño de Sistemas. 
        </p>
        <p id="about-text">
          En este momento estoy aprendiendo freamworks frontend. En el futuro me gustaría 
          ver Solidity, GO, Django y WebAssembly.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("#about-text").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 85%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        duration: 0.9,
        opacity: 0,
      });
    });
  },
  setup() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap");

html {
  font-size: 16px;
}
#main-about {
  background-color: #f4f4f4;
  padding: 5vh 1rem;
}
#about-conteiner {
  display: flex;
  justify-content: right;
  flex-flow: column wrap;
}
#about-text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
  padding: 0 20px 20px 20px;
  color: #1b1b1b;  
  font-size: calc(1rem + 1vw);
  
}
</style>
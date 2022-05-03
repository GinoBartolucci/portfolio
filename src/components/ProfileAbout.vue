<template>
  <div id="main-about">
    <div class="container">
      <h1 class="titles">About</h1>
      <div id="about-container">
        <div id="profile-image">
          <img alt="profile-image" src="../assets/imgs/profile.jpg" />
        </div>
        <div id="about-conteiner-text">
          <p>
            Mi nombre es Gino Bartolucci, vivo en argentina. Estoy estudiando
            Ingeniería en Sistemas, aunque también soy autodidacta. Siempre
            estoy conociendo tecnologías nuevas o estudiando las que ya se para
            mejorar. Me gusta todo lo relacionado a sistemas, pero lo que más me
            gusta es Experiencia de Usuario y Diseño de Sistemas.
          </p>
          <p>
            En este momento estoy aprendiendo freamworks frontend. En el futuro
            me gustaría ver Solidity, GO, Django y WebAssembly.
          </p>
        </div>
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

    gsap.utils.toArray("#about-conteiner-text p").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 90%",
          toggleActions: "play none none reverse",
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
        toggleActions: "play none none reverse",
      },
      y: 0,
      duration: 1,
      opacity: 0,
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
#about-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
#profile-image {
  border-radius: 50%;
  margin: 0 2.5rem;
  max-width: 250px;
  max-height: 250px;
  border: 1px solid #1b1b1b;
  -webkit-box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.75);
}
#profile-image img {
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
}
#about-conteiner-text {
  max-width: 800px;
  padding: 0 0.5rem 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
}
#about-conteiner-text p {
  color: #1b1b1b;
  margin: auto;
  text-align: center;
  padding: 1rem 0.5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: calc(1.3rem + 0.3vw);
}
</style>
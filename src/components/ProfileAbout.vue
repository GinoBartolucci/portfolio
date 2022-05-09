<template>
  <h1 class="titles">About</h1>
  <div id="about-container">
    <div id="profile-image">
      <img alt="profile-image" src="../assets/imgs/profile.jpg" />
    </div>
    <div id="about-text">
      <p>
        Mi nombre es Gino Bartolucci, vivo en argentina. Estoy estudiando
        Ingeniería en Sistemas, aunque también soy autodidacta. Siempre estoy
        conociendo tecnologías nuevas o estudiando las que ya se para mejorar.
        Me gusta todo lo relacionado a sistemas, pero lo que más me gusta es
        Experiencia de Usuario y Diseño de Sistemas.
      </p>
      <p>
        En este momento estoy aprendiendo freamworks frontend. En el futuro me
        gustaría ver Solidity, GO, Django y WebAssembly.
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("#about-text p").forEach((cardE) => {
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
  },
  setup() {},
};
</script>

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
#about-text {
  max-width: 800px;
  font-size: calc(1.3rem + 0.3vw);
  text-align: center;
  padding: 0 0.5rem 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
}
#about-text p {
  padding: 1rem 0.5rem;
}

</style>

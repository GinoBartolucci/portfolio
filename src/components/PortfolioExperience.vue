<template>
  <div id="main-portfolio-experience">
    <h1 class="title">Mis proyectos</h1>
    <div class="card-container-experience">
    </div>
  </div>
</template>

<script>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".card-experience").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        duration: 1,
        opacity: 0,
        z: -1,
      });
    });
  },
  setup() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap");

#main-portfolio-experience {
  background-color: #ffeafe;
  padding: 12vh 1rem;
}
#proyectosText {
  color: #f0ffff;
}
.card-container-experience {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
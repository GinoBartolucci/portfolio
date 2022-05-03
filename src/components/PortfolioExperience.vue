<template>
  <div id="main-portfolio-experience">
    <div class="container">
    <h1 class="titles">Mis proyectos</h1>
    <div class="card-container-experience">      
      <experience-card class="experience-card"
        :cardImage="'academia-card.jpg'"
        :cardTitle="'Academia'"
        :cardText="'Proyecto académico. Se debía crear un sistema para gestionar Alumnos y Profesores en el ámbito académico. La Solución consta de una <b>aplicación de escritorio</b> y una <b>aplicación web</b>. Utilicé <b>.net</b> para las aplicaciones y <b>SQLServer</b> para la base de datos.'"
        :deploydisabled="true" 
        :gitdisabled="false" 
        :gitLink="'https://github.com/GinoBartolucci/Net-TP2-Grupo1'">
      </experience-card>      
    </div>
  </div>
  </div>
</template>

<script>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from './childsComponents/ExperienceCard.vue';

export default {
  components: { ExperienceCard },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".experience-card").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 90%",
          toggleActions: "play none none reverse",
        },
        duration: 1.2,
        opacity: 0        
      });
    });
  },
  setup() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap");

#main-portfolio-experience {
  background-color: #f4f4f4;
  padding: 5vh 1rem;
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
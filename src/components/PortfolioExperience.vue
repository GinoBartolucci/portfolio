<template>
  <h1 class="titles">Mis proyectos</h1>
  <div class="card-container-experience">
    <experience-card
      class="experience-card"
      :cardImage="'academia-card.jpg'"
      :cardTitle="'Academia'"
      :cardText="'Proyecto académico. Se debía crear un sistema para gestionar Alumnos y Profesores en el ámbito académico. La Solución consta de una <b>aplicación de escritorio</b> y una <b>aplicación web</b>. Utilicé <b>.net</b> para las aplicaciones y <b>SQLServer</b> para la base de datos.'"
      :deploydisabled="true"
      :gitdisabled="false"
      :gitLink="'https://github.com/GinoBartolucci/Net-TP2-Grupo1'"
    >
    </experience-card>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "./childsComponents/ExperienceCard.vue";

export default {
  components: { ExperienceCard },
  mounted() {
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
  },
  setup() {},
};
</script>

<style scoped>
 
.card-container-experience {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>

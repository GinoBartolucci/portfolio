<template>
    <div id="main-portfolio-experience" >
        <h1 id="title-experience">Mis proyectos</h1>
        <div class="card-container-experience">
            <card-experience class="card-experience"></card-experience>
            <card-experience class="card-experience"></card-experience>            
            <card-experience class="card-experience"></card-experience>
        </div>
    </div>
</template>

<script>
import CardExperience from './CardExperience.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: { CardExperience },
  mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".title-experience",{
                scrollTrigger: {
                    trigger: "#main-portfolio-experience",
                    start: "0 80%",
                    end: "0 center",
                    toggleActions: "play none none reverse"
                },
                y:50,
                duration: 0.5,
                opacity: 0
            }
        )

        gsap.utils.toArray(".card-experience").forEach((cardE )=> {
            gsap.from(cardE,{
                scrollTrigger: {
                    trigger: cardE,
                    start: "0 85%",
                    toggleActions: "play none none reverse"
                },
                y:50,
                duration: 1,
                opacity: 0,
                z: -1
            }
        )
        })                
    },
    setup() {
        
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap');

#title-experience{
    color: #1b1b1b;
    margin: 2rem;
    font-family: 'Bebas Neue', cursive;
    font-size: calc(3rem + 3vw);
}
#main-portfolio-experience{
    background-color: #ffeafe;
    padding: 12vh 1rem;
}
#proyectosText{
    color: #f0ffff;
}
.card-container-experience{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
</style>
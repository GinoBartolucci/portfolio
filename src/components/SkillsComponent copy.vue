<template>
    <div  id="main-skills">                
        <div>
            <h1 class="title-skills">Skills</h1>
        </div>
        <div class="card-container-skills">
            <div id="#skills-card-1" class="skills-card skills-card-1">
                <h3>Tecnologies</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
            </div>
            <div id="#skills-card-2" class="skills-card skills-card-2">
                <h3>Soft skills</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
            </div>
            <div id="#skills-card-3" class="skills-card skills-card-3">
                <h3>Languages</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, voluptatum?</p>
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

        // gsap.from(".title-skills",{
        //         scrollTrigger: {
        //             trigger: "#main-skills",
        //             start: "0 70%",
        //             end: "200 center",
        //             toggleActions: "play none none reverse"
        //         },
        //         y:50,
        //         duration: 0.5,
        //         opacity: 0
        //     }
        // )
        // const vallado = [[-50,50], [0,50], [50,50]]
        // gsap.utils.toArray(".skills-card").forEach((cardE, i)=> {
        //     gsap.from(cardE,{
        //         scrollTrigger: {
        //             trigger: cardE,
        //             start: "0 85%",
        //             end: "50 center",
        //             toggleActions: "play none none reverse"
        //         },
        //         x: vallado[i][0],
        //         y: vallado[i][1],
        //         duration: 0.5,
        //         opacity: 0                
        //     }
        // )
        // })  

    },
    setup() {
        
    },
}
</script>

<style scoped>
#main-skills{
    background-color: #1b1b1b;
    padding: 32px;
}
.title-skills{    
    color: #1b1b1b;
}
.card-container-skills{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items:flex-start;
}
.skills-card{
    margin: 0.5rem;
    padding: 0.5rem;
    width: 250px;
    color: #1b1b1b;
}
</style>
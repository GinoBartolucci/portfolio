<template>
  <div id="main-skills">
    <div class="container">
      <div>
        <h1 class="titles">My Skills</h1>
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
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".card-container-skills div").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        duration: 0.7,
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

#main-skills {
  background-color: #f4f4f4;
  padding: 5vh 1rem;
}
.card-container-skills {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
.card-container-skills div {
  padding: 1rem;
  margin: 2rem 5%;
  max-height: 250px;
  max-width: 250px;
}
.card-container-skills div img {
  padding: 0.5rem;
  max-width: 200px;
  height: 200px;
  object-fit: contain;
}
.card-container-skills div p {
  font-size: 1.5rem;
  margin: 0;
  letter-spacing: 0.5rem;
  font-weight: 300;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
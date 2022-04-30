<template>
  <div id="main-header">
    <div class="container">
      <h1 id="header-title">Gino Bartolucci</h1>
      <br />
      <p id="header-text">Full Stack Developer</p>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#header-title", {
      scrollTrigger: {
        trigger: "#main-header",
        toggleActions: "play none none none",
      },
      y: -50,
      duration: 2,
      opacity: 0,
    });
    gsap.from("#header-text", {
      scrollTrigger: {
        trigger: "#main-header",
        toggleActions: "play none none none",
      },
      y: 50,
      duration: 2,
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
#main-header {
  background-color: #1b1b1b;
  padding: 32px 10px;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: "Fira Sans", sans-serif;
}
#header-title {
  color: #ffcbff;
  font-size: calc(3rem + 5vw);
  font-weight: 800;
  letter-spacing: 2vw;
  margin: 0 0 1rem 0;
}
#header-text {
  color: #ffcbff;
  font-size: calc(1rem + 2vw);
  font-weight: 400;
  letter-spacing: 1.5vw;
  font-family: "Fira Sans", sans-serif;
  margin: 0.5rem 0 0 0;
}
@media (min-width: 2445px) {
  #header-text,
  #header-title {
    font-size: 7rem;
  }
  #header-text {
    font-size: 2.5rem;
  }
}
</style>
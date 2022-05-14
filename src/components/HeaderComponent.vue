<template>
  <div id="main-header">
    <div id="nombrePrecentacion">
      <h1 id="header-title">Gino Bartolucci</h1>
      <h2 id="header-text">Full Stack Developer</h2>
    </div>
    <div id="downIcon">
      <img alt="down icon" src="../assets/logos/arr-logo.png" />
    </div>
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
    gsap
      .timeline({ repeat: -1 })
      .fromTo("#downIcon", { y: 0 }, { y: 2 })
      .fromTo("#downIcon", { y: 2 }, { y: 0 });
  },
  setup() {},
};
</script>

<style scoped>
 

#main-header {
  background-color: var(--dark-3-color);
  padding: 0 10px 0 10px;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
#nombrePrecentacion{
  color: var(--light-color);
}
#nombrePrecentacion h1 {
  font-size: calc(2rem + 3vw);
  font-weight: 800;
  letter-spacing: 2vw;
  margin: 0 0 1rem 0;
  font-family: "Bebas Neue", sans-serif;
}
#nombrePrecentacion h2 {
  font-size: calc(1rem + 2vw);
  font-weight: 400;
  letter-spacing: 1.1vw;
  font-family: "Fira Sans", sans-serif;
  margin: 0.5rem 0 0 0;
}
#downIcon {
  position: absolute;
  padding: 0.5rem;
  margin-bottom: 2rem;
  bottom: 0;
}
#downIcon img {
  width: 25px;
  height: 25px;
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
<template>
  <h1 class="titles">Contacto</h1>
  <div id="social-media">
    <a href="https://github.com/GinoBartolucci" target="_blank">
      <img alt="github Logo" src="../assets/logos/hub-logo.png" />
    </a>
    <a href="https://www.linkedin.com/in/ginobartolucci/" target="_blank">
      <img alt="linkdin  Logo" src="../assets/logos/lin-logo.png" />
    </a>
    <a href="https://www.instagram.com/gino_bartolucci/" target="_blank">
      <img alt="Instagram Logo" src="../assets/logos/ins-logo.png" />
    </a>
  </div>
  <form-contact></form-contact>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FormContact from "./childsComponents/FormContact.vue";

export default {
  components: {
    FormContact,
  },
  data() {
    return {
      message: null,
      email: null,
      errors: [],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#social-media", {
      scrollTrigger: {
        trigger: "#social-media",
        start: "0 90%",
        toggleActions: "play none none none",
      },
      y: 50,
      duration: 0.9,
      opacity: 0,
    });
  },
  methods: {},
};
</script>

<style scoped>
 
#social-media {
  margin: 0 0 1rem 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
#social-media a {
  margin: 0 15px;
}
#social-media img {
  max-width: 40px;
  max-height: 40px;
  padding: 0.5rem;
  max-width: 200px;
  object-fit: contain;
}
#social-media img:hover {
  padding: 0.5rem;
  max-width: 200px;
  object-fit: contain;
  scale: 1.1;
}

@media (max-width: 850px) {
  .input-group {
    flex-direction: column;
    justify-content: flex-start;
  }
  label {
    margin: 0;
    text-align: left;
    width: 100%;
  }
  input,
  textarea {
    margin-top: 0;
  }
}
</style>

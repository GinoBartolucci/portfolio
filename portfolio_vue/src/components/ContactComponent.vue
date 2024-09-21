<template>
  <h1 class="titles">{{ title }}</h1>
  <form-contact></form-contact>  
  <div id="social-media">
  <div>
    <div class="card-button">
      <button @click="downlosdCV">
        Descargar CV
        <i class="pi pi-external-link"></i>
      </button>
    </div>
  </div>
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
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FormContact from "./childsComponents/FormContact.vue";

export default {
  inject: ["language"],
  components: {
    FormContact,
  },
  data() {
    return {
      message: null,
      email: null,
      errors: [],
      title: "",
      idioma: this.language
    };
  },
  watch: {
    idioma(newValue) {
      this.defineLanguage(newValue);
    },
  },
  mounted() {
    this.defineLanguage(this.idioma);
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#social-media", {
      scrollTrigger: {
        trigger: "#social-media",
        start: "-100 100%",
        toggleActions: "play none none none",
      },
      y: 50,
      duration: 0.9,
      opacity: 0,
    });
  },
  methods: {
    defineLanguage(lang) {
      if (lang == "es") {
        this.title = "Contacto";
      }
      if (lang == "en") {
        this.title = "Contact";
      }
    },    
      downlosdCV: function(){
        window.open("./gino_bartolucci_resume.pdf", '_blank');
      }
  },
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
.card-button {
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    padding: 0.5rem;
  }
  .card-button button {
    background-color: var(--dark-color);
    color: var(--light-color);
    flex-basis: 50%;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 5px;
    border: 1px solid var(--dark-color);
    box-shadow: 0px 0px 3px 1px var(--dark-color);
  }
  .card-button button i{
    margin-right: 5px;
    font-size: inherit;  
  }
  .card-button button:hover {
    background-color: var(--dark-2-color);  
  }
button {
  padding: 0.8rem;
  margin: 1rem 1.5rem;
  font-size: inherit;
  background-color: #ffffff;
  border: 1px solid var(--dark-2-color);
  border-radius: 5px;
  flex: auto;
  resize: vertical;
  outline: none;
  font-family: inherit;
}
button:hover {
  outline: none;
  box-shadow: 0px 0px 3px 1px var(--dark-color);
}
.dark-mode button {
  background-color: var(--dark-2-color);
  color: var(--light-2-color);
}
.dark-mode button:hover {
  outline: none;
  box-shadow: 0px 0px 3px 1px var(--light-color);
}
</style>

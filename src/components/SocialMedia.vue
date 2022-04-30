<template>
  <div id="main-social-media">
    <div class="container">
      <h1 class="title">Contactame</h1>
      <div id="social-media">
        <a href="https://github.com/GinoBartolucci" target="_blank">
          <img alt="github Logo" src="../assets/hub-logo.png" />
        </a>
        <a href="https://www.linkedin.com/in/ginobartolucci/" target="_blank">
          <img alt="linkdin  Logo" src="../assets/lin-logo.png" />
        </a>
        <a href="https://www.instagram.com/gino_bartolucci/" target="_blank">
          <img alt="Instagram Logo" src="../assets/ins-logo.png" />
        </a>
      </div>
      <form>
        <div id="form-body">
          {{ errors }}
          <div class="input-group">
            <label>Su email:</label>
            <input id="name" v-model="email" type="email" name="email" />
            {{ email }}
          </div>
          <div class="input-group">
            <label>Su mensaje:</label>
            <textarea id="message" v-model="message" name="message"></textarea>
            {{ message }}
          </div>
          <div class="input-group">
            <button @click="checkForm" type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      message: null,
      email: null,
      errors: [],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
  },
  methods: {
    checkForm: function (e) {
      if (this.email && this.message) {
        return true;
      }
      this.errors = [];
      if (!this.email) {
        this.errors.push("El mail es obligatorio.");
      }
      if (!this.message) {
        this.errors.push("El mensaje es obligatorio.");
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap");

#main-social-media {
  background-color: #ffeafe;
  padding: 12vh 1rem;
}
#social-media {
 margin: 0 0 1rem 0;
}
#social-media img {
  max-width: 50px;
  height: 50px;
  padding: 0.5rem;
  max-width: 200px;

  object-fit: contain;
}
form {
  margin: 0;
  padding: 0;
}
#form-body {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
}
.input-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
label {
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 10px 10px 10px 10px;
  color: #1b1b1b;
  font-size: calc(1rem + 1vw);
  width: 30%;
}
input,
textarea {
  background-color: #ffffff;
  font-size: calc(1rem + 1vw);
  padding: 1rem;
  margin: 1rem 1.5rem;
  border: 3px solid transparent;
  border-radius: 0.3rem;
  flex: auto;
  resize: vertical;
}
input:hover,
textarea:hover {
  border: 3px solid #1b1b1b;
}
button {
  background-color: #ffffff;
  color: #1b1b1b;
  font-size: calc(1rem + 1vw);
  padding: 1rem;
  margin: 1.5rem;
  border: 3px solid transparent;
  border-radius: 0.3rem;
  flex: auto;
}
button:hover {
  border: 3px solid #1b1b1b;
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
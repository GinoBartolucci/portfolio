<template>
  <form @submit.prevent="sendEmail">
    <div id="form-body">
      <div class="input-group">
        <label>Nombre:</label>
        <input
        type="text" 
        placeholder="Gino, from Google"
        name="name" 
        :class="{inputError: errors.wrongName}"
        v-model="name"    
        />
      </div>
      <div class="input-group">
        <label>Asunto:</label>
        <input
        type="text" 
        placeholder="Oferta..."
        name="subjet" 
        :class="{inputError: errors.wrongSubjet}"
        v-model="subjet"    
        />
      </div>
      <div class="input-group">
        <label>Email:</label>
        <input
        type="email" 
        placeholder="mail@mail.com"
        name="email" 
        :class="{inputError: errors.wrongEmail}"
        v-model="email"    
        />
      </div>
      <div class="input-group">
        <label>Mensaje:</label>
        <textarea
          type="text"
          placeholder="Mensaje..."
          name="message"          
          :class="{inputError: errors.wrongMessage}"                  
          v-model="message" 
          >
          </textarea>
      </div>
      <div class="input-group">
        <button type="submit" value="Send">Enviar</button>
      </div>
    </div>
  </form>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      message: '',
      name: '',
      email: '',
      subjet: '',
      errors: [
        {wrongEmail: false},
        {wrongName: false},
        {wrongSubjet: false},
        {wrongMessage: false}
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".input-group").forEach((cardE) => {
      gsap.from(cardE, {
        scrollTrigger: {
          trigger: cardE,
          start: "0 100%",
          toggleActions: "play none none none",
        },
        y: 50,
        duration: 0.9,
        opacity: 0,
      });
    });
  },
  methods: {    
    sendEmail(e) {
      if(this.name.trim().replace(/(\r\n|\n|\r)/gm, "") !== ""){
        this.errors.wrongName =false;
      }  
      if(this.subjet.trim().replace(/(\r\n|\n|\r)/gm, "") !== ""){
        this.errors.wrongSubjet =false;
      }   
      if(this.email.trim().replace(/(\r\n|\n|\r)/gm, "") !== ""){
        this.errors.wrongEmail = false;
      }
      if(this.message.trim().replace(/(\r\n|\n|\r)/gm, "") !== ""){
        this.errors.wrongMessage =false;
      }
      if (this.name.trim().replace(/(\r\n|\n|\r)/gm, "") === "") {
        this.errors.wrongName = true;
      }
      if (this.subjet.trim().replace(/(\r\n|\n|\r)/gm, "") === "") {
        this.errors.wrongSubjet = true;
      }
      if (this.email.trim().replace(/(\r\n|\n|\r)/gm, "") === "") {
        this.errors.wrongEmail = true;
      }
      if (this.message.trim().replace(/(\r\n|\n|\r)/gm, "") === "") {
        this.errors.wrongMessage =true;
      }
      if (this.name.trim().replace(/(\r\n|\n|\r)/gm, "") !== "" && 
        this.email.trim().replace(/(\r\n|\n|\r)/gm, "") !== "" && 
        this.message.trim().replace(/(\r\n|\n|\r)/gm, "") !== "" &&
        this.subjet.trim().replace(/(\r\n|\n|\r)/gm, "") !== "") {
        emailjs.sendForm('service_rpqnlf4', 'template_06euihp', e.target, '7rbPhdBu71nb8XZWr')
        .then((result)=> {
          console.log(result.text);

        })
        .catch((error)=>{console.log(error);          
        });
        this.name = '';
        this.email = '';
        this.message='';
        this.subjet='';
        // Show feedback
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap");

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
  align-items: center;
}
label {
  margin: 0 0 0 1rem;
  text-align: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0 0 0 1rem;
  color: #1b1b1b;
  font-size: 1.5rem;
  flex-basis: 15%;
}
input,
textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem 1.5rem;
  border: 1px solid #525252;
  border-radius: 0.3rem;
  flex: auto;
  resize: vertical;
  outline: none;
}
input:focus,
textarea:focus,
button:hover {
  outline: none;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.59);
}
button {
  background-color: #ffffff;
  color: #1b1b1b;
  font-size: calc(1rem + 1vw);
  padding: 1rem;
  margin: 1.5rem;
  border: 1px solid #1b1b1b;
  border-radius: 0.3rem;
  flex: auto;
  outline: none;
}

.inputError, .inputError:focus {
  border: 1px solid #f15e5e;
}
@media (max-width: 850px) {
  .input-group {
    flex-direction: column;
    align-items: inherit;
  }
  label {
    margin: 0;
    text-align: left;    
  }
}
</style>
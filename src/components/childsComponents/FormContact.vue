<template>
  <form @submit.prevent="sendEmail">
    <div class="input-group">
      <label>{{ labels.name }}</label>
      <input
        type="text"
        :placeholder="placeholders.name"
        name="name"
        :class="{ inputError: errors.wrongName }"
        v-model="name"
      />
    </div>
    <div class="input-group">
      <label>{{ labels.subjet }}</label>
      <input
        type="text"
        :placeholder="placeholders.subjet"
        name="subjet"
        :class="{ inputError: errors.wrongSubjet }"
        v-model="subjet"
      />
    </div>
    <div class="input-group">
      <label>{{ labels.email }}</label>
      <input
        type="email"
        :placeholder="placeholders.email"
        name="email"
        :class="{ inputError: errors.wrongEmail }"
        v-model="email"
      />
    </div>
    <div class="input-group">
      <label>{{ labels.message }}</label>
      <textarea
        type="text"
        :placeholder="placeholders.message"
        name="message"
        :class="{ inputError: errors.wrongMessage }"
        v-model="message"
      >
      </textarea>
    </div>
    <div class="input-group">
      <button type="submit" value="Send">
       {{contacted == true? "Enviado" : labels.send }}</button>      
    </div>
<!-- <p id="alert" :class="{'alertError': error, 'alertContacted':contacted}">{{alert}}</p> -->
  </form>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';

export default {
  inject: ["language"],
  data() {
    return {
      idioma: this.language,
      message: "",
      name: "",
      email: "",
      subjet: "",
      alert: '',
      contacted: false,
      error: false,
      errors: [
        { wrongEmail: false },
        { wrongName: false },
        { wrongSubjet: false },
        { wrongMessage: false },
      ],
      labels: [
        { name: "" },
        { subjet: "" },
        { email: "Email" },
        { message: "" },
        { send: "" },
      ],
      placeholders:[
        { name: "" },
        { subjet: "" },
        { email: "email@email.com" },
        { message: "" },
      ]
    };
  },
  mounted() {
    this.defineLanguage(this.idioma);
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
  watch: {
    idioma(newValue) {
      this.defineLanguage(newValue);
    },
  },
  methods: {
    sendEmail() {
      if (this.name.trim().replace(/(\r\n|\n|\r)/gm, "") !== "") {
        this.errors.wrongName = false;
      }
      if (this.subjet.trim().replace(/(\r\n|\n|\r)/gm, "") !== "") {
        this.errors.wrongSubjet = false;
      }
      if (this.email.trim().replace(/(\r\n|\n|\r)/gm, "") !== "") {
        this.errors.wrongEmail = false;
      }
      if (this.message.trim().replace(/(\r\n|\n|\r)/gm, "") !== "") {
        this.errors.wrongMessage = false;
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
        this.errors.wrongMessage = true;
      }
      if (
        this.name.trim().replace(/(\r\n|\n|\r)/gm, "") !== "" &&
        this.email.trim().replace(/(\r\n|\n|\r)/gm, "") !== "" &&
        this.message.trim().replace(/(\r\n|\n|\r)/gm, "") !== "" &&
        this.subjet.trim().replace(/(\r\n|\n|\r)/gm, "") !== ""
      ) {      
        emailjs
        .send('service_dk9ad9a', 'template_ann7z8e', 
        {"name": this.name,"email": this.email,"message": this.message,"subjet": this.subjet}, {
          publicKey: '7rbPhdBu71nb8XZWr',
        })        ;               
        this.name = "";
        this.email = "";
        this.message = "";
        this.subjet = "";
        // Show feedback
        this.error = false
        this.contacted = true
        if(this.idioma=='es'){
          this.alert= 'Mensaje enviado, gracias'
        }
        if(this.idioma=='en'){
          this.alert= 'Message sent, thanks'
        }
      }else{
        this.error = true
        this.contacted = false
        if(this.idioma=='es'){
          this.alert= 'Complete los campos, gracias'
        }
        if(this.idioma=='en'){
          this.alert= 'Fill all the fields, thanks'
        }
      }
    },
    defineLanguage(lang) {
      if (lang == "es") {
        this.labels = {
          name: "Nombre:",
          subjet: "Asunto:",
          email:"Email:",
          message: "Mensaje:",
          send: "Enviar",
        };
        this.placeholders = {
          name: "Gino, UTN Rosario",
          subjet: "Asunto...",
          email: "email@email.com",
          message: "Mensaje...",
        };
      }
      if (lang == "en") {
        this.labels = {
          name: "Name:",
          subjet: "Subjet:",
          email:"Email:",
          message: "Message:",
          send: "Send",
        }
        this.placeholders = {
          name: "Gino, UTN Rosario",
          subjet: "Subjet...",
          email: "email@email.com",
          message: "Message...",
        };
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: auto;
  font-size: 1.5rem;
  text-align: left;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
}
.input-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: inherit;
}
label {
  margin: 0 0 0 1rem;
  padding: 0 0 0 1rem;
  flex-basis: 15%;
}
input,
textarea,
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
input:focus,
textarea:focus,
button:hover {
  outline: none;
  box-shadow: 0px 0px 3px 1px var(--dark-color);
}
.dark-mode input,
.dark-mode textarea,
.dark-mode button {
  background-color: var(--dark-2-color);
  color: var(--light-2-color);
}
.dark-mode input:focus,
.dark-mode textarea:focus,
.dark-mode button:hover {
  outline: none;
  box-shadow: 0px 0px 3px 1px var(--light-color);
}
.inputError {
  border: 1px solid var(--error-color) !important;
}
.inputError:focus {
  box-shadow: 0px 0px 3px 1px var(--error-color) !important;
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
  input,
textarea{
  margin: 0.2rem 1.5rem;
  margin-bottom: 1rem;
}
}
#alert{
  font-size: inherit;
  text-align: center;
  padding-bottom: 0.5rem;
  font-weight: 500;
}
.alertError{
  color: var(--error-color)
}
.alertContacted{
  color: var(--correct-color)

}
</style>
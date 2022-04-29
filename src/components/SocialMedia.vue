<template>
    <div id="main-social-media">
        <h1 id="social-media-title">Contactame</h1>
        <p id="social-media-text">Podes contactarme por mail o en mis redes sociales</p>
        <form >
            <input type="text" v-model="text"/>
            <input type="text" v-model="text"/>
            <input type="text" v-model="text"/>
            <input type="text" v-model="text"/>
            <button @click="eliminar"  text="Confirm">Enviar</button>
            <br/>
            {{text}}
        </form>
    </div>
    
</template>

<script>
export default {
    data(){
    return{
      text: 'Hola'
    }
  }, methods:{
    eliminar(){
      this.$confirm.require({
        message: this.text,
        header: 'Desea enviar este mesanje?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.text = null;
        },
        reject: () => {
            //callback to execute when user rejects the action
        }
      });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap');

#main-social-media
{
    background-color: #ffeafe;
    padding: 12vh 1rem;
}
#social-media-title{
  color: #1b1b1b;
  margin: 2rem;
  font-family: 'Bebas Neue', cursive;
  font-size: calc(3rem + 3vw);
}
#social-media-text{
    color: #1b1b1b;
    font-size: calc(1rem + 1vw)
}
input{
  background-color: #ffffff;
  font-size: calc(1rem + 1vw);
  padding: 1rem;  
  margin: 1.5rem;
  border: 3px solid transparent;
  border-radius: 0.3rem;
  width: 50%;  
}
input:hover{
  border: 3px solid #1b1b1b;
}
button{
  background-color: #ffffff;
  color:#1b1b1b;
  font-size: calc(1rem + 1vw);
  padding: 1rem;
  margin: 1.5rem;
  border: 3px solid transparent;
  border-radius: 0.3rem;
  width: 30%;
  
}
button:hover{
  border: 3px solid #1b1b1b;
}
form{
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  align-items: center;
}
</style>
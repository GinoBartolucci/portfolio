<template>
  <div class="card">
    <div class="card-image">
      <img
        src="@/assets/cards/academia-card.jpg"
        alt="Placeholder image"
      />
    </div>
    <div class="card-title">
      <h2>{{cardTitle}}</h2>
    </div>
    <div class="card-text">
      <p v-html="cardText"></p>
    </div>
    <div class="card-button">
      <button @click="git" :class="{buttonDisabled: gitdisabled}" :disabled="gitdisabled">
        GitHub
        <i class="pi pi-github"></i>
      </button>
      <button @click="deploy" :class="{buttonDisabled: deploydisabled}" :disabled="deploydisabled" >
        Demo
        <i class="pi pi-external-link"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    cardImage: String,
    cardText: String,
    cardTitle:String,
    gitLink: String,
    deployLink:String,
    gitdisabled: Boolean,
    deploydisabled: Boolean,
  },
  data (){
    return{
      
    };
  },
  setup() {},
  methods: {
    git: function(){
      window.open(this.gitLink, '_blank');
    },
    deploy: function(){
      window.open(this.deployLink, '_blank');
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500;800&display=swap");

.card {
  border: 1px solid #1b1b1b;
  background-color: #f4f4f4;
  color: #1b1b1b;
  margin: 1rem;
  max-width: 350px;
  /* min-height: 450px; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 3px;
  justify-content: space-between;
  -webkit-box-shadow: 10px 10px 9px -7px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 10px 10px 9px -7px rgba(0, 0, 0, 0.59);
  box-shadow: 10px 10px 9px -7px rgba(0, 0, 0, 0.59);
}
.card-image {
}
.card-image img {
  width: 100%;
  object-fit: contain;
  border-bottom: 1px solid #1b1b1b;
}
.card-title {
  font-size: 1.8rem;
  padding: 0.1rem;
}
.card-title h2 {
  margin: 0.5rem 0;
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
}
.card-text {
  text-align: center;
  padding: 0.5rem;
  font-weight: 300;
  font-size: 1.5rem;
  font-family: "Fira Sans", sans-serif;
  justify-self: center;
}
.card-text p{
  margin: auto;
}
.card-button {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-around;
  padding: 0.5rem;
}
.card-button button {
  background-color: #1b1b1b;
  color: #f4f4f4;
  flex-basis: 50%;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
  border-radius: 5px;
  border: 1px solid #1b1b1b;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.59);
}
.card-button button i{
  float: right;
  margin-right: 5px;
  font-size: inherit;
  
}
.card-button button:hover {
  background-color: #525252;  
}
.buttonDisabled{
  background-color: #525252 !important;
  pointer-events: none;    
}
</style>
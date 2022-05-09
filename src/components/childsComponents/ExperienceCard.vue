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
.card {
  margin: 1rem;  
  background-color: var(--light-3-color);
  color: var(--dark-color);  
  max-width: 350px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: 1px transparent var(--dark-color);  
  border-radius: 3px;
  box-shadow: 10px 10px 9px -7px var(--dark-2-color);
}
.card-image img {
  width: 100%;
  object-fit: contain;
  border-bottom: 1px transparent var(--dark-color);
}
.card-title h2{
  margin: 0.5rem 0;
  padding: 0.1rem;
  font-size: 2rem;
  font-weight: 600;
}
.card-text {
  text-align: center;
  padding: 0.5rem;
  font-size: 1.2rem;
  justify-self: center;
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
.buttonDisabled{
  background-color: var(--dark-2-color) !important;
  pointer-events: none;    
}
.dark-mode .card{
  margin: 1rem;  
  background-color: var(--dark-3-color);
  color: var(--light-2-color);  
  border: 1px transparent var(--light-2-color);  
}
.dark-mode .card-button button {
  background-color: var(--light-color);
  color: var(--dark-color);
  border: 1px solid var(--light-color);
  box-shadow: 0px 0px 1px 1px var(--light-color);
}
.dark-mode .card-button button i{
  color: var(--dark-color);
}
.dark-mode .card-button button:hover {
  background-color: var(--light-2-color);  
  border: 1px solid var(--light-2-color);
}
.dark-mode .buttonDisabled{
  background-color: var(--light-2-color) !important;
  border: 1px solid var(--light-2-color) !important;
  pointer-events: none;    
}
</style>
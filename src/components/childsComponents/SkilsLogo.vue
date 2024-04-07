<template>
    <div>
      <img
        :src="getImgUrl(this.imagen)"
        :alt="this.nombre"
      />
      <p>{{this.nombre}}</p>
    </div>
</template>

<script>
export default {
  inject: ["language"],
  props:{
    nombre: String,
    imagen: String
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  watch: {
  },
  methods: {
    getImgUrl: function(p){
      return require('@/assets/logos/' + p );
    }
  },
};
</script>

<style scoped>
.card-container-skills {
  display: flex;
  max-width: 1000px;
  margin: auto;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
.card-container-skills div {
  padding: 1rem;
  margin: 2rem 3%;
  max-height: 130px;
  max-width: 130px;
}
.card-container-skills div img {
  max-width: 130px;
  max-height: 130px;
  object-fit: contain;
}
.card-container-skills div p {
  font-size: 1rem;
  margin: auto;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.3rem;
  word-wrap: break-word;
}
</style>

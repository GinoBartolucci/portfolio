<template>
    <div id="mainPortfolioExperience" >
        <h1>Mis proyectos</h1>
        <div class="flex justify-content-center flex-wrap card-container">
            <card-experience class="align-items-center justify-content-center"></card-experience>
            <card-experience class="align-items-center justify-content-center"></card-experience>            
            <card-experience class="align-items-center justify-content-center"></card-experience>
        </div>
    </div>
</template>

<script>
import CardExperience from './CardExperience.vue'
export default {
  components: { CardExperience },
    setup() {
        
    },
}
</script>

<style scoped>
h1{
    color: #f0ffff;
}
#mainPortfolioExperience{
    background-color: #6789BA;
    padding: 32px;
}
#proyectosText{
    color: #f0ffff;
}
</style>
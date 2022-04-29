<template>
<div>
    <CardComponent class="card">
        <template #header>
            <img alt="user header" src="https://www.primefaces.org/primevue/demo/images/usercard.png">
        </template>
        <template #title>
            Advanced Card
        </template>
        <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </template>
        <template #footer>
            <ButtonComponent icon="pi pi-github" label="GitHub"/>
            <ButtonComponent icon="pi pi-external-link" class="p-disabled" label="Demo" style="margin-left: .5em" />
        </template>
    </CardComponent></div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap');

.card{
    width: 300px;
    margin: 1rem;
}
</style>
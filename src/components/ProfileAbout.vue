<template>
    <div id="main-about">
        <div id="about-conteiner">
            <h1 id="about-title">About</h1>
            <p id="about-text">Hi, my name is Gino Bartolucci, i'm from Argentina. I'm studing Sistem Ingeniering</p>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@200;300&display=swap');

html{
    font-size: 16px;
}
#main-about{
    background-color: #ffeafe;
    padding: 12vh 1rem;
    }
#about-conteiner{
    display: flex;
    justify-content: right;
    flex-flow: column wrap;
}
#about-title{
    color: #1b1b1b;
    margin: 2rem;
    font-family: 'Bebas Neue', cursive;
    font-size: calc(3rem + 3vw);
}
#about-text{
    color: #1b1b1b;
    font-size: calc(1rem + 1vw)
}
</style>
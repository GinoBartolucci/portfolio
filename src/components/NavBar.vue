<template>
  <div id="navBar"></div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500;800&display=swap");

html {
  font-size: 16px;
}
#main-header {
  background-color: #1b1b1b;
  padding: 32px 10px;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: "Fira Sans", sans-serif;
}
#header-title {
  color: #ffcbff;
  font-size: calc(1rem + 5vw);
  font-weight: 800;
  letter-spacing: 3vw;
  margin: 2rem;
}
#header-text {
  color: #ffcbff;
  font-size: calc(1rem + 2vw);
  font-weight: 400;
  letter-spacing: 1.5vw;
  font-family: "Fira Sans", sans-serif;
}
</style>
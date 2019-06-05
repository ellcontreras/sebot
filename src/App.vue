<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body,
html {
  height: 100% !important;
  background-image: linear-gradient(
    to right,
    #43befd,
    #25aaf8,
    #1796f1,
    #2781e7,
    #3e6ada
  );
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

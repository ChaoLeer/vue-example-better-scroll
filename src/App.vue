<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BetterScroll/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BetterScroll from './components/BetterScroll'
export default {
  name: 'app',
  components: {
    HelloWorld,
    BetterScroll
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5)
}
.loading-wrapper__inner {
  text-align: center;
  color: #fff;
}
</style>

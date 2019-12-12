<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>  

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

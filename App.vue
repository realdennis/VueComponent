<template>
  <div id="app">
    <header>
      <span>Tarot Bot</span>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <p>My child tell me : {{ noSay }}</p>
      <hello say="QQ" @myChild="toDad"></hello>
      <router-view></router-view>
      <button @click="changeDagger">dagger</button>
      <dagger></dagger>
    </main>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Dagger from './components/Dagger'
export default {
  name: 'app',
  components: {
    Hello,
    Dagger
  },
  data:function(){
    return{
      noSay:''
    }
  },
  methods:{
    toDad:function(message){
      this.noSay=message;
    },
    changeDagger:function(){
      this.$store.commit('daggerCtrl');
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>

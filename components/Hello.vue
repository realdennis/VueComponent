<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Heyhey</h2>
    <p>Says: {{ say }}</p>
    <Button @click="toDad">傳送給parent</Button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:['say'],
  data : function() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      message:'我才不說'
    }
  },
  methods:{
    toDad:function(){
      this.$emit('myChild',this.message);
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
p{
  color:red;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>

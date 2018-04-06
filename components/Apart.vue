<template>
    <div>
        <p>我是Apart</p>
        <a v-on:click="goPage">點我切換</a>
    </div>
</template>

<script>
import Bus from '../Bus';

export default {
  name: 'test',
  methods: { 
      goPage: function () {
/*The push method adds a new record to the history stack, so when the user clicks the browser back button, it returns to the previous URL. */
          this.$router.push('/bb');
      }
  },
  components:{
  	Bus
  },
  destroyed:function(){
	Bus.$emit('whiteSay','嘿嘿嘿')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: red;
}
div {
    width: 100%;
    height: 100px;
    background-color: green;
}
</style>

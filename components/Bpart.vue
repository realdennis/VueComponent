<template>
    <div>
        <p>我是Bpart</p>
        <p>Apart對我說:{{ whiteSay }}</p>
        <a v-on:click="goPage">點我切換</a>
    </div>
</template>

<script>
import Bus from '../Bus'

export default {
  name: 'test',
  data:function(){
  	return{
  		whiteSay:'nihao'
  	}
  },
  methods: {
      goPage: function () {
          this.$router.push('/')
      }
  },
  components:{
  	Bus
  },
  created:function(){
  	let _self = this;
  	Bus.$on('whiteSay',function(data){
  		_self.whiteSay=data;
  		console.log(_self.whiteSay);
  	})
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
    background-color: yellow;
}
</style>
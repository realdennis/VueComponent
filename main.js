// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuex from 'vuex';
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import Router from 'vue-router'
import 'iview/dist/styles/iview.css';
import Apart from  './components/Apart' // component
import Bpart from  './components/Bpart' // component
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Router)
Vue.use(Vuex)
//const Error = {template:'<p style="color: red">is Error!!</p>'}
/* eslint-disable no-new */

const store = new Vuex.Store({
	state:{
		showDagger:true
	},
	mutations:{
		daggerCtrl(state){
			state.showDagger = !state.showDagger
		}
	}
})

const routes = [
    {
        path: '/',
        component: Apart
    },
    {
        path: '/bb',
        component: Bpart 
    }
]

const router = new Router({ routes })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router, // this.$router could get the router object
  template: '<App/>', 
  components: { App }
})
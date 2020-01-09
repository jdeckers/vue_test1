import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import modules
import movies from './modules/movie-store';

export default new Vuex.Store({
   modules:{
       movies
   }
})

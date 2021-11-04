import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    
    batata: 'hahahaha',
    originalsList: [], 
  },
  mutations: {
    GET_NETFLIX_ORIGINALS(state, payload){
      state.originalsList = state.originalsList = payload
    }
  },
  actions: {
    async getNetflixOriginals(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_network=213&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_NETFLIX_ORIGINALS', data.results)
    },
  },
  modules: {
  }
})

import { createStore } from 'vuex'

export default createStore({
  state: {
    originalsList: [], 
  },
  mutations: {
    GET_NETFLIX_ORIGINALS(state, payload){
      state.originalsList = state.originalsList = payload
    }
  },
  actions: {
    async getNetflixOriginals(context){
      // fethapi
      const listSeries = await fetch(`https://api.themoviedb.org/3/discover/tv?with_network=213&api_key=0dcd77a3c294fd26314b175bffee7449`)
            .then(response => response.json())
            .then(data => console.log(data))
      context.commit('GET_NETFLIX_ORIGINALS', listSeries)
    },
  },
  modules: {
  }
})

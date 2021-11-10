import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    batata: 'hahahaha',
    originalsList: [], 
    trendingList:[],
    topRatedList: [],
    actionList: [],
    comedyList: [],
    romanceList: [],
    horrorList: [],
    documentaryList: [],

  },
  mutations: {
    GET_NETFLIX_ORIGINALS(state, payload){
      state.originalsList = state.originalsList = payload
    },
    GET_TRENDING(state, payload){
      state.trendingList = state.trendingList = payload
    },
    GET_TOP_RATED(state, payload){
      state.topRatedList = payload
    },
    GET_ACTION_GENRE(state, payload){
      state.actionList = state.actionList = payload
    },
    GET_COMEDY_GENRE(state, payload){
      state.comedyList = state.comedyList = payload
    },
    GET_ROMANCE_GENRE(state, payload){
      state.romanceList = state.romanceList = payload
    },
    GET_HORROR_GENRE(state, payload){
      state.horrorList = state.horrorList = payload
    },
    GET_DOCUMENTARY_GENRE(state, payload){
      state.documentaryList = state.documentaryList = payload
    },
  },
  actions: {
    async getNetflixOriginals(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_network=213&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_NETFLIX_ORIGINALS', data.results)
    },
    async getTrending(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_TRENDING', data.results)
    },
    async getTopRated(context){
      let { data } = await axios.get(`  ${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_TOP_RATED', data.results)
    },
    async getActionGenre(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_ACTION_GENRE', data.results)
    },
    async getComedyGenre(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_COMEDY_GENRE', data.results)
    },
    async getRomanceGenre(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_ROMANCE_GENRE', data.results)
    },
    async getHorrorGenre(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_HORROR_GENRE', data.results)
    },
    async getDocumentaryGenre(context){
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${process.env.VUE_APP_API_KEY}`)
      context.commit('GET_DOCUMENTARY_GENRE', data.results)
    },
  },
  getters:{
    featureSeries(state){
      let choose =  Math.floor(Math.random() * state.trendingList.length);
      return state.trendingList[choose]
    }
  },
  modules: {
    
  }
})




<template>
  <div class="home">
    <HeaderHero :headerHeroData="heroData" :apiKey="apiKey"/>
    <SlideMedia/>
  
  </div>
</template>

<script>
import { HeaderHero ,SlideMedia } from '@/components/organisms';
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      heroData: [],
      apiKey: process.env.VUE_APP_API_KEY,
      slideNext: false
    }
  },
  methods: {
  },
  components: {
    HeaderHero,
    SlideMedia
  },
  computed:{
    ...mapState(['originalsList', 'comedyList']),
    ...mapActions(['getNetflixOriginals', 'getComedyGenre'])
  },
  async created(){
      // Fetch Originals Series
       this.getNetflixOriginals
       this.getComedyGenre
       this.slideOriginal = this.originalsList


      //get data for feature of the day
      
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_network=213&api_key=${process.env.VUE_APP_API_KEY}`)
      let results = await data.results
      let choose = await Math.floor(Math.random() * data.results.length);
      // console.log(results)
      this.heroData = await results[choose]
      
  }

}
</script>

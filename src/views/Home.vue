<template>
  <div class="home">
    <HeaderHero :headerHeroData="heroData" :apiKey="apiKey"/>
    <SlideMedia>
      <h2>Originais</h2>
      <div class="slide-container-image">
        <img v-for="originals in originalsList" :key="originals.Id" :src="`https://image.tmdb.org/t/p/w300/${originals.backdrop_path}?api_key=${apiKey}`" alt="">
      </div>
    </SlideMedia>
    <SlideMedia>
      <h2>Comedy</h2>
      <div class="slide-container-image">
        <img v-for="comedy in comedyList" :key="comedy.Id" :src="`https://image.tmdb.org/t/p/w300/${comedy.backdrop_path}?api_key=${apiKey}`" alt="">
      </div>
    </SlideMedia>
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
      apiKey: process.env.VUE_APP_API_KEY
    }
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
      
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`)
      let results = await data.results
      let choose = await Math.floor(Math.random() * data.results.length);
      this.heroData = await results[choose]
      
  }

}
</script>

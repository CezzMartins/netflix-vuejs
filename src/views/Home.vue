<template>
  <div class="home">
    <HeaderHero :headerHeroData="heroData" :apiKey="apiKey"/>
    <SlideMedia :scrollNext="scrollNext" :scrollBack="scrollBack">
      <h2>Originais</h2>
      <div class="slide-container-image" ref="slide" >
        <img v-for="originals in originalsList" :key="originals.Id" :src="`https://image.tmdb.org/t/p/w300/${originals.backdrop_path}?api_key=${apiKey}`" alt="">
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
      apiKey: process.env.VUE_APP_API_KEY,
      slideNext: false
    }
  },
  methods: {
    scrollNext(){
          let slideAmountLeft = window.innerWidth;
          let el =  this.$refs.slide
          el.scrollBy({left: slideAmountLeft, behavior: 'smooth'});
          
    },
    scrollBack(){
          let slideAmountRight = window.innerWidth;
          let el =  this.$refs.slide
          el.scrollBy({left: -slideAmountRight, behavior: 'smooth'});
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
      
      let { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_network=213&api_key=${process.env.VUE_APP_API_KEY}`)
      let results = await data.results
      let choose = await Math.floor(Math.random() * data.results.length);
      this.heroData = await results[choose]
      
  }

}
</script>

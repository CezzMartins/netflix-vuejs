<template>
  <div class="home">
    <HeaderHero :topHeroData="heroData"/>
    
  </div>
</template>

<script>
import { HeaderHero } from '@/components/organisms';
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      heroData: []
    }
  },
  components: {
    HeaderHero
  },
  async created(){
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.VUE_APP_API_KEY}`)
      let results = await data.results
      let choose = await Math.floor(Math.random() * data.results.length);
      this.heroData = await results[choose]
      console.log(results)
  }

}
</script>

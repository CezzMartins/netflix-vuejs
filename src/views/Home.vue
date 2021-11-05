<template>
  <div class="home">
    <ShowCase/>
     {{ originalsList[featureSeries]?.name }}
    <div  v-for="item in originalsList" :key="item.id">
      <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
    </div>
   
    <!-- {{ originalsList }} -->
  </div>
</template>

<script>
import {  mapState, mapGetters } from 'vuex'
import ShowCase from '@/components/ShowCase'

export default {
  name: 'Home',
  data(){
    return{
    }
  },
  components: {
    ShowCase
  },
  methods: {
  },
  mounted(){
    this.$store.dispatch('getNetflixOriginals')
  },
  
  computed: {
    ...mapState(['originalsList']),
    ...mapGetters(['featureSeries'])

  }
}
</script>

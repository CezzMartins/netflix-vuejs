<template>
  <div class="home">
    <ShowCase/>
    
    <div  v-for="item in topRatedList" :key="item.id">
      <h1>{{ item.title }}</h1>
    </div>
    <!-- {{ originalsList }} -->
  </div>
</template>

<script>
import {  mapState,  } from 'vuex'
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
    this.$store.dispatch('getTopRated')
  },
  
  computed: {
    ...mapState(['topRatedList']),

  }
}
</script>

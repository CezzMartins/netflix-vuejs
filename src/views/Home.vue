<template>
  <div class="home">
    <ShowCase/>
    
    <!-- <div  v-for="item in originalsList" :key="item.id">
      <h1>{{ item.name }}</h1>
    </div> -->
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
    // this.$store.dispatch('getNetflixOriginals')
  },
  
  computed: {
    ...mapState(['batata', 'originalsList']),

  }
}
</script>

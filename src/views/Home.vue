<template>
  <div class="home">
    <h1>Hello amigos</h1>
    <button @click="getData">teste api</button>
    <div  v-for="item in originalsList" :key="item.id">
      <h1>{{ item.name }}</h1>
    </div>
    <!-- {{ originalsList }} -->
  </div>
</template>

<script>
import {  mapState,  } from 'vuex'


export default {
  name: 'Home',
  data(){
    return{
    }
  },
  components: {
    
  },
  methods: {
  },
  mounted(){
    this.$store.dispatch('getNetflixOriginals')
  },
  
  computed: {
    ...mapState(['batata', 'originalsList']),
    
    
  }
}
</script>

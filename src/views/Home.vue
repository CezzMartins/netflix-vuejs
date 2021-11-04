<template>
  <div class="home">
    <h1>Hello amigos</h1>
    <button @click="getData">teste api</button>
    <p>
      {{ data }}
    </p>
  </div>
</template>

<script>
// import {  mapState } from 'vuex'


export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    
    getData(){
      this.$store.dispatch('getNetflixOriginals')
      
    }
  },
  computed: {
    data(){
      return this.$store.state.originalList
    }
    
  }
}
</script>

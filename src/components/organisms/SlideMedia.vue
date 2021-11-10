<template>
    <section class="slide-section">
        <div class="slide-media" >
            
                <section class="slide-container">
                    <h2>Originals</h2>
                    <div class="move-arrows arrow-next" @click="scrollNext($event)">
                        <span class="material-icons-outlined" >
                        arrow_forward_ios
                        </span>
                    </div>
                    <div class="slide-container-image" ref="slide" >
                        <img v-for="originals in originalsList" :key="originals.Id" :src="`https://image.tmdb.org/t/p/w300/${originals.backdrop_path}?api_key=${apiKey}`" alt="">
                    </div>
                    <div class="move-arrows arrow-back" @click="scrollBack($event)" >
                        <span class="material-icons-outlined">
                            arrow_back_ios
                        </span>
                    </div>
                </section>
                <section class="slide-container">
                    <h2>Comedy</h2>
                    <div class="move-arrows arrow-next" @click="scrollNext($event)">
                        <span class="material-icons-outlined" >
                        arrow_forward_ios
                        </span>
                    </div>
                    <div class="slide-container-image" ref="slide" >
                        <img v-for="comedy in comedyList" :key="comedy.Id" :src="`https://image.tmdb.org/t/p/w300/${comedy.backdrop_path}?api_key=${apiKey}`" alt="">
                    </div>
                    <div class="move-arrows arrow-back" @click="scrollBack($event)" >
                        <span class="material-icons-outlined">
                            arrow_back_ios
                        </span>
                    </div>
                </section>
                
                
                
                
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        data(){
            return{
                apiKey: process.env.VUE_APP_API_KEY,
            }
        },
        computed:{
            ...mapState(['originalsList', 'comedyList']),
            ...mapActions(['getNetflixOriginals', 'getComedyGenre'])
        },
        async created(){
        // Fetch Originals Series
        this.getNetflixOriginals
        this.getComedyGenre
       },
       methods: {
        scrollNext($event){
            let nodeParent = $event.target.closest('div').nextSibling    
            let slideAmountLeft = window.innerWidth;
            nodeParent.scrollBy({left: slideAmountLeft, behavior: 'smooth'});
            
        },
        scrollBack($event){
            let nodeParent = $event.target.closest('div').previousSibling
            let slideAmountRight = window.innerWidth
            nodeParent.scrollBy({left: -slideAmountRight, behavior: 'smooth'});
        }

  },
    }
</script>

<style lang="css" >
.slide-container{
    position: relative;
    z-index: 999;
    
}
.slide-media{
    
    transition: all ease 0.5s;
    z-index: 999;
    
}
.slide-media h2{
    color: #fff;
    font-size: 2rem;
    padding: 0 30px;
    margin-top: 10px;
    
}
.slide-media .slide-container-image{
    display: flex;
    overflow-x: scroll;
    place-items: center;
    width: 100%;
}
.slide-media .slide-container-image::-webkit-scrollbar {
  display: none;
}
.slide-media img{
    transform: scale(0.95);
    border-radius: 0.25rem;
    margin: 20px 0;
    transition: all ease 0.2s;
}
.slide-media img:hover{
    cursor: pointer;
    transform: scale(1.1);
    z-index: 9;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.8);
    border-radius: 0.25rem;
}
.move-arrows{
    position: absolute;
    background-color: #141414;
    color: white;
    top: 2.5rem;
    display: flex;
    align-items: center;
    width: 2rem;
    bottom: 0;
    z-index: 999;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    
}
.slide-media:hover .move-arrows{
    opacity: 0.5;
}
.arrow-next{
    right: 0;
}
</style>
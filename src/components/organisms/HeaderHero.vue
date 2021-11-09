<template>
    <div class="header-hero">
        <div class="header-hero-content">
            <h1 v-if="topHeroData.original_title">{{ topHeroData.original_title }}   </h1>
            <h1 v-else>{{ topHeroData.name }}   </h1>
            <p>
                {{ topHeroData.overview }}
            </p>
            <div class="hero-buttons">
                <PlayButton/>
                <InfoButton/>
            </div>
        </div>
        <img :src="`https://image.tmdb.org/t/p/original/${topHeroData.backdrop_path}?api_key=${apiKey}`" alt="">
        <div class="fade-rigth"></div>
        <div class="fade-bottom"></div>
    </div>
</template>

<script>
import { PlayButton, InfoButton } from '@/components/atoms';
// import {  mapGetters } from 'vuex';

    export default {
        props: ['topHeroData'],
        data(){
            return{
                apiKey: process.env.VUE_APP_API_KEY
            }
        },
        components: {
            PlayButton,
            InfoButton
        }
    }
</script>

<style lang="css" scoped>

.header-hero{
    min-height: 90vh;
    background-color: #444;
    padding: 70px 30px;
    color: #fff;
    display: flex;  
    position: relative;
    overflow: hidden;
}
.header-hero-content{
    max-width: 50%;
    min-height: 100%;
    /* border: 1px solid red; */
    display: grid;
    align-self: center;
    gap: 1rem;
}
.header-hero h1{
    font-size: 4rem;
}
.header-hero p , h1, .hero-buttons{
    z-index: 4;
}
.hero-buttons{
    display: flex;
    gap: 1rem;
}
img{
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:100%;
}
.fade-rigth, .fade-bottom{
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    top: 0;
}
.fade-rigth{
    background: linear-gradient(to right, var(--background), transparent)
}
.fade-bottom{
    background: linear-gradient(to top, var(--background) 1%, transparent 20%)
}
</style>
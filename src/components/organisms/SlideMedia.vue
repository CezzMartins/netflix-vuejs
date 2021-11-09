<template>
    <section class="slide-section">
        <div class="slide-media" >
                <div class="move-arrows arrow-next" @click="scrollNext()">
                    <span class="material-icons-outlined" >
                    arrow_forward_ios
                    </span>
                </div>
                <div class="move-arrows arrow-back" @click="scrollBack" >
                    <span class="material-icons-outlined">
                        arrow_back_ios
                    </span>
                </div>
            <slot>
                
            </slot>
        </div>
    </section>
</template>

<script>
    export default {
        props:['scrollNext', 'scrollBack'],
        methods: {
           
        }
    }
</script>

<style lang="css" >

.slide-media{
    position: relative;
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
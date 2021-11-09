<template>
    <div class="slide-media" >
        <slot/>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="css" >
.slide-media{
    /* border: 1px solid red; */
    
    
 
}
.slide-media h2{
    color: #fff;
    font-size: 2rem;
    padding: 0 30px;
}
.slide-media .slide-container-image{
    display: flex;
    overflow: scroll;
    width: 100%;
}

.slide-media img{
    transform: scale(0.95);
    border-radius: 0.25rem;
}

</style>
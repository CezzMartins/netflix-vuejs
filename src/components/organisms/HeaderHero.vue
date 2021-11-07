<template>
    <div class="header-hero">
        <div class="header-hero-content">
            <h1>The Good Place</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, velit doloribus nobis, amet iusto nostrum repellendus nam laboriosam reiciendis ullam vitae necessitatibus dignissimos explicabo saepe? Saepe provident doloribus eveniet alias.
            </p>
            <div class="hero-buttons">
                <PlayButton/>
                <InfoButton/>
            </div>
        </div>
    </div>
</template>

<script>
import { PlayButton, InfoButton } from '@/components/atoms';
    export default {
        components: {
            PlayButton,
            InfoButton
        }
    }
</script>

<style lang="css" scoped>
.header-hero{
    /* border: 1px solid red; */
    min-height: 90vh;
    background-color: #444;
    padding: 70px 30px;
    color: #fff;
    display: flex;  
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
.hero-buttons{
    display: flex;
    gap: 1rem;
}
</style>
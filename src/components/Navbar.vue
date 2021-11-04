<template>
    <header>
        <nav class="navbar container">
            
            <div class="navbar--logo">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <ul>
                <li>
                    <router-link to="#">Home</router-link>
                    <router-link to="#">TV Shows</router-link>
                    <router-link to="#">Movies</router-link>
                    <router-link to="#">New & Popular</router-link>
                    <router-link to="#">My list</router-link>
                </li>
            </ul>
            <div class="navbar--user">
                <span class="material-icons">
                    search
                </span>
                <span>
                    kids
                </span>
                <div class="navbar--user-avatar"> :) </div>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
header{
    background: rgba(0,0,0,0.5);
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
}
.navbar{
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr;
    align-items: center;
    height: 68px;
    color: #FFF;
}
.navbar a{
    color: #FFF;
    transition: all ease 0.2s;
}
.navbar a:hover{
    filter: brightness(0.8);
}
.navbar ul{
    justify-self: start;
    list-style: none;
}
.navbar ul li a{
    padding: 1rem;
}
.navbar--user{
    display: flex;
    align-items: center;
    justify-self: end;
    gap: 1rem;
}
.material-icons{
    cursor: pointer;
}
.navbar--user-avatar{
    background: #E6B209;
    height: 40px;
    width: 40px;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

img{
    width: 100px;
}
</style>
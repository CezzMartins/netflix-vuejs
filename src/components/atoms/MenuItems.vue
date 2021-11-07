<template>
    <ul class="menu-items">
        <li><router-link to="">Home</router-link></li>
        <li><router-link to="">TVShow</router-link></li>
        <li><router-link to="">Movies</router-link></li>
        <li><router-link to="">New & Popular</router-link></li>
        <li><router-link to="">My List</router-link></li>
    </ul>
</template>

<style lang="css" scoped>

.menu-items{
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    
}
.menu-items a{
    font-size: 1rem;
    color: #fff;
    transition: filter ease 0.2s;
}
.menu-items a:hover{
    filter: brightness(0.8);
}

</style>
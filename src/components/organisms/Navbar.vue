<template>
    <header class="header" :class="[checkPosition ? 'header-black' : 'navbar']" >
        <nav class="navbar">
            <Logo/>
            <MenuItems/>
            <UserOptions/>
        </nav>
    </header>
</template>

<script>
import { Logo, MenuItems} from '@/components/atoms';
import { UserOptions} from '@/components/molecules';
    export default {
        components: {
            Logo, MenuItems, UserOptions
            
        },
        data(){
            return{
                scrollPosition: window.window.scrollY,
                checkPosition: false
            }
        },
        created(){
           // update scroll position on scroll
            window.addEventListener('scroll', () => {
                this.scrollPosition = window.window.scrollY
            }) 
       },
        watch: {
            scrollPosition(newScrollPosition){
                if(newScrollPosition >= 100){
                    this.checkPosition = true
                }else{
                    this.checkPosition = false
                }
                
            }
        },
       
    }
</script>

<style lang="css" scoped>
.header{
    max-height: 70px;
    min-height: 70px;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    top: 0;
    z-index: 15;
    transition: all ease 0.2s;
    /* background: rgba(0, 0, 0, 0.315); */
}
.header-black{
    background: rgba(0, 0, 0, 0.8); 
}

.navbar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid green; */
    color: #fff;
    gap: 1rem;
}
.menu-items{
    flex: 1;
}
</style>
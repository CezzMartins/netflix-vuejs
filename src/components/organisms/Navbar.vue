<template>
    <header class="header">
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
        }
    }
</script>

<style lang="css" scoped>
.header{
    max-height: 70px;
    min-height: 70px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 0 30px;
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
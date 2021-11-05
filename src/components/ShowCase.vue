<template>
    <header class="showcase">
        <div class="container">
            <div class="showcase--content">
                <div>
                    <h1>Titulo</h1>
                    <h3>#You Should Watch</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi expedita nesciunt ducimus sit perspiciatis ad non debitis fugit rem autem cum molestias amet corrupti aspernatur in distinctio assumenda. Itaque!
                    </p>
                </div>
                <div class="showcase--buttons">
                    <button class="showcase--play-button">
                        <span class="material-icons">
                            play_arrow
                        </span>
                        Play
                    </button>
                    <button class="showcase--info-button">
                        <span class="material-icons-outlined">
                            info
                        </span>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.showcase{
    border: 1px solid red;
    margin-top: -68px;
    height: 90vh;
    background: #c4c4c4;
}
.showcase h1{
    font-size: 7rem;
}
.showcase h3{
    font-size: 2.5rem;
    margin: 1rem 0;
}
.showcase p {
    font-size: 1.5rem;
}
.showcase--content{
    border: 1px solid red;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}
.showcase--buttons{
    display: flex;
    align-items: center;
}
button{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.5rem;
    width: 6rem;  
    outline: none;
    font-weight: 700;
    font-size: 1.2rem;
    
    cursor: pointer;
    margin: 2rem 0;
    
    border: none;
    border-radius: 0.25rem;
    transition: all ease 0.2s;
}
.showcase--play-button{
    background-color: #fff;
    
}
.showcase--play-button:hover{
    filter: brightness(0.9);
}
.showcase--info-button{
    background-color: rgba(0,0,0,0.3);
    width: 10rem;
    margin-left: 1rem;   
}
.showcase--info-button:hover{
    background-color: rgba(0,0,0,0.5);
}
</style>
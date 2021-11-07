<template>
  <button class="button-play">
      <span class="material-icons"> play_arrow </span>
      <span>Play</span>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.button-play{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius:0.5rem;
    border: none;
    height: 3.5rem;
    width: 9rem;
    font-size: 1.5rem;
    font-weight: bold;
    transition: filter ease 0.2s;
}
.button-play:hover {
    filter: brightness(0.8);
    cursor: pointer;
}
.button-play .material-icons{
    font-size: 2rem;
}
</style>
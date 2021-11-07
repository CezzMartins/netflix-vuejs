<template>
  <button class="button-info">
      <span class="material-icons-outlined"> info </span>
      <span>More Info</span>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.button-info{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    color: #FFF;
    gap: 0.25rem;
    border-radius:0.5rem;
    border: none;
    height: 3.5rem;
    width: 11rem;
    font-size: 1.5rem;
    font-weight: bold;
    transition: filter ease 0.2s;
}
.button-info:hover {
    filter: brightness(0.8);
    cursor: pointer;
}
.button-info .material-icons{
    font-size: 2rem;
}
</style>
<template>
  <div class="wrapper">
    <button class="counter-yellow" @click="store.increment">
      + counter (Remote)
    </button>
    <button class="counter-yellow" @click="store.addArray('data remote')">
      + Array (Remote)
    </button>
  </div>
</template>
<script setup>
// import { storeToRefs } from "pinia";
import { useStore } from "../stores/index";

const store = useStore();
</script>
<style scoped>
.wrapper {
  /* padding: 10px; */
  margin-top: 5px;
  border: 2px dashed blue;
}
.counter {
  border: 0 solid #e2e8f0;
  margin-top: 10px;
  background-color: rgb(82, 178, 223);
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: rgb(24, 24, 24);
}
</style>

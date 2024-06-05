<template>
  <!-- <div @click="click" style="cursor: pointer">Vite Content Two</div> -->
  <div class="wrapper">
    <div class="counter-yellow">Total Counter (from pinia): {{ count }}</div>
    <div class="counter2">Data array (from pinia): {{ dataArray }}</div>
  </div>

  <!-- </button> -->
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../stores/index";

const store = useStore();
const { count, dataArray } = storeToRefs(store);
</script>
<style scoped>
.wrapper {
  margin-top: 15px;
  padding: 10px;
  border: 2px dashed blue;
}
/* .counter {
  border: 0 solid #e2e8f0;
  background-color: rgb(253, 244, 138, 223);
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: rgb(24, 24, 24);
} */
.counter2 {
  /* border: 0 solid #e2e8f0; */
  background-color: rgb(253, 244, 138, 223);
  border-radius: 0.25rem;
  font-weight: 700;
  /* padding: 0.5rem 1rem 0.5rem 1rem; */
  color: rgb(24, 24, 24);
}
</style>

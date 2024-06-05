<template>
  <!-- <div @click="click" style="cursor: pointer">Vite Content</div> -->
  <button class="counter" @click="store.increment">+ counter (Host)</button>
  <button class="counter" @click="store.addArray('data from host')">
    + Array (Host)
  </button>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../stores/counter";
const store = useStore();
// const { count } = storeToRefs(store);
// import router from "../router";
// export default {
//   methods: {
//     click() {
//       // alert("im from Vite Updated with route");
//       router.push("/page-two");
//     },
//   },
// };
</script>
<style scoped>
.counter {
  border: 0 solid #e2e8f0;
  margin-top: 10px;
  background-color: rgb(246, 179, 82);
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: rgb(24, 24, 24);
  margin-right: 2px;
}
</style>

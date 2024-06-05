<template>
  <div @click="click" style="cursor: pointer">To page two</div>
</template>
<script setup>
// import { storeToRefs } from "pinia";
// import { useStore } from "../stores/index";

// import { useStore } from "../stores/counter";
// const store = useStore();
// const store = useStore();
// const { count } = storeToRefs(store);

// import router from "../router";

const emit = defineEmits(["click"]);
const click = () => emit("click");
// const click = () => router.push("/page-two");
</script>
<style scoped></style>

<template>
  <div class="main">
    <div class="vite-content" style="margin-top: 30px">
      <Content />
    </div>
    <!-- <div class="webpack-content">
      <webpack-content />
    </div> -->
    <div class="vite-content-two">
      <content-two @click="toPageTwo" />
    </div>
    <div class="bg-blue">
      <buttons />
    </div>
    <div class="webpack-content">
      <counter />
    </div>
  </div>
</template>

<script setup>
import Content from "../components/Content.vue";
import router from "../router";

// export default {
//   components: {
//     Content,
//   },
// };

const toPageTwo = () => {
  router.push("/page-two");
};
// alert("im from Vite Updated with route");
</script>

<style scoped>
.main {
  text-align: center;
  border-radius: 20px;
  border-style: dashed;
  border-width: 2px;
  border-color: red;
  width: 300px;
  min-height: 300px;
  height: auto;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.vite-content {
  background-color: #42b983;
  height: 50px;
  text-align: center;
  text-justify: distribute-center-last;
  line-height: 50px;
}

.vite-content-two {
  background-color: #e73c3c;
  height: 50px;
  text-align: center;
  text-justify: distribute-center-last;
  line-height: 50px;
}

.bg-blue {
  background-color: #00bcd4;
  height: 50px;
  text-align: center;
  text-justify: distribute-center-last;
  line-height: 50px;
}

.webpack-content {
  /* background-color: #00bcd4; */
  height: 50px;
  text-align: center;
  text-justify: distribute-center-last;
  line-height: 50px;
}
</style>

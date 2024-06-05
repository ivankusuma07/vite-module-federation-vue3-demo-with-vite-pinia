import { createApp } from "vue";
// import Layout from "./views/Layout.vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import webpackContent from "webpack-side/Content";
// import { piniaModule } from "vite-side/pinia";

// const { createPinia } = piniaModule;
const app = createApp(App);

// app.component("webpack-content", webpackContent);

app.use(router);
app.use(createPinia());
app.mount("#root");

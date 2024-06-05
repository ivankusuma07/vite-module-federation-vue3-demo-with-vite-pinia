import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/main.css";
// import Layout from "./views/Layout.vue";
import App from "./App.vue";
import router from "./router";
// import webpackContent from "webpack-side/Content";
import ContentTwo from "vite-side-two/Content";
import Button from "vite-side-two/Button";
import counter from "vite-side-two/Counter";
const app = createApp(App);

// app.component("webpack-content", webpackContent);
app.component("content-two", ContentTwo);
app.component("counter", counter);
app.component("buttons", Button);
app.use(router);
app.use(createPinia());
app.mount("#root");

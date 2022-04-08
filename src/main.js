import { createApp } from 'vue'
import App from './App.vue'
import Vue from "vue"

createApp(App).mount("#app");

// I don't use it by default.
new Vue({
    render: h => h(App)
}).$mount("#app");

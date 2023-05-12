import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Test from "./components/Test.vue";
const app = createApp({
    mounted() {
        console.log('The app is working')
     }
})
// import Test from './components/Test.vue'
app.component('Test', Test);
app.mount("#app");
// Vue.component('test', require('./components/Test.vue'));

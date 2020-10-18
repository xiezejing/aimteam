// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);

app.mount('#app')
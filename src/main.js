import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

// createApp(App).mount('#app')

const app = createApp(App);
app.use(router); // 使用路由配置
app.mount('#app');
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import 'normalize.css'
import '@/styles/index.less'

createApp(App).use(router).mount('#app')

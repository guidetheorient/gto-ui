import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GUi from './packages/index'

createApp(App).use(router).use(GUi).mount('#app')

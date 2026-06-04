import './assets/main.css'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config.ts'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ToastPlugin from 'vue-toast-notification';
import App from './App.vue'
import router from './router'

// import '@formkit/themes/genesis'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(plugin, defaultConfig(config))
app.use(ToastPlugin);
app.mount('#app')

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import formKitConfig from '../formkit.config'
import './assets/main.css'

const app = createApp(App)
app.use(plugin, defaultConfig(formKitConfig as Parameters<typeof defaultConfig>[0]))
app.mount('#app')

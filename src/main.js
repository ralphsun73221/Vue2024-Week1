// import './assets/main.css'

import { createApp } from 'vue'
import App from './AppTree.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

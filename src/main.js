import { createApp } from 'vue'
import '@/assets/scss/common.scss'
import '@/assets/scss/layout.scss'
import App from '@/App.vue'
import router from '@/router/router.js'
import store from '@/store/store'

let app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
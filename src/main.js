/*
[IMPORT] Vue.js
*/
//vue import
import { createApp } from 'vue'

// App import
import App from './App.vue'
import Appstore from './store/index'
import Approuter from './router'

/*
[APP] Launch 
*/
createApp(App)
.use( Appstore )
.use( Approuter )
.mount('#app')

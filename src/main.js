import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/element.scss'

import Dashboard from './views/Dashboard.vue'
import Pending from './views/Pending.vue'

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        { path: '/dashboard/work', component: <Pending /> },
        { path: '/work', component: <Dashboard title="My work" /> },
        { path: '/work/completed', component: <Dashboard title="Completed work" /> }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')

import Home from '@/containers/Home.vue';
import Page1 from '@/containers/Page1.vue';
import Page2 from '@/containers/Page2.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
 { path: '/', component: Home },
 { path: '/page1', component: Page1 },
 { path: '/page2', component: Page2 }
]

export default createRouter({
 history: createWebHistory(),
 routes
})
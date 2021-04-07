import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ViewDrink from '../views/ViewDrink.vue';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/view-drink/:drinkId',
        name: 'ViewDrink',
        component: ViewDrink,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: "/posts",
            name: "posts",
            component: () => import("./components/post/Index")
        },
        {
            path: '/add',
            name: 'posts-add',
            component: () => import('./components/post/Add')
        },
        {
            path: '/post/:id',
            name: 'posts-detail',
            component: () => import('./components/post/Show')
        }
    ]
})
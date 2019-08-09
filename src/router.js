import Router from 'vue-router'
import Vue from 'vue'
import login from './components/login.vue'
import todo from './components/todo.vue'
import done from './components/done.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: login,
    }, {
        path: '/todo',
        name: 'todo',
        component: todo,
    },{
        path: '/done',
        name: "done",
        component: done
    }, {
        path: '/',
        redirect: '/login'
    }]
})
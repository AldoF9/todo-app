import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateTarea from "../pages/CreateTarea";
import ListTarea from "../pages/ListTarea";
import ListAllTarea from "../pages/ListAllTarea";
import ListPendingTarea from "../pages/ListPendingTarea";
import CompleteTarea from "../pages/CompleteTarea";
import DeleteTarea from "../pages/DeleteTarea";
import Form from "../pages/Form";
import Login from "../pages/Login";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:
 [
    {
        path: '/create-tarea',
        name: 'create_tarea',
        component: CreateTarea,
        meta: {requiredAuth: true},
    },
    {
        path: '/list-tarea',
        name: 'list_tarea',
        component: ListTarea,
        meta: {requiredAuth: true},
    },
    {
        path: '/list-all-tarea',
        name: 'list_all_tarea',
        component: ListAllTarea,
        meta: {requiredAuth: true},
    },
    {
        path: '/list-pending-tarea',
        name: 'list_pending_tarea',
        component: ListPendingTarea,
        meta: {requiredAuth: true},
    },
    {
        path: '/complete-tarea',
        name: 'complete_tarea',
        component: CompleteTarea,
        meta: {requiredAuth: true},
    },
    {
        path: '/delete-tarea',
        name: 'delete_tarea',
        component: DeleteTarea,
        meta: {requiredAuth: true},
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
]});



router.beforeEach((to, from, next) => {
    if(to.matched.some((record) => record.meta.requiredAuth)){
        if(localStorage.getItem('authFlag') === "true"){
            next();

        }else{
            next({name:'login'});
        }

    }else{
        next();
    }
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateTarea from "../pages/CreateTarea";
import ListTarea from "../pages/ListTarea";
import ListAllTarea from "../pages/ListAllTarea";
import ListPendingTarea from "../pages/ListPendingTarea";
import CompleteTarea from "../pages/CompleteTarea";
import DeleteTarea from "../pages/DeleteTarea";
import Logout from "../pages/Logout";

Vue.use(VueRouter);

let routes = [
    {
        path: '/create-tarea',
        name: 'create_tarea',
        component: CreateTarea,
    },
    {
        path: '/list-tarea',
        name: 'list_tarea',
        component: ListTarea,
    },
    {
        path: '/list-all-tarea',
        name: 'list_all_tarea',
        component: ListAllTarea,
    },
    {
        path: '/list-pending-tarea',
        name: 'list_pending_tarea',
        component: ListPendingTarea,
    },
    {
        path: '/complete-tarea',
        name: 'complete_tarea',
        component: CompleteTarea,
    },
    {
        path: '/delete-tarea',
        name: 'delete_tarea',
        component: DeleteTarea,
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
    },
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});

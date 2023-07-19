import("../bootstrap");

import Vue from "vue";
import App from "./pages/App.vue";
import router from "./router/router";
import vuetify from "./vuetify/vuetify";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

export const bust = new Vue();

const admin = new Vue({
    el: "#admin",
    router,
    vuetify,
    render: (h) => h(App),
});

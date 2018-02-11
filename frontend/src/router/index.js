import Vue from 'vue';
import Router from 'vue-router';
import Signin from '../pages/Signin/Signin.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        name: 'Signin',
        components: {
            contents: Signin,
        },
    }],
});

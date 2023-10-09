import {getRole, getToken, removeCookie, setCookie} from "@/utils/methods";
import {storage_name} from "@/utils";


export const checkRoutes = (router) => {
    router.beforeEach(function(to, from, next) {
        let role = getRole(storage_name);
        let writeAuth = to.matched.some(route => route.meta.auth && (role ? route.meta.role === role : true));
        let isAuth = Boolean(getToken(storage_name));
        if (writeAuth && !isAuth) {
            next({path: '/login', query: {return_url: to.path}})
        } else if (!writeAuth && isAuth && !to.meta.global) {
            next('/404')
        } else {
            next()
        }
    });
}

export function setAuth(data) {
    setCookie(storage_name, data);
}

export function logout() {
    removeCookie(storage_name);
}

// const config = {
//     auth: bearer,
//     http: axios,
//     router: router,
//     tokenDefaultName: 'laravel-vue-spa',
//     tokenStore: ['localStorage'],
//     rolesVar: 'role',
//     registerData: {url: 'auth/register', method: 'POST', redirect: '/login'},
//     loginData: {url: 'auth/login', method: 'POST', redirect: '', fetchUser: true},
//     logoutData: {url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: true},
//     fetchData: {url: 'auth/user', method: 'GET', enabled: true},
//     refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
// }

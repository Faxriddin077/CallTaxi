import {createRouter, createWebHistory} from "vue-router";
import {checkRoutes} from "@/utils/auth";

import Admin from "@/layouts/Admin";
import OperatorLayout from "@/layouts/Operator";
import Auth from "@/layouts/Auth";
import Login from "@/views/auth/Login";

import {ADMIN, OPERATOR, NAVIGATE} from "@/utils/role";
import NotFound from "@/views/NotFound";
import {admin} from "@/routes/admin";
import {operator} from "@/routes/operator";


export const routes = [
    {
        path: '/',
        label: "Admin",
        component: Admin,
        redirect: NAVIGATE,
        children: admin
    },
    {
        path: '/operator',
        label: "Operator",
        redirect: '/bookings/create',
        component: OperatorLayout,
        meta: {auth: true, role: OPERATOR},
        children: operator
    },
    {
        path: '/login',
        component: Auth,
        children: [
            {
                path: '',
                name: 'login',
                component: Login
            }
        ]
    },
    {
        path: '/about-us',
        meta: {global: true},
        component: ADMIN,
    },
    {
        path: '/:pathMatch(.*)*',
        meta: {global: true},
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

checkRoutes(router);

export default router;

import {OPERATOR} from "@/utils/role";
import Map from "@/views/operator/Maps";
import EmptyLayout from "@/layouts/EmptyLayout";
import ClientTable from "@/views/operator/Clients";
import OrdersInProcess from "@/views/operator/Orders/orders-in-process";


export const operator = [
    {
        path: "/booking",
        label: "Buyurtma qo'shish",
        icon: 'fas fa-file-circle-exclamation',
        meta: {auth: true, role: OPERATOR},
        component: Map
    },
    {
        path: "/clients",
        label: "Mijozlar",
        icon: 'fas fa-file-circle-exclamation',
        name: 'operator.clients',
        meta: {auth: true, role: OPERATOR},
        component: EmptyLayout,
        children: [
            {
                path: '',
                component: ClientTable,
                meta: {auth: true, role: OPERATOR},
            },
            {
                path: '/create',
                component: ClientTable,
                meta: {auth: true, role: OPERATOR},
                name: 'operator.clients.create'
            }
        ]
    },
    {
        path: "/orders-process",
        label: "jarayondagi buyurtmalar",
        icon: 'fas fa-file-circle-exclamation',
        meta: {auth: true, role: OPERATOR},
        component: EmptyLayout,
        children: [
            {
                path: '',
                component: OrdersInProcess,
                meta: {auth: true, role: OPERATOR},
            }
        ]
    }
]

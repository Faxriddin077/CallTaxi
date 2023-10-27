import {OPERATOR} from "@/utils/role";
import Map from "@/views/operator/Maps";
import EmptyLayout from "@/layouts/EmptyLayout";
import Bookings from "@/views/operator/Bookings/index.vue";
import BookingsInProcess from "@/views/operator/Bookings/in-process.vue";


export const operator = [
    {
        path: "/booking",
        label: "Buyurtma qo'shish",
        icon: 'fas fa-file-circle-exclamation',
        meta: {auth: true, role: OPERATOR},
        component: Map
    },
    {
        path: "/bookings-in-process",
        label: "Jarayondagi buyurtmalar",
        icon: 'fas fa-file-circle-exclamation',
        name: 'operator.bookings_in_process',
        meta: {auth: true, role: OPERATOR},
        component: EmptyLayout,
        children: [
            {
                path: '',
                name: 'operator.bookings_in_process.index',
                component: BookingsInProcess,
                meta: {auth: true, role: OPERATOR},
            }
        ]
    },
    {
        path: "/bookings",
        label: "Barcha buyurtmalar",
        icon: 'fas fa-file-circle-exclamation',
        name: 'operator.bookings',
        meta: {auth: true, role: OPERATOR},
        component: EmptyLayout,
        children: [
            {
                path: '',
                name: 'operator.bookings.index',
                component: Bookings,
                meta: {auth: true, role: OPERATOR},
            }
        ]
    }
]

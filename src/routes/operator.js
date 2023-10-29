import {OPERATOR} from "@/utils/role";
import BookingCreate from "@/views/operator/form.vue";
import Drivers from "@/views/operator/drivers.vue";
import BookingsInProcess from "@/views/operator/in-process.vue";


export const operator = [
    {
        path: "/bookings/create",
        label: "Buyurtma qo'shish",
        icon: 'fas fa-file-circle-exclamation',
        name: 'operator.bookings.create',
        meta: {auth: true, role: OPERATOR},
        component: BookingCreate
    },
    {
        path: "/bookings/in-process",
        label: "Jarayondagi buyurtmalar",
        icon: 'fas fa-file-circle-exclamation',
        name: 'operator.bookings.in_process',
        meta: {auth: true, role: OPERATOR},
        component: BookingsInProcess,
    },
    {
        path: "/drivers/active",
        label: "Haydovchilar",
        icon: 'fas fa-file-circle-exclamation',
        name: 'operator.drivers.index',
        meta: {auth: true, role: OPERATOR},
        component: Drivers,
    }
]

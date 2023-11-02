import {ADMIN, OPERATOR} from "@/utils/role";
import TestView from "@/views/admin/TestView";
import Statistics from "@/views/admin/statistics.vue";
import BookingsHistory from "@/views/admin/Bookings/history.vue";
import EmptyLayout from "@/layouts/EmptyLayout";
import Operators from "@/views/admin/Operators";
import OperatorForm from "@/views/admin/Operators/form";
import Drivers from "@/views/admin/Drivers";
import DriverForm from "@/views/admin/Drivers/form";
import Tariffs from "@/views/admin/Tariffs";
import TariffForm from "@/views/admin/Tariffs/form";
import CarTypes from "@/views/admin/CarTypes";
import CarTypeForm from "@/views/admin/CarTypes/form";
import Districts from "@/views/admin/Districts";
import DistrictForm from "@/views/admin/Districts/form";
import Points from "@/views/admin/Points";
import PointForm from "@/views/admin/Points/form";


export const admin = [
    {
        path: "/dashboard",
        label: "Ko\u2018rsatkichlar",
        icon: 'fas fa-chart-line',
        meta: {auth: true, role: ADMIN},
        component: Statistics
    },
    {
        path: "/bookings-history",
        label: "Buyurtmalar tarixi",
        icon: 'fas fa-solid fa-book',
        meta: {auth: true, role: ADMIN},
        component: BookingsHistory
    },
    {
        path: "/operators",
        label: "Operatorlar",
        name: 'admin.operators',
        icon: 'fas fa-headphones',
        meta: {auth: true, role: ADMIN},
        component: EmptyLayout,
        children: [
            {
                path: '',
                name: 'admin.operators.index',
                component: Operators,
                meta: {auth: true, role: ADMIN}
            },
            {
                path: 'create',
                component: OperatorForm,
                meta: {auth: true, role: ADMIN}
            },
            {
                path: ':id',
                component: OperatorForm,
                meta: {auth: true, role: OPERATOR}
            }
        ]
    },
    {
        path: "/drivers",
        label: "Haydovchilar",
        name: 'admin.drivers',
        icon: 'fas fa-taxi',
        meta: {auth: true, role: ADMIN},
        component: EmptyLayout,
        children: [
            {
                path: '',
                name: 'admin.drivers.index',
                component: Drivers,
            },
            {
                path: 'create',
                component: DriverForm
            },
            {
                path: ':id',
                component: DriverForm
            }
        ]
    },
    {
        path: "/tariffs",
        label: "Tariflar",
        icon: 'fas fa-file-circle-exclamation',
        meta: {auth: true, role: ADMIN},
        component: EmptyLayout,
        children: [
            {
                path: '',
                component: Tariffs,
            },
            {
                path: 'create',
                component: TariffForm,
            },
            {
                path: ':id',
                component: TariffForm
            }
        ]
    },
    {
        path: "/car-types",
        label: "Mashina turlari",
        icon: 'fas fa-taxi',
        meta: {auth: true, role: ADMIN},
        component: EmptyLayout,
        children: [
            {
                path: '',
                component: CarTypes
            },
            {
                path: 'create',
                component: CarTypeForm,
            },
            {
                path: ':id',
                component: CarTypeForm
            }
        ]
    },
    {
        path: "/points",
        label: "Manzillar",
        icon: 'fas fa-location',
        meta: {auth: true, role: ADMIN},
        component: EmptyLayout,
        children: [
            {
                path: '',
                component: Points
            },
            {
                path: 'create',
                component: PointForm,
            },
            {
                path: ':id',
                component: PointForm
            }
        ]
    },
    {
        path: "/districts",
        label: "Tumanlar",
        icon: 'fas fa-city',
        meta: {auth: true, role: ADMIN},
        component: EmptyLayout,
        children: [
            {
                path: '',
                component: Districts
            },
            {
                path: 'create',
                component: DistrictForm,
            },
            {
                path: ':id',
                component: DistrictForm
            }
        ]
    },
    {
        path: "/test-view",
        label: "Jadval",
        icon: 'fas fa-table',
        meta: {auth: true, role: ADMIN},
        component: TestView
    }
];

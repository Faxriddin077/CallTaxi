import {getRole} from "@/utils/methods";

export const ADMIN = 1;
export const OPERATOR = 2;

export const DASHBOARD = {
    [ADMIN]: '/dashboard',
    [OPERATOR]: '/operator',
    default: '/login'
}

export const NAVIGATE = () => {
    return DASHBOARD[getRole()] ?? DASHBOARD.default
}

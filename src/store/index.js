import {createStore} from "vuex";

import request from "@/utils/request";
import {storage_name} from "@/utils";
import {getRole, getToken, parse, stringify} from "@/utils/methods";


export default createStore({
    state: {
        config: {
            headers: {
                Authorization: "Bearer " + getToken(storage_name)
            }
        },
        role: getRole(storage_name),
        token: getToken(storage_name)
    },
    getters: {
        config(state) {
            return parse(stringify(state.config))
        }
    },
    mutations: {
        setAuth(state) {
            state.token = getToken(storage_name);
            state.role = getRole(storage_name);

            state.config.headers.Authorization = "Bearer " + state.token;
        },
        setHeader(state, payload) {
            // let key = Object.keys(payload)[0];
            state.config.headers = {
                ...state.config.headers,
                ...payload
            };
        }
    },
    actions: {
        // eslint-disable-next-line
        async get({dispatch, commit}, url) {
            let res = await request.get(url, { ...this.getters.config });
            return res.data;
        },
        // eslint-disable-next-line
        async post({dispatch, commit}, {url, model}) {
            let res = await request.post(url, model, { ...this.getters.config });
            return res.data;
        },
        // eslint-disable-next-line
        async put({dispatch, commit}, {url, model}) {
            let res = await request.put(url, model, { ...this.getters.config });
            return res.data;
        },
        // eslint-disable-next-line
        async delete({}, url) {
            let res = await request.delete(url, { ...this.getters.config });
            return res.data
        },
        // eslint-disable-next-line
        async login({}, data) {
            try {
                let res = await request.post('/login', data)
                return res.data;
            } catch (e) {
                // if (e instanceof NetworkError)
                return "Tarmoqda xatolik";
            }
        },
        logout({dispatch, commit}) {
            console.log(dispatch, commit)
        }
    },
    modules: {

    }
});

<template>
    <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div class="rounded-t mb-0 px-6 py-6 text-center">
                        <h2 class="text-blueGray-500 text-sm font-bold">
                            Tizimga kirish
                        </h2>
                        <hr class="mt-6 border-b-1 border-blueGray-300"/>
                    </div>
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div class="text-blueGray-400 text-center mb-3 font-bold">
                            <small>Hisob ma&#8217;lumotlaringiz bilan tizimga kiring</small>
                        </div>
                        <form @submit.prevent="signIn">
                            <div class="relative w-full mb-3">
                                <label for="username" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                    Qisqa nomni kiriting
                                </label>
                                <input type="text" id="username"
                                       class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       placeholder="Qisqa nom"
                                       v-model="username"
                                       autocomplete="off"
                                />
                            </div>

                            <div class="relative w-full mb-3">
                                <label for="password" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                    Yashirin so&#8216;zni kiriting
                                </label>
                                <input type="password" id="password"
                                       class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       placeholder="Yashirin so&#8216;z"
                                       v-model="password"
                                />
                            </div>

                            <div>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" id="customCheckLogin"
                                           class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                                        Eslab qol
                                    </span>
                                </label>
                            </div>

                            <div class="text-center mt-6">
                                <button type="submit" class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                                    Kirish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {setAuth} from "@/utils/auth";


export default {
    name: "login-page",
    title: 'Tizimga kirish',
    data() {
        return {
            username: null,
            password: null
        };
    },
    methods: {
        async signIn() {
            const url = this.$route.query.return_url;
            let res = await this.$store.dispatch('login', {username: this.username, password: this.password, role: 0});
            if (res.success) {
                setAuth(res.data)
                this.$store.commit('setAuth');

                await this.$router.push(url ? url : '/');
            }
        }
    }
};
</script>

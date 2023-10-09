<template>
    <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <router-link to="/" class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    Murojaat taksi
                </router-link>
                <button type="button" class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        v-on:click="setNavbarOpen">
                    <i class="text-white fas fa-bars"></i>
                </button>
            </div>

            <div id="example-navbar-warning" class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
                 :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']">
                <ul class="flex flex-col lg:flex-row list-none mr-auto">
                    <li class="flex items-center">
                        <router-link to="/about-us" class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                            <i class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"/>
                            <span>Shartlar</span>
                        </router-link>
                    </li>
                </ul>
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                    </li>
                    <li class="flex items-center">
                        <a href="https://t.me/anvar_dasturchi"
                           class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                           target="_blank"
                        >
                            <i class="lg:text-blueGray-200 text-blueGray-400 fab fa-telegram text-lg leading-lg"/>
                            <span class="lg:hidden inline-block ml-2">Men</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navbarOpen: false,
        };
    },
    methods: {
        setNavbarOpen: function() {
            this.navbarOpen = !this.navbarOpen;
        }
    }
};
</script>

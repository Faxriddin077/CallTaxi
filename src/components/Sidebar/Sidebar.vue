<template>
  <nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
    <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Toggler -->
      <button
          type="button"
          class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
          to="/"
          class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      >
        Buyurtma taksi
      </router-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown/>
        </li>
        <li class="inline-block relative">
          <user-dropdown/>
        </li>
      </ul>
      <!-- Collapse -->
      <div class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
          v-bind:class="collapseShow"
      >

        <!-- Divider -->
        <hr class="my-4 md:min-w-full"/>
        <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Sahifalar
        </h6>

        <mobile-navbar @toggleCollapse="toggleCollapseShow"/>

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path" v-slot="{ href, navigate, isActive }" v-if="route.section !== 2">
              <a :href="href"
                 @click="navigate"
                 class="text-xs uppercase py-3 font-bold block"
                 :class="[
                     isActive
                     ? 'text-emerald-500 hover:text-emerald-600'
                     : 'text-blueGray-700 hover:text-blueGray-500',
                 ]"
              >
                <i class="mr-2 text-sm" :class="[route.icon, isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                <span>{{ route.label }}</span>
              </a>
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full"/>
        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path" v-slot="{ href, navigate, isActive }" v-if="route.section === 2">
              <a :href="href"
                 @click="navigate"
                 class="text-xs uppercase py-3 font-bold block"
                 :class="[
                     isActive
                     ? 'text-emerald-500 hover:text-emerald-600'
                     : 'text-blueGray-700 hover:text-blueGray-500',
                 ]"
              >
                <i class="mr-2 text-sm" :class="['fas fa-solid fa-book', isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
                <span>{{ route.label }}</span>
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import { routes } from "@/routes";
import MobileNavbar from "@/components/Sidebar/Mobile";
import {getRole} from "@/utils/methods";
// import {menu} from "@/utils/role";


export default {
  name: 'component-sidebar',
  data() {
    return {
      collapseShow: "hidden",
      routes: routes[getRole()-1].children
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    }
  },
  components: {
    MobileNavbar,
    NotificationDropdown,
    UserDropdown
  }
};
</script>

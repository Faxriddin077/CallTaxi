<template>
  <div>
    <a href="#" class="text-blueGray-500 block" ref="btnDropdownRef" v-on:click="toggleDropdown($event)">
      <div class="items-center flex">
        <span class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <img alt="..." class="w-full rounded-full align-middle border-none shadow-lg" :src="image"/>
        </span>
      </div>
    </a>
    <div ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <button type="button" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        <i class="fas fa-user"></i>
        <router-link to="/">
           Hisob
        </router-link>
      </button>
      <button type="button" @click="signOut" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        <i class="fas fa-right-from-bracket"></i>
        Chiqish
      </button>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import image from "@/assets/img/avatar.svg";
import {logout} from "@/utils/auth";


export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image: image,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    signOut() {
      logout();
      this.$router.push('/login');
    }
  },
};
</script>

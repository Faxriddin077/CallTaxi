<template>
  <div>
    <a href="#" class="text-blueGray-500 py-1 px-3" ref="btnDropdownRef"
       v-on:click="toggleDropdown($event)">
      <i class="fas fa-ellipsis-v"></i>
    </a>
    <div class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      ref="popoverDropdownRef"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <router-link :to="full" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        O&#8216;zgartirish
      </router-link>
      <a href="#" @click.prevent="destroy" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        O&#8216;chirish
      </a>
    </div>
  </div>
</template>

<script>
import {createPopper} from "@popperjs/core";

export default {
  props: {
    url: {
      default: null
    },
    id: {
      default: null
    },
    original: {
      default: null
    }
  },
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  computed: {
    full() {
      return this.url + '/' + this.id;
    }
  },
  methods: {
    destroy() {
      this.$store.dispatch('delete', this.original)
      location.reload()
    },
    toggleDropdown: function(event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }
};
</script>

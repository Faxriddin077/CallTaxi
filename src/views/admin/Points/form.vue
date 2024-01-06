<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Ma'lumotlarni yangilash</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="submit">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Asosiy ma'lumotlar
        </h6>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="brand" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Manzil nomini kiriting
              </label>
              <input type="text" id="brand" name="brand"
                     :class="inputClass"
                     placeholder="Qisqa nom"
                     autocomplete="off"
                     v-model="model.name">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="brand" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Manzil adresini kiriting
              </label>
              <input type="text" id="address" name="address"
                     :class="inputClass"
                     placeholder="Tuman"
                     autocomplete="off"
                     v-model="model.target">
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300 border-none">
        <div class="w-full px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div id="google-map-canvas" class="relative w-full rounded h-600-px shadow" ref="map"></div>
          </div>
        </div>

        <div class="flex flex-wrap justify-end">
          <button type="submit"
                  class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3
                  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {createInfoWindow, getGoogleMaps, getPosition, LatLng} from "@/utils/methods";
import {google, map_style} from "@/utils";

export default {
  name: "point-form",
  data() {
    return {
      inputClass: 'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
      model: {}
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', 'admin/addresses/' + this.$route.params.id)
        .then(res => this.model = res.data.address)
    }
    this.markers = [];
    this.map = this.initMap();
  },
  methods: {
    submit() {
      let method = this.$route.params.id ? "put" : "post";
      this.$store.dispatch(method, {
        url: `/admin/addresses/${this.$route.params.id ?? ''}`,
        model: {...this.model, branch_id: 1}
      }).then(() => this.$router.back())
    },
    setPosition(pos) {
      this.model.latitude = pos.lat();
      this.model.longitude = pos.lng();
      this.$emit('setup', getPosition(pos))
    },
    initMap() {
      const position = LatLng()
      const opt = {
        center: position,
        mapTypeId: getGoogleMaps().MapTypeId.ROADMAP,
        zoom: 8, // scroll wheel: false,
        styles: map_style
      };

      const canvas = this.$refs.map; // document.getElementById("map-canvas");
      const map = new google.maps.Map(canvas, opt);
      const marker = new google.maps.Marker({
        position,
        map: map,
        title: "Asosiy",
        animation: google.maps.Animation.DROP
      });

      const infoWindow = createInfoWindow(google);
      marker.addListener('click', () => infoWindow.open(map, marker));

      google.maps.event.addListener(map, 'click', (event) => {
        let pos = event.latLng;
        this.setPosition(pos)
        this.model.latitude = pos.lat();
        this.model.longitude = pos.lng();
        marker.setPosition(pos);
      });

      return map;
    },
  }
}
</script>

<style scoped>

</style>

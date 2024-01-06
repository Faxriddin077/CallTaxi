<template>
  <div id="google-map-canvas" class="relative w-full rounded h-600-px shadow" ref="map"></div>
</template>

<script>
import taxi_icon from '@/assets/img/taxi48.png';

import {createInfoWindow, getGoogleMaps, getPosition, LatLng} from "@/utils/methods";
import {map_style, google} from "@/utils";


export default {
  name: "google-map",
  props: {
    tariff_id: {
      default: 0
    }
  },
  data() {
    return {
      drivers: [],
      taxi_icon
    }
  },
  methods: {
    getLocation() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    },
    async fetchLocation() {
      try {
        const pos = await this.getLocation();
        return {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
      } catch (error) {
        this.$swal.fire({
          title: "Iltimos tizim to'g'ri ishlashi uchun geolokatsiyaga ruxsat bering (yoki brauzeringizni yangilang)!",
          icon: 'info',
          confirmButtonText: 'Ok',
          showCloseButton: true,
        })
        return {
          lat: 41.54214231800138,
          lng: 60.63157875439325
        };
      }
    },
    setPosition(pos) {
      this.$emit('setup', getPosition(pos))
    },
    async initMap() { // main function
      const position = LatLng(await this.fetchLocation())
      const opt = {
        center: position,
        mapTypeId: getGoogleMaps().MapTypeId.ROADMAP,
        zoom: 14, // scroll wheel: false,
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
        marker.setPosition(pos);
        this.setDrivers(map, pos);
      });

      return map;
    },
    async getDrivers(latitude, longitude, tariff_id = 0) {
      let res = await this.$store.dispatch('post', {
        url: '/operator/driver/location',
        model: { latitude, longitude, tariff_id, scope: 10}
      });
      return res.data.drivers;
    },
    async setDrivers(map, pos) {
      this.drivers = await this.getDrivers(pos.lat(), pos.lng(), this.tariff_id)
      this.deleteMarkers();
      for (let driver of this.drivers) {
        this.addMarker({lat: driver.latitude,  lng: driver.longitude}, this.map, driver);
      }
    },
    // Adds a marker to the map and push to the array.
    addMarker(position, map, model) {
      const marker = new google.maps.Marker({
        position,
        map,
        title: model.name,
        icon: this.taxi_icon,
        animation: google.maps.Animation.BOUNCE
      });
      this.markers.push(marker);
    },
    // Sets the map on all markers in the array.
    setMapOnAll(map) {
      for (let marker of this.markers) {
        marker.setMap(map);
      }
    },
    // Removes the markers from the map, but keeps them in the array.
    hideMarkers() {
      this.setMapOnAll(null);
    },
    // Deletes all markers in the array by removing references to them.
    deleteMarkers() {
      this.hideMarkers();
      this.markers = [];
    }
  },
  mounted() {
    this.markers = [];
    this.map = this.initMap();
  },
  watch: {}
};
</script>

<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Buyurtma berish</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="submit">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="phone" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Telefon raqamni kiriting
              </label>
              <input type="text" id="phone"
                     :class="inputClass"
                     placeholder="Telefon raqam"
                     autocomplete="off"
                     required="true"
                     v-model="model.phone"
                     v-mask="'(##) ###-##-##'"
              >
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="address" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Manzilni kiriting
              </label>

              <input v-if="!isSelectVisible" type="text" id="address"
                     :class="inputClass"
                     placeholder="Mijoz manzili"
                     autocomplete="off"
                     v-model="model.address">

              <select v-else type="text" id="address" :class="inputClass" @input="onAddressChange">
                <option value="" selected>Manzilni kiriting</option>
                <option v-for="address of addressList" :key="address.id" :value="address.id">{{ address.name }}</option>
              </select>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label :for="'payment_type'" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                To&#8216;lov turini tanlang
              </label>
              <select id="payment_type" v-model="model.payment_type" :class="inputClass">
                <option value="1" selected>Naqd</option>
                <option value="2">Plastik</option>
              </select>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="description" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mijoz haqida qo&#8216;shimcha
              </label>
              <input type="text" id="description"
                     :class="inputClass"
                     placeholder="Qo&#8216;shimcha"
                     autocomplete="off"
                     v-model="model.description">
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300 border-none">
        <div class="w-full px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <google-map @onLocationMove="onLocationMove" ref="map" :tariff_id="model.tariff_id"/>
          </div>
        </div>

        <br>
        <div class="flex flex-wrap justify-end">
          <button type="submit"
                  class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            E&#8217;lon berish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask';
import GoogleMap from "@/components/Maps/GoogleMap.vue";


export default {
  name: "map-form",
  directives: {mask},
  components: {
    GoogleMap
  },
  data() {
    return {
      inputClass: 'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
      model: {
        payment_type: 1,
        tariff_id: 0
      },
      isSelectVisible: true,
      addressList: [{
        id: 1,
        latitude: 13,
        longitude: 12,
        name: "Shu yer",
        text: "Ishla",
        target: "213",
      }],
      canSubmit: false
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', {url: this.$route.path})
        .then(res => this.model = res)
    }

    this.$store.dispatch('get', {url: "/operator/addresses"})
      .then(res => this.addressList = res?.data?.addresses)
  },
  methods: {
    submit() {
      this.model.phone = this.unmask(this.model.phone)
      this.$store.dispatch("post", {
        url: '/operator/booking/create',
        model: this.model
      }).then(
        (res) => {
          if (res.success) {
            this.model = {
              payment_type: 1,
              tariff_id: 0
            }
            this.$swal.fire({
              icon: 'success',
              title: "Success",
              html: "Buyurtma muvaffaqiyatli berildi!",
              toast: true,
              position: "top-end",
              timer: 3000,
              showConfirmButton: false
            })

            this.isSelectVisible = true;
          } else {
            this.$swal({
              title: "Error!",
              text: res.msg,
              icon: "error",
              confirmButtonText: "OK"
            })
            this.canSubmit = true
          }
        },
        () => this.$router.push({name: 'operator.bookings.in_process'})
      );
    },
    onAddressChange(e) {
      let val = e.target.value;
      if (val.length < 1) {
        this.isSelectVisible = false;
        return;
      }

      let address = this.addressList.find(item => item.id.toString() === val)
      this.model.address = address.name;
      this.model.latitude = address.latitude;
      this.model.longitude = address.longitude;

      this.$refs.map.selectLocation(address)
    },
    onLocationMove(pos) {
      this.model.latitude = pos.lat();
      this.model.longitude = pos.lng();
    }
  }
}
</script>

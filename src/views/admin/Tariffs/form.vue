<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Ma&#8217;lumotlarni yangilash</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="submit">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Asosiy ma&#8217;lumotlar
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="name" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Tarif nomini
              </label>
              <input type="text" id="name"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Nomi"
                     autocomplete="off"
                     v-model="model.name">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="client" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mijoz uchun to&#8216;lovni
              </label>
              <input type="number" id="client"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Mijoz uchun"
                     autocomplete="off"
                     v-model="model.client">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="minute" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Kutish vaqti uchun to&#8216;lov (daqiqasiga)
              </label>
              <input type="number" id="minute"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Kutish puli"
                     autocomplete="off"
                     v-model="model.minute">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="min_pay" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Chaqiruv uchun
              </label>
              <input type="number" id="min_pay"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Chaqiruv uchun"
                     autocomplete="off"
                     v-model="model.min_pay">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="km" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Masofa uchun (km)
              </label>
              <input type="number" id="km"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Masofa uchun"
                     autocomplete="off"
                     v-model="model.km">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="out_city" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Shahar tashqarisi
              </label>
              <input type="number" id="out_city"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Shahar tashqarisi"
                     autocomplete="off"
                     v-model="model.out_city">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="vip" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Vip narxi
              </label>
              <input type="number" id="vip"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Vip narxi"
                     autocomplete="off"
                     v-model="model.vip">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="vip" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mijoz uchun imtiyozli masofa
              </label>
              <input type="number" id="min_km"
                     class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     placeholder="Imtiyozli masofa"
                     autocomplete="off"
                     v-model="model.min_km">
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Qo&#8216;shimcha ma&#8217;lumot
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label :for="'description'" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Ma&#8217;lumot
              </label>
              <textarea type="text" id="description"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Ushbu tarif uchun qo&#8216;shimcha"
                        rows="14"
                        v-model="model.description">
              </textarea>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="img" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Rasm
              </label>
              <img :src="'http://sds.w3soft.uz/storage/tariffs/' + model.img"
                   ref="preview" style="max-height: 300px" onclick="img.click()" alt="Rasm">
              <input type="file" id="img" ref="img"
                     @change="upload"
                     hidden>
            </div>
          </div>
        </div>

        <br>
        <div class="flex flex-wrap justify-end">
          <button type="submit" class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "tariff-form",
  data() {
    return {
      model: {},
      img: '',
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', `/admin/tariffs/${this.$route.params.id}`)
        .then(res => this.model = res.data.tariff)
    }
  },
  methods: {
    upload(e) {
      this.img = this.$refs.img.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = e => {
        this.$refs.preview.src = e.target.result
      }
      delete this.model.img;
    },
    submit() {
      let form = new FormData();
      for (let key in this.model) {
        form.append(key, this.model[key]);
      }

      if (this.img.name) {
        form.append('img', this.img)
      } else {
        form.delete('img')
      }

      this.$store.commit('setHeader', {'Content-Type': 'multipart/form-data'})
      form.set('_method', 'PUT')
      this.$store.dispatch('post', {
        url: `/admin/tariffs/${this.$route.params.id ?? ''}`,
        model: form
      }).then(() => this.$router.back())
    }
  }
}
</script>

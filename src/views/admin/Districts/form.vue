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
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label for="brand" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Tuman nomini kiriting
              </label>
              <input type="text" id="brand" name="brand"
                     :class="inputClass"
                     placeholder="Tuman"
                     autocomplete="off"
                     v-model="model.name">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="model" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Modelni kiriting
              </label>
              <input type="text" id="model" name="model"
                     :class="inputClass"
                     placeholder="Model"
                     autocomplete="off"
                     v-model="model.model">
            </div>
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
export default {
  name: "car-type-form",
  data() {
    return {
      inputClass: 'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
      model: {}
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', 'admin/districts' + this.$route.params.id)
        .then(res => this.model = res)
    }
  },
  methods: {
    submit() {
      let method = this.$route.params.id ? "put" : "post";
      this.$store.dispatch(method, {
        url: `/admin/districts/${this.$route.params.id ?? ''}`,
        model: this.model
      }).then(() => this.$router.back())
    }
  }
}
</script>

<style scoped>

</style>

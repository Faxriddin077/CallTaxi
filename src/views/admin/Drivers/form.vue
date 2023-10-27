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
                Ismini kiriting
              </label>
              <input type="text" id="name"
                     :class="inputClass"
                     placeholder="Ismi"
                     autocomplete="off"
                     v-model="model.name">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="surname" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Familiyasini kiriting
              </label>
              <input type="text" id="surname"
                     :class="inputClass"
                     placeholder="Familiyasi"
                     autocomplete="off"
                     v-model="model.surname">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="phone" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Telefon raqamni kiriting
              </label>
              <input type="text" id="phone"
                     :class="inputClass"
                     placeholder="Telefon raqam"
                     autocomplete="off"
                     v-mask="'(##) ###-##-##'"
                     v-model="model.phone">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="password" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Tug'ilgan sanani kiriting
              </label>
              <input type="date" id="birth_date"
                     :class="inputClass"
                     placeholder="Tug'ilgan sana"
                     autocomplete="off"
                     v-model="model.info.birth_date">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="address" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Manzilni kiriting
              </label>
              <input type="text" id="address"
                     :class="inputClass"
                     placeholder="Manzil"
                     autocomplete="off"
                     v-model="model.info.address">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="card_number" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Karta raqamini kiriting
              </label>
              <input type="text" id="card_number"
                     :class="inputClass"
                     placeholder="Karta raqami"
                     autocomplete="off"
                     v-mask="'#### #### #### ####'"
                     v-model="model.card_number">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="license" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Haydovchilik guvohnomasi raqamini kiriting
              </label>
              <input type="text" id="license"
                     :class="inputClass"
                     placeholder="Prava nomeri"
                     autocomplete="off"
                     v-model="model.info.license">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="email" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Pochtani kiriting
              </label>
              <input type="text" id="email"
                     :class="inputClass"
                     placeholder="Pochtani kiriting"
                     autocomplete="off"
                     v-model="model.email">
            </div>
          </div>

          <div class="w-full lg:w-3/12 px-4">
            <div class="relative w-full mb-3">
              <label for="balance" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Balansni kiriting
              </label>
              <input type="number" id="balance"
                     :class="inputClass"
                     placeholder="Balans kiriting"
                     autocomplete="off"
                     v-model="model.balance">
            </div>
          </div>

          <div class="w-full lg:w-3/12 px-4">
            <div class="relative w-full mb-3">
              <label for="email" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Statusni tanlang
              </label>
              <select id="status"
                      :class="inputClass"
                      v-model="model.status">
                <option value="-1">Undefined(-1)</option>
                <option value="0">OFFLINE</option>
                <option value="1">ONLINE</option>
                <option value="2">BUSY</option>
              </select>
            </div>
          </div>

          <div class="w-full lg:w-3/12 px-4">
            <div class="relative w-full mb-3">
              <label for="email" class="block uppercase text-blueGray-600 text-xs font-bold mb-5">
                Jinsi tanlang
              </label>
              <div class="flex">
                <label class="flex items-center">
                  <input type="radio" id="gender" value="1" v-model="model.info.gender"/>
                  <span class="ml-2 text-sm">Erkak</span>
                </label>
                <label class="flex items-center ml-2">
                  <input type="radio" id="gender" value="2" v-model="model.info.gender">
                  <span class="ml-2 text-sm">Ayol</span>
                </label>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-3/12 px-4">
            <div class="relative w-full mb-3">
              <div class="personal-image">
                <label class="label">
                  <input type="file" :name="model.img"/>
                  <figure class="personal-figure">
                    <img src="@/assets/img/avatar.svg" class="personal-avatar" alt="avatar">
                    <figcaption class="personal-figcaption">
                      <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png">
                    </figcaption>
                  </figure>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-end">
          <button type="submit"
                  class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Saqlash
          </button>
        </div>
      </form>
      <form @submit.prevent="carSubmit">
        <hr class="mt-6 border-b-1 border-blueGray-300">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Mashina ma'lumotlari
        </h6>
        <div class="flex flex-wrap">

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="address" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mashinani tanlang
              </label>
              <select id="status"
                      :class="inputClass"
                      v-model="car.type_id">
                <option v-for="carType in carTypes" :key="carType.id" :value="carType.id">
                  {{carType.model}} ({{ carType.brand }})
                </option>
              </select>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="card_number" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mashina raqamini kiriting
              </label>
              <input type="text" id="number"
                     :class="inputClass"
                     placeholder="Mashina raqami"
                     autocomplete="off"
                     v-mask="{mask: ['## FFFFFF'], tokens: customMask}"
                     v-model="car.number">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="license" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mashina rangini kiriting
              </label>
              <input type="text" id="color"
                     :class="inputClass"
                     placeholder="Mashina rangi"
                     autocomplete="off"
                     v-model="car.color">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="email" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                O'rindiqlar sonini kiriting
              </label>
              <input type="text" id="count_seats"
                     :class="inputClass"
                     placeholder="O'rindiqlar soni"
                     autocomplete="off"
                     v-model="car.count_seats">
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label for="password" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Mashina ishlab chiqarilgan yilni kiriting
              </label>
              <input type="number" id="manufacture_date"
                     :class="inputClass"
                     placeholder="Mashina yili"
                     autocomplete="off"
                     min="2000" max="2023" step="1"
                     v-model="car.manufacture_date">
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label for="tariff_id" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Tarifni tanlang
              </label>
              <select id="tariff_id"
                      :class="inputClass"
                      v-model="car.tariff_id">
                <option v-for="tariff in tariffs" :key="tariff.id" :value="tariff.id">
                  {{ tariff.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label for="address" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Statusni tanlang
              </label>
              <select id="status"
                      :class="inputClass"
                      v-model="car.status">
                <option value="0">Aktiv emas</option>
                <option value="1">Aktiv</option>
              </select>
            </div>
          </div>

        </div>
        <br>
        <div class="flex flex-wrap justify-end">
          <button type="submit"
                  class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.personal-image {
  text-align: center;
  width: 50%;
}

.personal-image input[type="file"] {
  display: none;
}

.personal-figure {
  position: relative;
  width: 120px;
  height: 120px;
}

.personal-avatar {
  cursor: pointer;
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 2px solid transparent;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: all ease-in-out .3s;
}

.personal-avatar:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.personal-figcaption {
  cursor: pointer;
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out .3s;
}

.personal-figcaption:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, .5);
}

.personal-figcaption > img {
  margin-top: 32.5px;
  margin-left: 30px;
  width: 50px;
  height: 50px;
}
</style>
<script>
import {mask} from "vue-the-mask";
import useVuelidate from "@vuelidate/core";
import {helpers, minLength, required, requiredIf} from "@vuelidate/validators";

export default {
  name: "driver-form",
  directives: {mask},
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      inputClass: 'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150',
      model: {
        gender: 1,
        info: {}
      },
      car: {},
      carTypes: [],
      tariffs: [],
      customMask: {
        'F': {pattern: /[0-9a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
        '#': {pattern: /\d/}
      }
    }
  },
  validations() {
    return {
      model: {
        name: {
          required: helpers.withMessage("<b>Name</b> field cannot be empty", required),
        },
        surname: {
          required: helpers.withMessage("<b>Surname</b> field cannot be empty", required),
        },
        phone: {
          required: helpers.withMessage("<b>Phone</b> field cannot be empty", required),
          minLength: helpers.withMessage("<b>Phone</b> field must be minimum 4 symbols", minLength(4)),
        },
        info: {
          birth_date: {
            required: helpers.withMessage("<b>Birth date</b> field cannot be empty", required),
          },
          address: {
            required: helpers.withMessage("<b>Address</b> field cannot be empty", required),
          },
          license: {
            required: helpers.withMessage("<b>License</b> field cannot be empty", requiredIf(false)),
            minLength: helpers.withMessage("<b>License</b> field must be grater than 5 symbols", minLength(5)),
          }
        },
        card_number: {
          required: helpers.withMessage("<b>Card number</b> field cannot be empty", required),
          minLength: helpers.withMessage("<b>Card number</b> field must be minimum 16 symbols", minLength(16)),
        },
      },
      car: {
        type_id: {
          required: helpers.withMessage("<b>Car type</b> field cannot be empty", required),
        },
        number: {
          required: helpers.withMessage("<b>Car number</b> field cannot be empty", required),
        },
        color: {
          required: helpers.withMessage("<b>Car color</b> field cannot be empty", required),
        },
        count_seats: {
          required: helpers.withMessage("<b>Car count seats</b> field cannot be empty", required),
        },
        manufacture_date: {
          required: helpers.withMessage("<b>Car manufactured date</b> field cannot be empty", required),
        },
        tariff_id: {
          required: helpers.withMessage("<b>Tariff</b> field cannot be empty", required),
        },
        status: {
          required: helpers.withMessage("<b>Car status</b> field cannot be empty", required),
        },
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', 'admin/drivers/' + this.$route.params.id)
        .then(res => {
          this.model = res.data.driver
          this.car = res.data.driver.car ?? {}
        })
    }
    this.$store.dispatch('get', 'driver/car-types')
      .then(res => this.carTypes = res.data)
    this.$store.dispatch('get', 'driver/tariffs')
      .then(res => this.tariffs = res.data.tariffs)

  },
  methods: {
    async submit() {
      await this.v$.$validate()
      const modelFormValidationErrors = await this.v$.model.$errors
      if (modelFormValidationErrors.length) {
        this.showErrorMessages('model')
      }
      else {
        let method = this.$route.params.id ? "put" : "post";
        this.model.phone = this.unmask(this.model.phone)
        this.model.card_number = this.unmask(this.model.card_number)
        this.$store.dispatch(method, {
          url: `/admin/drivers/${this.$route.params.id ?? ''}`, // this.$route.matched[1].path,
          model: this.model
        }).then((res) => {
          if (res.success) {
            this.$swal.fire({
              icon: 'success',
              title: "Success",
              html: "Driver successfully created!",
              toast: true,
              position: "top-end",
              timer: 3000,
              showConfirmButton: false
            })
          }
          else {
            this.showErrorAlert(res.errors)
          }
        })
      }
    },
    async carSubmit() {
      // eslint-disable-next-line no-prototype-builtins
      if (!this.model.hasOwnProperty('id')) {
        this.$swal({
          title: "Error!",
          text: "First should add driver!",
          icon: "error",
          confirmButtonText: "OK"
        })
        return
      }

      await this.v$.$validate()
      const carFormValidationErrors = await this.v$.car.$errors
      if (carFormValidationErrors.length) {
        this.showErrorMessages('car')
      }
      else {
        this.car.driver_id = this.model.id
        let method = this.car?.id ? "put" : "post";
        this.$store.dispatch(method, {
          url: `/admin/drivers/car/${this.car?.id ?? ''}`,
          model: this.car
        }).then((res) => {
          if (res.success) {
            this.$router.back()
            this.$swal.fire({
              icon: 'success',
              title: "Success",
              html: "Car successfully created!",
              toast: true,
              position: "top-end",
              timer: 3000,
              showConfirmButton: false
            })
          } else {
            this.showErrorAlert(res.errors)
          }
        })
      }
    },
    showErrorAlert(errors) {
      this.$swal({
        title: "Error!",
        text: this.joinObjectArraysToString(errors),
        icon: "error",
        confirmButtonText: "OK"
      })
    },
    showErrorMessages(object) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })
      let messages = ""
      this.v$[object].$errors.map((value) => {
        messages += value.$message + "<br>"
      })
      Toast.fire({
        icon: 'error',
        title: "Validation error",
        html: messages
      })
    },
    joinObjectArraysToString(obj) {
      let result = '';

      for (const key in obj) {
        if (Array.isArray(obj[key])) {
          result += obj[key].join('\n');
        }
      }

      return result;
    }
  }
}
</script>

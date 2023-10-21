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
                     v-model="model.birth_date">
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
                     v-model="model.address">
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
                     v-model="model.license">
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
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Qo'shimcha
        </h6>
        <div class="flex flex-wrap">

          <div class="w-full lg:w-4/12 px-4">
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

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label for="email" class="block uppercase text-blueGray-600 text-xs font-bold mb-5">
                Jinsi tanlang
              </label>
              <div class="flex">
                <label class="flex items-center">
                  <input type="radio" id="gender" name="gender" checked/>
                  <span class="ml-2 text-sm">Erkak</span>
                </label>
                <label class="flex items-center ml-2">
                  <input type="radio" id="gender" name="gender">
                  <span class="ml-2 text-sm">Ayol</span>
                </label>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
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

        <br>
        <div class="flex flex-wrap justify-end">
          <button type="submit" :disabled="!canSubmit"
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
      model: {},
      canSubmit: true
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
        birth_date: {
          required: helpers.withMessage("<b>Birth date</b> field cannot be empty", required),
        },
        address: {
          required: helpers.withMessage("<b>Address</b> field cannot be empty", required),
        },
        card_number: {
          required: helpers.withMessage("<b>Card number</b> field cannot be empty", required),
          minLength: helpers.withMessage("<b>Card number</b> field must be minimum 4 symbols", minLength(16)),
        },
        license: {
          required: helpers.withMessage("<b>License</b> field cannot be empty", requiredIf(false)),
          minLength: helpers.withMessage("<b>License</b> field must be grater than 5 symbols", minLength(5)),
        }
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', 'admin/drivers/' + this.$route.params.id)
        .then(res => this.model = res.data)
    }
  },
  methods: {
    async submit() {
      this.canSubmit = false
      const isFormCorrect = await this.v$.$validate()

      if (!isFormCorrect) {
        this.showErrorMessages()
      } else {
        this.canSubmit = true
        let method = this.$route.params.id ? "put" : "post";
        this.model.phone = this.unmask(this.model.phone)
        this.model.card_number = this.unmask(this.model.card_number)
        this.$store.dispatch(method, {
          url: `/admin/drivers/${this.$route.params.id ?? ''}`, // this.$route.matched[1].path,
          model: this.model
        }).then((res) => {
          if (res.success) {
            this.$router.back()
            this.$swal.fire({
              icon: 'success',
              title: "Success",
              html: "Driver successfully created!",
              toast: true,
              position: "top-end",
              timer: 3000,
              showConfirmButton: false
            })
          } else {
            this.$swal({
              title: "Error!",
              text: this.joinObjectArraysToString(res.errors),
              icon: "error",
              confirmButtonText: "OK"
            })
            this.canSubmit = true
          }
        })
      }
    },
    showErrorMessages() {
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
      this.v$.$errors.map((value) => {
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

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
              <label for="username" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Foydalanuvchi nomini kiriting
              </label>
              <input type="text" id="username"
                     :class="inputClass"
                     placeholder="Qisqa nom"
                     autocomplete="off"
                     v-model="model.username">
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label for="password" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Yashirin so'zni kiriting
              </label>
              <input type="password" id="password"
                     :class="inputClass"
                     placeholder="Yashirin so&#8216;z"
                     autocomplete="off"
                     v-model="model.password">
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Muloqat uchun
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
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

<script>
import {mask} from 'vue-the-mask';
import useVuelidate from '@vuelidate/core';
import {helpers, required, requiredIf, minLength} from '@vuelidate/validators';


export default {
  name: "operator-form",
  directives: { mask },
  setup () {
    return { v$: useVuelidate() }
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
        username: {
          required: helpers.withMessage("<b>Username</b> field cannot be empty", required),
          minLength: helpers.withMessage("<b>Username</b> field must be minimum 4 symbols", minLength(4)),
        },
        password: {
          required: helpers.withMessage("<b>Password</b> field cannot be empty", requiredIf(false)),
          minLength: helpers.withMessage("<b>Password</b> field must be grater than 5 symbols", minLength(5)),
        }
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$store.dispatch('get', {url: 'admin/users/' +this.$route.params.id})
        .then(res => this.model = res.data)
    }
  },
  methods: {
    async submit() {
      this.canSubmit = false
      const isFormCorrect = await this.v$.$validate()

      if (!isFormCorrect) {
        this.showErrorMessages()
        this.canSubmit = true
      }
      else {
        let method = this.$route.params.id ? "put" : "post";
        this.model.phone = this.unmask(this.model.phone)
        this.$store.dispatch(method, {
          url: `/admin/users/${this.$route.params.id ?? ''}`, // this.$route.matched[1].path,
          model: this.model
        }).then((res) => {
          if (res.success) {
            this.$router.back()
            this.$swal.fire({
              icon: 'success',
              title: "Success",
              html: "Operator successfully created!",
              toast: true,
              position: "top-end",
              timer: 3000,
              showConfirmButton: false
            })
          }
          else {
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

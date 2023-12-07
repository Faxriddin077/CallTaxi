<template>
  <table-layout heading="Jarayondagi buyurtmalar" :headers="headers" :link="'/bookings/create'">
    <tr v-for="model in data" :key="model.id">
      <th :class="rowClass + 'text-left flex items-center'">
        {{ model.id }}
      </th>
      <td :class="rowClass">
        {{ model.address }}
      </td>
      <td :class="rowClass">
        {{ phoneFormatter(model.client.phone) }}
      </td>
      <td :class="rowClass">
        {{ model.driver?.name }}
      </td>
      <td :class="rowClass">
        <i :class="'fas fa-circle mr-2 ' + statusClass(model.status)"></i>
        <span>{{ statusText(model.status) }}</span>
      </td>
      <td :class="rowClass + ' align-center text-right'">
        <button @click.prevent="resend(model.id)" :class="'bg-lightBlue-400 ' + btnClass">
          <i class="fas fa-share"></i>
        </button>
        <router-link :to="'#'" :class="'bg-yellow-500 ' + btnClass">
          <i class="fas fa-pen-alt"></i>
        </router-link>
        <button @click.prevent="destroy(model.id)" :class="'bg-red-400 ' + btnClass">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout.vue";

export default {
  name: "bookings-in-process",
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      rowClass: 'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4',
      btnClass: 'text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150',
      avatar,
      headers: ["Tr", "Manzil", "Telefon raqam", "Haydovchi", "Holati", ""],
      data: {}
    }
  },
  components: {
    TableLayout
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$store.dispatch('get', '/operator/booking/all').then(res => this.data = res.data.bookings)
    },
    resend(model_id) {
      this.$swal.fire({
        title: "Buyurtmani qaytadan e'lon qilmoqchimisiz?",
        icon: 'question',
        confirmButtonText: 'Xa',
        confirmButtonColor: '#00a10b',
        denyButtonText: 'Yoq',
        showDenyButton: true,
        showCloseButton: true,
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('post', {
            url: "/operator/booking/resend",
            model: {booking_id: model_id}
          }).then((response) => {
            if (response.success) {
              this.$swal.fire({
                icon: 'success',
                title: "Success",
                html: "Data successfully sent!",
                toast: true,
                position: "top-end",
                timer: 3000,
                showConfirmButton: false
              })
              this.fetchData()
            }
          })
        }
      })
    },
    destroy(model_id) {
      this.$swal.fire({
        title: "Ma'lumotni rostan ham o'chirmoqchimisiz?",
        icon: 'question',
        confirmButtonText: 'Xa',
        denyButtonText: 'Yoq',
        showDenyButton: true,
        showCloseButton: true,
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('post', {
            url: "/operator/booking/cancel",
            model: {booking_id: model_id}
          }).then((response) => {
            if (response.success) {
              this.$swal.fire({
                icon: 'success',
                title: "Success",
                html: "Data successfully deleted!",
                toast: true,
                position: "top-end",
                timer: 3000,
                showConfirmButton: false
              })
              this.fetchData()
            }
          })
        }
      })
    },
    statusText(status) {
      if (status === 0) {
        return 'yangi'
      } else if (status === 1) {
        return 'yaratilgan'
      } else if (status === 2) {
        return 'jarayonda'
      } else if (status === -1) {
        return 'bekor qilingan'
      }
    },
    statusClass(status) {
      if (status === 0) {
        return 'text-yellow-400'
      } else if (status === 1) {
        return 'text-yellow-400'
      } else if (status === 2) {
        return 'text-orange-600'//'text-teal-500'
      } else if (status === -1) {
        return 'text-red'//'text-teal-500'
      }
    }
  }
}
</script>

<style scoped>

</style>

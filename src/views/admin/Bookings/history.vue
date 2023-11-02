<template>
  <table-layout heading="Buyurtmalar" :headers="headers" :addButton="false">
    <tr v-for="model in data.data" :key="model.id">
      <td :class="rowClass">
        {{ model.id }}
      </td>
      <td :class="rowClass">
        {{ phoneFormatter(model.client?.phone) }}
      </td>
      <td :class="rowClass">
        {{ model.driver?.name }}
      </td>
      <td :class="rowClass">
        {{ model.duration }}
      </td>
      <td :class="rowClass">
        {{ model.distance }}
      </td>
      <td :class="rowClass">
        {{ model.fare }}
      </td>
      <td :class="rowClass">
        {{ model.service_fee }}
      </td>
      <td :class="rowClass">
        <i :class="'fas fa-circle mr-2 ' + statusClass(model.status)"></i>
        <span>{{ statusText(model.status) }}</span>
      </td>
      <td :class="rowClass">
        {{ model.user?.name }}
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/tariffs" :id="model.id"/>
      </td>
    </tr>
  </table-layout>
  <table-pagination :pagination="data" @paginate="getData"/>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout.vue";
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import TablePagination from "@/components/Tables/TablePagination.vue";

export default {
  name: "booking-history-index",
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
      avatar,
      headers: ["Nomi", "Mijoz", "Haydovchi", "Daqiqa", "Km", "Yo'l haqi", "Xizmat haqi", "Status", "Kim tomonidan", ""],
      data: {
        current_page: 1
      },
    }
  },
  components: {
    TablePagination,
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$store.dispatch('get', `/admin/bookings-history/all?page=${this.data.current_page}`).then(res => this.data = res.data)
    },
    statusText(status) {
      if (status == 1) {
        return 'tugallangan'
      } else {
        return 'bekor qilingan'
      }
    },
    statusClass(status) {
      if (status == 1) {
        return 'text-emerald-500'
      } else {
        return 'text-red-500'//'text-teal-500'
      }
    }
  }
}
</script>

<style scoped>

</style>

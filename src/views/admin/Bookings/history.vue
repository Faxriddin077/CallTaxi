<template>
  <table-layout heading="Buyurtmalar" :headers="headers" :addButton="false" :addDates="true" @fetchData="fetch">
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
      <td :class="rowClass">
        {{ formatDate(model.created_at) }}
      </td>
      <td :class="rowClass">
        {{ formatDate(model.updated_at) }}
      </td>
    </tr>
  </table-layout>
  <table-pagination :pagination="data.links" :pages="data" @fetchData="fetch"/>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout.vue";
import TablePagination from "@/components/Tables/TablePagination.vue";
import {formatDate} from "@/utils/methods";

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
      headers: [
        "ID", "Mijoz", "Haydovchi", "Daqiqa", "Km", "Yo'l haqi", "Xizmat haqi", "Status", "Kim tomonidan", "Yaratildi", "Tugatildi", ""
      ],
      queryParams: {},
      data: {
        current_page: 1,
        links: []
      },
    }
  },
  components: {
    TablePagination,
    TableLayout
  },
  mounted() {
    this.getData()
  },
  methods: {
    formatDate,
    getData() {
      this.$store.dispatch('get', {url: '/admin/bookings-history/all', params: this.queryParams}).then(res => this.data = res.data)
    },
    fetch(params) {
      this.queryParams = { ...this.queryParams, ...params}
      this.getData()
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

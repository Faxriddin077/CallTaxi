<template>
  <table-layout heading="Buyurtmalar" :headers="headers">
  <tr v-for="model in data" :key="model.id">
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
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout.vue";
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";

export default {
  name: "booking-history-index",
  props: {
    color: {
      default: "light",
      validator: function(value) {
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
      data: [],
      url: '/admin/bookings-history/all'
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', this.url)
      .then(res => this.data = res.data)
  },
  methods: {
    statusText(status) {
      if (status == 1) {
        return 'completed'
      } else {
        return 'cancelled'
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

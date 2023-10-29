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
        <i :class="'fas fa-circle mr-2 ' + statusClass(model.status)"></i>
        <span>{{ statusText(model.status) }}</span>
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/orders" :id="model.id"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout.vue";
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";

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
      avatar,
      headers: ["Tr", "Manzil", "Telefon raqam", "Holati", ""],
      data: []
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', '/operator/booking/all').then(res => this.data = res.data.bookings)
  },
  methods: {
    statusText(status) {
      if (status == 0) {
        return 'new'
      }
      else if (status == 1) {
        return 'created'
      }
      else if (status == 2) {
        return 'process'
      }
    },
    statusClass(status) {
      if (status == 0) {
        return 'text-yellow-400'
      }
      else if (status == 1) {
        return 'text-yellow-400'
      }
      else if (status == 2) {
        return 'text-orange-600'//'text-teal-500'
      }
    }
  }
}
</script>

<style scoped>

</style>

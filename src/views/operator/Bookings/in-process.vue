<template>
  <table-layout heading="Jarayondagi buyurtmalar" :headers="headers">
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
        <span>{{ model.status }}</span>
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/orders" :id="model.id"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";

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
    this.$store.dispatch('get', '/operator/booking/get-by-status?status=0').then(res => this.data = res.data.bookings)
  }
}
</script>

<style scoped>

</style>

<template>
  <table-layout heading="Buyurtmalar" :headers="headers">
    <tr v-for="model in data" :key="model.id">
      <th :class="rowClass + 'text-left flex items-center'">
        {{ model.id }}
      </th>
      <td :class="rowClass">
        {{ model }}
      </td>
      <td :class="rowClass">
        {{ phoneFormatter(model.phone) }}
      </td>
      <td :class="rowClass">
        <span>{{ model.car.number }}</span>
      </td>
      <td :class="rowClass">
        <i class="fas fa-circle mr-2" :class="model.car.status ? 'text-emerald-500' : 'text-red-500'"></i>
        <span>{{ model.car.status ? 'Aktiv' : 'Aktiv emas' }}</span>
      </td>
      <td :class="rowClass">
        <span>{{ price(model.sum) }}</span>
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/drivers" :id="model.id"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";

export default {
name: "order-index",
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
      headers: ["Ism", "Telefon", "Mashina raqami", "Holati", "Mablag\u2018", ""],
      data: []
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', '/operators/get-delivery-orders?status=2').then(res => this.data = res.data.orders)
  }
}
</script>

<style scoped>

</style>

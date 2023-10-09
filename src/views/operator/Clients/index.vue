<template>
  <table-layout heading="Mijozlar" :headers="headers" :link="{name: 'operator.clients.create'}">
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
    </tr>
  </table-layout>
</template>

<script>
import TableLayout from "@/components/Tables/TableLayout";
import avatar from "@/assets/img/avatar.svg";


export default {
  name: "client-index",
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
      headers: ["Tr", "Manzil", "Telefon raqam", "Holati"],
      data: {}
    }
  },
  components: {
    TableLayout
  },
  mounted() {
    this.$store.dispatch('get', '/operators/get-taxi-orders?status=0').then(res => this.data = res.data.orders)
  }
};
</script>

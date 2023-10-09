<template>
  <table-layout heading="Tarifflar" :headers="headers">
  <tr v-for="model in data" :key="model.id">
    <td :class="rowClass">
      {{ model.name }}
    </td>
    <td :class="rowClass">
      {{ price(model.client) }}
    </td>
    <td :class="rowClass">
      {{ price(model.minute) }}
    </td>
    <td :class="rowClass">
      {{ price(model.km) }}
    </td>
    <td :class="rowClass">
      {{ price(model.vip) }}
    </td>
    <td :class="rowClass">
      {{ price(model.min_pay) }}
    </td>
    <td :class="rowClass">
      {{ price(model.out_city) }}
    </td>
    <td :class="rowClass + 'text-right'">
      <table-dropdown url="/tariffs" :id="model.id"/>
    </td>
  </tr>
</table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";

export default {
  name: "tariff-index",
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
      headers: ["Nomi", "Mijoz", "Daqiqa", "Km", "Vip", "Minimalka", "Shahar tashqarisi", ""],
      data: [],
      url: '/admin/tariffs'
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', this.url)
      .then(res => this.data = res.data.tariffs)
  }
}
</script>

<style scoped>

</style>

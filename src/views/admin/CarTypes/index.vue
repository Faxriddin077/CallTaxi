<template>
  <table-layout heading="Mashina turlari" :headers="headers" link="/car-types/create">
    <tr v-for="(model, i) in data" :key="model.id">
      <td :class="rowClass">
        {{ i + 1 }}
      </td>
      <th :class="rowClass + 'text-left flex items-center'">
        {{ model.brand }}
      </th>
      <td :class="rowClass">
        {{ model.model }}
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/car-types" :id="model.id" :original="url + '/' + model.id"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";

export default {
  name: "car-type-index",
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
      rowClass: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
      avatar,
      headers: ["Tr", "Brend", "Model", "Tahrirlash"],
      data: [],
      url: '/admin/car-types'
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', {url: this.url})
      .then(res => this.data = res.data)
  }
}
</script>

<style scoped>

</style>

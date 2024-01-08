<template>
  <table-layout heading="Manzillar" :headers="headers" link="/addresses/create">
    <tr v-for="(model, i) in data" :key="model.id">
      <td :class="rowClass">
        {{ i + 1 }}
      </td>
      <th :class="rowClass" style="text-align: left">
        {{ model.name }}
      </th>
      <td :class="rowClass">
        {{ model.target }}
      </td>
      <td :class="rowClass">
        {{ model.additional }}
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/addresses" :id="model.id" :original="url + '/' + model.id" @otherData="changeData"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";

export default {
  name: "points-index",
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
      rowClass: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
      avatar,
      headers: ["Tr", "Nom", "Mo'ljal", "Qo'shimcha", "Tahrirlash"],
      data: [],
      url: '/admin/addresses'
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', {url: this.url})
      .then(res => this.data = res.data.addresses)
  },
  methods: {
    changeData() {
      this.$store.dispatch('get', {url: this.url})
        .then(res => this.data = res.data.addresses)
    }
  }
}
</script>

<style scoped>

</style>

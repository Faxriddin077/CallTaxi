<template>
  <table-layout heading="Operatorlar" :headers="headers" link="/operators/create">
    <tr v-for="(model, i) in data" :key="model.id">
      <td :class="rowClass">
        {{ i + 1 }}
      </td>
      <th :class="rowClass + 'text-left flex items-center'">
        <img :src="avatar" class="h-12 w-12 bg-white rounded-full border" alt="..."/>
        <span class="ml-3 font-bold" :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']">
          {{ model.name + ' ' + model.surname }}
        </span>
      </th>
      <td :class="rowClass">
        {{ phoneFormatter(model.phone) }}
      </td>
      <td :class="rowClass">
        {{ model.username }}
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/operators" :id="model.id" :original="url + '/' + model.id"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";
import avatar from "@/assets/img/avatar.svg";


export default {
  name: "operator-index",
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
      headers: ["Tr", "Ism va familiya", "Telefon", "Qisqa nom", ""],
      data: [],
      url: '/admin/users'
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
};
</script>

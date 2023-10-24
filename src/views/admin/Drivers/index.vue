<template>
  <table-layout heading="Haydovchilar" :headers="headers" link="/drivers/create">
    <tr v-for="(model, i) in data.drivers" :key="model.id">
      <td :class="rowClass">
        {{ i + 1 }}
      </td>
      <th :class="rowClass + 'text-left flex items-center'">
        <img :src="avatar" class="h-12 w-12 bg-white rounded-full border" alt="..."/>
        <span class="ml-3 font-bold" :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']">
          {{ model.name }} {{ model.surname }}
        </span>
      </th>
      <td :class="rowClass">
        {{ phoneFormatter(model.phone) }}
      </td>
      <td :class="rowClass">
        <span>{{ model.car?.number }}</span>
      </td>
      <td :class="rowClass">
        <i class="fas fa-circle mr-2" :class="model.car?.status ? 'text-emerald-500' : 'text-red-500'"></i>
        <span>{{ model.car?.status ? 'Aktiv' : 'Aktiv emas' }}</span>
      </td>
      <td :class="rowClass">
        <span>{{ price(model.balance) }}</span>
      </td>
      <td :class="rowClass + 'text-right'">
        <table-dropdown url="/drivers" :id="model.id" :original="url + '/' + model.id"/>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import TableLayout from "@/components/Tables/TableLayout";
import TableDropdown from "@/components/Dropdowns/TableDropdown";
import avatar from "@/assets/img/avatar.svg";


export default {
  name: "driver-index",
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
      data: [],
      url: '/admin/drivers'
    }
  },
  components: {
    TableLayout,
    TableDropdown
  },
  mounted() {
    this.$store.dispatch('get', '/admin/drivers').then(res => this.data = res.data)
  }
};
</script>

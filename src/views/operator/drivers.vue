<template>
  <table-layout heading="Haydovchilar" :headers="headers" :addButton="false">
    <tr v-for="model in data" :key="model.id">
      <th :class="rowClass + 'text-left flex items-center'">
        {{ model.id }}
      </th>
      <td :class="rowClass">
        {{ model.name }}
      </td>
      <td :class="rowClass">
        {{ phoneFormatter(model.phone) }}
      </td>
      <td :class="rowClass">
        {{model.car.number}} ({{model.car.color}}, {{model.car.type.model}})
      </td>
      <td :class="rowClass">
        <i :class="'fas fa-circle mr-2 ' + statusClass(model.status)"></i>
        <span>{{ statusText(model.status) }}</span>
      </td>
    </tr>
  </table-layout>
</template>

<script>
import TableLayout from "@/components/Tables/TableLayout.vue";
import avatar from "@/assets/img/avatar.svg";


export default {
  name: "drivers-index",
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
      headers: ["Tr", "Ism", "Telefon raqam", "Mashina", "Holati"],
      data: {}
    }
  },
  components: {
    TableLayout
  },
  mounted() {
    this.$store.dispatch('get', '/operator/driver/active').then(res => this.data = res.data)
  },
  methods: {
    statusText(status) {
     if (status == 1) {
        return 'onlayn'
      }
      else if (status == 2) {
        return 'band'
      }
    },
    statusClass(status) {
      if (status == 1) {
        return 'text-teal-500'
      }
      else if (status == 2) {
        return 'text-orange-600'//'text-teal-500'
      }
    }
  }
};
</script>

<template>
  <table-layout heading="O'tkazmalar" :headers="headers" :addButton="false">
    <tr v-for="model in data.data" :key="model.id">
      <td :class="rowClass">
        {{ model.id }}
      </td>
      <td :class="rowClass">
        {{ model.driver?.name }} {{ model.driver?.surname}}
      </td>
      <td :class="rowClass">
        {{ model.amount }}
      </td>
      <td :class="rowClass">
        {{ model.user?.name }} {{ model.user?.surname}}
      </td>
      <td :class="rowClass">
        {{ formatDate(model.created_at) }}
      </td>
    </tr>
  </table-layout>
  <table-pagination :pagination="data.links" :pages="data" @paginate="getData"/>
</template>

<script>

import avatar from "@/assets/img/avatar.svg";
import TableLayout from "@/components/Tables/TableLayout.vue";
import TablePagination from "@/components/Tables/TablePagination.vue";
import {formatDate} from "@/utils/methods";

export default {
  name: "transactions-index",
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
      headers: [
        "ID", "Haydovchi", "O'tkazma miqdori", "Kim tomonidan", "O'tkazilgan sana", ""
      ],
      data: {
        current_page: 1,
        links: []
      },
    }
  },
  components: {
    TablePagination,
    TableLayout
  },
  mounted() {
    this.getData()
  },
  methods: {
    formatDate,
    getData(url2 = null) {
      let url = '/admin/transactions'
      if (url2) {
        url = url2
      }
      this.$store.dispatch('get', {url}).then(res => this.data = res.data)
    }
  }
}
</script>

<style scoped>

</style>

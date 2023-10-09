<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table heading="Jadval" :headers="headers" :data="data" />
    </div>
  </div>
</template>

<script>
  import CardTable from "@/components/Cards/CardTable.vue";
  export default {
    // eslint-disable-next-line
    name: 'test-view',
    data() {
      return {
        headers: [
          "Loyiha",
          "Mablag'",
          "Holat",
          "Foydalanuvchilar",
          "Baraildi",
          ""
        ],
        data: [
          {
            project: "Angular Now UI Kit PRO",
            budget: 300,
            status: "bajarildi",
            users: [

            ],
            completion: 90
          }
        ]
      }
    },
    components: {
      CardTable
    }
  }
</script>

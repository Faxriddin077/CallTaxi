<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
       :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']">
            {{ heading }}
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                v-for="(header, i) in headers" :key="i"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <card-body :data="data"/>
      </table>
    </div>
  </div>
</template>

<script>
import CardBody from "./CardBody";

export default {
  props: {
    heading: {
      default: ""
    },
    headers: {
      default: []
    },
    data: {
     default: []
    },
    color: {
      default: "light",
      validator: function(value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  components: {
    CardBody
  }
};
</script>

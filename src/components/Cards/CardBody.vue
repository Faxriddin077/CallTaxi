<template>
  <tbody>
  <tr v-for="model in data" :key="model.completion">
    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
      <img :src="angular" class="h-12 w-12 bg-white rounded-full border" alt="..."/>
      <span class="ml-3 font-bold"
            :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"
      >{{ model.project }}</span>
    </th>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      ${{ model.budget }} USD
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <i class="fas fa-circle text-emerald-500 mr-2"></i>
      {{ model.status }}
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <div class="flex">
        <img
          :src="team1"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
        />
        <img
          :src="team2"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
        />
        <img
          :src="team3"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
        />
      </div>
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div class="flex items-center">
        <span class="mr-2">{{ model.completion }}%</span>
        <div class="relative w-full">
          <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
            <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                 :style="'width:' + model.completion + '%;'">
            </div>
          </div>
        </div>
      </div>
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
      <table-dropdown url="/operators" id="0" original="/dashboard"/>
    </td>
  </tr>
  <tr>
    <th
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
    >
      <img
        :src="sketch"
        class="h-12 w-12 bg-white rounded-full border"
        alt="..."
      />
      <span
        class="ml-3 font-bold"
        :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
      >
                Black Dashboard Sketch
              </span>
    </th>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      $3,150 USD
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <i class="fas fa-circle text-red-500 mr-2"></i> delayed
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <div class="flex">
        <img
          :src="team1"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
        />
        <img
          :src="team2"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
        />
        <img
          :src="team3"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
        />
        <img
          :src="team4"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
        />
      </div>
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <div class="flex items-center">
        <span class="mr-2">73%</span>
        <div class="relative w-full">
          <div
            class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
          >
            <div
              style="width: 73%;"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
            ></div>
          </div>
        </div>
      </div>
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
    >
      <table-dropdown/>
    </td>
  </tr>
  <tr>
    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
      <img :src="react" class="h-12 w-12 bg-white rounded-full border" alt="..."/>
      <span class="ml-3 font-bold"
            :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
      >
                React Material Dashboard
              </span>
    </th>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      $4,400 USD
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <i class="fas fa-circle text-teal-500 mr-2"></i> on schedule
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <div class="flex">
        <img
          :src="team1"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
        />
        <img
          :src="team2"
          alt="..."
          class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
        />
      </div>
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
      <div class="flex items-center">
        <span class="mr-2">90%</span>
        <div class="relative w-full">
          <div
            class="overflow-hidden h-2 text-xs flex rounded bg-teal-200"
          >
            <div
              style="width: 90%;"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
            ></div>
          </div>
        </div>
      </div>
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
    >
      <table-dropdown/>
    </td>
  </tr>
  </tbody>
</template>

<script>
import TableDropdown from "@/components/Dropdowns/TableDropdown";

import bootstrap from "@/assets/img/avatar.svg";
import angular from "@/assets/img/avatar.svg";
import sketch from "@/assets/img/avatar.svg";
import react from "@/assets/img/avatar.svg";
import vue from "@/assets/img/avatar.svg";
import team1 from "@/assets/img/avatar.svg";
import team2 from "@/assets/img/avatar.svg";
import team3 from "@/assets/img/avatar.svg";
import team4 from "@/assets/img/avatar.svg";

export default {
  name: "card-body",
  props: {
    data: {
      default: []
    },
    color: {
      default: "light",
      validator: function(value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    }
  },
  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    // eslint-disable-next-line
    TableDropdown
  },
}
</script>

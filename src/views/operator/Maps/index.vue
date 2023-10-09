<template>
  <div class="flex flex-wrap">
    <map-form />
  </div>
</template>

<script>
import MapForm from "./form";

export default {
  name: 'map-view',
  components: {
    MapForm
  },
  sockets: {
    connect: function() {
      console.log('Ulandi')
    }
  }
};
</script>

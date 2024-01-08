<template>
  <div class="py-2">
    <nav class="block">
      <ul class="flex pl-0 rounded list-none flex-wrap">
        <li v-for="(page, i) in pagination" :key="page.label">
          <button
            @click.prevent="changePage(page.label)"
            :class="pageIndexClass + activePage(page.active)"
            :disabled="!page.url"
          >
            <span v-if="i === 0">
              <i class="fas fa-chevron-left -ml-px"></i>
            </span>
            <span v-else-if="isLastIteration(i)">
              <i class="fas fa-chevron-right -mr-px"></i>
            </span>
            <span v-else>{{ page.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "table-pagination",
  props: {
    pagination: {
      type: Array,
      required: true
    }
  },
  methods: {
    changePage(page) {
      if (page[0] === 'N') { // Next
        this.currentPage += 1
      } else if (page[0] === '&') { // Previous
        this.currentPage -= 1
      } else {
        this.currentPage = parseInt(page)
      }
      this.$emit('fetchData', {page: this.currentPage});
    },
    activePage(isActive) {
      return isActive ? 'text-white bg-emerald-500' : 'bg-white text-emerald-500';
    },
    isLastIteration(index) {
      return index === this.pagination.length - 1;
    }
  },
  data() {
    return {
      currentPage: 1,
      pageIndexClass: "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 "
    };
  }
}
</script>

<style scoped>
/* Your styles here */
</style>

<template>
  <div class="py-2">
    <nav class="block">
      <ul class="flex pl-0 rounded list-none flex-wrap">
        <li>
          <a :aria-disabled="pagination.current_page > 1" @click.prevent="changePage(pagination.current_page - 1)" :class="pageIndexClass + 'bg-white text-emerald-500'">
            <i class="fas fa-chevron-left -ml-px"></i>
          </a>
        </li>
        <li v-for="(page, i) in pagesNumber" :key="i">
          <a @click.prevent="changePage(page)" :class="pageIndexClass + activePage(page == pagination.current_page)">
            {{ i+1 }}
          </a>
        </li>
        <li>
          <a :aria-disabled="pagination.current_page >= pagination.last_page"  @click.prevent="changePage(pagination.current_page + 1)" :class="pageIndexClass + 'bg-white text-emerald-500'">
            <i class="fas fa-chevron-right -mr-px"></i>
          </a>
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
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 4
    }
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + (this.offset * 2);
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    }
  },
  methods: {
    changePage(page) {
      // eslint-disable-next-line vue/no-mutating-props
      this.pagination.current_page = page;
      this.$emit('paginate');
    },
    activePage(bool) {
      if (bool) {
        return 'text-white bg-emerald-500';
      }
      return 'bg-white text-emerald-500';
    }
  },
  data() {
    return {
      pageIndexClass: "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 "
    }
  }
}
</script>

<style scoped>

</style>

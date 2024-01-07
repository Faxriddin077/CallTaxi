<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Buyurtmalar"
              :statTitle="thisMonthBookings"
              :statArrow="thisMonthBookings > previousMonthBookings ? 'up' : 'down'"
              :statPercent="bookingsPercent"
              :statPercentColor="arrowColor(bookingsPercent)"
              :statDescripiron="'Oldingi oy: ' + previousMonthBookings"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Kunlik tushum"
              :statTitle="todayIncome"
              :statArrow="todayIncome > yesterdayIncome ? 'up' : 'down'"
              :statPercent="incomePercent"
              :statPercentColor="arrowColor(incomePercent)"
              :statDescripiron="'Kecha: ' + yesterdayIncome"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Haydovchilar daromadi"
              statTitle="49,65%??"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              statDescripiron="Bari??"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Haydovchilar"
              :statTitle="driversInToday"
              :statArrow="driversInToday > driversInPreviousMonth ? 'up' : 'down'"
              :statPercent="driversPercent"
              :statPercentColor="arrowColor(driversPercent)"
              :statDescripiron="'Oldingi oy: ' + driversInPreviousMonth"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
  data() {
    return {
      previousMonthBookings: 0,
      thisMonthBookings: 0,
      bookingsPercent: 0,
      yesterdayIncome: 0,
      todayIncome: 0,
      incomePercent: 0,
      driversInPreviousMonth: 0,
      driversInToday: 0,
      driversPercent: 0
    }
  },
  async mounted() {
    await this.$store.dispatch('get', {url: '/admin/header-stats'}).then(res => {
      this.previousMonthBookings = res.data.previousMonthBookings
      this.thisMonthBookings = res.data.thisMonthBookings
      this.yesterdayIncome = res.data.yesterdayIncome
      this.todayIncome = res.data.todayIncome
      this.driversInPreviousMonth = res.data.driversInPreviousMonth
      this.driversInToday = res.data.driversInToday
    })
    this.bookingsPercent = this.calculateIncreasePercent(this.previousMonthBookings, this.thisMonthBookings)
    this.incomePercent = this.calculateIncreasePercent(this.yesterdayIncome, this.todayIncome)
    this.driversPercent = this.calculateIncreasePercent(this.driversInPreviousMonth, this.driversInToday)
  },
  methods: {
    calculateIncreasePercent(originalNumber, newNumber) {
      if (originalNumber === 0) {
        // Handle division by zero
        return newNumber === 0 ? 0 : Infinity; // Or handle it according to your needs
      }
      let increasePercent = ((newNumber - originalNumber) / originalNumber) * 100;
      return Number(increasePercent.toFixed(2)); // Round to two decimal places
    },
    arrowColor(percent) {
      if (percent > 0) {
        return 'text-emerald-500'
      } else if (percent < -60) {
        return 'text-red-500'
      } else {
        return 'text-orange-500'
      }
    }
  }
};
</script>

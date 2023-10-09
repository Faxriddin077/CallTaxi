<template>
  <div>
    <sidebar/>
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar/>
      <div class="relative bg-emerald-600 md:pt-32 pb-16 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div>
            <div class="flex flex-wrap"></div>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view/>
        <footer-admin/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import FooterAdmin from "@/components/Footers/FooterAdmin";


export default {
  name: "operator-layout",
  components: {
    Sidebar,
    AdminNavbar,
    FooterAdmin
  }
}
</script>

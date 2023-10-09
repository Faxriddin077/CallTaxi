<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Header/HeaderStats";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import FooterAdmin from "@/components/Footers/FooterAdmin";


export default {
  name: "admin-layout",
  components: {
    Sidebar,
    HeaderStats,
    AdminNavbar,
    FooterAdmin
  }
}
</script>

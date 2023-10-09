<template>
  <div>
    <navbar />
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full" :style="`background-image: url('${registerBg}');`"></div>
        <router-view />
        <footer-auth absolute/>
      </section>
    </main>
  </div>
</template>

<script>
import registerBg from '@/assets/img/register_bg.png';

import Navbar from "@/components/Navbars/AuthNavbar";
import FooterAuth from "@/components/Footers/FooterAuth";


export default {
  name: "auth-layout",
  data: () => ({
      registerBg
  }),
  components: {
    Navbar,
    FooterAuth
  }
}
</script>
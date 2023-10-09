<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
    <div class="px-40 py-20 bg-white rounded-md">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-blue-600 text-5xl">404</h1>
        <br>
        <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 text-3xl md:text-4xl">
          <span class="text-red-500">Kechirasiz!</span> Sahifa topilmadi
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
          Sayt sozlamasi so&#8216;ralgan fayl manzilini o&#8216;zi ichi olmaydi
        </p>

        <router-link to="/" class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
          <span>Bosh sahifaga qaytish</span>
          <i class="fas fa-arrow-right ml-1"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

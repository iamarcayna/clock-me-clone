<template>
  <div class="flex bg-[#f4f8fc]">
    <Sidebar />
    <div class="flex-1 relative">
      <Navbar />
      <div class="h-[calc(100vh_-_190px)]">
        <RouterView />
      </div>
      <Footer
        class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-5"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

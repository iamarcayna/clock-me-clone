<template>
  <div class="flex bg-sky-100 gap-1">
    <Sidebar />
    <div class="flex-1">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex bg-sky-100">
    <Sidebar @sideBarItemClicked="(active:any) => activeLink = active" />
    <div class="flex-1">
      <Navbar :link="activeLink" />
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

const activeLink = ref({ id: 1, name: "Reports", notifCount: 5 });
</script>

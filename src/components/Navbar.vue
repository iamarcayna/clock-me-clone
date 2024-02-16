<template>
  <nav
    class="bg-white rounded-f w-full h-[60px] border-b flex items-center justify-between px-5"
  >
    <div class="text-lg text-gray-900 font-bold capitalize">
      {{ route.name }}
    </div>
    <div>
      <button class="rounded-full bg-gray-50 p-1 text-blue-600">
        <img src="../assets/images/profile.svg" alt="profile" class="h-6 w-6" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

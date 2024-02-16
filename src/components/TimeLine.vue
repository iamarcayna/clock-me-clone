<template>
  <div class="flex flex-col overflow-y-auto"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const timestamps = ref([
  {
    id: 1,
    date: "2024/02/13",
    stamps: [
      {
        name: "In",
        time: "8:00 AM",
      },
      {
        name: "Break",
        time: "12:00 PM ~ 1:00 PM",
      },
      {
        name: "Out",
        time: "5:00 PM",
      },
    ],
  },
  {
    id: 2,
    date: "2024/02/14",
    stamps: [
      {
        name: "In",
        time: "8:00 AM",
      },
      {
        name: "Break",
        time: "12:00 PM ~ 1:00 PM",
      },
      {
        name: "Out",
        time: "5:00 PM",
      },
    ],
  },
  {
    id: 3,
    date: "2024/02/15",
    stamps: [
      {
        name: "In",
        time: "8:00 AM",
      },
      {
        name: "Break",
        time: "12:00 PM ~ 1:00 PM",
      },
      {
        name: "Out",
        time: "5:00 PM",
      },
    ],
  },
]);
</script>

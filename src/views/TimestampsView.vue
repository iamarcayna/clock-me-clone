<template>
  <div
    v-if="route.query['calendar']"
    class="w-full h-full items-center flex justify-center overflow-hidden is-light-mode p-4"
  >
    <Calendar :events="events" class="bg-white text-gray-600 rounded-md" />
  </div>
  <div
    v-if="!route.query['timeline']"
    class="w-full h-full items-center flex justify-center overflow-hidden is-light-mode p-4"
  >
    <TimeLine />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Calendar from "../components/Calendar.vue";
import { useRoute } from "vue-router";
import TimeLine from "../components/TimeLine.vue";

const route = useRoute();

const events = ref([
  {
    title: "Meeting with Dora",
    with: "Albert Einstein",
    time: { start: "2024-02-15 04:52", end: "2024-02-15 05:37" },
    color: "green",
    isEditable: true,
    id: "de471c78cb5c",
    description:
      "Think of me as Yoda. Only instead of being little and green, I wear suites and I'm awesome.",
  },
  {
    title: "Advanced algebra",
    with: "Pheobe Buffay",
    time: { start: "2024-02-15 20:05", end: "2024-02-15 21:35" },
    colorScheme: "sports",
    isEditable: true,
    id: "6d3c0980a5cf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
  },
  {
    title: "Break",
    with: "Marshall Eriksen",
    time: { start: "2024-02-15 22:10", end: "2024-02-15 22:55" },
    colorScheme: "meetings",
    isEditable: true,
    id: "9f1b209982f1",
    location: "Zoom",
  },
]);
</script>

<style>
@import "qalendar/dist/style.css";
</style>

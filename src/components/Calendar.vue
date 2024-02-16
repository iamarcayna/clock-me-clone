<template>
  <Qalendar :events="events" :config="config" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Qalendar } from "qalendar";

const props = defineProps({
  events: {
    required: true,
  },
});

const config = ref({
  locale: "en-US",
  defaultMode: "month",
  style: {
    colorSchemes: {
      meetings: {
        color: "#fff",
        backgroundColor: "#131313",
      },
      sports: {
        color: "#fff",
        backgroundColor: "#ff4081",
      },
    },
  },
});
</script>

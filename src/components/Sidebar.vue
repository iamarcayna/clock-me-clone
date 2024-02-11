<template>
  <div
    class="w-[220px] h-screen bg-gray-50 shadow-2xl px-3 pb-3 flex flex-col justify-between"
  >
    <div>
      <RouterLink :to="{ name: 'home' }"
        ><p
          class="text-xl font-bold text-sky-600 text-center py-3 hover:bg-gray-100"
        >
          clock<span class="font-light">me</span>
        </p>
      </RouterLink>
      <hr />
      <div class="flex flex-col py-2 text-gray-950/70 text-sm font-medium">
        <button
          @click="
            activeId = item.id;
            emits('sideBarItemClicked', item);
          "
          :class="{
            'bg-sky-100 text-sky-600': activeId === item.id,
          }"
          v-for="item in sidebarItems"
          :key="item.id"
          class="text-start px-5 py-2 hover:bg-sky-100 rounded-md flex justify-between items-center"
        >
          {{ item.name }}
          <span class="text-blue-500 rounded-full p-1 font-bold text-sm">{{
            item.notifCount
          }}</span>
        </button>
      </div>
    </div>

    <div class="justify-self-end">
      <hr />
      <div class="pt-3 flex justify-between px-1 text-sm">
        <button
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-green-700 text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
        </button>
        <button
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-amber-600 text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
            />
          </svg>
        </button>
        <button
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-red-500 text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sidebarItems = ref([
  { id: 1, name: "Reports", notifCount: 5 },
  { id: 2, name: "Timelines", notifCount: 7 },
  { id: 3, name: "Projects", notifCount: 2 },
  { id: 4, name: "Members", notifCount: 50 },
]);

const activeId = ref(1);

const emits = defineEmits<{
  sideBarItemClicked: [{ id: Number; name: String; notifCount: Number }]; // named tuple syntax
}>();
</script>

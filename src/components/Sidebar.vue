<template>
  <div
    class="w-[280px] h-screen bg-white flex flex-col justify-between border-r"
  >
    <div>
      <div class="p-[6px] h-[59px]">
        <RouterLink :to="{ name: 'reports' }"
          ><p
            class="flex items-center justify-center gap-2 text-xl rounded-md font-bold text-gray-800 text-center h-full hover:bg-gray-100"
          >
            <span>clock<span class="font-light">me</span></span>
          </p>
        </RouterLink>
      </div>
      <hr />
      <div class="flex flex-col py-2 mt-3 px-2 text-gray-700 text-sm">
        <RouterLink
          :to="{ name: item.link }"
          :active-class="'bg-blue-500 text-gray-50'"
          v-for="item in sidebarItems"
          :key="item.id"
          class="text-start px-5 py-1 rounded-md flex justify-between items-center"
          :class="{ 'hover:bg-gray-100': route.name !== item.link }"
        >
          <span class="flex gap-2 items-center justify-center">
            <img
              :src="'/src/assets/images/' + item.icon"
              :alt="item.name"
              class="h-4 w-4 opacity-60"
              :class="{ invert: route.name === item.link }"
            />
            {{ item.name }}
          </span>
          <span
            :class="{ 'text-gray-50': route.name === item.link }"
            class="text-blue-500 rounded-full p-1 font-bold text-sm"
            >{{ item.notifCount }}</span
          >
        </RouterLink>
      </div>
      <ul
        v-for="item in subMenuItems"
        :key="item.id"
        class="flex flex-col mt-2 px-2"
      >
        <button
          @click="toggle(item.id)"
          class="text-gray-400 font-semibold text-sm text-start px-5 py-1 rounded-md flex justify-between items-center"
        >
          <span class="inline-flex w-full gap-1 items-center justify-between">
            {{ item.name }}
            <span
              class="text-blue-500 rounded-full p-1 font-bold text-sm mr-2"
              >{{ item.children.length }}</span
            >
          </span>
          <img
            v-if="item.isOpen"
            src="../assets/images/chevron-down.svg"
            alt="more items"
            class="h-4 w-4 opacity-60"
          />
          <img
            v-else
            src="../assets/images/chevron-right.svg"
            alt="hide items"
            class="h-4 w-4 opacity-60"
          />
        </button>
        <div v-if="item.isOpen" class="overflow-y-auto h-[200px]">
          <li
            class="text-gray-700 text-sm text-start px-5 py-2 hover:bg-gray-100 cursor-pointer rounded-md gap-2 flex justify-start items-center"
            v-for="subItem in item.children"
          >
            <div class="rounded-full bg-gray-100 p-1">
              <img
                src="../assets/images/profile.svg"
                alt="profile"
                class="h-4 w-4"
              />
            </div>
            {{ subItem.name }}
          </li>
        </div>
      </ul>
    </div>

    <div>
      <hr />
      <div class="py-3 flex justify-between px-3 text-sm">
        <div
          class="flex items-center justify-center font-semibold text-sm gap-2"
        >
          <span class="bg-green-500 px-2 rounded-full text-gray-50">In</span>
          <span class="text-gray-600">07:57 AM</span>
        </div>
        <button
          @click="toggleModalIn"
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-green-700 text-gray-500"
        >
          <img
            src="../assets/images/clock-in.svg"
            alt="clock in"
            class="h-5 w-5 opacity-60"
          />
        </button>
        <button
          @click="toggleModalBreak"
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-amber-600 text-gray-500"
        >
          <img
            src="../assets/images/break.svg"
            alt="break"
            class="h-5 w-5 opacity-60"
          />
        </button>
        <button
          @click="toggleModalOut"
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-red-500 text-gray-500"
        >
          <img
            src="../assets/images/clock-out.svg"
            alt="clock out"
            class="h-5 w-5 opacity-60"
          />
        </button>
      </div>
    </div>
    <BaseModal
      :is-open="isModalOpenIn"
      @close="toggleModalIn"
      :modal-type="'Clock-In'"
    >
      <p>Do you really wish to Clock-In?</p>
    </BaseModal>
    <BaseModal
      :is-open="isModalOpenBreak"
      @close="toggleModalBreak"
      :modal-type="'Break'"
    >
      <p>Do you really wish to take a Break?</p>
    </BaseModal>
    <BaseModal
      :is-open="isModalOpenOut"
      @close="toggleModalOut"
      :modal-type="'Clock-Out'"
    >
      <p>Do you really wish to Clock-Out?</p>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import BaseModal from "./BaseModal.vue";

const sidebarItems = ref([
  { id: 1, name: "Drafts", notifCount: 8, link: "drafts", icon: "draft.svg" },
  {
    id: 2,
    name: "Timestamps",
    notifCount: 7,
    link: "timestamps",
    icon: "clock.svg",
  },
  {
    id: 3,
    name: "Reports",
    notifCount: 5,
    link: "reports",
    icon: "report.svg",
  },
  { id: 4, name: "Tasks", notifCount: 2, link: "tasks", icon: "task.svg" },
]);

const subMenuItems = ref([
  {
    id: 1,
    name: "Projects",
    children: [{ name: "Project Nemesis" }, { name: "Umbrella Project" }],
    isOpen: false,
  },
  {
    id: 2,
    name: "Members",
    children: [
      { name: "Juan Dela One" },
      { name: "Juan Dela Two" },
      { name: "Juan Dela Three" },
      { name: "Juan Dela Four" },
      { name: "Juan Dela Five" },
      { name: "Juan Dela One" },
      { name: "Juan Dela Two" },
      { name: "Juan Dela Three" },
      { name: "Juan Dela Four" },
      { name: "Juan Dela Five" },
      { name: "Juan Dela One" },
      { name: "Juan Dela Two" },
      { name: "Juan Dela Three" },
      { name: "Juan Dela Four" },
      { name: "Juan Dela Five" },
      { name: "Juan Dela One" },
      { name: "Juan Dela Two" },
      { name: "Juan Dela Three" },
      { name: "Juan Dela Four" },
      { name: "Juan Dela Five" },
    ],
    isOpen: false,
  },
]);

const route = useRoute();

const toggle = (id: Number) => {
  subMenuItems.value.map((item) => {
    if (item.id === id) {
      item.isOpen = !item.isOpen;
    }
    return item;
  });
};
const isModalOpenIn = ref(false);
const toggleModalIn = () => (isModalOpenIn.value = !isModalOpenIn.value);
const isModalOpenBreak = ref(false);
const toggleModalBreak = () =>
  (isModalOpenBreak.value = !isModalOpenBreak.value);
const isModalOpenOut = ref(false);
const toggleModalOut = () => (isModalOpenOut.value = !isModalOpenOut.value);
</script>

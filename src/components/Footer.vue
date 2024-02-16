<template>
  <div
    class="max-w-[97%] w-full border-2 border-gray-300 h-[110px] bg-white rounded-md"
  >
    <div
      class="divide-x divide-gray-600 flex items-center justify-start text-gray-500 py-2 h-[45px] bg-gray-100 text-sm"
    >
      <div>
        <button
          class="px-2 py-1 flex items-center justify-center gap-2 hover:bg-gray-200 rounded-md mx-2"
        >
          <img
            class="h-4 w-4"
            src="../assets/images/stop.svg"
            alt="category"
          />Category
        </button>
      </div>
      <div>
        <button
          class="px-2 py-1 flex items-center justify-center gap-2 hover:bg-gray-200 rounded-md mx-2"
        >
          <img
            class="h-4 w-4"
            src="../assets/images/add.svg"
            alt="create project"
          />Create Project
        </button>
      </div>
      <div>
        <button
          class="px-2 py-1 flex items-center justify-center gap-2 hover:bg-gray-200 rounded-md mx-2"
        >
          <img class="h-4 w-4" src="../assets/images/tag.svg" alt="tags" />Tags
        </button>
      </div>
    </div>
    <div class="h-[65px] flex items-center justify-between px-2">
      <input
        class="text-gray-800 ml-5 flex-1 bg-inherit border-none outline-none"
        placeholder="What's keeping you busy at this time?"
      />
      <div class="flex items-center divide-x divide-gray-400">
        <div>
          <button
            class="flex items-center justify-start mx-3 gap-2 hover:bg-gray-100 py-1 px-2 rounded-md"
          >
            <img
              src="../assets/images/location.svg"
              alt="location"
              class="h-6 w-6 opacity-60"
            />
            <span class="text-gray-700">ON</span>
          </button>
        </div>
        <div class="flex items-center gap-2">
          <p class="ml-3 text-gray-600 font-semibold">
            00:00<span class="text-sm translate-y-3">:00</span>
          </p>
          <button
            class="flex items-center justify-start mx-2 bg-blue-500 p-1 rounded-md"
          >
            <img
              src="../assets/images/play.svg"
              alt="play"
              class="h-6 w-6 opacity-60 invert"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

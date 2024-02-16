<template>
  <Teleport to="body">
    <div
      v-show="isOpen"
      class="fixed top-0 left-0 inset-0 bg-gray-950/20 z-50 flex items-center justify-center"
    >
      <Transition>
        <div
          v-show="isOpen"
          class="bg-white h-52 w-[500px] rounded-md shadow-md flex flex-col justify-between"
        >
          <div>
            <p class="px-4 py-3 text-gray-600 text-lg">Confirmation</p>
            <hr />
          </div>
          <div class="p-6 text-gray-600">
            <slot />
          </div>

          <div class="flex items-center justify-end p-3 gap-5 text-gray-100">
            <button class="px-4 py-2 bg-blue-500 rounded-md">
              Yes, I want to <span class="capitalize"> {{ modalType }}</span>
            </button>
            <button
              @click="emits('close')"
              class="px-4 py-2 bg-gray-200 rounded-md text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  modalType: {
    type: String,
    default: "Clock-in",
  },
});
const emits = defineEmits(["close"]);
</script>

<style scoped>
.v-enter-active {
  animation: bounce-in 0.6s;
}
.v-leave-active {
  animation: bounce-in 0.6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>

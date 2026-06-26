<script lang="ts" setup>
import "../assets/main.css";

defineSlots<{
  default: (props: unknown) => unknown;
}>();


const { queue } = useNuxtApp().$mediaPlayer;
</script>

<template>
  <div
    class="flex h-screen overflow-hidden bg-background-1 text-black-1 dark:text-white-1"
  >
    <SidebarElement />
    <main
      class="relative flex grow flex-col overflow-x-hidden overflow-y-scroll md:overflow-x-scroll"
    >
      <AppToolbar />
      <div class="flex grow">
        <Suspense>
          <slot />
        </Suspense>

        <MediaPlayer v-if="queue.length > 0" />
      </div>
      <DialogErrorDialog />
    </main>
  </div>
</template>

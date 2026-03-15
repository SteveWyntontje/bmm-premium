<script setup lang="ts">
import * as slider from "@zag-js/slider";
import { normalizeProps, useMachine } from "@zag-js/vue";

const { currentPosition, currentTrackDuration } = useNuxtApp().$mediaPlayer;

const newPosition = ref<number | null>(null);
const service = useMachine(slider.machine, {
  id: "position",
  min: 0,
  max: 100,
  value: [0],
  step: 0.01,
  onValueChange(details) {
    const [value] = details.value;
    newPosition.value = value;
    currentPosition.value = (value / 100) * currentTrackDuration.value;
    newPosition.value = null;
  },
});
const positionSlider = computed(() => slider.connect(service, normalizeProps));

const currentOrNewPosition = computed(() => {
  // subtitle
  if (newPosition.value !== null) {
    return (newPosition.value / 100) * currentTrackDuration.value;
  }
  console.log("currentOrNewPosition " + currentPosition.value)
  return currentPosition.value;
});

watch([currentPosition, currentTrackDuration], () => {
  // slider percentage
  if (newPosition.value == null) return;
  if (currentTrackDuration.value > 0) {
    const value = (currentPosition.value / currentTrackDuration.value) * 100;
    service.send({
      type: "SET_VALUE",
      value: [value],
    });
  };
});
</script>

<template>
  <div ref="ref" class="group/position px-4 py-2" v-bind="positionSlider.getRootProps()">
    <div class="flex items-center">
      <div class="h-7" />
      <div
        class="h-6 w-full transition-all duration-200 group-hover/position:h-7"
      >
        <div
          v-bind="positionSlider.getControlProps()"
          class="h-full cursor-pointer py-2"
        >
          <div class="h-full overflow-hidden rounded-full">
            <div
              v-bind="positionSlider.getTrackProps()"
              class="h-full cursor-pointer bg-background-2"
            >
              <div
                v-bind="positionSlider.getRangeProps()"
                class="h-full cursor-pointer bg-label-1"
              />
            </div>
          </div>
          <div
            v-for="(_, index) in positionSlider.value"
            :key="index"
            v-bind="positionSlider.getThumbProps({ index })"
            class="top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-label-1"
          >
            <input v-bind="positionSlider.getHiddenInputProps({ index })" >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between py-0.5 text-sm">
      <span>
        <TimeDuration :duration="currentOrNewPosition" />
      </span>
      <span>
        <TimeDuration :duration="Math.max(Math.floor(currentTrackDuration) - currentOrNewPosition, 0)" />
      </span>
    </div>
  </div>
</template>
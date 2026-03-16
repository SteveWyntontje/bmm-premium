<script setup lang="ts">
import * as slider from "@zag-js/slider";
import { normalizeProps, useMachine } from "@zag-js/vue";

const { currentPosition, currentTrackDuration } = useNuxtApp().$mediaPlayer;

const isDragging = ref(false);
const newPosition = ref(-1);
const service = useMachine(slider.machine, {
  id: "position",
  min: 0,
  max: currentTrackDuration.value,
  defaultValue: [0],
  get value() {
    if (newPosition.value !== -1) {
      return [newPosition.value]
    }
  },
  step: 0.01,
  onValueChange(details){
    isDragging.value = true;
    const [value] = details.value;
    if (value !== undefined) {
      newPosition.value = -1;
    };
  },
  onValueChangeEnd(details) {
    const [value] = details.value;
    if (value !== undefined) {
      currentPosition.value = value;
      newPosition.value = value;
    };
    isDragging.value = false;
  },
});
const positionSlider = computed(() => slider.connect(service, normalizeProps));

const currentTime = computed(() => currentPosition.value)
const remainingTime = computed(() =>
  Math.max(Math.floor(currentTrackDuration.value) - currentPosition.value, 0)
);
watch(currentPosition, () => {
  if (isDragging.value) return;
  newPosition.value = currentPosition.value;
});
</script>

<template>
  <div class="group/position px-4 py-2" v-bind="positionSlider.getRootProps()">
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
          >
            <input v-bind="positionSlider.getHiddenInputProps({ index })" >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between py-0.5 text-sm">
      <span>
        <TimeDuration :duration="currentTime" />
      </span>
      <span>
        <TimeDuration :duration="remainingTime" />
      </span>
    </div>
  </div>
</template>
<template>
  <Carousel v-bind="settings" class="mx-auto" :breakpoints="breakpoints">
    <Slide v-for="(item, index) in cardsList">
      <NuxtLink
        :href="`/r/${item._id}`"
        class="carousel__item shadow relative rounded-md flex flex-col gap-1 h-full"
        :style="{ backgroundColor: item.bgColor, color: item.textColor }"
      >
        <div
          className="badge absolute rounded-md"
          :style="{
            backgroundColor: item.bgColor,
            color: item.textColor,
          }"
        >
          {{ item.mainCategory }}
        </div>
        <div>
          <img
            :src="item.img"
            class="w-full max-h-40 rounded-md rounded-b-xl"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h4 class="font-bold text-xs text-start px-2">
            {{ item.title }}
          </h4>
        </div>
      </NuxtLink>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup lang="ts">
import type { ICard } from "~/types/webTypes";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});
const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});

const props = defineProps<{
  cardsList: ICard[];
}>();
</script>

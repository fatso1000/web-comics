<template>
  <section class="flex flex-col w-full">
    <div v-if="isLoading" class="h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
    <div
      v-if="cardDetail && !isLoading"
      class="inline-flex w-full p-4 gap-4 rounded-b-3xl"
      :style="{
        background: cardDetail.bgColor,
      }"
    >
      <div>
        <img :src="cardDetail.thumbnail" class="w-48 h-auto rounded-md shadow" />
      </div>
      <div :style="{ color: cardDetail.textColor }">
        <h1 class="font-black text-4xl">
          {{ cardDetail.title }}
        </h1>
        <div class="inline-flex gap-2 w-full">
          <div
            v-for="(item, index) in cardDetail.categories"
            className="badge badge-outline rounded"
          >
            {{ item }}
          </div>
        </div>
        <p class="max-h-8 text-sm">
          {{ cardDetail.description }}
        </p>
      </div>
    </div>
  </section>
  <section
    class="p-4 my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2"
  >
    <NuxtLink
      v-if="cardDetail"
      v-for="(item, index) in cardDetail.content"
      :href="`/cardDetail/${cardDetail._id}/p/${item._id}`"
      class="h-48 rounded"
    >
      <img :src="item.img" class="w-full h-full rounded" />
    </NuxtLink>
  </section>
  <section class="px-4 flex flex-col w-full">
    <h2 class="text-primary-content font-black text-2xl">Related content</h2>
    <div class="flex w-full">
      <!-- <CustomCarousel :cardsList="trending" /> -->
    </div>
  </section>
</template>
<script setup lang="ts">
import CustomCarousel from "~/components/CustomCarousel/CustomCarousel.vue";
import { type ICardDetail } from "~/types/webTypes";

const route = useRoute();
const cardDetail = ref<ICardDetail>();
const isLoading = ref<boolean>(true);
const { data } = await $fetch(`/api/content/${route.params.id}`);
cardDetail.value = data as unknown as ICardDetail;
isLoading.value = false;
</script>

<template>
  <section class="w-full mt-5 flex flex-col px-4">
    <h2 class="text-primary-content font-black text-2xl mb-2">Authors ☀️</h2>
    <div
      class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
    >
      <NuxtLink
        v-for="(item, index) in authorsList"
        :href="`/author/${item._id}`"
        class="shadow p-2 relative rounded-md flex flex-col gap-1 h-full bg-primary text-secondary"
      >
        <img :src="item._id" class="w-1/2 h-full" alt="" />
        <h4 class="font-bold text-primary-content text-xs text-start px-2">
          {{ item.fullName }}
        </h4>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IAuthor } from "~/types/webTypes";

const authorsList = ref<IAuthor[]>();
const { data } = await $fetch<{ data: IAuthor[] }>("/api/author");
authorsList.value = data;
</script>

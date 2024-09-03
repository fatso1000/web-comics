<template>
  <section class="w-full flex flex-col text-primary-content px-4">
    <div class="w-full inline-flex items-center justify-between p-4">
      <Icon icon="gravity-ui:xmark" :ssr="true" />
      <div class="inline-flex items-center gap-2">
        <Icon icon="gravity-ui:chevrons-left" :ssr="true" />
        <Icon icon="gravity-ui:chevron-left" :ssr="true" />
        <p>1 of 23</p>
        <Icon icon="gravity-ui:chevron-right" :ssr="true" />
        <Icon icon="gravity-ui:chevrons-right" :ssr="true" />
      </div>
      <div>
        <Icon icon="gravity-ui:chevrons-expand-up-right" />
        <Icon icon="gravity-ui:gear" :ssr="true" />
      </div>
    </div>
    <div class="bg-primary-content/10 w-full flex rounded-2xl">
      <div class="mx-auto relative" >
        <NuxtLink class="absolute opacity-0 h-full w-1/2 top-0 left-0" :href="`${2}`"/>
        <img :src="currentImage" alt="" />
        <NuxtLink class="absolute opacity-0 h-full w-1/2 top-0 right-0" :href="`${3}`"/>
      </div>
    </div>
    <div class="w-full inline-flex items-center justify-between p-4">
      <Icon icon="gravity-ui:xmark" :ssr="true" />
      <div class="inline-flex items-center gap-2">
        <Icon icon="gravity-ui:chevrons-left" :ssr="true" />
        <Icon icon="gravity-ui:chevron-left" :ssr="true" />
        <p>1 of 23</p>
        <Icon icon="gravity-ui:chevron-right" :ssr="true" />
        <Icon icon="gravity-ui:chevrons-right" :ssr="true" />
      </div>
      <div>
        <Icon icon="gravity-ui:gear" :ssr="true" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

const currentImage = ref(
  "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp"
);
</script>

<template>
  <section class="flex flex-col w-full">
    <div
      class="inline-flex w-full p-4 gap-4"
      :style="{
        background: `linear-gradient(0deg, black 0%, ${r.bgColor} 100%)`,
      }"
    >
      <div>
        <img :src="r.img" class="w-48 h-auto rounded-md shadow" />
      </div>
      <div :style="{ color: r.textColor }">
        <h1 class="font-black text-4xl">
          {{ r.title }}
        </h1>
        <div class="inline-flex gap-2 w-full">
          <div
            v-for="(item, index) in r.categories"
            className="badge badge-outline rounded"
          >
            {{ item }}
          </div>
        </div>
        <p class="max-h-8 text-sm">
          {{ r.description }}
        </p>
      </div>
    </div>
  </section>
  <section
    class="p-4 my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2"
  >
    <NuxtLink
      v-for="(item, index) in r.content"
      :href="`/r/${r.id}/p/${item.id}`"
      class="h-48 rounded"
    >
      <img :src="item.img" class="w-full h-full rounded" />
    </NuxtLink>
  </section>
  <section class="px-4 flex flex-col w-full">
    <h2 class="text-primary-content font-black text-2xl">Related content</h2>
    <div class="flex w-full">
      <CustomCarousel :cardsList="trending" />
    </div>
  </section>
</template>
<script setup lang="ts">
import CustomCarousel from "~/components/CustomCarousel/CustomCarousel.vue";
import { type ICardDetail } from "~/types/webTypes";
const r = ref<ICardDetail>({
  id: "23",
  img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
  title: "[Ikki Ichiyuu] Kyonyuu Tenchou no Itazura",
  bgColor: "#625b67",
  textColor: "#D3D3D3",
  mainCategory: "Shounen",
  content: [
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
    {
      id: "12",
      img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    },
  ],
  authors: [
    {
      id: "212",
      name: "Author Nro 1",
    },
  ],
  created_at: new Date().toLocaleDateString(),
  length: 2,
  contentType: "ImageCollection",
  description:
    "This is a short description for a good fucking good manga hell yeah XD lol xd hola chau me voy adios!.",
  categories: ["Shounen", "Ecchi", "Manga", "Action", "Adventure"],
  language:
    "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
});
const trending = ref([
  {
    id: "23",
    img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    title: "[Ikki Ichiyuu] Kyonyuu Tenchou no Itazura",
    bgColor: "#625b67",
    textColor: "#D3D3D3",
    mainCategory: "Shounen",
    language:
      "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
  },
  {
    id: "123",
    img: "https://otakuteca.com/images/books/cover/640cb069a4af9.webp",
    title: "El chico que le interesa no era un chico",
    bgColor: "#b7dc59",
    textColor: "#6F6F6F",
    mainCategory: "Seinen",
    language:
      "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
  },
  {
    id: "23",
    img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    title: "Kyonyuu Tenchou no Itazura",
    bgColor: "#625b67",
    textColor: "#D3D3D3",
    mainCategory: "Shounen",
    language:
      "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
  },
  {
    id: "123",
    img: "https://otakuteca.com/images/books/cover/640cb069a4af9.webp",
    title: "El chico que le",
    bgColor: "#b7dc59",
    textColor: "#6F6F6F",
    mainCategory: "Shounen",
    language:
      "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
  },
  {
    id: "23",
    img: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    title: "[Ikki Ichiyuu] Kyonyuu Tenchou no Itazura",
    bgColor: "#625b67",
    textColor: "#D3D3D3",
    mainCategory: "Shounen",
    language:
      "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
  },
  {
    id: "123",
    img: "https://otakuteca.com/images/books/cover/640cb069a4af9.webp",
    title: "El chico que le interesa no era un chico",
    bgColor: "#b7dc59",
    textColor: "#6F6F6F",
    mainCategory: "Shounen",
    language:
      "data:image/gif;base64,R0lGODlhSAAwAOZhAO1UZPn6/PX+//X8//z9/vX4+/X//////+1TY+1PX/X7/vX7/fb///X9/+1SYvf4++1QYOxMXPn7/P7+//Xw9PXx9fGjre5pd/X8/vb4+/GnsPPN1O1OX/CQm+95hvTd4vXy9vGXovTb4PCVoO1TZPPS1+1OXu1QYfPT2fTm6/Ggqu1dbfX5/O5icPCSnfCTne1RYvTq7u5hcfGkrvTv8+5jce1UZfTr7/To7fKqsvPJz+1WZvPO0/CTnvXt8fPP1e93g/K0vPLEy/LEzO1PYO1YaO+Aje5od+1ZaPLDy+5gb/LFzO5ice+Klu1XZ++Cju1YZ+5hcPXs8PGirOxKW++JlexLXO+CjfK2v/K2vfXs8e+BjPG0u+5hb+1VZfb4+vX3+v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGEALAAAAABIADAAAAf/gGFhBwQBD1+IiYqLjI2Oj5CLDwEEB4JhEwFfYJydnp+goaKjpKNfARODEqWsra6vnRKEm7C1trBfhbe7vKQBGb3BwmCHw8a3iMfKr8nLzqTNz9Kf0dPW1dbS2NnO28MFCw0CBgINCwXdtMcFAz5LFi9NLxZCWgMsyt68GCBYTxdIIFhJAOWCkSAVBhzTdwsDjhBMIiRwAMALAAcJInQZkULhMIa1GtzoAYCIl5MoUUIg0SGGgI/qeimokGMHgpQ4T97UQEGBMJCvBJSoASOnUQcteAhA1wtoqwUUZnCwYdSoCRU0fDaNucvABw83q+ZEAESEgWBOWRlAIaOiWJwA0Fb8YICW6y0GGyy+zXlCB92twvDq3Zuy719eaUutbUsYZdy5dYV5BdtYZ9mzgINBlUq18dWskYUJJdoYqVKmiO3emlkzrNidPX+qviWSJASxK1u+lH3MYYgoEilaxBhBCUePvI8NAJHlyoUiCagkcHJkC5eEC2fzYudjiAUXVVxMSSLlXj7tvcCJI2cOdXZu19DDDz0/Xf1nie/jkq/fVv7+rXwBDIDGZBAAgcZQwh+CpeRywCoM8iILJppEWMspqQhCiCGRdOjhh5BMUokggQAAOw==",
  },
]);
</script>

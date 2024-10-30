<template>
  <section class="mt-10 w-full flex flex-col px-4">
    <h2 class="text-primary-content font-black text-2xl">Trending🔥</h2>
    <div class="flex w-full">
      <!-- <CustomCarousel :cardsList="contentList" /> -->
    </div>
  </section>
  <section class="w-full mt-5 flex flex-col px-4">
    <h2 class="text-primary-content font-black text-2xl">Latest🐱</h2>
    <div
      class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
    >
      <NuxtLink
        v-for="(item, index) in contentList"
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
            :src="item.thumbnail"
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
    </div>
  </section>
  <div className="join">
    <button className="join-item btn btn-xs">1</button>
    <button className="join-item btn btn-xs btn-active">2</button>
    <button className="join-item btn btn-xs">3</button>
    <button className="join-item btn btn-xs">4</button>
  </div>
</template>
<script setup lang="ts">
import CustomCarousel from "~/components/CustomCarousel/CustomCarousel.vue";

const contentList = ref<ICard[]>()
const { data } = await $fetch("/api/content");
contentList.value = data as ICard[];

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

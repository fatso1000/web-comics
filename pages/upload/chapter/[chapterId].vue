<template>
  <section class="w-full px-4 flex mt-8">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input
        type="text"
        v-model="form.title"
        placeholder="Title"
        class="input input-bordered w-full"
      />
      <input
        type="text"
        v-model="form.description"
        placeholder="Description"
        class="input input-bordered w-full"
      />
      <div class="inline-flex w-full">
        <button class="btn w-full" type="button" @click="openDialog">
          Add Chapter
          <Icon icon="gravity-ui:plus" />
        </button>
      </div>
      <div
        class="inline-flex justify-start items-center"
        v-for="item in chaptersList"
      >
        <span>{{ item.number }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="inline-flex gap-1 ml-auto">
          <button class="btn btn-error">
            <Icon icon="gravity-ui:trash-bin" />
          </button>
          <button class="btn">
            <Icon icon="gravity-ui:pencil" />
          </button>
        </div>
      </div>
      <button type="submit" class="btn" :disabled="submitted">Submit</button>
    </form>
    <ChapterModal
      v-model="showDialog"
      :title="modalProps.title"
      :description="modalProps.description"
      :id="modalProps.id"
      :number="modalProps.number"
      :type="modalProps.type"
      :thumbnail="modalProps.thumbnail"
    />
  </section>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ChapterModal from "~/components/ChapterModal/ChapterModal.vue";
import { ModalTypes } from "~/types/webTypes";
const route = useRoute(),
  chapterId = parseInt(route.params.chapterId as string);

const { data } = await useFetch(
  `/api/content/${chapterId}`
);

interface IChapter {
  title: string;
  description: string;
  thumbnail: string;
  number: number;
  pageseCount: number;
}

const showDialog = ref(false);

const openDialog = () => {
  showDialog.value = true;
};

const modalProps = ref({
  type: ModalTypes.UPDATE,
  id: chapterId,
  title: "",
  description: "",
  thumbnail: "",
  number: 1,
});
const submitted = ref(false);
const form = ref({
  title: "",
  description: "",
});
const chaptersList = ref<IChapter[]>([]);

const handleSubmit = async () => {
  console.log("Form submitted:", form.value);
  submitted.value = true;

  const request = await $fetch("/api/upload", {
    method: "POST",
    body: {
      ...form,
    },
  });
};

// const onSubmit = () => {
//   try {
//     // const data = await uploadFile(file, bucketName, key);
//     // console.log("File uploaded successfully:", data);
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// };
</script>

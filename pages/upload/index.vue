<template>
  <section class="w-full px-4 flex mt-8">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input type="text" v-model="form.title" placeholder="Title" class="input input-bordered w-full" />
      <input type="text" v-model="form.description" placeholder="Description" class="input input-bordered w-full" />
      <input type="file" accept="image/*" @change="handleFileChange"
        class="file-input file-input-bordered w-full max-w-xs" />
      <img :src="form.thumbnailPreview" class="w-full h-auto" v-if="form.thumbnail" />
      <div class="inline-flex w-full">
        <button class="btn w-full" type="button" @click="openDialog">
          Add Chapter
          <Icon icon="gravity-ui:plus" />
        </button>
      </div>
      <div class="inline-flex justify-start items-center" v-for="item in chaptersList">
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
    <ChapterModal v-model="showDialog" :title="modalProps.title" :description="modalProps.description"
      :id="modalProps.id" :number="modalProps.number" :type="modalProps.type" :thumbnail="modalProps.thumbnail" />
    <canvas id="canvas" style="display: none;"></canvas>
  </section>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ChapterModal from "~/components/ChapterModal/ChapterModal.vue";
import { ModalTypes, type ContentFormValues } from "~/types/webTypes";

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
  type: ModalTypes.CREATE,
  id: 2,
  title: "",
  description: "",
  thumbnail: "",
  number: 1,
});
const submitted = ref(false);
const form = ref<ContentFormValues>({
  title: "",
  description: "",
  type: "",
  language: "English",
  categories: [],
  authors: [],
  thumbnail: null,
  thumbnailPreview: modalProps.value.thumbnail,
});
const chaptersList = ref<IChapter[]>([]);

const handleFileChange = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files;

  if (file && file.length > 0) {
    const image = file[0];
    form.value.thumbnail = image;
    form.value.thumbnailPreview = URL.createObjectURL(file[0]);
  }
};

const handleSubmit = async () => {
  console.log("Form submitted:", { ...form.value });
  const formdata = new FormData();
  formdata.append("title", form.value.title);
  formdata.append("description", form.value.description);
  formdata.append("type", form.value.type);
  formdata.append("language", form.value.language);

  // Append array fields
  // formdata.append('categories', JSON.stringify(form.categories));
  // formdata.append('authors', JSON.stringify(form.authors));

  // Append the thumbnail if available
  formdata.append("thumbnail", form.value.thumbnail as File);

  submitted.value = true;

  const request = await $fetch("/api/content", {
    method: "POST",
    cache: "no-cache",
    body: formdata,
  });

  if (request && request.statusMessage === "Successfully created.") {
    console.log(request.statusMessage)
  }

  submitted.value = false;
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

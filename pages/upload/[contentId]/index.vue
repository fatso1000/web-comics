<template>
  <form action="">
    <input
      type="file"
      multiple
      accept="image/*"
      className="file-input file-input-bordered w-full"
    />
    <div class="w-full rounded-md grid grid-cols-5 gap-2 gap-y-4">
      <div v-for="(items, index) in imagesList">
        <img :src="items.url" class="h-36 w-auto mx-auto" />
        <p class="text-center font-bold text-primary-content">
          {{ index + 1 }}
        </p>
        <div class="inline-flex gap-1 w-full">
          <button className="btn btn-error">
            <Icon icon="gravity-ui:trash-bin" />
          </button>
          <button className="btn">
            <Icon icon="gravity-ui:arrow-shape-left-from-line" />
          </button>
          <button className="btn">
            <Icon icon="gravity-ui:arrow-shape-right-from-line" />
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface X {
  name: string;
  size: number;
  type: string;
  url: string;
}

const imagesList = ref<X[]>([]);

const handleFileUpload = async (event: any) => {
  const files = event.target.files;
  console.log(files);
  // const key = `uploads/${file.name}`;

  if (files) {
    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(file);
        imagesList.value.push({
          url: e.target.result,
          size: file.size,
          name: file.name,
          type: file.type,
        }); // Store each file's content in the reactive array
      };

      reader.readAsDataURL(file); // Read the file as a Data URL (base64 encoded string)
    });
  }
};
</script>

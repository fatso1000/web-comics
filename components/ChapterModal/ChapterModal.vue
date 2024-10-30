<template>
  <dialog
    id="chapter_modal"
    class="modal open:bg-black/60"
    v-bind:open="isOpen"
    @click.self="closeDialog"
  >
    <div class="modal-box border-primary border rounded-md">
      <h3 class="font-bold text-lg">{{ type }}</h3>
      <form action="">
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
        <input
          type="file"
          accept="image/*"
          @change="handleFileChange"
          class="file-input file-input-bordered w-full max-w-xs"
        />
        <img
          :src="form.thumbnail"
          class="w-full h-auto"
          v-if="form.thumbnail"
        />
        <input
          type="text"
          v-model="form.number"
          placeholder="Description"
          class="input input-bordered w-full"
        />
        <button class="btn w-full">Submit</button>
      </form>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn w-full">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { type ChapterModelProps } from "~/types/webTypes";

const props = defineProps<ChapterModelProps>();

const form = reactive({
  title: props.title,
  description: props.description,
  thumbnail: props.thumbnail,
  number: props.number,
  language: "English",
});

const emits = defineEmits(["update:modelValue"]);

const isOpen = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue;
  }
);

const closeDialog = () => {
  isOpen.value = false;
  emits("update:modelValue", false);
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files;

  if (file && file.length > 0) {
    form.thumbnail = URL.createObjectURL(file[0]);
  }
};
</script>

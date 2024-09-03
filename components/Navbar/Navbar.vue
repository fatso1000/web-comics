<template>
  <div class="w-full flex flex-col">
    <nav
      class="w-full inline-flex justify-between items-center border-b-2 border-primary-content/40 px-2 py-3"
    >
      <div class="inline-flex gap-4">
        <NuxtLink href="/">
          <img
            src="~/assets/img/app.ico"
            width="40"
            height="40"
            alt="app logo"
            srcset=""
          />
        </NuxtLink>
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <ul class="inline-flex gap-2">
        <li><NuxtLink href="/signup" class="btn">Sign Up</NuxtLink></li>
        <li>
          <NuxtLink href="/signin" class="btn btn-neutral">Sign In</NuxtLink>
        </li>
      </ul>
    </nav>
    <nav class="w-full flex">
      <ul class="inline-flex w-full gap-2">
        <li>
          <NuxtLink
            href="/categories"
            class="btn btn-ghost text-primary-content btn-xs"
            >Categories</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/authors"
            class="btn btn-ghost text-primary-content btn-xs"
            >Authors</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/contributions"
            class="btn btn-ghost text-primary-content btn-xs"
            >Contributions</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/mangas"
            class="btn btn-ghost text-primary-content btn-xs"
            >Mangas</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/comics"
            class="btn btn-ghost text-primary-content btn-xs"
            >Comics</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts"></script>

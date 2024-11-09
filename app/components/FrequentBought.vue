<script setup lang="ts">
import { ref } from "vue";

const showMore = ref(false);
</script>

<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%]">
    <h1 class="text-2xl font-bold mb-8">Students also bought</h1>

    <!-- Course 1 -->
    <div class="mb-6 flex items-start space-x-4">
      <img
        src="/assets/images/ztm.svg"
        alt="Figma HTML CSS JavaScript in Web Design and UI UX Design"
        class="w-24 h-24 object-cover rounded-md"
      />
      <div class="flex-grow">
        <h3 class="text-lg font-semibold">
          Figma HTML CSS JavaScript in Web Design and UI UX Design
        </h3>
        <div class="flex items-center mt-1">
          <span class="text-green-600 text-sm mr-2">40 total hours</span>
          <span class="text-gray-500 text-sm">• Updated 10/2024</span>
        </div>
        <div class="flex items-center mt-1 text-yellow-500">
          <span class="mr-1">4.5</span>
          <span class="flex items-center">
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(9386)</span>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-lg font-bold text-gray-800">$74.99</span>
        <button class="text-gray-400 hover:text-red-500 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
    <hr class="my-4 border-gray-300" />

    <!-- Course 2 -->
    <div class="mb-6 flex items-start space-x-4">
      <img
        src="/assets/images/second_image.svg"
        alt="Complete Figma Mega Course: UI/UX Design Beginner to Expert"
        class="w-24 h-24 object-cover rounded-md"
      />
      <div class="flex-grow">
        <h3 class="text-lg font-semibold">
          Complete Figma Mega Course: UI/UX Design Beginner to Expert
        </h3>
        <div class="flex items-center mt-1">
          <span
            class="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded mr-2"
            >Bestseller</span
          >
          <span class="text-green-600 text-sm mr-2">21.5 total hours</span>
          <span class="text-gray-500 text-sm">• Updated 11/2024</span>
        </div>
        <div class="flex items-center mt-1 text-yellow-500">
          <span class="mr-1">4.8</span>
          <span class="flex items-center">
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(86209)</span>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-lg font-bold text-gray-800">$74.99</span>
        <button class="text-gray-400 hover:text-red-500 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
    <hr class="my-4 border-gray-300" />

    <!-- Course 3 -->
    <div class="mb-6 flex items-start space-x-4">
      <img
        src="/assets/images/third_image.svg"
        alt="Complete Web Design: from Figma to Webflow - 2024 UI"
        class="w-24 h-24 object-cover rounded-md"
      />
      <div class="flex-grow">
        <h3 class="text-lg font-semibold">
          Complete Web Design: from Figma to Webflow - 2024 UI
        </h3>
        <div class="flex items-center mt-1">
          <span
            class="inline-block bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2"
            >Highest Rated</span
          >
          <span class="text-green-600 text-sm mr-2">12.5 total hours</span>
          <span class="text-gray-500 text-sm">• Updated 10/2024</span>
        </div>
        <div class="flex items-center mt-1 text-yellow-500">
          <span class="mr-1">4.7</span>
          <span class="flex items-center">
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(4021)</span>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-lg font-bold text-gray-800">$59.99</span>
        <button class="text-gray-400 hover:text-red-500 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
    <hr class="my-4 border-gray-300" />

    <!-- Course 4 -->
    <div v-if="showMore" class="mb-6 flex items-start space-x-4">
      <img
        src="/assets/images/image-1.svg"
        alt="Master Figma for Web Design & Freelancing: Learn UI/UX"
        class="w-24 h-24 object-cover rounded-md"
      />
      <div class="flex-grow">
        <h3 class="text-lg font-semibold">
          Master Figma for Web Design & Freelancing: Learn UI/UX
        </h3>
        <div class="flex items-center mt-1">
          <span class="text-green-600 text-sm mr-2">12.5 total hours</span>
          <span class="text-gray-500 text-sm">• Updated 10/2024</span>
        </div>
        <div class="flex items-center mt-1 text-yellow-500">
          <span class="mr-1">4.7</span>
          <span class="flex items-center">
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
            <span class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(4021)</span>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-lg font-bold text-gray-800">$59.99</span>
        <button class="text-gray-400 hover:text-red-500 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
    <hr v-if="showMore" class="my-4 border-gray-300" />

    <button
      v-if="!showMore"
      @click="showMore = true"
      class="mt-4 px-4 py-2 border border-black text-black rounded hover:bg-gray-300 w-full"
    >
      Show more
    </button>
    <button
      v-if="showMore"
      @click="showMore = false"
      class="mt-4 px-4 py-2 border border-black text-black rounded hover:bg-gray-300 w-full"
    >
      Show less
    </button>
  </div>
</template>
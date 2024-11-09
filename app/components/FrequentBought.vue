<script setup lang="ts">
import { ref } from "vue";

const courses = [
  {
    title: "Figma HTML CSS JavaScript in Web Design and UI UX Design",
    totalHours: "40 total hours",
    updatedDate: "Updated 10/2024",
    rating: 4.5,
    reviews: 9386,
    price: "$74.99",
    image: "/assets/images/image.jpg",
    bestseller: false,
    highestRated: false,
  },
  {
    title: "Complete Web Design: from Figma to Webflow - 2024 UI",
    totalHours: "21.5 total hours",
    updatedDate: "Updated 11/2024",
    rating: 4.8,
    reviews: 86209,
    price: "$74.99",
    image: "/assets/images/image.jpg",
    bestseller: true,
    highestRated: false,
  },
  {
    title: "Master Figma for Web Design & Freelancing: Learn UI/UX",
    totalHours: "12.5 total hours",
    updatedDate: "Updated 10/2024",
    rating: 4.7,
    reviews: 4021,
    price: "$59.99",
    image: "/assets/images/image.jpg",
    bestseller: false,
    highestRated: true,
  },
  {
    title: "Master Figma for Web Design & Freelancing: Learn UI/UX",
    totalHours: "12.5 total hours",
    updatedDate: "Updated 10/2024",
    rating: 4.7,
    reviews: 4021,
    price: "$59.99",
    image: "/assets/images/image.jpg",
    bestseller: false,
    highestRated: false,
  },
];

const showMore = ref(false);
</script>

<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%]">
    <h1 class="text-2xl font-bold mb-8">Students also bought</h1>
    <div v-for="(course, index) in courses" :key="index" class="mb-6">
      <div v-if="index < 3 || showMore" class="flex items-start space-x-4">
        <!-- Course Image -->
        <img
          :src="course.image"
          :alt="course.title"
          class="w-24 h-24 object-cover rounded-md"
        />

        <!-- Course Details -->
        <div class="flex-grow">
          <h3 class="text-lg font-semibold">{{ course.title }}</h3>

          <div class="flex items-center mt-1">
            <!-- Badge for Bestseller or Highest Rated -->
            <span
              v-if="course.bestseller"
              class="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded mr-2"
            >
              Bestseller
            </span>
            <span
              v-if="course.highestRated"
              class="inline-block bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2"
            >
              Highest Rated
            </span>

            <!-- Total Hours and Update Date -->
            <span class="text-green-600 text-sm mr-2">{{
              course.totalHours
            }}</span>
            <span class="text-gray-500 text-sm"
              >• {{ course.updatedDate }}</span
            >
          </div>

          <!-- Rating and Reviews -->
          <div class="flex items-center mt-1 text-yellow-500">
            <span class="mr-1">{{ course.rating }}</span>
            <span class="flex items-center">
              <span v-for="star in 5" :key="star" class="text-yellow-500"
                >★</span
              >
            </span>
            <span class="text-sm text-gray-500 ml-2"
              >({{ course.reviews }})</span
            >
          </div>
        </div>

        <!-- Price and Wishlist Icon -->
        <div class="flex flex-col items-end">
          <span class="text-lg font-bold text-gray-800">{{
            course.price
          }}</span>
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
      <hr class="my-4 border-gray-300" v-if="index < courses.length - 1" />
    </div>
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

<style scoped>
/* Custom styles if needed */
</style>

<template>
  <div class="bg-white">
    <img
      :src=course.image
      :alt=course.title
      class="w-full h-36 object-cover mb-4"
    />
    <h3 class="text-lg font-semibold mb-2">{{ course.title }}</h3>
    <p class="text-sm text-gray-600 mb-2">{{ course.instructor }}</p>
    <div class="flex items-center text-yellow-500 mb-2">
      <span class="mr-1">{{ course.rating }}</span>
      <span class="flex items-center">
        <span v-for="star in 5" :key="star" class="text-yellow-500">★</span>
      </span>
      <span class="text-sm text-gray-500 ml-2">({{ course.reviews }})</span>
    </div>
    <p class="text-sm text-gray-600 mb-2">{{ course.level }}</p>
    <p class="text-lg font-bold text-gray-800">{{ course.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

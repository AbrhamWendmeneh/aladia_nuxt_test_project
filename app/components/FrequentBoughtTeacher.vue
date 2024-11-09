<script setup lang="ts">
const courses = [
  {
    title: "Figma UI UX Design Advanced",
    author: "Daniel Walter Scott",
    rating: 4.7,
    reviews: 4863,
    price: "$59.99",
    image: "/assets/images/image.jpg",
    bestseller: true,
  },
  {
    title: "Figma UI UX Design Essentials",
    author: "Daniel Walter Scott",
    rating: 4.7,
    reviews: 32984,
    price: "$59.99",
    image: "/assets/images/image.jpg",
    bestseller: true,
  },
  {
    title: "Figma UI UX Design Essentials",
    author: "Daniel Walter Scott",
    rating: 4.7,
    reviews: 32984,
    price: "$59.99",
    image: "/assets/images/image.jpg",
    bestseller: false,
  },
];
</script>

<template>
  <div
    class="ml-[6.5%] text-left mt-[2%] p-6 border rounded-lg shadow-lg w-[56%] bg-white relative"
  >
    <h2 class="text-2xl font-bold mb-6">Frequently Bought Together</h2>

    <div v-for="(course, index) in courses" :key="index" class="relative mb-8">
      <div class="flex items-center space-x-2 course-item">
        <!-- Course Image -->
        <img
          :src="course.image"
          :alt="course.title"
          class="w-38 h-28 object-cover rounded-md"
        />

        <!-- Course Details -->
        <div class="flex-grow">
          <h3 class="text-lg font-bold">{{ course.title }}</h3>
          <p class="text-sm text-gray-600">{{ course.author }}</p>

          <!-- Rating and Reviews -->
          <div class="flex items-center mt-1 text-yellow-500">
            <span class="font-semibold">{{ course.rating }}</span>
            <span class="ml-1">★★★★★</span>
            <span class="text-xs text-gray-500 ml-2">
              ({{ course.reviews.toLocaleString() }})
            </span>
          </div>

          <!-- Bestseller Badge -->
          <span
            v-if="course.bestseller"
            class="mt-1 inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded"
          >
            Bestseller
          </span>
        </div>

        <!-- Price -->
        <div class="text-lg font-bold text-gray-800">{{ course.price }}</div>
      </div>

      <!-- Plus Icon between the courses -->
      <div v-if="index < courses.length - 1" class="plus-icon">
        <span class="text-xl font-bold">+</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for the course item and plus icon */
.course-item {
  gap: 1.2rem;
  min-width: 40.8rem;
  max-width: 129.2rem;
}

.plus-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(6% + 1rem);
  transform: translateX(-50%);
  top: calc(70% + 1rem); /* Adjust the value as needed */
  height: 4rem;
  width: 4rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.24);
  background-color: #fff;
  border: 1px solid #d1d7dc;
  border-radius: 50%;
  z-index: 1000;
}
</style>

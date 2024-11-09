<script setup lang="ts"></script>

<template>
  <div
    class="ml-[6.5%] text-left mt-[2%] p-6 border rounded-lg shadow-lg w-[56%] bg-white relative"
  >
    <h2 class="text-2xl font-bold mb-6">Frequently Bought Together</h2>

    <!-- Course 1 -->
    <div class="relative mb-3">
      <div class="flex items-center space-x-2 course-item">
        <!-- Course Image -->
        <img
          src="/assets/images/image-1.svg"
          alt="Figma UI UX Design Advanced"
          class="w-48 h-28 object-cover"
        />

        <!-- Course Details -->
        <div class="flex-grow">
          <h3 class="text-lg font-bold">Figma UI UX Design Advanced</h3>
          <p class="text-sm text-gray-600">Daniel Walter Scott</p>

          <!-- Rating and Reviews -->
          <div class="flex items-center mt-1 text-yellow-500">
            <span class="font-semibold">4.7</span>
            <span class="ml-1">★★★★★</span>
            <span class="text-xs text-gray-500 ml-2">(4,863)</span>
          </div>

          <!-- Bestseller Badge -->
          <span
            class="mt-1 inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded"
          >
            Bestseller
          </span>
        </div>

        <!-- Price -->
        <div class="text-lg font-bold text-gray-800">$59.99</div>
      </div>

      <!-- Plus Icon between the courses -->
      <div class="plus-icon">
        <span class="text-xl font-bold">
          <img
            src="/assets/images/plus-svgrepo-com.svg"
            class="h-5 w-5"
            alt="Plus Icon"
          />
        </span>
      </div>
    </div>

    <!-- Course 2 -->
    <div class="relative mb-3">
      <div class="flex items-center space-x-2 course-item">
        <!-- Course Image -->
        <img
          src="/assets/images/ztm.svg"
          alt="Figma UI UX Design Essentials"
          class="w-48 h-28 object-cover"
        />

        <!-- Course Details -->
        <div class="flex-grow">
          <h3 class="text-lg font-bold">Figma UI UX Design Essentials</h3>
          <p class="text-sm text-gray-600">Daniel Walter Scott</p>

          <!-- Rating and Reviews -->
          <div class="flex items-center mt-1 text-yellow-500">
            <span class="font-semibold">4.7</span>
            <span class="ml-1">★★★★★</span>
            <span class="text-xs text-gray-500 ml-2">(32,984)</span>
          </div>

          <!-- Bestseller Badge -->
          <span
            class="mt-1 inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded"
          >
            Bestseller
          </span>
        </div>

        <!-- Price -->
        <div class="text-lg font-bold text-gray-800">$59.99</div>
      </div>

      <!-- Plus Icon between the courses -->
      <div class="plus-icon">
        <span class="text-xl font-bold">
          <img
            src="/assets/images/plus-svgrepo-com.svg"
            class="h-5 w-5"
            alt="Plus Icon"
          />
        </span>
      </div>
    </div>

    <!-- Course 3 -->
    <div class="relative mb-3">
      <div class="flex items-center space-x-2 course-item">
        <!-- Course Image -->
        <img
          src="/assets/images/second_image.svg"
          alt="Figma UI UX Design Essentials"
          class="w-48 h-28 object-cover"
        />

        <!-- Course Details -->
        <div class="flex-grow">
          <h3 class="text-lg font-bold">Figma UI UX Design Essentials</h3>
          <p class="text-sm text-gray-600">Daniel Walter Scott</p>

          <!-- Rating and Reviews -->
          <div class="flex items-center mt-1 text-yellow-500">
            <span class="font-semibold">4.7</span>
            <span class="ml-1">★★★★★</span>
            <span class="text-xs text-gray-500 ml-2">(32,984)</span>
          </div>
        </div>

        <!-- Price -->
        <div class="text-lg font-bold text-gray-800">$59.99</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  left: calc(12% + 1rem);
  transform: translateX(-50%);
  top: calc(70% + 1rem);
  height: 3rem;
  width: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.24);
  background-color: #fff;
  border: 1px solid #d1d7dc;
  border-radius: 50%;
  z-index: 1000;
}
</style>

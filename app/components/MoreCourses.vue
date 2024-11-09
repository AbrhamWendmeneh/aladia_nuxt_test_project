<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%] bg-white">
    <h1 class="text-2xl font-bold mb-4">Courses</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white">
        <img
          src="/assets/images/image-1.svg"
          alt="image"
          class="w-full h-36 object-cover mb-4"
        />
        <h3 class="text-lg font-semibold mb-2">Advanced Figma Techniques for UI/UX Design</h3>
        <p class="text-sm text-gray-600 mb-2">Emily Rose</p>
        <div class="flex items-center text-yellow-500 mb-2">
          <span class="mr-1">4.9</span>
          <span class="flex items-center">
            <span v-for="star in 5" :key="star" class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(32984)</span>
        </div>
        <p class="text-sm text-gray-600 mb-2">Advanced</p>
        <p class="text-lg font-bold text-gray-800">$89.99</p>
      </div>
      <div class="bg-white">
        <img
        src="/assets/images/image-3.svg"
        alt="image"
          class="w-full h-36 object-cover mb-4"
        />
        <h3 class="text-lg font-semibold mb-2">Complete Web Design: from Figma to Webflow - 2024 UI</h3>
        <p class="text-sm text-gray-600 mb-2">Jane Doe</p>
        <div class="flex items-center text-yellow-500 mb-2">
          <span class="mr-1">{4.8</span>
          <span class="flex items-center">
            <span v-for="star in 5" :key="star" class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(86209)</span>
        </div>
        <p class="text-sm text-gray-600 mb-2">Intermediate</p>
        <p class="text-lg font-bold text-gray-800">$74.99</p>
      </div>
      <div class="bg-white">
        <img
          src="/assets/images/image-2.svg"
          alt="image"
          class="w-full h-36 object-cover mb-4"
        />
        <h3 class="text-lg font-semibold mb-2">Master Figma for Web Design & Freelancing: Learn UI/UX</h3>
        <p class="text-sm text-gray-600 mb-2">Jhon Smith</p>
        <div class="flex items-center text-yellow-500 mb-2">
          <span class="mr-1">4.7</span>
          <span class="flex items-center">
            <span v-for="star in 5" :key="star" class="text-yellow-500">★</span>
          </span>
          <span class="text-sm text-gray-500 ml-2">(4021)</span>
        </div>
        <p class="text-sm text-gray-600 mb-2">Intermediate</p>
        <p class="text-lg font-bold text-gray-800">$59.99</p>
      </div>
    </div>
    <button
      class="my-12 px-4 py-2 border border-black text-black rounded hover:bg-gray-300 w-full"
    >
      Report abuse
    </button>
  </div>
</template>

<script>


</script>

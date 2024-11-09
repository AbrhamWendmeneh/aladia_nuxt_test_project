<template>
  <div
    class="p-6 border rounded-lg shadow-lg w-full bg-white flex flex-col justify-between"
  >
    <div>
      <div class="flex items-center space-x-4 mb-4">
        <!-- Reviewer Initials -->
        <div
          class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-xl font-bold text-gray-700"
        >
          {{ initials }}
        </div>
        <div>
          <!-- Reviewer Name and Rating -->
          <h3 class="text-lg font-semibold">{{ reviewer.name }}</h3>
          <div class="flex items-center text-yellow-500">
            <span class="mr-1">{{ reviewer.rating }}</span>
            <span class="flex items-center">
              <span v-for="star in 5" :key="star" class="text-yellow-500"
                >★</span
              >
            </span>
          </div>
          <p class="text-sm text-gray-500">{{ reviewer.timeAgo }}</p>
        </div>
      </div>
      <!-- Review Text -->
      <p class="text-gray-800 mb-4">
        {{ showMore ? reviewer.reviewText : truncatedText }}
      </p>
    </div>
    <!-- Helpful Section and Show More Button -->
    <div class="flex items-center justify-between text-gray-500">
      <div class="flex items-center space-x-2">
        <span>Helpful?</span>
        <button class="text-green-500 hover:text-green-700">👍</button>
        <button class="text-red-500 hover:text-red-700">👎</button>
      </div>
      <button
        @click="toggleShowMore"
        class="text-blue-500 underline focus:outline-none"
      >
        {{ showMore ? "Show less" : "Show more" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showMore: false,
    };
  },
  computed: {
    initials() {
      return this.reviewer.name
        .split(" ")
        .map((n) => n[0])
        .join("");
    },
    truncatedText() {
      return this.reviewer.reviewText.length > 100
        ? this.reviewer.reviewText.substring(0, 100) + "..."
        : this.reviewer.reviewText;
    },
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

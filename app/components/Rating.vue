<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%] bg-white">
    <h1 class="text-2xl font-bold mb-4">⭐ 4.7 course rating 33K ratings</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CourseRatingCard
        v-for="(reviewer, index) in visibleReviewers"
        :key="index"
        :reviewer="reviewer"
      />
    </div>
    <button
      v-if="!showAll"
      @click="showAll = true"
      class="mt-4 px-4 py-2 border border-black text-black rounded hover:bg-gray-300 w-full"
    >
      Show all reviews
    </button>
    <button
      v-if="showAll"
      @click="showAll = false"
      class="mt-4 px-4 py-2 border border-black text-black rounded hover:bg-gray-300 w-1/8"
    >
      Show less
    </button>
  </div>
</template>

<script>
import CourseRatingCard from "./RatingCard.vue";

export default {
  components: {
    CourseRatingCard,
  },
  data() {
    return {
      showAll: false,
      reviewers: [
        {
          name: "Peter P.",
          rating: 5.0,
          timeAgo: "2 weeks ago",
          reviewText: `I took the Figma UI UX Design Essentials course by Dan to get back on track with Figma. It is an outstanding resource for anyone looking to learn or refresh their Figma skills. It offers comprehensive coverage of the basics, making it ideal for beginners or those returning to Figma after a break. Dan’s engaging teaching style keeps the content interesting and accessible, while his numerous tips and tricks throughout the course provide valuable insights for efficient and effective design work. I highly recommended it as a solid foundation before advancing to his (or any other) advanced Figma course.`,
        },
        {
          name: "Jane D.",
          rating: 4.8,
          timeAgo: "1 month ago",
          reviewText: `This course was exactly what I needed to get started with Figma. The instructor was clear and concise, and the content was well-organized. I feel much more confident in my design skills now.`,
        },
        {
          name: "John S.",
          rating: 4.9,
          timeAgo: "3 weeks ago",
          reviewText: `Dan's course is fantastic! It covers everything you need to know about Figma, from the basics to more advanced techniques. I learned so much and can't wait to apply these skills to my projects.`,
        },
        {
          name: "Emily R.",
          rating: 5.0,
          timeAgo: "2 days ago",
          reviewText: `Highly recommend this course! Dan is an excellent instructor, and the course content is top-notch. I feel much more confident in my design abilities after completing this course.`,
        },
      ],
    };
  },
  computed: {
    visibleReviewers() {
      return this.showAll ? this.reviewers : this.reviewers.slice(0, 2);
    },
  },
};
</script>

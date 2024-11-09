<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%] bg-white">
    <h1 class="text-2xl font-bold mb-4">Courses</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CourseCard
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
      />
    </div>
    <button
      class="my-12 px-4 py-2 border border-black text-black rounded hover:bg-gray-300 w-full"
    >
      Report abuse
    </button>
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";

export default {
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: [
        {
          image: "/assets/images/image.jpg",
          title: "Advanced Figma Techniques for UI/UX Design",
          instructor: "Emily Rose",
          rating: 4.9,
          reviews: 32984,
          level: "Advanced",
          price: "$89.99",
        },
        {
          image: "/assets/images/image.jpg",
          title: "Complete Web Design: from Figma to Webflow - 2024 UI",
          instructor: "Jane Doe",
          rating: 4.8,
          reviews: 86209,
          level: "Intermediate",
          price: "$74.99",
        },
        {
          image: "/assets/images/image.jpg",
          title: "Master Figma for Web Design & Freelancing: Learn UI/UX",
          instructor: "John Smith",
          rating: 4.7,
          reviews: 4021,
          level: "Intermediate",
          price: "$59.99",
        },
      ],
    };
  },
};
</script>

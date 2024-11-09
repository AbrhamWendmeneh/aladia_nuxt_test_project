<script>
export default {
  data() {
    return {
      showMore: false,
      instructor: {
        name: "Daniel Walter Scott",
        title: "Adobe Certified Instructor & Adobe Certified Expert",
        rating: 4.7,
        reviews: 246437,
        students: 790451,
        courses: 34,
        image: "/assets/images/image-1.svg",
        description: `Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.
          
          I've spent a long time watching others learn, and teach, to refine how I work with you to be efficient, useful and, most importantly, memorable. I want you to carry what I've shown you into a bright future.`,
        additionalDescription: `I have a wife (a lovely Irish girl) and kids. I have lived and worked in many places (as Kiwis tend to do) – but most of my 14+ years of creating and teaching has had one overriding theme: bringing others along for the ride as we all try to change the world with our stories, our labours of love and our art.
          
          I'm a certified Adobe instructor (ACI) in Ireland. I'm also an Adobe Certified Expert (ACE) and have completed the`,
      },
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%] bg-white">
    <h1 class="text-2xl font-bold mb-4">Instructor</h1>
    <h2 class="text-xl font-semibold">{{ instructor.name }}</h2>
    <p class="text-gray-700">{{ instructor.title }}</p>

    <div class="flex items-start space-x-4">
      <!-- Instructor Image -->
      <img
        :src=instructor.image
        alt="Instructor"
        class="w-28 h-28 object-cover rounded-full mt-3"
      />
      <div>
        <div class="mt-4 space-y-1">
          <div class="flex items-center">
            <span class="mr-2">⭐</span>{{ instructor.rating }} Instructor
            Rating
          </div>
          <div class="flex items-center">
            <span class="mr-2">📝</span>{{ instructor.reviews }} Reviews
          </div>
          <div class="flex items-center">
            <span class="mr-2">👥</span>{{ instructor.students }} Students
          </div>
          <div class="flex items-center">
            <span class="mr-2">🎓</span>{{ instructor.courses }} Courses
          </div>
        </div>
      </div>
    </div>
    <p class="mt-4 text-gray-800">
      {{ instructor.description }}
      <span v-if="showMore">{{ instructor.additionalDescription }}</span>
    </p>
    <button
      @click="toggleShowMore"
      class="mt-4 text-blue-500 underline focus:outline-none"
    >
      {{ showMore ? "Show less" : "Show more" }}
    </button>
  </div>
</template>

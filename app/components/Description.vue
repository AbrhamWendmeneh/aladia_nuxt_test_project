<script setup lang="ts">
import { ref } from "vue";

const description = `
Hi there, aspiring Figma enthusiasts! Are you ready to embark on an exhilarating journey with me, Dan Scott, as we unlock the full potential of our Figma skills in the dazzling realm of UX/UI Design using Figma Advanced?

This course is tailor-made for those who have already mastered the fundamental principles of UI/UX Design using Figma. If you've triumphed over my Figma Essentials course or have a sneaking suspicion that there's a treasure trove of unexplored tools, tips, workflows, and updates awaiting your discovery, then look no further! This course is your golden ticket to taking your UI/UX prowess to the next level.

Together, we'll start by delving into the depths of multilevel nested autolayouts, and unravel the secrets used by UX professionals by learning:
`;

const bulletPoints = [
  "Workflow techniques, managing design assets, styles, components, grid and column layouts like true virtuosos.",
  "Learn how to use Variables and put them to work creating even more complete prototypes.",
  "Use variables to make Light & Dark Modes + Compact & Comfortable spacing versions of your components.",
  "You’ll then take your new knowledge of variables to understand and create your own Design Tokens.",
  "Unleashing the magic of advanced animation techniques, captivating users with animated background gradients and Houdini Text.",
  "Harness the power of Lottie animation files, breathing life into your designs.",
  "Crafting responsive elements that effortlessly adapt to any device, proving your design prowess knows no bounds.",
  "Unleashing the full potential of powerful images & video masking techniques, amplifying the visual impact of your creations.",
  "Mastering advanced typography features, transforming words into captivating works of art.",
  "Embracing the realm of AI, infusing your process with its genius to elevate your skills as a UX designer.",
  "Elevate your prototyping game, conducting user tests with finesse using advanced techniques.",
  "Unveiling sticky scroll buttons that stack, animated anchor points and booleans, and a host of other captivating effects.",
  "Creating enchanting dropdown menus, hover grow effects for images, and expanding search bars.",
  "Discovering the right accessibility tools & techniques, ensuring inclusivity and usability for all users.",
  "Becoming a variant boss, expertly taming unwieldy variants to just 1 or 2.",
  "Unveiling the secrets of seamless collaboration with designers, developers, and stakeholders.",
  "Mastering the art of exporting production-ready assets, bringing your designs to life beyond the realm of Figma.",
  "Unearthing professional workflow tricks & shortcuts, saving you precious time and skyrocketing your efficiency.",
  "Plus much more exciting advanced Figma goodness along the way!",
];

const plusMuchMore = ` 
As you journey through this course, you'll acquire the skills wielded by UX professionals, gaining a profound understanding of the UX Design industry. From concept to a highly polished finish, you'll confidently manage your own UX projects ideal for your portfolio.

Throughout the course, I'll assign assignments and projects that nurture your skills and empower you to create your very own unique UX design masterpiece for your portfolio. Don’t worry if this all seems overwhelmingly advanced right now, because the BYOL crew stands ready to support and guide you, ensuring your questions get answered.

It's time to embrace the call to upgrade yourself and transcend from being a good UX Designer to a bona fide Figma UX Superhero! Unlock your potential, save the day, and let your design prowess soar!
`;

const requirementsBulletPoints = [
  "A copy of Figma (a free plan is available on the Figma website).",
  "Basic knowledge of Figma is required. I recommend watching my Figma Essentials course prior to embarking on this epic adventure.",
];

const whoThisCourseIsFor = [
  "UX/UI adventurers who already have a basic understanding of Figma.",
  "Self-taught Figma enthusiasts yearning for structured guidance.",
  "Graduates of my Figma Essentials Course, hungry for more knowledge and skills.",
  "Visionaries who have developed their own unique Figma approach but crave exploration of the vast universe of tools, updates, and time-saving techniques.",
];

const showMore = ref(false);
</script>

<template>
  <div class="ml-[6.5%] w-[56%] text-left mt-[2%]">
    <h2 class="text-2xl font-bold mb-4">Description</h2>
    <p class="font-thin text-sm text-gray-500">{{ description }}</p>
    <ul class="list-disc list-inside ml-4 font-thin text-sm text-gray-500 mt-2">
      <li>{{ bulletPoints[0] }}</li>
      <li
        v-if="showMore"
        v-for="(point, index) in bulletPoints.slice(1)"
        :key="index + 1"
      >
        {{ point }}
      </li>
    </ul>

    <div v-if="showMore">
      <p class="mt-8 font-thin text-sm text-gray-500">{{ plusMuchMore }}</p>
      <h2 class="text-md font-bold my-6">Requirements</h2>
      <ul
        class="list-disc list-inside ml-4 font-thin text-sm text-gray-500 mb-8"
      >
        <li v-for="(point, index) in requirementsBulletPoints" :key="index">
          {{ point }}
        </li>
      </ul>
      <h2 class="text-md font-bold my-6">Who this course is for</h2>
      <ul class="list-disc list-inside ml-4 font-thin text-sm text-gray-500">
        <li v-for="(point, index) in whoThisCourseIsFor" :key="index">
          {{ point }}
        </li>
      </ul>
    </div>
    <button
      @click="showMore = !showMore"
      class="text-indigo-600 hover:underline mt-2"
    >
      {{ showMore ? "Show less" : "Show more" }}
    </button>
   
  </div>
</template>

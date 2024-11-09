<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  ChevronRightIcon,
  StarIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/vue/24/outline";

const isExpanded = ref(false);
const isFooterVisible = ref(false);

const items = [
  "Workflow techniques, managing design assets, styles, components, grid and column layouts like true virtuosos.",
  "How to use Variables and put them to work creating even more complete prototypes.",
  "Use variables to make Light & Dark Modes + Compact & Comfortable spacing versions of your components.",
  "You'll then take your new knowledge of variables to understand and create your own Design Tokens.",
  "Unleashing the magic of advanced animation techniques, captivating users with animated background gradients and Houdini Text.",
  "Harness the power of Lottie animation files, breathing life into your designs.",
  "Crafting responsive elements that adapt seamlessly.",
  "Creating enchanting dropdown menus, hover grow effects for images, and expanding search bars.",
  "Elevate your prototyping game, conducting user tests with finesse using advanced techniques.",
  "Mastering the art of exporting production-ready assets, bringing your designs to life beyond the realm of Figma.",
  "Becoming a variant boss, expertly taming unwieldy variants to just 1 or 2.",
  "Plus much more exciting advanced Figma goodness along the way!",
];

const visibleItems = computed(() =>
  isExpanded.value ? items : items.slice(0, 4)
);

const checkFooterVisibility = () => {
  const footer = document.querySelector("footer");
  if (footer) {
    const rect = footer.getBoundingClientRect();
    isFooterVisible.value = rect.top < window.innerHeight && rect.bottom >= 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkFooterVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkFooterVisibility);
});
</script>

<template>
  <div>
    <!-- Black Box -->
    <div class="bg-[#1B1C1E] py-[1%] pl-[7%] pr-[1%] text-left">
      <div class="w-[60%]">
        <div class="flex text-[#C7B9F3] space-x-4 mt-0 mb-6 mr-16 ml-16">
          <h5>Design</h5>
          <span class="mt-1">
            <ChevronRightIcon class="w-4 h-4" />
          </span>
          <h5>User Experience</h5>
          <span class="mt-1">
            <ChevronRightIcon class="w-4 h-4" />
          </span>
          <h5>Figma</h5>
        </div>

        <h1 class="text-white mt-[5%] text-3xl">Figma UI UX Design Advanced</h1>
        <h3 class="text-white">
          Become a Figma Pro with our in-depth Advanced Figma tutorial course.
          Discover advanced design strategies & so much more!
        </h3>

        <div class="mt-2 flex">
          <span class="bg-[#FAFA74] mr-2 px-2 py-1 text-[#1B1C1E]"
            >Bestseller</span
          >
          <span class="flex items-center text-[#DBA91F]">
            4.3
            <span class="flex space-x-1 ml-1">
              <StarIcon class="w-4 h-4" />
              <StarIcon class="w-4 h-4" />
              <StarIcon class="w-4 h-4" />
              <StarIcon class="w-4 h-4" />
              <StarIcon class="w-4 h-4" />
            </span>
          </span>
          <span class="text-[#C7B9F3] underline">(17,379 rating)</span>
          <span class="text-white">185,449 students</span>
        </div>

        <div class="mt-2">
          <span class="text-white">Created by </span>
          <span class="text-[#C7B9F3] underline">Daniel Walter Scott</span>
        </div>

        <div class="text-white mt-2 flex">
          <span class="BBicons">
            <CheckBadgeIcon class="w-4 h-4 mt-1 mr-2" />
          </span>
          <span class="BBbottomText mr-2">Last updated 9/2019</span>
          <span class="BBicons">
            <GlobeAltIcon class="w-4 h-4 mt-1 mr-2" />
          </span>
          <span class="BBbottomText mr-2">English</span>
          <span class="BBicons">
            <CheckBadgeIcon class="w-4 h-4 mt-1 mr-2" />
          </span>
          <span class="BBbottomText mr-2"> English [Auto], Arabic [Auto] </span>
          <span class="BBbottomText underline">10more</span>
        </div>
      </div>
    </div>

    <!-- Fix Box -->
    <div
      v-show="!isFooterVisible"
      class="fixed top-[calc(100%-500px)] right-[7%] w-[26.5%] py-[5%] px-4 bg-white shadow-[0_2px_2px_rgba(233,233,233,0.4)] border"
    >
      <div class="text-left mx-[6%]">
        <div class="flex gap-[3%] mb-[2%]">
          <h1 class="text-2xl mt-[-2%]">$455</h1>
          <span class="line-through text-[1.1rem] mt-[-2%]">$3,499</span>
          <span class="text-[1.1rem] mt-[-2%]">87% off</span>
        </div>
        <div class="text-red-600">
          <span class="font-bold">5 hours</span> left at this price!
        </div>

        <button
          class="w-full bg-[#A435F0] text-white h-[40px] text-[1.1rem] mt-[4%] border-none cursor-pointer mr-6"
        >
          Go to cart
        </button>
        <button
          class="w-full h-[40px] text-[1.1rem] border-2 border-black cursor-pointer mt-2 mr-6"
        >
          Buy now
        </button>

        <p class="text-center mt-4">30-Day Money-Back Guarantee</p>

        <!-- <div class="text-left">
          <h4>This course includes:</h4>
          <p><OndemandVideoSharpIcon /> 21 hours on-demand video</p>
          <p><NoteAddSharpIcon /> 3 articles</p>
          <p><SystemUpdateAltTwoToneIcon /> 4 downloadable resources</p>
          <p><AllInclusiveTwoToneIcon /> Full lifetime access</p>
          <p><DevicePhoneMobileIcon /> Access on mobile and TV</p>
          <p><EmojiEventsTwoToneIcon /> Certificate of completion</p>
        </div> -->

        <div class="flex gap-5 cursor-pointer underline">
          <h4>Share</h4>
          <h4>Gift this course</h4>
          <h4>Apply Coupon</h4>
        </div>

        <div class="mt-5 text-left">
          <h3>Training 5 or more people?</h3>
          <p>
            Get your team access to 6,000+ top Udemy courses anytime, anywhere.
          </p>
          <button class="w-full bg-[#A435F0] text-white h-[40px] mt-2">
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>

    <!-- What you'll learn -->
    <div
      class="ml-[6.5%] w-[55%] border-[1px] border-gray-400 text-left mt-[2%] p-10 mb-12"
    >
      <h2 class="text-lg font-bold mb-4">What you'll learn</h2>
      <ul class="flex flex-wrap justify-between m-0 list-none">
        <li
          v-for="(item, index) in visibleItems"
          :key="index"
          class="w-full sm:w-1/2 mb-2"
        >
          <div class="flex items-start text-left">
            <span class="inline-block">✔</span>
            <span class="ml-3">{{ item }}</span>
          </div>
        </li>
      </ul>
      <button
        @click="isExpanded = !isExpanded"
        class="mt-4 text-indigo-600 hover:underline"
      >
        {{ isExpanded ? "Show less" : "Show more" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>

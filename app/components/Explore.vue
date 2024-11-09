<script setup lang="ts">
import {
  ComputerDesktopIcon,
  DocumentIcon,
  FolderIcon,
  DevicePhoneMobileIcon,
  TrophyIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="mt-8 py-[1%] pl-[7%] pr-[1%]">
    <section class="font-extrabold mb-4">Explore related topics</section>
    <!-- three boxes with border width-1 border radius of 10 in one row-->

    <div class="flex w-[30%] space-x-2">
      <div class="border border-gray-500 rounded-full p-2 text-center">
        Figma
      </div>
      <div class="border border-gray-500 rounded-full p-2 text-center">
        User Experience Design
      </div>
      <div class="border border-gray-500 rounded-full p-2 text-center">
        Design
      </div>
    </div>
    <div class="mt-5">
      <section class="font-extrabold">This course includes</section>
      <div class="flex w-[65%]">
        <!-- Left Section -->
        <div class="w-1/2 p-4">
          <ul>
            <li class="flex items-center mb-2">
              <ComputerDesktopIcon class="w-5 h-5 mr-2" />
              6 hours on-demand video
            </li>
            <li class="flex items-center mb-2">
              <DocumentIcon class="w-5 h-5 mr-2" />
              Assignments
            </li>
            <li class="flex items-center mb-2">
              <FolderIcon class="w-5 h-5 mr-2" />
              1 downloadable resource
            </li>
          </ul>
        </div>

        <!-- Right Section -->
        <div class="w-1/2 p-4">
          <ul>
            <li class="flex items-center mb-2">
              <DevicePhoneMobileIcon class="w-5 h-5 mr-2" />
              Access on mobile and TV
            </li>
            <li class="flex items-center mb-2">
              <TrophyIcon class="w-5 h-5 mr-2" />
              Certificate of completion
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="w-[60%] border-[1px] border-gray-400 text-left mt-[1%] p-4 mb-12"
    >
      <h1 class="font-semibold">
        Top companies offer this course to their employees
      </h1>
      <h6 class="font-light text-gray-400 text-sm">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide. Learn
      </h6>
      <div class="flex justify-between space-x-4 mt-4">
        <img
          src="/assets/images/nasdaq-dark.svg"
          alt="Company 1"
          class="h-12"
        />
        <img
          src="/assets/images/volkswagen-dark.svg"
          alt="Company 2"
          class="h-12"
        />
        <img
          src="/assets/images/netapp-dark.svg"
          alt="Company 4"
          class="h-12"
        />
        <img
          src="/assets/images/eventbrite-dark.svg"
          alt="Company 3"
          class="h-12"
        />
      </div>
    </div>
  </div>
</template>



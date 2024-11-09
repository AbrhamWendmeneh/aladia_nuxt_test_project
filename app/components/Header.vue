<script setup lang="ts">
import { ref } from "vue";
import {
  StarIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";

interface User {
  name: string;
}

const user = ref<User | null>(null);
const cart = ref(0);
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo link -->
      <NuxtLink to="/" class="flex items-center">
        <img class="h-8" src="/assets/images/logo-udemy.svg" alt="Udemy Logo" />
      </NuxtLink>

      <!-- Navigation button -->
      <nav>
        <button class="text-gray-600 font-medium hover:text-black">
          Categories
        </button>
      </nav>

      <!-- Search bar -->
      <div class="relative flex-1 mx-4 max-w-lg">
        <button
          class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
        >
          <StarIcon class="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Search for anything"
          class="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <!-- Links for Udemy Business and Teach on Udemy -->
      <NuxtLink
        to="#"
        class="hidden md:inline-block text-gray-600 font-medium hover:text-black mx-2"
      >
        Udemy Business
      </NuxtLink>
      <NuxtLink
        to="#"
        class="hidden md:inline-block text-gray-600 font-medium hover:text-black mx-2"
      >
        Teach on Udemy
      </NuxtLink>

      <!-- Conditional links based on user authentication -->
      <div v-if="user" class="flex items-center space-x-4">
        <NuxtLink to="#" class="text-gray-600 font-medium hover:text-black">
          My learning
        </NuxtLink>

        <NuxtLink to="/wishlist">
          <button class="relative text-gray-600 hover:text-black">
            <FavoriteBorderOutlinedIcon class="w-6 h-6" />
          </button>
        </NuxtLink>

        <!-- Cart button with badge -->
        <NuxtLink to="/cart" class="relative text-gray-600 hover:text-black">
          <ShoppingCartOutlinedIcon class="w-6 h-6" />
          <span
            v-if="cart > 0"
            class="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5"
          >
            {{ cart }}
          </span>
        </NuxtLink>

        <!-- Notifications button with badge
        <NuxtLink to="#">
          <button class="relative text-gray-600 hover:text-black">
            <NotificationsNoneOutlinedIcon class="w-6 h-6" />
            <span
              class="absolute -top-1 -right-2 bg-red-500 h-2 w-2 rounded-full"
            ></span>
          </button>
        </NuxtLink> -->

        <!-- User avatar button -->
        <NuxtLink to="#">
          <button class="text-gray-600 hover:text-black">
            <ShoppingCartIcon class="w-8 h-8 text-indigo-600" />
          </button>
        </NuxtLink>
      </div>

      <!-- Log in / Sign up / Language options if user is not authenticated -->
      <div v-else class="flex items-center space-x-4">
        <NuxtLink to="/join/login-popup">
          <button class="text-gray-600 font-medium hover:text-black">
            Log in
          </button>
        </NuxtLink>
        <NuxtLink to="/join/signup-popup">
          <button
            class="text-white bg-indigo-600 hover:bg-indigo-700 font-medium px-4 py-2 rounded-full"
          >
            Sign up
          </button>
        </NuxtLink>
        <NuxtLink to="#">
          <button class="text-gray-600 hover:text-black">
            <GlobeAltIcon class="w-6 h-6" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* You can add any additional custom styles here if needed */
</style>

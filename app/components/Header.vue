<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
const showFixedNav = ref(false);

const handleScroll = () => {
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  showFixedNav.value = window.scrollY > headerHeight;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
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

        <NuxtLink to="#">
          <button class="text-gray-600 hover:text-black">
            <ShoppingCartIcon class="w-8 h-8 text-indigo-600" />
          </button>
        </NuxtLink>
      </div>

      <div v-else class="flex items-center space-x-4">
        <NuxtLink to="/join/login-popup">
          <button
            class="text-gray-600 font-medium hover:text-black hover:bg-[#f5f6f8] border px-4 py-2 rounded w-1/8"
          >
            Log in
          </button>
        </NuxtLink>
        <NuxtLink to="/join/signup-popup">
          <button
            class="text-white border bg-[#1B1C1E] hover:bg-[#3f4043] font-medium px-4 py-2 rounded w-1/8"
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

  <!-- Fixed navigation bar -->
  <nav
    v-show="showFixedNav"
    class="fixed top-0 left-0 right-0 bg-[#1B1C1E] shadow-md z-[2000] h-24 py-6"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center space-x-4">
        <span class="text-white font-bold">Figma UI UX Design Advanced</span>
      </div>
      <div class="flex items-center space-x-4 mt-2">
        <span
          class="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded"
          >Bestseller</span
        >
        <span class="text-sm text-white">4.7 ⭐</span>
        <span class="text-sm text-white">(4,872 ratings)</span>
        <span class="text-sm text-white">31,904 students</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2000;
}
</style>

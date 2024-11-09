<template>
    <div>
      <h3 class="text-lg font-semibold mb-4">{{ title }}</h3>
      <ul class="space-y-2">
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
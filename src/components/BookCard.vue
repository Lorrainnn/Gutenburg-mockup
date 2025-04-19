<template>
    <div class="flex gap-4 p-4 border rounded">
      <img :src="cover" alt="cover" class="w-24 h-auto rounded" />
      <div>
        <h3 class="font-bold">{{ title }}</h3>
        <p class="text-sm text-gray-600">{{ author }}</p>
        <div class="mt-1">
          <span v-for="n in rating" :key="`f-${n}`">★</span>
          <span v-for="n in (5 - rating)" :key="`e-${n}`" class="text-gray-300">★</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    author: String,
    cover: String,
    rating: Number
  })
  </script>
  
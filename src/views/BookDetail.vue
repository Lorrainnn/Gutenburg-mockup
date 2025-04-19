<template>
    <div class="min-h-screen bg-gray-50">
      <AppHeader />
  
      <div class="p-4 max-w-3xl mx-auto">
        <img :src="cover" alt="cover" class="w-full h-auto rounded" />
        <h1 class="mt-4 text-2xl font-bold">{{ title }}</h1>
        <p class="text-gray-600">{{ author }}</p>
  
        <div class="mt-4 space-x-2">
          <button class="px-4 py-2 border rounded">Download HTML</button>
          <button class="px-4 py-2 border rounded">Download EPUB</button>
        </div>
  
        <p class="mt-6 text-gray-700">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import AppHeader from '@/components/AppHeader.vue'
  
  // Mock 数据（实际可通过 props 或 API 获取）
  const cover = '/assets/covers/g1.jpg'
  const title = 'The Great Gatsby'
  const author = 'F. Scott Fitzgerald'
  const description = 'A portrait of the Jazz Age in all of its decadence and excess...'
  </script>
  
<template>
    <div class="min-h-screen bg-gray-50">
      <AppHeader />
      <InfoBanner />
  
      <!-- BookList 区 -->
      <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookCard
          v-for="book in books"
          :key="book.id"
          :title="book.title"
          :author="book.author"
          :cover="book.cover"
          :rating="book.rating"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import AppHeader from '@/components/AppHeader.vue'
  import InfoBanner from '@/components/InfoBanner.vue'
  import BookCard from '@/components/BookCard.vue'
  
  // Mock 数据
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: '/assets/covers/g1.jpg', rating: 4 },
    { id: 2, title: 'Alice’s Adventures', author: 'Lewis Carroll', cover: '/assets/covers/a1.jpg', rating: 5 },
    // …更多示例
  ]
  </script>
  
<template>
    <div class="min-h-screen bg-gray-50">
      <AppHeader />
      <InfoBanner />
  
      <!-- BookList 区 -->
      <!-- Home.vue 中的 BookList 区 -->
        <div class="book-list">
          <BookCard
            v-for="book in books"
            :key="book.id"
            v-bind="book"
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
  {
    id: 1,
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll',
    cover: new URL('../assets/covers/11.jpg', import.meta.url).href,
    rating: 4
  },
  {
    id: 2,
    title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
    cover: new URL('../assets/covers/43.jpg', import.meta.url).href,
    rating: 5
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: new URL('../assets/covers/1342.jpg', import.meta.url).href,
    rating: 5
  },
  {
    id: 4,
    title: 'Ulysses',
    author: 'James Joyce',
    cover: new URL('../assets/covers/4300.jpg', import.meta.url).href,
    rating: 5
  },
  {
    id: 5,
    title: 'Little Women',
    author: 'Louisa May Alcott',
    cover: new URL('../assets/covers/37106.jpg', import.meta.url).href,
    rating: 5
  },
  {
    id: 6,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: new URL('../assets/covers/64317.jpg', import.meta.url).href,
    rating: 5
  }
]

  </script>
  
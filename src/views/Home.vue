<template>
    <div>
      <AppHeader />
      <InfoBanner />
  
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
  import books from '@/assets/books.json'
  
  </script>
  
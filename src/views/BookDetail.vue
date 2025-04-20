<template>
  <div class="book-detail">
    <AppHeader />

    <div class="book-container">
      <!-- 左侧封面 -->
      <img :src="book.cover" alt="cover" class="book-cover" />

      <!-- 右侧内容，三行布局 -->
      <div class="details">
        <!-- 第一行：标题 -->
        <h1 class="book-title">{{ book.title }}</h1>

  
        <p class="book-author">{{ book.author }}</p>

        <!-- 语言 & License：第二行 -->
        <p class="book-meta">
          <span class="book-language">{{ book.language }}</span>
          <span class="sep">•</span>
          <span class="book-license">{{ book.license }}</span>
        </p>


        <!-- 第三行：rating + 按钮 同行 -->
        <div class="book-footer">
          <div class="book-rating">
            <span v-for="n in book.rating" :key="`f-${n}`">★</span>
            <span v-for="n in (5 - book.rating)" :key="`e-${n}`" class="empty">★</span>
          </div>
          <div class="book-buttons">
            <button>Download HTML</button>
            <button>Download EPUB</button>
          </div>
        </div>

        <!-- 下面是描述 -->
        <p class="book-description">{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>



<script setup>
import { useRoute } from 'vue-router'
import books from '@/assets/books.json'
import AppHeader from '@/components/AppHeader.vue'

const route = useRoute()
const bookId = parseInt(route.params.id)
const book = books.find(b => b.id === bookId) || {
  title: 'Not found',
  author: '',
  cover: '',
  rating: ' ',
  description: ''
}
</script>

<style scoped src="@/styles/detail.css" />


  
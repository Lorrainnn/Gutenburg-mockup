<template>
    <section class="text-center py-8">
      <!-- 居中介绍 -->
      <p class="text-lg">Project Gutenberg offers over 60,000 free ebooks</p>
  
      <!-- 底部：分页 + 排序 -->
      <div class="mt-6 flex justify-between items-center px-4">
        <!-- Pagination -->
        <div class="flex items-center space-x-2">
          <button class="px-2 py-1 border rounded">Previous</button>
          <span>1</span>
          <button class="px-2 py-1 border rounded">Next</button>
        </div>
        <!-- Sort 下拉 -->
        <select class="border rounded px-3 py-2">
          <option>By popularity</option>
          <option>By title</option>
          <option>By author</option>
        </select>
      </div>
    </section>
  </template>
  
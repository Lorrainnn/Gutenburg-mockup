<template>
    <header class="bg-white p-4">
      <div class="flex justify-between items-start">
        <!-- 左：标题 + 描述 -->
        <div>
          <h1 class="text-2xl font-bold">Project Gutenberg Library</h1>
          <p class="text-sm text-gray-600">The first producer of free ebooks</p>
        </div>
        <!-- 右上：语言切换 -->
        <select class="border rounded px-2 py-1">
          <option>English</option>
          <option>中文</option>
          <!-- … -->
        </select>
      </div>
  
      <!-- 底部：SearchBar -->
      <div class="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search by author name"
          class="flex-1 border rounded px-3 py-2"
        />
        <select class="border rounded px-3 py-2">
          <option>Any languages</option>
          <option>English</option>
          <!-- … -->
        </select>
        <button class="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>
    </header>
  </template>
  
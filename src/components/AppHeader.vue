<template>
  <header class="app-header">
    
    <div class="header-inner">
      <router-link to="/" class="title-desc">
        <h1>Project Gutenberg Library</h1>
        <h2>The first producer of free ebooks</h2>
      </router-link>

      <select class="lang-select">
        <option>English</option>
        <option>French</option>
        <option>German</option>
        <option>中文</option>
        <option>Spanish</option>
      </select>
    </div>

    <div class="search-bar">
      <input
        type="text"
        placeholder="Search by title/author name"
        class="search-input"
      />
      <select class="search-filter">
        <option>Any</option>
        <option>English</option>
        <option>German</option>
        <option>中文</option>
      </select>
      <button class="search-btn">Search</button>
    </div>
  </header>
</template>
  
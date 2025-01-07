<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
nav {
  padding: 15px;
  background-color: #333;
  color: white;
}
nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
</style>
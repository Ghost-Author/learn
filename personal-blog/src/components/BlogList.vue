<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      posts: [
        { id: 1, title: 'First Blog Post' },
        { id: 2, title: 'Second Blog Post' }
      ]
    };
  }
}
</script>

<style scoped>
/* 添加一些样式 */
</style>
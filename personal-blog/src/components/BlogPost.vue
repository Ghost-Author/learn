<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      post: {}
    };
  },
  created() {
    const postId = this.$route.params.id;
    // 模拟获取博客文章数据
    const posts = [
      { id: 1, title: 'First Blog Post', content: 'This is the first blog post.' },
      { id: 2, title: 'Second Blog Post', content: 'This is the second blog post.' }
    ];
    this.post = posts.find(post => post.id == postId);
  }
}
</script>

<style scoped>
/* 添加一些样式 */
</style>
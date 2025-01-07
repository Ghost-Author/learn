<template>
  <div class="container">
    <div class="heart"></div>
    <div class="message">你是我的唯一，爱你永远！</div>
  </div>
</template>

<script>
export default {
  name: 'HeartAnimation'
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f0f8ff;
  overflow: hidden;
}

.heart {
  width: 100px;
  height: 90px;
  position: relative;
  background: red;
  transform: rotate(-45deg);
  top: 20px; /* 调整心形位置 */
  animation: beat 1s infinite;
}

.heart::before,
.heart::after {
  content: '';
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: red;
  position: absolute;
}

.heart::before {
  top: -50px;
  left: 0;
}

.heart::after {
  left: 50px;
  top: 0;
}

@keyframes beat {
  0%, 100% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(1.1) rotate(-45deg);
  }
}

.message {
  margin-top: 40px; /* 将文字整体往下移动 */
  font-size: 2rem;
  color: #ff69b4;
  font-weight: bold;
}
</style>
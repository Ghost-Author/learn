<template>
  <div class="container">
    <div class="heart"></div>
    <div class="balloons">
      <div class="balloon" v-for="n in 20" :key="n"></div>
    </div>
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
  background: #f0f8ff;
  overflow: hidden;
}

.heart {
  width: 100px;
  height: 90px;
  position: relative;
  background: red;
  transform: rotate(-45deg);
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

.balloons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.balloon {
  width: 20px;
  height: 30px;
  background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,182,193,1) 100%);
  border-radius: 50% 50% 45% 45%;
  position: absolute;
  animation: float 5s infinite;
}

.balloon:nth-child(2n) {
  background: radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(144,238,144,1) 100%);
}

.balloon:nth-child(3n) {
  background: radial-gradient(circle, rgba(0,0,255,1) 0%, rgba(173,216,230,1) 100%);
}

@keyframes float {
  0% {
    transform: translateY(100%) translateX(0);
  }
  50% {
    transform: translateY(50%) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(-10px);
  }
}

.message {
  position: absolute;
  bottom: 10%;
  font-size: 2rem;
  color: #ff69b4;
  font-weight: bold;
}
</style>
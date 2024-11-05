<script setup>

</script>

<template>
  <header class="w-full bg-main flex justify-center">
      <img src="../assets/video/atTheTable2.gif">
  </header>
</template>

<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Помещает видео позади содержимого */
}

.video-background video {
  min-width: 100%; /* Убедитесь, что видео покрывает всю область */
  min-height: 100%;
  width: auto;
  height: auto;
}
</style>
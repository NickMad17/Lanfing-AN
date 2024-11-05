<script setup>

</script>

<template>
<header class="w-full bg-main flex justify-center">
    <video autoplay loop muted playsinline>
      <source src="../assets/video/atTheTable.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео.
    </video>
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
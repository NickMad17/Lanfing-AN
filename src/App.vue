<script setup>
import Former from "./components/Former.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div data-theme="wireframe" class="min-h-dvh bg-main">
    <Former/>
    <Header/>
    <section class="sec rounded">
      <p>
        Наверное ты хочешь спросить почему именно море,
        Наверное ты хочешь спросить почему именно море,
        Наверное ты хочешь спросить почему именно море,
      </p>
    </section>
    <section class="sec bg-white rounded-t-2xl phone">
      <div class="content">
        <p>И все же почему ты не веришь?</p>
        <p>И все же почему ты не веришь?</p>
        <p>И все же почему ты не веришь?</p>
        <p>И все же почему ты не веришь?</p>
        <p>И все же почему ты не веришь?</p>
        <p>И все же почему ты не веришь?</p>
        <p>Возможно</p>
      </div>
    </section>
    <section class="sec">

      <p>И все же почему ты не веришь?</p>
      <p>Возможно</p>
    </section>
    <div class="relative overflow-hidden">
      <video width="390" autoplay loop>
        <source src="./assets/video/happy.mp4" type="video/mp4">
      </video>
      <div class="absolute bg-black top-0 w-5 h-5 rounded-br-3xl"/>
      <div class="absolute bg-black top-0 right-0 w-5 h-5 rounded-bl-3xl"/>
      <div class="absolute bg-black bottom-0 right-0 w-5 h-5 rounded-tl-3xl"/>
      <div class="absolute bg-black bottom-0 w-5 h-5 rounded-tr-3xl"/>
    </div>
    <footer class="relative flex justify-center items-center py-10 bg-tertiary">
      <img class="w-10 absolute bottom-6 left-10 rotate-12" src="./assets/svg/box.svg"/>
      <img class="w-10 absolute bottom-9 right-10 rotate-45" src="./assets/svg/star.svg"/>
      <p class="text-lg ">Happy birthday to you</p>
    </footer>
  </div>
</template>

<style scoped>
.sec {
  @apply py-5 px-10 border-none w-full
}

.phone {
  position: relative;
  overflow: hidden;
}

.phone::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('./assets/phone.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  z-index: 1; /* Помещаем за контентом */
}

.content {
  position: relative;
  z-index: 2; /* Помещаем над фоном */
}
</style>

<script setup>
import Former from "./components/Former.vue";
import Header from "./components/Header.vue";
import {ref} from "vue";

const isShowVideo = ref(false);
const showLol = ref(false)
const count = ref(3);
const click = () => {
  showLol.value = true;
  setInterval(() => {
    count.value = count.value - 1;
    if (count.value === 1) {
      clearInterval(count.value)
    }
  },1000)
  setTimeout(() => {
    isShowVideo.value = true;
    showLol.value = false;
  },3000)
}
</script>

<template>
  <div data-theme="wireframe" class="h-dvh overflow-y-auto bg-main">
    <Former/>
    <Header/>
    <section class="sec">
      <p class="font-bold">
        Наверное ты хочешь спросить почему именно море?) ну давай попробую ответить.
      </p>
    </section>
    <section class="sec rounded">
      <ul>
        <li>Когда ты рядом, испытываешь целое <span class="text-blue-500 font-bold text-[14px]">МОРЕ</span> эмоций</li>
        <li>Когда заходит речь о каких-либо хобби, то сразу вспоминаешь у кого <span
          class="text-blue-500 font-bold text-[14px]">МОРЕ</span> увлечений, интересов, творчества)
        </li>
        <li>
          Смотря в глаза, сразу видно глубину, как в <span class="text-blue-500 font-bold text-[14px]">МОРЕ</span> -
          что-то необъятное и прекрасное
        </li>
      </ul>
      <p class="text-[15px] font-[500] p-3 bg-second rounded-lg underline">Думаю так можно продолжать бесконечно, но пожалуй не буду, а то многовато тебе
        уже комплементов)</p>
    </section>
    <section class="sec border-t border-tertiary">
      <p class="font-bold text-[16px]">Хотел бы поздравить тебя с днем рождения, <span class="text-red-800">Настя</span> 🎊</p>
     <template v-if="!isShowVideo">
       <p class="font-bold text-[14px] pt-5">Все, что я хотел пожелать находиться в видео ниже, прошу отнесись серьезно к этому !</p>
       <div class="flex justify-center animate-bounce">
         <img src="./assets/svg/arrow.svg" class="w-5 mt-4 mb-2" alt="">
       </div>
       <video controls playsinline poster="./assets/img/preview.jpg">
         <source src="./assets/video/GoodMorning.mp4" type="video/mp4">
       </video>
       <div class="flex flex-col items-center mt-5">
         <button v-if="!isShowVideo" @click="click" class="btn bg-transparent border-none shadow-none underline">{{showLol ? 'Ладно, давай попробую серьезно)': 'Нажми после просмотра видео'}}</button>
         <div v-if="showLol" class="text-xl">{{count}}</div>
       </div>
     </template>
    </section>
  <template v-if="isShowVideo">
    <section class="px-10 pb-5">
      <div class="text-[15px] font-bold bg-white py-[5px] px-[8px] rounded">
        <p>Желаю тебе</p>
      </div>
    </section>
    <section class="relative flex justify-center items-center py-10 bg-tertiary">
      <img class="w-10 absolute bottom-6 left-10 rotate-12" src="./assets/svg/box.svg"/>
      <img class="w-10 absolute bottom-9 right-10 rotate-45" src="./assets/svg/star.svg"/>
      <p class="text-lg font-[500]">Happy birthday to you</p>
    </section>
    <footer class="relative overflow-hidden">
      <img src="./assets/video/happy.gif" class="w-full border-[4px] border-black">
      <div class="absolute bg-black top-0 w-5 h-5 rounded-br-3xl"/>
      <div class="absolute bg-black top-0 right-0 w-5 h-5 rounded-bl-3xl"/>
      <div class="absolute bg-black bottom-0 right-0 w-5 h-5 rounded-tl-3xl"/>
      <div class="absolute bg-black bottom-0 w-5 h-5 rounded-tr-3xl"/>
    </footer>
  </template>
  </div>
  <!--    <section class="sec bg-white rounded-t-2xl phone">-->
  <!--      <div class="content">-->
  <!--        <p>И все же почему ты не веришь?</p>-->
  <!--        <p>И все же почему ты не веришь?</p>-->
  <!--        <p>И все же почему ты не веришь?</p>-->
  <!--        <p>И все же почему ты не веришь?</p>-->
  <!--        <p>И все же почему ты не веришь?</p>-->
  <!--        <p>И все же почему ты не веришь?</p>-->
  <!--        <p>Возможно</p>-->
  <!--      </div>-->
  <!--    </section>-->
</template>

<style scoped>
.sec {
  @apply py-5 px-10 w-full
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
  background-image: url('assets/img/phone.jpg');
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

ul {
  list-style-type: disc;
  @apply mb-5 mx-3
}

li {
  margin-bottom: 15px;
}
</style>

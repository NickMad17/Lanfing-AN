<script setup>
import Former from "./components/Former.vue";
import Header from "./components/Header.vue";
import {ref} from "vue";

const isShowVideo = ref(false);
const showLol = ref(false);
const count = ref(3);
const isShowPage = ref(false);
const click = () => {
  showLol.value = true;
  setInterval(() => {
    count.value = count.value - 1;
    if (count.value === 1) {
      clearInterval(count.value)
    }
  }, 1000)
  setTimeout(() => {
    isShowVideo.value = true;
    showLol.value = false;
  }, 3000)
}

const emitPage = (event) => {
  isShowPage.value = event;
}
</script>

<template>
  <div data-theme="wireframe" class="h-dvh overflow-y-auto bg-main" >
    <Former @page="emitPage"/>
   <template v-if="isShowPage">
     <Header class="animate-fadeIn"/>
     <section class="sec">
       <p class="font-bold text-[18px] animate-popIn">
         Наверное ты хочешь спросить почему именно море?) ну давай попробую ответить.
       </p>
     </section>
     <section class="sec rounded animate-slideIn">
       <ul class="text-[17px]">
         <li>Когда ты рядом, испытываешь целое <span class="text-blue-500 font-bold text-[15px]">МОРЕ</span> эмоций</li>
         <li>Когда заходит речь о каких-либо хобби, то сразу вспоминаешь у кого <span
           class="text-blue-500 font-bold text-[15px]">МОРЕ</span> увлечений, интересов, творчества)
         </li>
         <li>
           Смотря в глаза, сразу видно глубину, как в <span class="text-blue-500 font-bold text-[15px]">МОРЕ</span> -
           что-то необъятное и прекрасное
         </li>
       </ul>
       <p class="text-[16px] font-[500] p-3 bg-second rounded-lg underline">Думаю так можно продолжать бесконечно, но
         пожалуй не буду, а то многовато тебе
         уже комплементов)</p>
     </section>
     <section class="sec border-t border-tertiary">
       <p class="font-bold text-[18px]">Хотел бы поздравить тебя с днем рождения, <span class="text-red-800">Настя</span>
         🎊</p>
       <template v-if="!isShowVideo">
         <p class="font-bold text-[15px] pt-5">Все, что я хотел пожелать находиться в видео ниже, прошу отнесись серьезно
           к этому !</p>
         <div class="flex justify-center animate-bounce">
           <img src="./assets/svg/arrow.svg" class="w-5 mt-4 mb-2" alt="">
         </div>
         <video controls playsinline poster="./assets/img/preview.jpg">
           <source src="./assets/video/GoodMorning.mp4" type="video/mp4">
         </video>
         <div class="flex flex-col items-center mt-5">
           <div v-if="showLol" class="text-xl">{{ count }}</div>
           <button v-if="!isShowVideo" @click="click" :class="{'animate-pulse': !showLol}" class="btn bg-transparent border-none shadow-none underline ">
             {{ showLol ? 'Ладно, давай попробую серьезно)' : 'Нажми после просмотра видео' }}
           </button>
         </div>
       </template>
     </section>
     <template v-if="isShowVideo">
       <section class="px-7 pb-5 animate-fadeIn">
         <div class="holst shadow-2xl text-[16px] bg-white py-[10px] px-[10px] rounded flex flex-col gap-4 font-[500]">
           <p>Желаю <span>тебе</span> почаще улыбаться! 😁 Позитивные эмоции не только продлевают <span class="!bg-tertiary">жизнь</span>, но и наполняют
             <span class="!bg-gray-200">серые будни</span>
             неимоверным буйством красок.</p>

           <p><span class="!bg-second">Следуй</span> за своим сердцем, оно <span class="!bg-tertiary">всегда</span> подскажет верный путь! И пусть холодный расчет <span class="!bg-yellow-200">важен</span> в карьере, но
             настоящее счастье можно найти только <span class="!bg-tertiary">в близости</span> с дорогими людьми.</p>

           <p>Помни, как прекрасен мир вокруг! 🌎 Проводи <span class="!bg-gray-200">больше времени</span> на свежем воздухе, вдохновляйся красотой природы,
             <span class="!bg-tertiary">вместо</span> «красоты» ленты <span class="!bg-tertiary">инстаграмма</span>)))</p>

           <p> Желаю тебе крепкого здоровья, хотя зная, как трепетно ты относишься к здоровью… <span>все равно</span>
             пожелаю))) 💪</p>

           <p>Так же знай что тебе все под силу, ты тот самый <span class="!bg-yellow-200">человек, который</span> может взяться <span class="!bg-second">за</span> любое дело и у тебя все
             получится, <span>но</span> старайся не увлекаться, а то можно и потеряться! 😅</p>
           <p>Уверен на 100%, <span class="!bg-gray-200">что</span> ты сможешь реализовать <span class="!bg-second">все свои мечты</span> и цели! И, кстати говоря, <span>я</span> с
             нетерпением жду
             момента, когда смогу прочитать твою книгу! ) 📚</p>

           <p>Всегда помни, что <span>рядом</span> есть те, кто <span class="!bg-yellow-200">тебя любит</span> и поддержит в трудную минуту, даже если <span class="!bg-gray-200">будет казаться</span>, что
             это не так.</p>

           <p class="font-bold">Помни, цени, наслаждайся, люби ❤️</p>
         </div>
       </section>
       <section class="relative shadow-2xl mb-2 px-2 animate-slideIn">
         <img src="./assets/img/HbBg.png" class="w-full h-full border-black border animate-breathe">
         <img class="w-10 absolute bottom-6 left-10 rotate-12 animate-floatBox" src="./assets/svg/box.svg"/>
         <img class="w-10 absolute bottom-9 right-10 rotate-45 animate-twinkleStar" src="./assets/svg/star.svg"/>
       </section>

     </template>
   </template>
  </div>
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

.holst span {
  @apply bg-red-300 rounded-[4px] pt-[2px] pl-[5px] pr-[3px] mr-[2px]
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in forwards;
}

.animate-slideIn {
  animation: slideIn 0.8s ease-in-out forwards;
}

.animate-popIn {
  animation: popIn 0.4s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Breathing animation for the main image */
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.animate-breathe {
  animation: breathe 6s ease-in-out infinite;
}

/* Floating animation for the box */
@keyframes floatBox {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-10px) rotate(15deg); }
}

.animate-floatBox {
  animation: floatBox 4s ease-in-out infinite;
}

/* Twinkling animation for the star */
@keyframes twinkleStar {
  0%, 100% { transform: scale(1) rotate(45deg); }
  50% { transform: scale(1.2) rotate(50deg); }
}

.animate-twinkleStar {
  animation: twinkleStar 3s ease-in-out infinite;
}
</style>
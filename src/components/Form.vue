<script setup>
import {ref} from "vue";

const answer = 'Море'
const text = ref('')
const error = ref(false)

const complete = ref(false)
const submit = () => {
  console.log(text.value,answer.toLowerCase())
  if (text.value.toLowerCase() === answer.toLowerCase()) {
    complete.value = true
  } else {
    text.value = ''
    error.value = true
  }

}
</script>

<template>
<div class="scr w-full h-screen flex justify-center absolute pt-4 top-0 bg-second" v-if="!complete">
  <div class="w-72">
    <h1 class="text-center text-[16px]">Для того что бы попасть дальше тебе надо составить слово, которое было "зашифровано" в <span class="text-blue-100">7-ми</span> открытках.</h1>
    <img src="../assets/stop.png" class="opacity-30">
    <input v-model="text" @focus="error = false" type="text" placeholder="Писать тут..." class="input input-bordered w-full max-w-xs" />
    <p v-if="error" class="text-[14px] ml-2 mt-2 text-red-500 opacity-90">Ответ не верный :( попробуй еще раз</p>
    <button class="btn mt-3" @click="submit">Попробовать</button>
  </div>
</div>
</template>

<style scoped>
.scr {
  overflow-y: scroll;
}
</style>
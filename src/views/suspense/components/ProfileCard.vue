<script setup>
import { ref } from 'vue'
import loadUserData from './loadUserData'

const userData = ref(null)
userData.value = await loadUserData(2000)
</script>

<template>
  <div class="w-full h-full bg-gray-300 flex justify-center">
    <div
      class="w-full max-w-[700px] min-h-[180px] p-7 mt-8 bg-light-100 rounded-xl overflow-hidden self-start"
    >
      <div class="w-1/10 float-left">
        <img
          :src="userData.pic"
          alt="avatar"
          class="w-full p-1 rounded-1/2 border-5 border-green-500"
        />
      </div>
      <div class="w-[85%] float-right">
        <span class="uppercase text-[#777] tracking-3px"> Written By </span>
        <h3 class="my-3 text-[#222] text-2xl">{{ userData.name }}</h3>
        <p class="leading-normal text-[#777]">{{ userData.bio }}</p>
      </div>
    </div>
  </div>
</template>

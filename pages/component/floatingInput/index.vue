<template>
  <div>
    <sourceView :allData="mainData"/>
  </div>
</template>

<script setup>

  const mainData = ref({
    description : {
      heading: 'Floating input',
      paragraph: 'A Floating input is a component of web design.'
    },
    outputCode : [
      `
      <div class="relative">
        <input id="email" type="email" placeholder="Email" class="peer w-full border-b-2 placeholder-transparent border-pink-600 focus:outline-none focus:border-2 pt-2 pl-2 pr-2 focus:rounded-md">
        <label for="email" class="absolute left-0 -top-4 text-base text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1">Email</label>
      </div>
      `
    ],
    code : `
    <div class="relative">
      <input id="email" type="email" placeholder="Email" class="peer w-full border-b-2 placeholder-transparent border-pink-600 focus:outline-none focus:border-2 pt-2 pl-2 pr-2 focus:rounded-md">
      <label for="email" class="absolute left-0 -top-4 text-base text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1">Email</label>
    </div>
    `
  })
</script>
<style></style>

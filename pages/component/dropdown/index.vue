<template>
  <div>
    <sourceView :allData="mainData"/>
  </div>
</template>

<script setup>

  const mainData = ref({
    description : {
      heading: 'Dropdown',
      paragraph: 'A Dropdown is a component of web design.'
    },
    outputCode : [
      `
      <button class="group bg-blue-700 focus:bg-blue-800 text-white w-full px-2 py-2 rounded-md relative shadow-md">
        <span class="flex justify-between items-center">
          Dropdown
          <svg class="group-focus:transform group-hover:rotate-90 transition-all duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16 12l-6 6V6z" />
          </svg>
        </span>
        <div class="absolute rounded-md border left-0 right-0 top-full flex flex-col text-left text-black bg-white divide-y max-h-0 group-hover:max-h-screen transition-all duration-300 ease-in-out overflow-hidden">
          <a class="hover:bg-gray-100 p-2" href="#">Dropdown 1</a>
          <a class="hover:bg-gray-100 p-2" href="#">Dropdown 2</a>
          <a class="hover:bg-gray-100 p-2" href="#">Dropdown 3</a>
        </div>
      </button>
      `
    ],
    code : `
    <button class="group bg-blue-700 focus:bg-blue-800 text-white w-1/3 px-2 py-2 rounded-md relative shadow-md">
      <span class="flex justify-between items-center">
        Dropdown
        <svg class="group-focus:transform group-hover:rotate-90 transition-all duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16 12l-6 6V6z" />
        </svg>
      </span>
      <div class="absolute rounded-md border left-0 right-0 top-full flex flex-col text-left text-black bg-white divide-y max-h-0 group-hover:max-h-screen transition-all duration-300 ease-in-out overflow-hidden">
        <a class="hover:bg-gray-100 p-2" href="#">Dropdown 1</a>
        <a class="hover:bg-gray-100 p-2" href="#">Dropdown 2</a>
        <a class="hover:bg-gray-100 p-2" href="#">Dropdown 3</a>
      </div>
    </button>
    `
  })
</script>
<style></style>

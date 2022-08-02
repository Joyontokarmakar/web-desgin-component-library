<template>
  <div>
    <sourceView :allData="mainData"/>
  </div>
</template>

<script setup>
  const mainData = ref({
    description : {
      heading: 'Accordion',
      paragraph: 'An Accordion is a component of web design.'
    },
    outputCode : [
      `<div class="flex flex-col gap-y-3">
        <details class="bg-gray-300 duration-300 open:bg-amber-200">
          <summary class="cursor-pointer appearance-none bg-inherit px-5 py-3 text-lg">Heading 1</summary>
          <div class="border border-gray-300 bg-white px-5 py-3 text-sm font-light">
            <p>Accordion body 1</p>
          </div>
        </details>

        <details class="bg-gray-300 duration-300 open:bg-amber-200">
          <summary class="cursor-pointer appearance-none bg-inherit px-5 py-3 text-lg">Heading 2</summary>
          <div class="border border-gray-300 bg-white px-5 py-3 text-sm font-light">
            <p>Accordion body 2</p>
          </div>
        </details>
      </div>`
    ],
    code : `
    <details class="bg-gray-300 duration-300 open:bg-amber-200">
      <summary class="cursor-pointer appearance-none bg-inherit px-5 py-3 text-lg">Heading 1</summary>
      <div class="border border-gray-300 bg-white px-5 py-3 text-sm font-light">
        <p>Accordion body 1</p>
      </div>
    </details>

    <details class="bg-gray-300 duration-300 open:bg-amber-200">
      <summary class="cursor-pointer appearance-none bg-inherit px-5 py-3 text-lg">Heading 2</summary>
      <div class="border border-gray-300 bg-white px-5 py-3 text-sm font-light">
        <p>Accordion body 2</p>
      </div>
    </details>

    `
  });
  useHead({
  title: 'Web Design Component Library',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { 
      name: 'Web Design Component Library',
      content: 'This project is made for store all of my designed component for website design and development by using various kind of css and js library. This project is made with Nuxt-js. I hope I will able to store all kind of component. In future I will upload JavaScript functional component. for more of my work, you can visit my github profile (https://github.com/joyontokarmakar). If you want to know about me, please visit (https://joyontokarmakar.netlify.app). Thank You.' 
    }
  ],
  bodyAttrs: {
    class: 'Web Design Component Library'
  }
})
</script>

<style></style>

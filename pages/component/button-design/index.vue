<template>
  <div>
    <sourceView :allData="mainData"/>
  </div>
</template>

<script setup>

  const mainData = ref({
    description : {
      heading: 'Button',
      paragraph: 'A button is a component of web design.'
    },
    outputCode : [
      '<button class="border px-2 bg-gray-500 text-white"> button 1 </button>', '<button class="border px-2 bg-gray-500 text-white"> button 2 </button>'
    ],
    code : `
    <html>
      <body>
        <div>
          <Button> button 1 </Button>
          <Button> button 2 </Button>
        </div>
      </body>
    </html>
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

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
  })
</script>

<style></style>

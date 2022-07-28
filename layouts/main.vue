<template>
  <div class="flex">
    <sidebars />
    <div
      class="w-full md:w-[calc(100%-300px)] h-screen overflow-auto bg-corporateLight"
    >
      <headers />
      <div
        class="m-5 p-4 bg-corporateBg h-[calc(100vh-112px)] overflow-auto rounded-md shadow-md"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style></style>

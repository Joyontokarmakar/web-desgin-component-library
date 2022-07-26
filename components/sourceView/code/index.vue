<template>
  <div class="group relative bg-corporateBlack text-corporateGray border rounded w-full overflow-x-auto">
    <!-- <pre class="language-html">
      <code>
        {{props.mainCode}}
      </code>
    </pre> -->
    <button @click="copyText" class="py-1 px-2 border-0 rounded text-sm bg-corporate text-white shadow-sm transition ease-in duration-300 hover:scale-125 hidden group-hover:block group-hover:absolute group-hover:top-2 group-hover:right-2">Copy</button>
    <div class="bg-corporateGray text-corporateLight rounded px-2 " :class="tooltip ? 'block absolute top-12 right-2': 'hidden'"><span>Copied !</span></div>
    <xmp>
      {{props.mainCode}}
    </xmp>
  </div>
</template>

<script setup>
  const props = defineProps({mainCode: { type: String,}})
  const tooltip = ref(false);
  const copyText = () =>{
    const  data = navigator.clipboard.writeText(props.mainCode);
    setTimeout(() => tooltip.value = true, 0);
    setTimeout(() => tooltip.value = false, 1000);
    return data;
  }
</script>

<style></style>
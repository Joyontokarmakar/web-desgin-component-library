<template>
  <div class="bg-corporateBlack text-corporateGray border rounded w-full overflow-x-auto">
    <!-- <pre class="language-html">
      <code>
        {{props.mainCode}}
      </code>
    </pre> -->
    <xmp>
      {{props.mainCode}}
    </xmp>
  </div>
</template>

<script setup>
  const props = defineProps({mainCode: { type: String,}})
</script>

<style></style>
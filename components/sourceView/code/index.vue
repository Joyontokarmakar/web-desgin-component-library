<template>
  <div class="bg-corporateBlack text-corporateGray border rounded">
    <pre class="language-html line-numbers">
      <code>
        {{props.mainCode}}
      </code>
    </pre>
  </div>
</template>

<script setup>
  const props = defineProps({mainCode: { type: String,}})
</script>

<style></style>
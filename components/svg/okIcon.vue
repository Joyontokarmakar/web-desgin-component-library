<template>
  <svg 
    :fill="props.fill" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    :width="props.width"
    :height="props.height"
    >    
      <path 
        d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"
        :fill="props.fill"
        :stroke="props.fill"
      />
  </svg>
</template>

<script setup>
  const props = defineProps({
    width: {
      type: String,
      default: "26",
    },
    height: {
      type: String,
      default: "26",
    },
    fill: {
      type: String,
      default: "#DCDCDC",
    },
  })
</script>

<style></style>

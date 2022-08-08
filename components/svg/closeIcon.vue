<template>
  <svg 
    :fill="props.fill" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    :width="props.width"
    :height="props.height"
    >    
      <path 
        d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
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

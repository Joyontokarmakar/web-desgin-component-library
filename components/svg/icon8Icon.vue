<template>
  <svg 
    :fill="props.fill" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    :width="props.width"
    :height="props.height"
  >    
    <path 
      d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 10 21 C 11.105 21 12 20.105 12 19 L 12 16.5 L 12 7.5 L 12 5 C 12 3.895 11.105 3 10 3 L 5 3 z M 12 7.5 C 12 9.981 14.019 12 16.5 12 C 18.981 12 21 9.981 21 7.5 C 21 5.019 18.981 3 16.5 3 C 14.019 3 12 5.019 12 7.5 z M 16.5 12 C 14.019 12 12 14.019 12 16.5 C 12 18.981 14.019 21 16.5 21 C 18.981 21 21 18.981 21 16.5 C 21 14.019 18.981 12 16.5 12 z"
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

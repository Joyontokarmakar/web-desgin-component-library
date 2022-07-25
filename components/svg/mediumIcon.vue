<template>
  <svg 
    :fill="fill" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    :width="width"
    :height="height"
  >    
    <path 
      d="M7 6A7 7 0 107 20 7 7 0 107 6zM18 6.5A3 6.5 0 1018 19.5 3 6.5 0 1018 6.5zM23 8A1 5 0 1023 18 1 5 0 1023 8z"
      :fill="fill"
      :stroke="fill"
    />
  </svg>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

<style></style>

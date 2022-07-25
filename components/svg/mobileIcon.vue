<template>
  <svg 
    :fill="fill" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    :width="width"
    :height="height"
  >    
    <path 
      d="M 7 2 C 5.895 2 5 2.895 5 4 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 4 C 19 2.895 18.105 2 17 2 L 7 2 z M 7 4 L 17 4 L 17 13 L 7 13 L 7 4 z M 12 14 C 12.552 14 13 14.448 13 15 C 13 15.552 12.552 16 12 16 C 11.448 16 11 15.552 11 15 C 11 14.448 11.448 14 12 14 z M 8 17 L 10 17 L 10 18 L 7 18 C 7 17.448 7.448 17 8 17 z M 11 17 L 13 17 L 13 18 L 11 18 L 11 17 z M 14 17 L 16 17 C 16.552 17 17 17.448 17 18 L 14 18 L 14 17 z M 7 19 L 10 19 L 10 20 L 8 20 C 7.448 20 7 19.552 7 19 z M 11 19 L 13 19 L 13 20 L 11 20 L 11 19 z M 14 19 L 17 19 C 17 19.552 16.552 20 16 20 L 14 20 L 14 19 z"
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

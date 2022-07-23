<template>
     <div class="flex justify-center gap-2 p-5 border rounded">
          <div v-for="(item, index) in props.mainOutput" :key="index" v-html="item"></div>
     </div>
</template>

<script setup>
const props = defineProps({mainOutput: { type: Object,}})
</script>
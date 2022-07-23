<template>
     <div class="p-2 border rounded">
          <h5>{{props.mainDescription.heading}}</h5>
          <p>{{props.mainDescription.paragraph}}</p>
     </div>
</template>


<script setup>
     const props = defineProps({mainDescription: { type: Object,}})
</script>
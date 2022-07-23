<template>
     <div class="border rounded flex flex-col gap-2 p-4">
          <sourceViewDescription :mainDescription="props.allData.description"/>
          <sourceViewOutput :mainOutput="props.allData.outputCode"/>
          <sourceViewCode :mainCode="props.allData.code"/>
     </div>
</template>

<script setup>
     const props = defineProps({allData: { type: Object,}})
</script>
<template>
     <NuxtLink 
          :to="props.pathName" 
          class="linkClass" 
          :class="
               $route.path === props.pathName && props.subMenu ? 'linkActiveClass ml-5' : 
               $route.path === props.pathName ? 'linkActiveClass': 
               props.subMenu ? 'ml-5':
               'linkHoverClass'">
          {{props.name}}
     </NuxtLink>
</template>

<script setup>
const props = defineProps({
     pathName: { type: String,}, 
     name: {type: String}, 
     subMenu: {type: Boolean}
})
</script>

<style></style>

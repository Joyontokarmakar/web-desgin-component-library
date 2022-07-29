<template>
     <NuxtLink
          :to="props.pathName"
          class="mainMenuClass flex justify-start items-center gap-x-2 ml-4"
          :class="$route.path === props.pathName ? 'mainMenuActiveClass' : ''"
          >
          <slot/>
          <h5 class="mainMenuClass mb-0" :class="$route.path === props.pathName ? 'mainMenuActiveClass' : ''">
               {{props.name}}
          </h5>
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

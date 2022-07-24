<template>
     <NuxtLink :to="props.pathName" class="linkClass" :class="$route.path === props.pathName ? 'linkActiveClass' : 'linkHoverClass' && props.subButton ? 'ml-5':''">
          {{props.name}}
     </NuxtLink>
</template>

<script setup>
// export default {
//   props: ["pathName", "name", "subButton"],
// };

const props = defineProps({
     pathName: { type: String,}, 
     name: {type: String}, 
     subButton: {type: Boolean}
})
</script>

<style></style>

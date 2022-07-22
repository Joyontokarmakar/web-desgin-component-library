<template>
     <NuxtLink :to="pathName" class="linkClass" :class="$route.path === pathName ? 'linkActiveClass' : 'linkHoverClass'">
          {{name}}
     </NuxtLink>
</template>

<script>
export default {
  props: ["pathName", "name"],
};
</script>

<style></style>

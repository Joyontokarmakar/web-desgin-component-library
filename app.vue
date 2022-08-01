<template>
  <NuxtLayout :name="$route.path === '/login' ? 'auth' : $route.path ==='/sign-up' ? 'auth' : 'main'">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
</script>
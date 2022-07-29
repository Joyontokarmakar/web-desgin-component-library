<template>
  <NuxtLayout :name="$route.path === '/login' ? 'auth' : $route.path ==='/sign-up' ? 'auth' : 'main'">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
  // const userInfo = reactive({
  //   fName: "Default",
  //   lName: "User",
  //   email: "defaultuser@gmail.com",
  //   isLogin: false
  // });
  // onMounted(()=> {
  //   setDefaultUser();
  // })

  // const setDefaultUser = () => {
  //   localStorage.setItem('userData', JSON.stringify(userInfo));
  // }
</script>
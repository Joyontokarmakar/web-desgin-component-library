<template>
  <div>
    <div class="bg-corporate p-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-white font-bold text-xl md:text-2xl ml-0">Web Component</NuxtLink>
      <div
        class="hidden md:flex justify-between items-center text-white space-x-4 mr-0"
      >
        <!-- <NuxtLink to="/" class="px-3 py-2"> Dashboard </NuxtLink>
        <NuxtLink to="/services" class="px-3 py-2"> Services </NuxtLink> -->
        <!-- <NuxtLink to="/sign-up" class="px-3 py-2"> Signup </NuxtLink> -->
        <!-- {{userData}} -->
        <!-- <NuxtLink v-if="userData.isLogin == false" to="/login" class="px-3 py-2">Login</NuxtLink>
        <Button v-else class="px-3 py-2" @click="logout"> Logout </Button>
        <div v-if="userData.isLogin == true" class="rounded-full w-10 h-10 shadow-md bg-corporate text-corporateLight flex justify-center items-center">
          {{userData.fName.charAt(0) + userData.lName.charAt(0)}}
        </div>
        <div v-else>
          <img 
          src="@/assets/images/logo/logo.png"
          alt="profile"
          class="rounded-full w-10 h-10 shadow-md"
        />
        </div> -->
        
      </div>
      <div class="block md:hidden cursor-pointer" @click="open">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="26"
          height="26"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="white"
            d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
          />
        </svg>
      </div>
    </div>
    
    <sidemenus :open="sidebar" @close="close" />
  </div>
</template>

<script setup>
  const sidebar = ref(false);
  // const userData = JSON.parse(localStorage.getItem('userData'))
  const userInfo = reactive({
    fName: "",
    lName: "",
    email: "",
    isLogin: true
  });
  onMounted(()=> {
    storage();
  })
  const storage = () =>{
    console.log(localStorage.getItem("userData"));
  }
  const logout = () => {
    localStorage.removeItem('userData');
  }
  const open = () =>{
    sidebar.value = !sidebar.value
  };

  const close = () => {
    sidebar.value = !sidebar.value
  };
  </script>

<style></style>

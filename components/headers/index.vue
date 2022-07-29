<template>
  <div>
    <div class="bg-corporate p-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-white font-bold text-xl md:text-2xl ml-0">Web Component</NuxtLink>
      <div class="hidden md:flex justify-between items-center text-white space-x-4 mr-0">
        <NuxtLink v-if="!userInfo.isLogin" to="/login" class="px-3 py-2">Login</NuxtLink>
        <Button v-else class="px-3 py-2" @click="logout"> Logout </Button>
        <div v-if="userInfo.isLogin" class="rounded-full w-10 h-10 shadow-md bg-corporateLight text-corporate font-bold flex justify-center items-center">
          {{userInfo.fName.charAt(0) + userInfo.lName.charAt(0)}}
        </div>
        <div v-else>
          <img 
          src="@/assets/images/logo/webDesignComponentLibrary-Logo.png"
          alt="profile"
          class="rounded-full w-10 h-10 shadow-md"
        />
        </div>
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
  const userInfo = reactive({
    fName: "",
    lName: "",
    email: "",
    isLogin: false
  });
  onMounted(()=> {
    storage();
  })
  const storage = () =>{
    var userLoginData = localStorage.getItem("userData");
    if(userLoginData){
      const userParseLoginData = JSON.parse(userLoginData);
      console.log(userParseLoginData);
      userInfo.fName = userParseLoginData.fName;
      userInfo.lName = userParseLoginData.lName;
      userInfo.email = userParseLoginData.email;
      userInfo.isLogin = userParseLoginData.isLogin;
    }
  }
  const logout = () => {
    localStorage.removeItem('userData');
    window.location.href = "/";
  }
  const open = () =>{
    sidebar.value = !sidebar.value
  };

  const close = () => {
    sidebar.value = !sidebar.value
  };
  </script>

<style></style>

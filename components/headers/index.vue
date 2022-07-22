<template>
  <div>
    <div class="bg-corporate p-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-white font-bold text-2xl ml-0">JK Admin</NuxtLink>
      <div
        class="hidden md:flex justify-between items-center text-white space-x-4 mr-0"
      >
        <!-- <NuxtLink to="/" class="px-3 py-2"> Dashboard </NuxtLink>
        <NuxtLink to="/services" class="px-3 py-2"> Services </NuxtLink> -->
        <NuxtLink to="/login" class="px-3 py-2"> Login </NuxtLink>
        <NuxtLink to="/sign-up" class="px-3 py-2"> Signup </NuxtLink>
        <img
          src="@/assets/images/logo/logo.png"
          alt="profile"
          class="inline rounded-full w-10 h-10 shadow-md"
        />
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

<script>
export default {
  data() {
    return {
      sidebar: false,
    };
  },
  methods: {
    open() {
      this.sidebar = !this.sidebar;
    },
    close() {
      console.log("asjkldhjdf");
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style></style>

<template>
  <form >
    <div class="mx-auto space-y-6">
      <h5 class="text-center text-lg font-bold">Welcome to Our Panel</h5>
      <h5 class="text-center text-2xl font-bold text-corporate">SignUp</h5>
      <div class="flex space-x-4">
        <customInput :id="'fname'" :type="'text'" :placeholder="'First Name'" :labelName="'First Name'" :width="'1/2'"/>
        <customInput :id="'lname'" :type="'text'" :placeholder="'Last Name'" :labelName="'Last Name'" :width="'1/2'"/>
      </div>
      <customInput :id="'email'" :type="'email'" :placeholder="'Email'" :labelName="'Email'"/>
      <customInput :id="'password'" :type="'password'" :placeholder="'Password'" :labelName="'Password'"/>
      <customInput :id="'cpassword'" :type="'password'" :placeholder="'Confirm Password'" :labelName="'Confirm Password'"/>
      <div class="flex justify-between">
        <NuxtLink to="#" class="text-corporateGray underline hover:decoration-corporate ">Forgot Password?</NuxtLink>
        <button type="submit" class="customBtn uppercase">Sign up</button>
      </div>
      <div>
        <h5 class="text-center text-sm">Already an User? <NuxtLink to="/login" class="text-corporate underline hover:decoration-corporate uppercase">login</NuxtLink></h5>
        <h5 class="text-center text-sm">All rights reserved &copy; <NuxtLink to="/" class="text-corporate underline hover:decoration-corporate">Admin</NuxtLink> &commat; <NuxtLink to="https://joyontokarmakar.netlify.app" target="_blank" class="text-corporate underline hover:decoration-corporate">Joyonto</NuxtLink></h5>
      </div>
    </div>
  </form>
</template>

<script setup>
useHead({
  title: 'Web Design Component Library',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { 
      name: 'Web Design Component Library',
      content: 'This project is made for store all of my designed component for website design and development by using various kind of css and js library. This project is made with Nuxt-js. I hope I will able to store all kind of component. In future I will upload JavaScript functional component. for more of my work, you can visit my github profile (https://github.com/joyontokarmakar). If you want to know about me, please visit (https://joyontokarmakar.netlify.app). Thank You.' 
    }
  ],
  bodyAttrs: {
    class: 'Web Design Component Library'
  }
})
</script>

<style>

</style>
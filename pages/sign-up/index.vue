<template>
  <form >
    <div class="mx-auto space-y-6">
      <h5 class="text-center text-lg font-bold">Welcome to Our Panel</h5>
      <h5 class="text-center text-2xl font-bold text-corporate">SignUp</h5>
      <div class="flex space-x-4">
        <customInput :id="'fname'" :type="'text'" :placeholder="'First Name'" :lableName="'First Name'" :width="'1/2'"/>
        <customInput :id="'lname'" :type="'text'" :placeholder="'Last Name'" :lableName="'Last Name'" :width="'1/2'"/>
      </div>
      <customInput :id="'email'" :type="'email'" :placeholder="'Email'" :lableName="'Email'"/>
      <customInput :id="'password'" :type="'password'" :placeholder="'Password'" :lableName="'Password'"/>
      <customInput :id="'cpassword'" :type="'password'" :placeholder="'Confirm Password'" :lableName="'Confirm Password'"/>
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

<script>
export default {

}
</script>

<style>

</style>
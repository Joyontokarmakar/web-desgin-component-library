<template>
     <form>
          <div class="mx-auto space-y-6">
               <h5 class="text-center text-2xl font-bold text-corporate">Login Here</h5>
               <customInput :id="'email'" :type="'email'" :placeholder="'Email'" :lableName="'Email'"/>
               <customInput :id="'password'" :type="'password'" :placeholder="'Password'" :lableName="'Password'"/>

               <div class="flex justify-between">
                    <NuxtLink to="#" class="text-corporateGray underline hover:decoration-corporate ">Forgot Password?</NuxtLink>
                    <button type="submit" class="customBtn uppercase">Login</button>
               </div>
               <div>
                    <h5 class="text-center text-sm">New User? <NuxtLink to="/sign-up" class="text-corporate underline hover:decoration-corporate uppercase">sign up</NuxtLink></h5>
                    <h5 class="text-center text-sm">All rights reserved &copy; <NuxtLink to="/" class="text-corporate underline hover:decoration-corporate">Admin</NuxtLink> &commat; <NuxtLink to="https://joyontokarmakar.netlify.app" target="_blank" class="text-corporate underline hover:decoration-corporate">Joyonto</NuxtLink></h5>
               </div>
          </div>
     </form>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
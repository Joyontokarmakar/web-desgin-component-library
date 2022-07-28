<template>
     <form @submit.prevent="formSubmit">
          <div class="mx-auto space-y-6">
               <h5 class="text-center text-2xl font-bold text-corporate">Login Here</h5>
               <customInput :id="'email'" v-model="formData.email" :type="'email'" :placeholder="'Email'" :labelName="'Email'"/>
               <customInput :id="'password'" v-model="formData.password" :type="'password'" :placeholder="'Password'" :labelName="'Password'"/>
               <p v-if="loginDataCheck" :class="loginError ? 'text-red-500' : 'text-green-700'">{{loginMessage}}</p>
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

<script setup>
     const { data: loginData } = await useFetch('https://joyontojsondata.netlify.app/loginData.json')
     const formData = reactive({
          email: "",
          password: ""
     });
     const userData = reactive({
          fName: "",
          lName: "",
          email: "",
          isLogin: true
     })

     const loginMessage = ref("");
     const loginError = ref(false);
     const loginDataCheck = ref(false);

     const formSubmit = () => {
          loginDataCheck.value = true
          for(var i=0; i<loginData.value.length; i++){
               if(loginData.value[i].email == formData.email && loginData.value[i].password == formData.password){
                    loginError.value = false;
                    loginMessage.value = 'Login Successful';
                    userData.fName = loginData.value[i].firstName;
                    userData.lName = loginData.value[i].lastName;
                    userData.email = loginData.value[i].email;
                    localStorage.setItem('userData', JSON.stringify(userData));
                    break;
               }
               else{
                    loginError.value = true;
                    loginMessage.value = 'Please try again';
               }
          }
     }
</script>

<style scoped>
</style>
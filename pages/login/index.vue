<template>
     <form @submit.prevent="formSubmit">
          <div class="mx-auto space-y-6">
               <h5 class="text-center text-2xl font-bold text-corporate">Login Here</h5>
               <customInput :id="'email'" v-model="formData.email" :type="'email'" :placeholder="'Email'" :labelName="'Email'"/>
               <customInput :id="'password'" v-model="formData.password" :type="'password'" :placeholder="'Password'" :labelName="'Password'"/>
               <p v-if="loginDataCheck" class="animate-pulse" :class="loginError ? 'text-red-500' : 'text-green-700'">{{loginMessage}}</p>
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
     // const { data: loginData } = await useFetch('https://joyontojsondata.netlify.app/loginData.json');
     const loginData = ref([
          {
               "firstName": "User",
               "lastName": "1",
               "phone": "01521000001",
               "email": "user1@gmail.com",
               "password": "User1234",
               "userType": "Guest"
          },
          {
               "firstName": "User",
               "lastName": "2",
               "phone": "01521000002",
               "email": "user2@gmail.com",
               "password": "User2345",
               "userType": "Guest"
          },
          {
               "firstName": "User",
               "lastName": "3",
               "phone": "01521000003",
               "email": "user3@gmail.com",
               "password": "User3456",
               "userType": "Guest"
          },
          {
               "firstName": "User",
               "lastName": "4",
               "phone": "01521000004",
               "email": "user4@gmail.com",
               "password": "User4567",
               "userType": "Guest"
          },
          {
               "firstName": "Joyonto",
               "lastName": "Karmakar",
               "phone": "01521000005",
               "email": "joyonto@gmail.com",
               "password": "Joyonto1234",
               "userType": "Author"
          }
     ]);

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

     onMounted(()=> {
          clearStorage();
     })
     const clearStorage = () =>{
          localStorage.removeItem('userData');
     }

     const formSubmit = () => {
          loginDataCheck.value = true
          for(var i=0; i<loginData.value.length; i++){
               if(loginData.value[i].email == formData.email && loginData.value[i].password == formData.password){
                    loginError.value = false;
                    loginMessage.value = 'Login Successful';
                    userData.fName = loginData.value[i].firstName;
                    userData.lName = loginData.value[i].lastName;
                    userData.email = loginData.value[i].email;
                    clearStorage();
                    localStorage.setItem('userData', JSON.stringify(userData));

                    window.location.href = "/";
                    break;
               }
               else{
                    loginError.value = true;
                    loginMessage.value = 'Please try again';
               }
          }
     };
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

<style scoped>
</style>
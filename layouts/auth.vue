<template>
  <div>
    <div class="h-screen w-screen flex flex-col justify-center items-center bg-corporateLight px-2 relative">
      <table v-if="$route.path === '/login'" class="absolute top-0 right-0 border-collapse border border-slate-500">
        <tr class="border border-slate-500">
          <th colspan="3" class="border border-slate-500">Login Data</th>
        </tr>
        <tr class="border border-slate-500">
          <th class="border border-slate-500">Sl.</th>
          <th class="border border-slate-500">Email</th>
          <th class="border border-slate-500">Password</th>
        </tr>
        <tr class="border border-slate-500" v-for="(item, index) in loginData" :key="index">
          <td class="border border-slate-500">{{index+1}}</td>
          <td class="border border-slate-500">{{item.email}}</td>
          <td class="border border-slate-500">{{item.password}}</td>
        </tr>
     </table>
      <div class="glossyEffect w-full sm:w-2/4 lg:w-[27%] 2xl:w-3/12 px-10 pt-10 pb-8">
        <slot></slot>
      </div>
    </div>
  </div>
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

  // const loginData = ref({});
  // const loadLoginInfo = async() => {
  //   const data = await useFetch('https://joyontojsondata.netlify.app/loginData.json');
  //   loginData = await data.json()
  // };
  // onBeforeMount(()=> {
  //   loadLoginInfo ();
  // });
</script>

<style></style>

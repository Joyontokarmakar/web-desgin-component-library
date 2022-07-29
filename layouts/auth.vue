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
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
    const { data: loginData } = await useFetch('https://joyontojsondata.netlify.app/loginData.json');

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

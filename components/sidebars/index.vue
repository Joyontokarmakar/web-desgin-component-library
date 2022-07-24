<template>
  <div class="hidden md:block w-[300px] p-5 bg-corporateBlack h-screen divide-y divide-corporateGray">
    <div class="py-3 flex justify-start items-center gap-5">
      <img src="@/assets/images/logo/webDesignComponentLibrary-Logo.png" alt="profile" class="rounded-full w-1/5 shadow-md mx-auto"/>
      <div class="leading-6 ">
        <h2 class="uppercase font-bold text-sm text-corporateGray">Web Design & Components Library</h2>
      </div>
    </div>
    <div class="mt-5 space-y-2 overflow-y-auto h-[calc(100vh-185px)] py-2">
      <div class="pr-3">
        <sidebarButton :pathName ="'/'" :name="'Get Started'"/>
        <div class="flex justify-start gap-3">
          <i class="fa fa-search"></i>
          <h5 class="font-bold text-lg text-corporateGray">Components</h5>
        </div>
        <sidebarButton :pathName ="'/component/button'" :name="'Button'" :subMenu="true"/>
        <sidebarButton :pathName ="'/component/accordion'" :name="'Accordion'" :subMenu="true"/>
        <sidebarButton :pathName ="'/component/dropdown'" :name="'Dropdown'" :subMenu="true"/>
        <sidebarButton :pathName ="'/component/floatingInput'" :name="'Floating Input'" :subMenu="true"/>
        <sidebarButton :pathName ="'/services'" :name="'Services'" :subMenu="false"/>
        <sidebarButton :pathName ="'/about'" :name="'About'" :subMenu="false"/>
        <sidebarButton :pathName ="'/contact'" :name="'Contact'" :subMenu="false"/>

        <!-- <dropdowns
          :title="'Dropdown'"
          :description="'Card description will goes here'"
          :dropdownClass="dropdownClass"
          :detailsClass="detailsClass"
          :descriptionClass="descriptionClass"
        /> -->
      </div>
    </div>
    <p class="text-corporateGray text-xs text-center py-3">All Rights Reserved &copy; <NuxtLink to="https://joyontokarmakar.netlify.app" target="_blank" class="font-bold">Joyonto Karmakar</NuxtLink></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dropdownClass: "text-sm text-corporateGray",
      // detailsClass: "block rounded-xl p-4",
      // descriptionClass:"text-sm",
    };
  },
};
</script>

<style></style>

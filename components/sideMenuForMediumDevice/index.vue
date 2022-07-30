<template>
  <div class="hidden md:block w-[300px] p-5 bg-corporateBlack h-screen divide-y divide-corporateGray">
    <div class="py-3 flex justify-start items-center gap-5">
      <img src="@/assets/images/logo/webDesignComponentLibrary-Logo.png" alt="profile" class="rounded-full w-1/5 shadow-md mx-auto"/>
      <div class="leading-6 ">
        <h2 class="uppercase font-bold text-sm text-corporateGray">Web Design & Components Library</h2>
      </div>
    </div>
    <div class="mt-5 space-y-2 overflow-y-auto h-[calc(100vh-185px)] py-2">
      <div class="pr-3 flex flex-col justify-start gap-2">
        <sidebarMainMenuButton :pathName ="'/'" :name="'Get Started'" :subMenu="false">
          <svgHomeIcon fill="#8B8F9A" width="16" height="16" />
        </sidebarMainMenuButton>
        <sidebarMainMenuButton :pathName ="'#'" :name="'Components'" :subMenu="false">
          <svgComponentIcon fill="#8B8F9A" width="16" height="16" />
        </sidebarMainMenuButton>
        <sidebarSubmenuButton :pathName ="'/component/button-design'" :name="'Button'" :subMenu="true"/>
        <sidebarSubmenuButton :pathName ="'/component/accordion'" :name="'Accordion'" :subMenu="true"/>
        <sidebarSubmenuButton :pathName ="'/component/dropdown'" :name="'Dropdown'" :subMenu="true"/>
        <sidebarSubmenuButton :pathName ="'/component/floatingInput'" :name="'Floating Input'" :subMenu="true"/>
        <sidebarMainMenuButton :pathName ="'/services'" :name="'Services'" :subMenu="false">
          <svgServiceIcon fill="#8B8F9A" width="16" height="16" />
        </sidebarMainMenuButton>
        <sidebarMainMenuButton :pathName ="'/about'" :name="'About'" :subMenu="false">
          <svgIdeaIcon fill="#8B8F9A" width="16" height="16" />
        </sidebarMainMenuButton>
        <sidebarMainMenuButton :pathName ="'/contact'" :name="'Contact'" :subMenu="false">
          <svgMobileIcon fill="#8B8F9A" width="16" height="16" />
        </sidebarMainMenuButton>
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

<script setup>

  // const dropdownClass = "text-sm text-corporateGray",
  // const detailsClass = "block rounded-xl p-4",
  // const descriptionClass = "text-sm",
    
</script>

<style></style>

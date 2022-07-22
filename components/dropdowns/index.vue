<template>
  <details class="text-xl hover:bg-white hover:text-black cursor-pointer overflow-hidden transition-all duration-300 ease-linear" :class="detailsClass">
    <summary class="flex justify-between" :class="dropdownClass">
      <span :class="titleClass">
        {{ title }}
      </span>
      <button>
        <svg
          class="fill-current opacity-75 w-4 h-4 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
          />
        </svg>
      </button>
    </summary>
    <div :class="descriptionClass">{{ description }}</div>
  </details>
</template>

<script>
export default {
  props: ["detailsClass", "dropdownClass", "title", "titleClass",  "description", "descriptionClass"],
};
</script>

<style></style>

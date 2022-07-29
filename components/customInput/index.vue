<template>
  <div class="relative transition-all ease-in-out" :class="inputWidth">
    <input 
      :id="inputId"
      :type="inputType" 
      :placeholder="inputPlaceholder"
      v-on:input="updateValue($event.target.value)" 
      class="customInput peer " 
      autocomplete="off"
      readonly onfocus="this.removeAttribute('readonly');">
    <label :for="inputId" class="customLabel">{{inputLabel}}</label>
  </div>
</template>

<script setup>

  const props = defineProps({
    modelValue: [String, Number],
    id: { type: String,}, 
    type: { type: String,},
    placeholder: { type: String,},
    labelName: {type: String}, 
    width: {type: Boolean}
  })
  const inputPlaceholder = ref(props.placeholder);
    const inputLabel = ref(props.labelName);
    const inputId = ref(props.id);
    const inputType = ref(props.type);
    const input = ref(props.modelValue);
    const inputWidth = ref(props.width);
    const emit = defineEmits(['update:modelValue'])

  function updateValue(value) {
    emit('update:modelValue', value)
  }
  watch(
    () => props.type,
    () => {
      if (props.type === "password") {
        inputType.value = "password";
      }
      if (props.type === "email") {
        inputType.value = "email";
      }
      if (props.type === "text") {
        inputType.value = "text";
      }
    }
  );
</script>

<style>

</style>
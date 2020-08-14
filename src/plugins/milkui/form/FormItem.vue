<template>
  <div class="milk-form-item" :id="`form-item-${name}`">
    <slot></slot>
    <div class="milk-form-item__error" data-cy="form-error"></div>
  </div>
</template>
<script>
export default {
  name: "milk-form-item",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang='scss'>
</style>

<template>
  <button
    class="milk-button"
    :class="`milk-button--${type} milk-button--${size} milk-button--${color}`"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="inner">
      <slot></slot>
    </div>
    <div class="diagonal"></div>
  </button>
</template>
<script>
export default {
  name: "milk-button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "secondary"
    },
    size: {
      type: String,
      default: "normal"
    },
    color: {
      type: String,
      default: "normal",
      validator: function(value) {
        // The value must match one of these strings
        return ["normal", "error", "success", "warning"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style src="./Button.scss" lang="scss">
</style>

<template>
  <div class="milk-radio" :class="disabled ? 'milk-radio--disabled' : ''">
    <input type="radio"
      :id="id"
      :checked="checked"
      :disabled="disabled"
      :name="name"
      @click="handleClick"
      @change="handleChange" />
    <label :for="id">
      <span class="line"></span>
      <span class="label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'milk-radio',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
    },
    name: {
      type: String
    },
    id: [String, Number],
  },
  data(){
    return {}
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    handleChange(evt) {
      this.$emit('change', evt);
    },
  },
}
</script>
<style src="./Radio.scss" lang="scss">
</style>

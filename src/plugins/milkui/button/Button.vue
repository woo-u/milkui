<template>
  <button class="milk-button" :disabled="disabled" @click="handleClick">
    <div class="inner"><slot></slot></div>
    <div class="diagonal"></div>
  </button>
</template>
<script>
export default {
  name: 'milk-button',
  props: {
    disabled: {
			type: Boolean,
			default: false
		},
  },
  data(){
    return {}
  },
  methods: {
    handleClick(evt){
      this.$emit('click', evt)
    }
  }
}
</script>
<style src="./Button.scss" lang="scss">
</style>

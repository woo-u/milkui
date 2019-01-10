<template>
  <div class="button-wrap" @click="handleClick">
    <button type="button" class="milk-button" :disabled="disabled">
      <div class="inner">Default Button</div>
      <div class="diagonal"></div>
    </button>
  </div>
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
  }
}
</script>
<style src="./Button.scss" lang="scss">
</style>

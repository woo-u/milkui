<template>
  <label :for="id" class="milk-checkbox" :class="type === 'indeterminate' ? 'milk-checkbox--indeterminate' : ''">
    <input type="checkbox"
      :id="id"
      v-model="selfModel"
      @click="handleClick"
      @change="handleChange"
      :disabled="disabled"/>
    <span class="line"></span>
    <span class="label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'milk-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
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
    id: [String, Number],
    type: {
      type: String,
      default: 'normal'
    }
  },
  components: {

  },
  data () {
    return {
      selfModel: false,
    }
  },
  computed: {

  },

  methods: {
    handleClick(evt){
      this.$emit('click', evt)
    },
    handleChange(evt){
      this.$emit('change', this.selfModel, evt)
    }
  },

  mounted(){
    this.selfModel = this.checked
  },

  watch: {
    checked: function(val) {
      this.selfModel = val
    }
  }

}
</script>
<style src="./Checkbox.scss" lang="scss">
</style>
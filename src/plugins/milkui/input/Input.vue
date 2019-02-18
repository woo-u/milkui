<template>
  <div
    :style="{width: width+'px'}"
    :class="`milk-input milk-input--${valid ? 'valid' : 'invalid'} ${disabled ? 'milk-input--disabled': ''}`">
    <label v-on:mouseover="isHover = true" v-on:mouseleave="isHover = false">
      <span class="milk-input__label mt-font--caption20 mt--neutrals-dark-gray-02">{{label}}</span>
      <input
        ref="input"
        v-if="type !== 'textarea'"
        :value="selfModel"
        @keyup="handleInputChange"
        @focus="handleInputFocus"
        @click="handleInputClick"
        :name="name" :id="name"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :style="{width: width+'px'}"
        class="milk-font--body10"/>
      <textarea
        v-if="type === 'textarea'"
        :style="{width: width+'px'}"
        @focus="resizeTextarea"
        @keyup="resizeTextarea"
        class="milk-font--body10"
        :value="selfModel"></textarea>
      <span
        v-if="!valid"
        :style="{width: width+'px'}"
        class="milk-input__invalid-msg mt--bg--error milk--strawberry milk-font--caption10">
        Lorem ipsum dolor sit amet, consectetur
      </span>
      <span
        :style="{width: width+'px'}"
        class="milk-input__caption milk-font--caption10 milk--dark-gray">{{caption}}</span>
      <i 
        v-if="clearble && selfModel.length > 0" 
        @click="handleClickClear" 
        :class="`mk-closed`"
        :style="clearbleStyle" />
      <i 
        v-if="icon" 
        @click="handleClickIcon"
        :class="`milk-input__icon mk-${icon}`"
        :style="{top: label ? '30px' : '11px'}"/>
      
    </label>
  </div>
</template>
<script>
export default {
  name: 'milk-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ['text', 'textarea', 'date', 'datetime-local', 'email', 'file', 'hidden', 'month', 'number', 'password'].indexOf(value) !== -1
      },
      default: 'text'
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String
    },
    width: {
      type: Number,
      default: 240
    },
    valid: {
      type: Boolean,
      default: true
    },
    inValidMsg: {
      type: String,
      default: 'not valid'
    },
    clearble: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
    },

  },
  inject: {
    selectOption: {
      type: Object,
      default: function(){
        return {
          focusable: true
        }
      }
    }
  },
  data(){
    return {
      selfModel: '',
      isHover: false,
    }
  },
  computed: {
    clearbleStyle(){
      let style = {top: this.label ? '30px' : '11px', right: '5px'}
      if(this.icon) style.right = '29px'
      return style
    }
  },
  methods: {
    handleClickClear(evt){
      this.selfModel = ''
      this.$emit('change', '', evt)
    },
    handleInputChange(evt){
      this.selfModel = evt.target.value
      this.$emit('update:value', evt.target.value)
      this.$emit('change', evt.target.value, evt)
    },
    handleClickIcon(evt){
      this.$emit('clickIcon', evt)
    },
    handleInputClick(evt){
      this.$emit('click', evt)
    },
    handleInputFocus(evt){
      if(!this.selectOption.focusable) evt.target.blur()
    },
    resizeTextarea(evt){
      this.$nextTick(function() {
        let currentTextarea = evt.target
        currentTextarea.style.height = '';
        currentTextarea.style.height = currentTextarea.scrollHeight + 2 + 'px'
      })
    }
  },
  mounted() {
    this.selfModel = this.value
  },
  watch: {
    value: function(val){
      this.selfModel = val
      this.$emit('update:value', val)
    }
  }
}
</script>
<style lang='scss' src="./Input.scss">

</style>

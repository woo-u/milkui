<template>
  <div
    :id="id"
    class="milk-select"
    :class="isDropdown ? 'milk-select--open' : ''"
    :style="{width: width+'px'}">
    <milk-input
      @click="handleClickIcon"
      :value.sync="selectedItem.value" :label="label"
      name="icon" :placeholder="placeholder" :disabled="disabled"  icon="chevron-down" :clearble="clearble"/>
    
  </div>
</template>

<script>
import uuidv4 from 'uuid/v4'
import MilkDropbox from '../dropbox'

export default {
  name: 'milk-select',
  provide() {
    const selectOption = {}
    Object.defineProperty(selectOption, 'focusable', {
       enumerable: true,
       get: () => this.focusable,
    })
    return {selectOption}
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select'
    },
    label: {
      type: String,
    },
    options: {
      type: Array,
      default: function(){ return [] }
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
    autoFilter: {
      type: Boolean,
      default: false
    }
  },
  components: {

  },
  data () {
    return {
      selectedItem: {label: '', value: ''},
      isDropdown: false,
      id: null,
    }
  },
  computed: {
    optionStyles(){
      let styles = {width: this.width+'px', top: '48px'}
      if(this.label) styles.top = '69px'
      return styles
    },
    focusable(){
      let focusable = false
      if(this.autoFilter) focusable = true
      return focusable
    },
    filteredOptions(){
      if(!this.autoFilter) return this.options
      let options = this.options.filter(option => {
        if(['string', 'number'].includes(typeof option)){
          return option.indexOf(this.selectedItem.value) !== -1
        }else{
          return option.label.indexOf(this.selectedItem.value) !== -1 || option.value.indexOf(this.selectedItem.value) !== -1
        }
      })
      return options
    }
  },

  methods: {
    handleClickIcon(event){
      MilkDropbox.toggle()
      this.isDropdown = !this.isDropdown
    },
    getValueOfItem(item){
      return ['string', 'number'].includes(typeof item) ? item : item.value
    },
    getLabelOfItem(item){
      return ['string', 'number'].includes(typeof item) ? item : item.label
    },
    callbackHandleClick(item){
      this.selectedItem = item
      this.isDropdown = false
    }
  },

  created(){
    this.id = uuidv4()
    
  },

  mounted(){
    let that = this
    let me = document.getElementById(this.id)
    let meRect = me.getBoundingClientRect()
    MilkDropbox.create({
      items: that.filteredOptions, 
      id: `dropbox-${that.id}`,
      top: meRect.top + 47 ,
      left: meRect.left,
      width: me.offsetWidth,
      callbackHandleClick: that.callbackHandleClick,
    })
    //MilkDropbox.open()
  },

  beforeDestroy(){
    MilkDropbox.destroy()
  }

}
</script>

<style src="./Select.scss" lang="scss">
</style>
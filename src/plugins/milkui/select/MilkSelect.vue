<template>
  <div
    :id="id"
    class="milk-select"
    :class="isDropdown ? 'milk-select--open' : ''"
    :style="{width: width+'px'}">
    <milk-input
      @click="handleClickIcon"
      :value.sync="selectedValue" :label="label"
      name="icon" :placeholder="placeholder" :disabled="disabled"  icon="chevron-down" :clearble="clearble"/>
    <div class="milk-select__multiple" v-if="multiple">
      <span class="milk-select__multiple-option" v-for="(item, index) in multipleSelectedValues" :key="'multiple'+index">{{getLabelFromValue(item)}}</span>
    </div>
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
    multiple: {
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
      selectedValue: '',
      isDropdown: false,
      id: null,
      milkDropbox: new MilkDropbox(),
      multipleSelectedValues: []
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
          return option.indexOf(this.selectedValue) !== -1
        }else{
          return option.label.indexOf(this.selectedValue) !== -1 || option.value.indexOf(this.selectedValue) !== -1
        }
      })
      return options
    }
  },

  methods: {
    handleClickIcon(event){
      this.milkDropbox.toggle()
      this.isDropdown = this.milkDropbox.getVisible()
    },
    getValueOfItem(item){
      return ['string', 'number'].includes(typeof item) ? item : item.value
    },
    getLabelOfItem(item){
      return ['string', 'number'].includes(typeof item) ? item : item.label
    },
    getLabelFromValue(value){
      let fileterdOption = this.options.find(option => option.value === value)
      return fileterdOption ? fileterdOption.label : ''
    },
    callbackHandleClick(item){
      this.selectedValue = item.length === 0 ? '' : item[0]
      this.isDropdown = this.milkDropbox.getVisible()
      if(this.multiple) this.multipleSelectedValues = this.milkDropbox.getValues()
    },
    getScreenCordinates(obj) {
      let p = {};
      p.x = obj.offsetLeft;
      p.y = obj.offsetTop;
      while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
        if (obj == document.getElementsByTagName("body")[0]) {
          break;
        }
        else {
          obj = obj.offsetParent;
        }
      }
      return p;
    }
  },

  created(){
    this.id = uuidv4()
    
  },

  mounted(){
    let that = this
    let me = document.getElementById(this.id)
    let cordinates = this.getScreenCordinates(me)
    this.milkDropbox.create({
      items: that.filteredOptions, 
      id: `dropbox-${that.id}`,
      top: cordinates.y + 47 ,
      left: cordinates.x,
      width: me.offsetWidth,
      callbackHandleClick: that.callbackHandleClick,
      multiple: that.multiple
    })
    //MilkDropbox.open()
  },

  beforeDestroy(){
    this.milkDropbox.destroy()
  }

}
</script>

<style src="./Select.scss" lang="scss">
</style>
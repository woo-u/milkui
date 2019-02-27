<template>
  <div
    :id="id"
    v-on:mouseover="isHover = true"
    v-on:mouseleave="isHover = false"
    class="milk-select"
    :class="[isDropdown ? 'milk-select--open' : '', multiple ? 'milk-select--multiple':'', isHover ? 'milk-select--hover': '']"
    :style="{width: width+'px'}">
    <milk-input
      @click="handleClickIcon"
      @clear="handleClearInput"
      @change="handleChangeInput"
      :value.sync="Array.isArray(selectedValue) ? selectedValue[0] : selectedValue" :label="label"
      v-if="multipleSelectedValues.length === 0"
      name="icon" :placeholder="placeholder" :disabled="disabled"  icon="chevron-down" :clearble="clearble"/>
    <div class="milk-select__multiple milk-font--body10" v-if="multiple && multipleSelectedValues.length > 0" :style="{width: width+'px'}">
      <span class="milk-select__multiple-option milk--bg--light-gray-03" v-for="(item, index) in multipleSelectedValues" :key="'multiple'+index">
        {{getLabelFromValue(item)}} 
        <i @click="handleClickRemoveOption(item)" class="mk-closed" />
      </span>
      <i @click="handleClickIcon" class="mk-chevron-down" />
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
      multipleSelectedValues: [],
      isHover: false,
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
    handleClearInput(){
      this.milkDropbox.clear()
    },
    handleChangeInput(value){
      if(!Array.isArray(value)) {
        this.selectedValue = this.milkDropbox.setValue(value)
        if(this.focusable) this.milkDropbox.setItems(this.filteredOptions)
      }
      
    },
    handleClickRemoveOption(value){
      this.selectedValue = this.milkDropbox.removeValue(value)
      this.repositionDropbox()
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
      if(this.multiple) {
        this.multipleSelectedValues = this.milkDropbox.getValues()
        this.repositionDropbox()
      }
    },
    getScreenCordinates(obj) {
      let p = {};
      if(!obj) return {x:0, y:0}
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
    },

    repositionDropbox(){
      this.$nextTick(function() {
        let me = document.getElementById(this.id)
        let cordinates = this.getScreenCordinates(me)
        let stickTop = me.offsetHeight
        this.milkDropbox.updatePosition(cordinates.y + stickTop, cordinates.x)
      });
    },

    debounce(func){
      var timer;
      return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,100,event);
      };
    }
  },

  created(){
    this.id = uuidv4()
    
  },

  mounted(){
    let that = this
    let me = document.getElementById(this.id)
    this.milkDropbox.create({
      items: that.filteredOptions, 
      id: `dropbox-${that.id}`,
      top: 0,
      left: 0,
      width: me.offsetWidth,
      callbackHandleClick: that.callbackHandleClick,
      multiple: that.multiple
    })
    this.repositionDropbox()
    //MilkDropbox.open()
    window.addEventListener("resize", that.debounce(function(e){
      that.repositionDropbox()
    }));

  },

  watch: {
    selectedValue: function(val){
      this.$emit('change', val)
    }
  },

  beforeDestroy(){
    let that = this
    this.milkDropbox.destroy()
    window.removeEventListener("resize", that.debounce(function(e){
      that.repositionDropbox()
    }))
  }

}
</script>

<style src="./Select.scss" lang="scss">
</style>
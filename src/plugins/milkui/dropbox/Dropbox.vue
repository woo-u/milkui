<template>
  <div class="milk-dropbox" :class="visible ? 'milk-dropbox--open': ''" :id="id" :style="{top:top+'px', left:left+'px', width: width+'px'}">
    <ul
      class="milk-dropbox__options">
      <li
        v-for="(item, index) in items" :key="index"
        class="milk-font--body10 milk--black"
        @click="handleClickOption(item)"
        :class="{'selected': getValueOfItem(item) === selectedValue}">
        {{getLabelOfItem(item)}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'milk-dropbox',
  props: {
    id: {
      type: String
    },
    items: {
      type: Array
    },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 300
    },
    callbackHandleClick: {
      type: Function
    }
  },
  data(){
    return {
      selectedValue: '',
      visible: false
    }
  },

  methods: {
    getValueOfItem(item){
      return ['string', 'number'].includes(typeof item) ? item : item.value
    },
    getLabelOfItem(item){
      return ['string', 'number'].includes(typeof item) ? item : item.label
    },
    handleClickOption(targetItem){
      console.log(targetItem)
      this.selectedValue = this.getValueOfItem(targetItem)
      this.visible = false
      this.callbackHandleClick(targetItem)
    }
  }
}
</script>
<style src="./Dropbox.scss" lang="scss">
</style>
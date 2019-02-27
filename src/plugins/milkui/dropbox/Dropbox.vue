<template>
  <div class="milk-dropbox" :class="visible ? 'milk-dropbox--open': ''" :id="id" :style="{top:top+'px', left:left+'px', width: width+'px'}">
    <ul
      class="milk-dropbox__options">
      <li
        v-for="(item, index) in items" :key="index"
        class="milk-font--body10 milk--black"
        @click="handleClickOption(item)"
        :class="{'selected': selectedValue.includes(getValueOfItem(item))}">
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
      selectedValue: [],
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
      const targetValue = this.getValueOfItem(targetItem)
      if(!this.multiple){
        this.selectedValue = []
        this.visible = false
      }
      this.selectedValue = this.addOrRemove(this.selectedValue, targetValue)
      this.callbackHandleClick(this.selectedValue)
    },

    addOrRemove(array, value) {
      let index = array.indexOf(value);
      if (index === -1) {
          array.push(value);
      } else {
          array.splice(index, 1);
      }
      return array
    }
  }
}
</script>
<style src="./Dropbox.scss" lang="scss">
</style>
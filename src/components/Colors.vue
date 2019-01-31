<template>
  <div id="content" class="milk-color">
    <h2 class="milk-font--title20">Colors</h2>
    <h3 class="milk-font--title10">Main color</h3>
    <color-box class="color-boxes" :colors="primaryColors" />
    <h3 class="milk-font--title10">Secondary colors</h3>
    <color-box class="color-boxes" :colors="secondaryColors" />
    <h3 class="milk-font--title10">Neutral colors</h3>
    <color-box class="color-boxes" :colors="neutralColors" />
  </div>
</template>
<script>
import ColorBox from './ColorBox.vue'
export default {
  name: 'colors',
  components: {
    ColorBox
  },
  props: {},
  data(){
    return {
      primaryColors: [
				{ 'name': 'Milk Chocolate', 'color':'primary', 'hex': '#126AFB', 'usage': 'Primary buttons, links, active', 'textColor': 'white'},
      ],
      secondaryColors: [
        { 'name': 'Milk Melon', 'color': 'melon', 'hex': '#25CEA5', 'usage': 'Success', 'textColor': 'white'},
        { 'name': 'Milk Strawberry', 'color': 'strawberry', 'hex': '#F96580', 'usage': 'Error', 'textColor': 'white'},
        { 'name': 'Milk Banana', 'color': 'banana', 'hex': '#FCDC6B', 'usage': 'Warning', 'textColor': 'dark-gray'},
      ],
      neutralColors: [
        { 'name': 'Black', 'color': 'black', 'hex': '#303133', 'usage': 'Text', 'textColor': 'white'},
        { 'name': 'Dark gray', 'color': 'dark-gray', 'hex': '#606266', 'usage': 'Secondary text', 'textColor': 'white'},
        { 'name': 'Gray', 'color': 'gray', 'hex': '#909399', 'usage': 'Caption', 'textColor': 'white'},
        { 'name': 'Light gray 01', 'color': 'light-gray-01', 'hex': '#DCDFE6', 'usage': 'Border', 'textColor': 'dark-gray'},
        { 'name': 'Light gray 02', 'color': 'light-gray-02', 'hex': '#EBECF0', 'usage': 'Disabled', 'textColor': 'dark-gray'},
        { 'name': 'Light gray 03', 'color': 'light-gray-03', 'hex': '#F4F5F7', 'usage': 'Background', 'textColor': 'dark-gray'},
        { 'name': 'Light gray 04', 'color': 'light-gray-04', 'hex': '#FAFBFC', 'usage': 'Light background', 'textColor': 'dark-gray', 'borderColor': 'light-gray-01'},
        { 'name': 'White', 'color': 'white', 'hex': '#ffffff', 'usage': 'Background', 'textColor': 'dark-gray', 'borderColor': 'light-gray-01'},
      ],
    }
  }
}
</script>
<style lang='scss'>
.color-boxes {
  overflow: hidden;
}
</style>

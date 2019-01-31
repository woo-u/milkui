<template>
  <div>
    <div class="milk-color-box" v-for="color in colors" :key="color.name + color.hex" >
      <div class="milk-color-box__inner" :class="`milk--${color.textColor} milk--bg--${color.color} ${color.borderColor ? 'milk--border': ''} milk--border--${color.borderColor}`">
        <div class="milk-color-box__name">{{color.name}}</div>
        <div class="milk-color-box__hex">{{color.hex}}</div>
      </div>
      <div class="milk-color-box__usage">{{color.usage}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'color-box',
  props: {
    colors: {
      type: Array,
      default: function(){
        return []
      }
    }
  },
  data(){
    return {}
  }
}
</script>
<style lang='scss'>
.milk-color-box {
  width: 150px;
  float: left;
  margin-right: 30px;
  &__inner{
    width: 150px;
    height: 150px;
    border-radius: 8px;
    padding: 14px;
    color: #fff;
    font-size: 14px;
  }
  &__name {
    font-weight: bold;
    margin-bottom: .8em;
  }
  &__usage {
    width: 150px;
    font-size: 14px;
    color: #909399;
    padding-top: 17px;
    line-height: 1.43;
    letter-spacing: normal;
  }
}
</style>

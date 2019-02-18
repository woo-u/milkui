<template>
  <div id="content" class="milk-select">
    <h2 class="milk-font--title20">Select</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Single select-->
      <h3 class="milk-font--title10">Single select</h3>
      <milk-select name="default-select" :options="options"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selects',
  props: {},
  data(){
    return {
      nav: 'code',
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        }
      ],
    }
  }
}
</script>
<style lang='scss'>

</style>

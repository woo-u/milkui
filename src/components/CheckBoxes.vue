<template>
  <div id="content" class="milk-checkboxes">
    <h2 class="milk-font--title20">Checkboxes</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>

    <div v-if="nav === 'code'">
      <!--Basic-->
      <h3 class="milk-font--title10">Basic</h3>
      <div class="checkbox-box milk--border--light-gray-01">
        <milk-checkbox id="item-0" label="Checked Item" v-model="checked1"  />
        <milk-checkbox id="item-1" label="Unchecked Item" v-model="checked2"  />
      </div>
      <app-code-box :code="basicCode" />
    </div>
  </div>
</template>
<script>
import CodeBox from './CodeBox'
export default {
  name: 'checkboxes',
  components: {
    AppCodeBox: CodeBox
  },
  props: {},
  data(){
    return {
      nav: 'code',
      checked1: true,
      checked2: false,
      basicCode: `<template>
  <div>
    <milk-checkbox id="item-0" label="Checked Item" v-model="checked1"  />
    <milk-checkbox id="item-1" label="Unchecked Item" v-model="checked2"  />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
<\/script>`,
    }
  }
}
</script>
<style lang='scss'>
#content.milk-checkboxes{

  .checkbox-box {
    padding-top: 85px;
    padding-bottom: 85px;
    text-align: center;
    border-width: 1px;
    border-style: solid;
  }

}
</style>

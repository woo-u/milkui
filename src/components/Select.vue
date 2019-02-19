<template>
  <div id="content" class="milk-select-page">
    <h2 class="milk-font--title20">Select</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Single select-->
      <h3 class="milk-font--title10">Single select</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-select name="default-select" :options="options"/>
      </div>
      <app-code-box :code="singleCode" />

      <!--Clearable single select-->
      <h3 class="milk-font--title10">Clearable single select</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-select name="default-select" :options="options" clearble/>
      </div>
      <app-code-box :code="clearbleCode" />

      <!--Disabled select-->
      <h3 class="milk-font--title10">Disabled select</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-select name="default-select" :options="options" disabled/>
      </div>
      <app-code-box :code="clearbleCode" />
    </div>
  </div>
</template>
<script>
import CodeBox from './CodeBox'

export default {
  name: 'select-page',
  components: {
    AppCodeBox: CodeBox
  },
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
      singleCode: `<template>
  <div>
    <milk-select name="default-select" :options="options"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
      ]
      };
    }
  };
<\/script>`,
      clearbleCode: `<template>
  <div>
    <milk-select name="default-select" :options="options" clearble/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
      ]
      };
    }
  };
<\/script>`,
    }
  }
}
</script>
<style lang='scss'>

</style>

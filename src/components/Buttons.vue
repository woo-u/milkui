<template>
  <div id="content" class="milk-buttons">
    <h2 class="milk-font--title20">Buttons</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Primary button-->
      <h3 class="milk-font--title10">Primary button</h3>
      <div class="button-box milk--border--light-gray-01">
        <milk-button @click="handleClick" type="primary">Primary Button</milk-button>
        <milk-button type="primary" disabled @click="handleClick">Primary Button</milk-button>
      </div>
      <app-code-box :code="primaryCode" />

      <!--Secondary button-->
      <h3 class="milk-font--title10">Secondary button</h3>
      <div class="button-box milk--border--light-gray-01">
        <milk-button @click="handleClick" type="secondary">Secondary button</milk-button>
        <milk-button disabled @click="handleClick">Secondary button</milk-button>
      </div>
      <app-code-box :code="secondaryCode" />

      <!--Small primary button-->
      <h3 class="milk-font--title10">Small primary button</h3>
      <div class="button-box milk--border--light-gray-01">
        <milk-button @click="handleClick" type="primary" size="small">primary button</milk-button>
        <milk-button type="primary" disabled @click="handleClick" size="small">primary button</milk-button>
      </div>
      <app-code-box :code="primarySamllCode" />
      
      <!--Small secondary button-->
      <h3 class="milk-font--title10">Small secondary button</h3>
      <div class="button-box milk--border--light-gray-01">
        <milk-button @click="handleClick" type="secondary" size="small">secondary button</milk-button>
        <milk-button type="secondary" disabled @click="handleClick" size="small">secondary button</milk-button>
      </div>
      <app-code-box :code="secondarySamllCode" />

      <!--Subtle button-->
      <h3 class="milk-font--title10">Subtle button</h3>
      <div class="button-box milk--border--light-gray-01">
        <milk-button @click="handleClick" type="subtle">Subtle</milk-button>
        <milk-button type="subtle" disabled @click="handleClick">Subtle</milk-button>
      </div>
      <app-code-box :code="subtleCode" />
    </div>
    

    <div v-if="nav === 'style'">style
      <milk-button @click="handleClick">Default Button</milk-button>
      <milk-button disabled @click="handleClick">Milk Button</milk-button>
    </div>
  </div>
</template>

<script>
import CodeBox from './ButtonsCodeBox'
export default {
  name: 'buttons',
  components: {
    AppCodeBox: CodeBox
  },
  props: {
    msg: String
  },
  data(){
    return {
      nav: 'code',
      primaryCode: `<milk-button type="primary">Primary Button</milk-button>
<milk-button type="primary" disabled>Primary Button</milk-button>`,
      secondaryCode: `<milk-button type="secondary">Secondary button</milk-button>
<milk-button type="secondary" disabled>Secondary button</milk-button>`,
      primarySamllCode: `<milk-button type="primary" size="small">primary button</milk-button>
<milk-button type="primary" size="small" disabled>primary button</milk-button>`,
      secondarySamllCode: `<milk-button type="secondary" size="small">secondary button</milk-button>
<milk-button type="secondary" disabled size="small">secondary button</milk-button>`,
      subtleCode:`<milk-button type="subtle">Subtle</milk-button>
<milk-button type="subtle" disabled>Subtle</milk-button>`
    }
  },
  methods: {
    handleClick(){
      //console.log('ddd')
    }
  }
}
</script>

<style lang='scss'>
@import '../plugins/milkui/styles/Variables';
#content.milk-buttons{
  h2 {
    margin-bottom: 33px;
  }

  nav {
    margin-bottom: 50px;
    div {
      display: inline-block;
      margin-right: 43px;
      cursor: pointer;
    }
    .active {
      color: $c-primary;
      border-bottom: 1px solid $c-primary;
    }
  }

  .button-box {
    padding-top: 85px;
    padding-bottom: 85px;
    text-align: center;
    border-width: 1px;
    border-style: solid;
  }
  .code-box {
    .header { 
      font-size: 15.4px;
      height: 58px;
      padding: 20px;
      text-align: center;
      border-top: 0;
    }
    .content { border-top: 0; padding: 24px 24px 40px;}
  }
}
</style>

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
    

    <div v-if="nav === 'style'" class="nav-style">
      <h3 class="milk-font--title10">Colors</h3>
      <div>
        <img :src="stylePrimary" />
        <div class="style-box">
          <ul>
            <li><strong>Default</strong></li>
            <li>Box-fill: #87634D</li>
            <li>Text color: #FFFFFF</li>
          </ul>
          <ul>
            <li><strong>Hover</strong></li>
            <li>Box-fill: #8F6D59</li>
            <li>Box-border: #FFFFFF</li>
            <li>Text color: #FFFFFF</li>
          </ul>
          <ul>
            <li><strong>Active</strong></li>
            <li>Box-fill: #76543E</li>
            <li>Text color: #FFFFFF</li>
          </ul>
          <ul>
            <li><strong>Disabled</strong></li>
            <li>Box-fill: #EBECF0</li>
            <li>Text color: #606266 opacity 30%</li>
          </ul>
        </div>
      </div>
      <div>
        <img :src="styleSecondary" />
        <div class="style-box">
          <ul>
            <li>Default</li>
            <li>Box-border: #87634D</li>
            <li>Text color: #126AFB</li>
          </ul>
          <ul>
            <li>Hover</li>
            <li>Box-border: #87634D</li>
            <li>Text color: #126AFB</li>
          </ul>
          <ul>
            <li>Active</li>
            <li>Box-fill: #87634D</li>
            <li>Text color: #FFFFFF</li>
          </ul>
          <ul>
            <li>Disabled</li>
            <li>Box-border: #606266 opacity 30%</li>
            <li>Text color: #606266 opacity 30%</li>
          </ul>
        </div>
      </div>
      <div>
        <img :src="styleSubtle" />
        <div class="style-box">
          <ul>
            <li>Default</li>
            <li>Text color: #606266</li>
          </ul>
          <ul>
            <li>Hover</li>
            <li>Text color: #87634D</li>
          </ul>
          <ul>
            <li>Active</li>
            <li>Text color: #76543E</li>
          </ul>
          <ul>
            <li>Disabled</li>
            <li>Text color: #606266 opacity 30%</li>
          </ul>
        </div>
      </div>

      <h3 class="milk-font--title10 title-sizing">Sizing</h3>
      <div>
        <img :src="styleMedium" />
        <div class="style-box">
          <ul>
            <li><strong>Medium size</strong></li>
            <li>Height: 48px</li>
            <li>Horizontal padding: 16px</li>
            <li>Vertical padding: 12px</li>
            <li>Minimum width: 100px</li>
            <li>Font size: 16px</li>
            <li>Line height: 24px </li>
            <li>border: 2px</li>
          </ul>
        </div>
      </div>
      <div>
        <img :src="styleSmall" />
        <div class="style-box">
          <ul>
            <li><strong>Small size</strong></li>
            <li>Height: 38px</li>
            <li>Horizontal padding: 12px</li>
            <li>Vertical padding: 9px</li>
            <li>Minimum width: 60px</li>
            <li>Font size: 12px</li>
            <li>Line height: 20px </li>
            <li>border: 1px</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeBox from './CodeBox'
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
<milk-button type="subtle" disabled>Subtle</milk-button>`,
      stylePrimary: require('../assets/buttons/btn-style-color-primary.svg'),
      styleSecondary: require('../assets/buttons/btn-style-color-secondary.svg'),
      styleSubtle: require('../assets/buttons/btn-style-color-subtle.svg'),
      styleMedium: require('../assets/buttons/btn-style-sizing-medium.svg'),
      styleSmall: require('../assets/buttons/btn-style-sizing-small.svg'),
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
  .button-box {
    padding-top: 85px;
    padding-bottom: 85px;
    text-align: center;
    border-width: 1px;
    border-style: solid;
  }
  
}
</style>

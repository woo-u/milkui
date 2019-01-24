<template>
  <div id="content" class="milk-buttons">
    <h2 class="milk-font--title20">Buttons</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <h3 class="milk-font--title10">Primary button</h3>
      <div class="button-box milk--border--light-gray-01">
        <milk-button @click="handleClick" type="primary">Primary Button</milk-button>
        <milk-button disabled @click="handleClick">Primary Button</milk-button>
      </div>
      <div class="code-box">
        <div @click="primaryOpen = !primaryOpen" class="header milk--bg--light-gray-04 milk--border--light-gray-01">
          <i v-if="!primaryOpen" class="mk-chevron-down" />
          <i v-if="primaryOpen" class="mk-chevron-up" />
        </div>
        <div v-if="primaryOpen" class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
          <pre v-highlightjs="primaryCode"><code class="html"></code></pre>
        </div>
      </div>
    </div>
    <div v-if="nav === 'style'">style
      <milk-button @click="handleClick">Default Button</milk-button>
      <milk-button disabled @click="handleClick">Milk Button</milk-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttons',
  props: {
    msg: String
  },
  data(){
    return {
      nav: 'code',
      primaryCode: `<milk-button @click="handleClick" type="primary">Primary Button</milk-button>
<milk-button disabled @click="handleClick">Primary Button</milk-button>`,
      primaryOpen: false,
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

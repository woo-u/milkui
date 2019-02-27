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

      <!--Multiple select-->
      <h3 class="milk-font--title10">Multiple select</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-select name="default-select" :options="options" multiple/>
      </div>
      <app-code-box :code="multipleCode" />

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

      <!--Remote search-->
      <h3 class="milk-font--title10">Remote search</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-select name="default-select" :options="aisa" autoFilter/>
      </div>
      <app-code-box :code="searchableCode" />
    </div><!-- End nav code-->

    <div v-if="nav === 'style'" class="nav-style">
      <h3 class="milk-font--title10">Colors</h3>
      <div>
        <img :src="styleColor" />
        <div class="style-box">
          <ul>
            <li><strong>Default</strong></li>
            <li>Border: #DCDFE6</li>
            <li>Text color: #909399</li>
          </ul>
          <ul>
            <li><strong>Hover</strong></li>
            <li>Box-fill: #F4F5F7</li>
            <li>Text color: #909399</li>
          </ul>
          <ul>
            <li><strong>Focus</strong></li>
            <li>Box-border: #87634D</li>
            <li>Text color: #909399</li>
            <li>Text color(drop menus): #303133</li>
            <li>Box-fill: hover(drop menus): #F4F5F7</li>
            <li>Box shadows: #000000 rgba(0, 0, 0, 15) blur 5</li>
          </ul>
          <ul>
            <li><strong>Focus-reselect</strong></li>
            <li>Box-border: #87634D</li>
            <li>Box-fill: #FFFFFF</li>
            <li>Text color: #909399</li>
            <li>Text color(drop menus): #303133</li>
            <li>Text color-selected(drop menus): #87634D</li>
          </ul>
          <ul>
            <li><strong>Selected</strong></li>
            <li>Border: #DCDFE6</li>
            <li>Text color: #303133</li>
          </ul>
          <ul>
            <li><strong>Selected(multiple select)</strong></li>
            <li>Border: #DCDFE6</li>
            <li>Text color: #303133</li>
            <li>Box-fill: #F4F5F7</li>
          </ul>
          <ul>
            <li><strong>Disabled</strong></li>
            <li>Border: #DCDFE6</li>
            <li>Text color: #909399 opacity 30%</li>
            <li>Icon color: #909399 opacity 30%</li>
            <li>Box-fill: #FAFBFC</li>
          </ul>
        </div>
      </div>
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
      aisa: [
        {
          value: 'Korea',
          label: 'Korea'
        },
        {
          value: 'Russia',
          label: 'Russia'
        },
        {
          value: 'Kazakhstan',
          label: 'Kazakhstan'
        },
        {
          value: 'Bahrain',
          label: 'Bahrain'
        },
        {
          value: 'Vietnam',
          label: 'Vietnam'
        },
        {
          value: 'Yemen',
          label: 'Yemen'
        },
        {
          value: 'India',
          label: 'India'
        },
        {
          value: 'Israel',
          label: 'Israel'
        },
        {
          value: 'Japan',
          label: 'Japan'
        },
        {
          value: 'China',
          label: 'China'
        }
      ],
      styleColor: require('../assets/select/img-select-color.svg'),
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
      multipleCode: `<template>
  <div>
    <milk-select name="default-select" :options="options" multiple/>
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
      searchableCode: `<template>
  <div>
    <milk-select name="default-select" :options="options" clearble/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        aisa: [
          {
            value: 'Korea',
            label: 'Korea'
          },
          {
            value: 'Russia',
            label: 'Russia'
          },
          {
            value: 'Kazakhstan',
            label: 'Kazakhstan'
          },
          {
            value: 'Bahrain',
            label: 'Bahrain'
          },
          {
            value: 'Vietnam',
            label: 'Vietnam'
          },
          {
            value: 'Yemen',
            label: 'Yemen'
          },
          {
            value: 'India',
            label: 'India'
          },
          {
            value: 'Israel',
            label: 'Israel'
          },
          {
            value: 'Japan',
            label: 'Japan'
          },
          {
            value: 'China',
            label: 'China'
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

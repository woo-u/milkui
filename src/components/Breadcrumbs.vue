<template>
  <div id="content" class="milk-breadcrumbs">
    <h2 class="milk-font--title20">Breadcrumbs</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <h3 class="milk-font--title10">Breadcrumbs</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-breadcrumb v-model="breadcrums" />
      </div>
      <app-code-box :code="normalCode" />
    </div>

    <div v-if="nav === 'style'" class="nav-style">
      <h3 class="milk-font--title10">Colors</h3>
      <div>
        <img :src="imgColor" />
        <div class="style-box">
          <ul>
            <li>
              <strong>Default</strong>
            </li>
            <li>Text color: #606266</li>
            <li>
              <strong>Hover</strong>
            </li>
            <li>Text color: #87634D</li>
            <li>
              <strong>After</strong>
            </li>
            <li>Text color: #76543E</li>
          </ul>
        </div>
      </div>
      <!--End Color-->
      <h3 class="milk-font--title10">Sizing</h3>
      <div>
        <img :src="imgSizing" />
        <div class="style-box">
          <ul>
            <li>Font size: 14px</li>
            <li>Horizontal padding: 4px</li>
          </ul>
        </div>
      </div>
      <!--End Sizing-->
    </div>
  </div>
</template>
<script>
import CodeBox from "./CodeBox";
export default {
  name: "breadcrumbs",
  props: {},
  components: {
    AppCodeBox: CodeBox
  },
  data() {
    /* eslint-disable */
    return {
      nav: "code",
      breadcrums: [
        { label: "Breadcrumb 1" },
        { label: "Breadcrumb 2" },
        { label: "Breadcrumb 3" }
      ],
      imgColor: require("../assets/breadcrumbs/img-breadcrumbs-color.svg"),
      imgSizing: require("../assets/breadcrumbs/img-breadcrumbs-sizing.svg"),
      normalCode: `<template>
  <div>
    <milk-breadcrumb v-model="breadcrums" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        breadcrums: [
          {'label': 'Breadcrumb 1'},
          {'label': 'Breadcrumb 2'},
          {'label': 'Breadcrumb 3'},
        ]
      };
    }
  };
<\/script>`
    };
  }
};
</script>
<style lang='scss'>
</style>

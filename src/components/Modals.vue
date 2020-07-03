<template>
  <div id="content" class="milk-modals">
    <h2 class="milk-font--title20">Modals</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Basic-->
      <h3 class="milk-font--title10">Passive</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-button type="primary" @click="basicModalVisible = true">Passive modal</milk-button>
        <milk-modal :visible.sync="basicModalVisible">
          <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </milk-modal>
      </div>
      <app-code-box :code="basicCode" />

      <!--Single button-->
      <h3 class="milk-font--title10">Single Button</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-button type="primary" @click="singleButtonModalVisible = true">Single button</milk-button>
        <milk-modal
          :visible.sync="singleButtonModalVisible"
          primaryButton="Primary button"
          @primaryCallback="handleClickPrimary"
        >
          <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </milk-modal>
      </div>
      <app-code-box :code="singleButtonModalCode" />

      <!--Two buttons-->
      <h3 class="milk-font--title10">Two buttons</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-button type="primary" @click="twoButtonsModalVisible = true">Two buttons</milk-button>
        <milk-modal
          :visible.sync="twoButtonsModalVisible"
          primaryButton="Primary button"
          secondaryButton="Secondary button"
          @primaryCallback="handleClickPrimary"
          @secondaryCallback="handleClickSecondary"
        >
          <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </milk-modal>
      </div>
      <app-code-box :code="twoButtonsModalCode" />

      <!--Error modal-->
      <h3 class="milk-font--title10">Error</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-button type="primary" @click="errorModalVisible = true">Error modal</milk-button>
        <milk-modal
          type="error"
          :visible.sync="errorModalVisible"
          primaryButton="Primary button"
          secondaryButton="Secondary button"
          @primaryCallback="handleClickPrimary"
          @secondaryCallback="handleClickSecondary"
        >
          <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </milk-modal>
      </div>
      <app-code-box :code="errorModalCode" />
    </div>
    <!-- End nav code-->

    <div v-if="nav === 'style'" class="nav-style">
      <h3 class="milk-font--title10">Colors</h3>
      <div>
        <img :src="styleColor" />
        <div class="style-box">
          <ul>
            <li>
              <strong>Basic</strong>
            </li>
            <li>Border: #87634D</li>
            <li>Background: #FAFBFC</li>
            <li>Text(heading): #303133</li>
            <li>Text(paragraph): #606266</li>
            <li>Dim: #000000 opacity: 6%</li>

            <li>
              <strong>Error</strong>
            </li>
            <li>Border: #F96580</li>
            <li>Background: #FAFBFC</li>
            <li>Text(heading): #303133</li>
            <li>Text(paragraph): #606266</li>
            <li>Dim: #000000 opacity: 6%</li>
          </ul>
        </div>
      </div>
      <h3 class="milk-font--title10">Sizing</h3>
      <div>
        <img :src="styleSizing" />
        <div class="style-box">
          <ul>
            <li>Width: Responsive</li>
            <li>Height: Auto</li>
            <li>Maximum height: 600px</li>
            <li>Border: 2px</li>
            <li>Font size(heading): 24px</li>
            <li>Font size(paragraph): 16px</li>
            <li>Line height(paragraph): 24px</li>
            <li>Button height: 64px</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CodeBox from "./CodeBox";

export default {
  name: "milk-modals",
  components: {
    AppCodeBox: CodeBox
  },
  props: {},
  data() {
    /* eslint-disable */
    return {
      nav: "code",
      styleColor: require("../assets/modals/modals-milkui-style-colors.svg"),
      styleSizing: require("../assets/modals/modals-milkui-style-sizing.svg"),
      basicModalVisible: false,
      basicCode: `<template>
  <milk-button type="primary" @click="basicModalVisible = true">Passive modal</milk-button>
  <milk-modal :visible.sync="basicModalVisible">
    <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  </milk-modal>
</template>
<script>
  export default {
    data() {
      return {
        basicModalVisible: false,
      }
    },
  };
<\/script>`,
      singleButtonModalVisible: false,
      singleButtonModalCode: `<template>
  <milk-button type="primary" @click="singleButtonModalVisible = true">Single button</milk-button>
  <milk-modal 
    :visible.sync="singleButtonModalVisible"
    primaryButton="Primary button"
    @primaryCallback="handleClickPrimary"
  >
    <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  </milk-modal>
</template>
<script>
  export default {
    data() {
      return {
        singleButtonModalVisible: false,
      }
    },
    methods: {
      handleClickPrimary() {
        this.singleButtonModalVisible = false;
      }
    }
  };
<\/script>`,
      twoButtonsModalVisible: false,
      twoButtonsModalCode: `<template>
  <milk-button type="primary" @click="twoButtonsModalVisible = true">Two buttons</milk-button>
  <milk-modal 
    :visible.sync="twoButtonsModalVisible"
    primaryButton="Primary button"
    secondaryButton="Secondary button"
    @primaryCallback="handleClickPrimary"
    @secondaryCallback="handleClickSecondary"
  >
    <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  </milk-modal>
</template>
<script>
  export default {
    data() {
      return {
        twoButtonsModalVisible: false,
      }
    },
    methods: {
      handleClickPrimary() {
        this.twoButtonsModalVisible = false;
      },
      handleClickSecondary() {
        this.twoButtonsModalVisible = false;
      }
    }
  };
<\/script>`,
      errorModalVisible: false,
      errorModalCode: `
<milk-modal
  type="error"
  :visible.sync="errorModalVisible"
  primaryButton="Primary button"
  secondaryButton="Secondary button"
>
  <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
</milk-modal>`
    };
  },

  methods: {
    handleClickPrimary() {
      this.singleButtonModalVisible = false;
      this.twoButtonsModalVisible = false;
      this.errorModalVisible = false;
    },
    handleClickSecondary() {
      this.twoButtonsModalVisible = false;
    }
  }
};
</script>
<style lang='scss'>
</style>

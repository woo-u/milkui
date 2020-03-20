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
    return {
      nav: "code",
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
<\/script>`
    };
  },

  methods: {
    handleClickPrimary() {
      this.singleButtonModalVisible = false;
      this.twoButtonsModalVisible = false;
    },
    handleClickSecondary() {
      this.twoButtonsModalVisible = false;
    }
  }
};
</script>
<style lang='scss'>
</style>

<template>
  <div id="content" class="milk-modals">
    <h2 class="milk-font--title20">Modals</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Basic-->
      <h3 class="milk-font--title10">Variations</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-button type="primary" @click="basicModalVisible = true">Passive modal</milk-button>
        <milk-modal :visible.sync="basicModalVisible">
          <div slot="header">Title</div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </milk-modal>
      </div>
      <app-code-box :code="basicCode" />
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
      basicCode: ""
    };
  }
};
</script>
<style lang='scss'>
</style>

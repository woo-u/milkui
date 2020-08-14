<template>
  <div id="content" class="milk-form-page">
    <h2 class="milk-font--title20">Form Validation</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!-- <h3 class="milk-font--title10">Single select</h3> -->
      <div class="ui-box milk--border--light-gray-01">
        <milk-form
          name="milk-form"
          @onEnter="handleSubmitCompare"
          v-model="formModel"
          ref="milk-form"
        >
          <milk-form-item name="input">
            <milk-input
              name="label-input"
              label="Field label"
              v-model="formModel.input.value"
              placeholder="Enter your details here"
            />
          </milk-form-item>

          <milk-form-item name="check">
            <milk-checkbox id="check-0" label="Checked Item" v-model="formModel.check.value" />
          </milk-form-item>

          <milk-button type="primary" @click="handleSubmitCompare">Primary Button</milk-button>
        </milk-form>
      </div>
    </div>
  </div>
</template>
<script>
import CodeBox from "./CodeBox";
export default {
  name: "form-page",
  components: {
    AppCodeBox: CodeBox,
  },
  props: {},
  data() {
    return {
      nav: "code",
      formModel: {
        input: { value: "", validations: ["required"] },
        check: { value: false, validations: ["required"] },
      },
    };
  },

  methods: {
    handleSubmitCompare() {
      if (!this.$refs["milk-form"].isPassed()) return;
    },
  },
};
</script>
<style lang='scss'>
.milk-form-page {
  .milk-form {
    width: 400px;
    margin: 0 auto;
  }
}
</style>

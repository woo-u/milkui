<template>
  <div id="content" class="milk-input-page">
    <h2 class="milk-font--title20">Input</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Label input-->
      <h3 class="milk-font--title10">Label</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input
          name="label-input"
          v-model="labelModel"
          label="Field label"
          placeholder="Enter your details heres"
        />
      </div>
      <app-code-box :code="labelCode" />
      <!--Caption input-->
      <h3 class="milk-font--title10">Caption</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input
          name="caption-input"
          v-model="captionModel"
          label="Field label"
          placeholder="Enter your details heres"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <app-code-box :code="captionCode" />
      <!--Textarea-->
      <h3 class="milk-font--title10">Textarea</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input
          name="textarea-input1"
          type="textarea"
          v-model="textareaModel1"
          placeholder="Enter your details heres"
        />
        <milk-input
          name="textarea-input2"
          type="textarea"
          rows="2"
          v-model="textareaModel2"
          placeholder="Enter your details heres"
        />
        <milk-input
          name="textarea-input2"
          type="textarea"
          rows="5"
          v-model="textareaModel3"
          placeholder="Enter your details heres"
        />
      </div>
      <app-code-box :code="textareaCode" />
      <!--Disabled input-->
      <h3 class="milk-font--title10">Disabled</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input
          name="disabled-input"
          v-model="disabledModel"
          placeholder="Enter your details heres"
          :disabled="true"
        />
      </div>
      <app-code-box :code="disabledCode" />
      <!--Icon input-->
      <h3 class="milk-font--title10">Icon</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input name="icon-input" v-model="iconModel" placeholder="Search" icon="search" />
      </div>
      <app-code-box :code="iconCode" />
      <!--Clearble input-->
      <h3 class="milk-font--title10">Clearble</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input
          name="clearble-input"
          v-model="clearbleModel"
          clearble
          placeholder="Enter your details heres"
        />
      </div>
      <app-code-box :code="clearbleCode" />
      <!--Invalid input-->
      <h3 class="milk-font--title10">Invalid</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-input
          name="invalid-input"
          v-model="invalidModel"
          :valid="valid"
          placeholder="Enter only text"
          inValidMsg="Enter only text"
        />
      </div>
      <app-code-box :code="invalidCode" />
    </div>
  </div>
</template>
<script>
import CodeBox from "./CodeBox";

export default {
  name: "text-input-page",
  props: {},
  components: {
    AppCodeBox: CodeBox
  },
  data() {
    return {
      nav: "code",
      labelModel: null,
      captionModel: null,
      textareaModel1: null,
      textareaModel2: null,
      textareaModel3: null,
      disabledModel: null,
      iconModel: null,
      clearbleModel: null,
      invalidModel: null,
      labelCode: `<template>
  <div>
    <milk-input name="label-input" v-model="labelModel" placeholder="Enter your details heres" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelModel: null
      };
    }
  };
<\/script>`,
      captionCode: `<template>
  <div>
    <milk-input
      name="caption-input"
      v-model="captionModel"
      label="Field label"
      placeholder="Enter your details heres"
      caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelModel: null
      };
    }
  };
<\/script>`,
      textareaCode: `
<milk-input
  name="textarea-input1"
  type="textarea"
  v-model="textareaModel1"
  placeholder="Enter your details heres"
/>
<milk-input
  name="textarea-input2"
  type="textarea"
  rows="2"
  v-model="textareaModel2"
  placeholder="Enter your details heres"
/>
<milk-input
  name="textarea-input3"
  type="textarea"
  rows="5"
  v-model="textareaModel3"
  placeholder="Enter your details heres"
/>`,
      disabledCode: `
<milk-input
  name="disabled-input"
  v-model="disabledModel"
  placeholder="Enter your details heres"
  :disabled="true"
/>`,
      iconCode: `
<milk-input
  name="icon-input"
  v-model="iconModel"
  placeholder="Search"
  icon="search"
/>`,
      clearbleCode: `
<milk-input name="clearble-input" v-model="clearbleModel" clearble placeholder="Enter your details heres"/>`,
      invalidCode: `<template>
  <div>
    <milk-input
      name="invalid-input"
      v-model="invalidModel"
      :valid="valid"
      placeholder="Enter only text"
      inValidMsg="Enter only text"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        clearbleModel: null
      };
    },
    computed: {
      valid() {
        if (
          this.invalidModel !== null &&
          Number.isInteger(this.invalidModel * 1)
        ) {
          return false;
        }
        return true;
      }
    }
  };
<\/script>`
    };
  },

  computed: {
    valid() {
      if (
        this.invalidModel !== null &&
        Number.isInteger(this.invalidModel * 1)
      ) {
        return false;
      }
      return true;
    }
  }
};
</script>
<style lang='scss'>
.milk-input {
  margin: 0 auto;
}
</style>

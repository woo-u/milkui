<template>
  <div id="content" class="milk-notification">
    <h2 class="milk-font--title20">Notification</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>
    <div v-if="nav === 'code'">
      <!--Toast-->
      <h3 class="milk-font--title10">Toast</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-button type="primary" @click="handleClickBasicToast">Basic toast</milk-button>
        <milk-button type="primary" @click="handleClickErrorToast" color="error">Error toast</milk-button>
        <milk-button type="primary" @click="handleClickSuccessToast" color="success">Success toast</milk-button>
        <milk-button type="primary" @click="handleClickWarningToast" color="warning">Warning toast</milk-button>
      </div>
      <app-code-box :code="toastCode" />

      <!--Inline-->
      <h3 class="milk-font--title10">Inline</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-inline-noti
          title="Notification title"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <milk-inline-noti title="Notification title" content="Subtitle text" type="error" />
        <milk-inline-noti title="Notification title" content="Subtitle text" type="success" />
        <milk-inline-noti title="Notification title" content="Subtitle text" type="warning" />
      </div>
      <app-code-box :code="inlineCode" />
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
            <li>Background: #F3EFED</li>
            <li>Text(heading): #303133</li>
            <li>Text(paragraph): #606266</li>
          </ul>
          <ul>
            <li>
              <strong>Error</strong>
            </li>
            <li>Border: #F96580</li>
            <li>Background: #FEF0F2</li>
            <li>Text(heading): #303133</li>
            <li>Text(paragraph): #606266</li>
            <li>Icon: #F96580</li>
          </ul>
          <ul>
            <li>
              <strong>Success</strong>
            </li>
            <li>Border: #25CEA5</li>
            <li>Background: #E9FAF6</li>
            <li>Text(heading): #303133</li>
            <li>Text(paragraph): #606266</li>
            <li>Icon: #25CEA5</li>
          </ul>
          <ul>
            <li>
              <strong>Warning</strong>
            </li>
            <li>Border: #FCDC6B</li>
            <li>Background: #FFFBF0</li>
            <li>Text(heading): #303133</li>
            <li>Text(paragraph): #606266</li>
            <li>Icon: #606266</li>
          </ul>
        </div>
      </div>
      <!-- End Colors -->
      <h3 class="milk-font--title10">Sizing</h3>
      <div>
        <img :src="styleSizing" />
        <div class="style-box">
          <ul>
            <li>
              <strong>Toast</strong>
            </li>
            <li>Width: 400px</li>
            <li>Height: Varies</li>
            <li>Border: 2px</li>
            <li>Font size: 16px</li>
            <li>Line height(paragraph): 24px</li>
          </ul>
          <ul>
            <li>
              <strong>Inline</strong>
            </li>
            <li>Width: Varies</li>
            <li>Height: 56px</li>
            <li>Border: 2px</li>
            <li>Font size: 16px</li>
          </ul>
        </div>
      </div>
      <!-- End Sizing -->
    </div>
  </div>
</template>
<script>
import CodeBox from "./CodeBox";
export default {
  name: "notification",
  props: {},
  components: {
    AppCodeBox: CodeBox
  },
  data() {
    /* eslint-disable */
    return {
      nav: "code",
      title: "Notification title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      styleColor: require("../assets/toast/notification-milkui-style-colors.svg"),
      styleSizing: require("../assets/toast/noti_style_sizing.svg"),
      toastCode: `<template>
  <div>
    <milk-button type="primary" @click="handleClickBasicToast">Basic toast</milk-button>
    <milk-button type="primary" @click="handleClickErrorToast" color="error">Error toast</milk-button>
    <milk-button type="primary" @click="handleClickSuccessToast" color="success">Success toast</milk-button>
    <milk-button type="primary" @click="handleClickWarningToast" color="warning">Warning toast</milk-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClickBasicToast(){
        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."});
      },
      handleClickErrorToast() {
        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", { type: "error" });
      },
      handleClickSuccessToast() {
        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", { type: "success" });
      },
      handleClickWarningToast() {
        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", { type: "warning" });
      }
    }
  };
<\/script>`,
      inlineCode: `<milk-inline-noti
  title="Notification title"
  content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
/>
<milk-inline-noti title="Notification title" content="Subtitle text" type="error" />
<milk-inline-noti title="Notification title" content="Subtitle text" type="success" />
<milk-inline-noti title="Notification title" content="Subtitle text" type="warning" />`
    };
  },

  methods: {
    handleClickBasicToast() {
      this.$milkToast(this.title, this.content);
    },
    handleClickErrorToast() {
      this.$milkToast(this.title, this.content, {
        type: "error",
        autoClose: true
      });
    },
    handleClickSuccessToast() {
      this.$milkToast(this.title, this.content, {
        type: "success",
        autoClose: true
      });
    },
    handleClickWarningToast() {
      this.$milkToast(this.title, this.content, {
        type: "warning",
        autoClose: true
      });
    }
  }
};
</script>
<style lang='scss'>
.milk-inline-noti {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4em;
}
</style>

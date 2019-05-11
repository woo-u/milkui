<template>
  <div id="content" class="milk-typography">
    <h2 class="milk-font--title20">Typography</h2>
    <p>We recommend to use the default font of each platform.</p>
    <div class="typo-box">
      <h3 class="milk-font--title10">Typeface</h3>
      <ul class="milk-font--body20">
        <li class="header milk--border--light-gray-01 milk--gray">
          <span>Font</span>
          <span>Device targeted</span>
        </li>
        <li class>
          <span>Apple SD Gothic</span>
          <span>Mac OS X (korean font)</span>
        </li>
        <li class>
          <span>Malgun Gothic</span>
          <span>Windows (korean font)</span>
        </li>
        <li class>
          <span>-apple-system (San Francisco)</span>
          <span>Safari on Mac OS, iOS</span>
        </li>
        <li class>
          <span>BlinkMacSystemFont</span>
          <span>Chrome on Mac OS X</span>
        </li>
        <li class>
          <span>Segoe UI</span>
          <span>Windows</span>
        </li>
        <li class>
          <span>Ubuntu</span>
          <span>Ubuntu</span>
        </li>
        <li class>
          <span>Cantarell</span>
          <span>GNOME</span>
        </li>
        <li class>
          <span>Helvetica Neue</span>
          <span>Mac OS versions &lt; 10.11</span>
        </li>
        <li class>
          <span>Arial</span>
          <span>Any</span>
        </li>
        <li class>
          <span>sans-serif</span>
          <span>Any</span>
        </li>
        <p class="description milk-font--body20 milk--dark-gray">
          <strong>-apple-system</strong> targets
          <strong>San Francisco</strong> in Safari (on Mac OS X and iOS), and it targets
          <strong>Neue Helvetica</strong> and
          <strong>Lucida Grande</strong>
          on older versions of Mac OS X. It properly selects between
          <strong>San Francisco Text</strong> and
          <strong>San Francisco Display</strong> depending on the text’s size.
        </p>

        <div class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
          <pre v-highlightjs="fontFamily"><code class="javascript"></code></pre>
        </div>
      </ul>
    </div>
    <div class="typo-box weight">
      <h3 class="milk-font--title10 milk--border--light-gray-01">Weight</h3>
      <p>
        <span class="milk-font--title10 milk-font--bold">Bold</span>
        <span class="milk-font--title10 milk-font--semi-bold">SemiBold</span>
        <span class="milk-font--title10">Regular</span>
      </p>
      <div class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
        <pre v-highlightjs="fontWeight"><code class="html"></code></pre>
      </div>
    </div>
    <div class="typo-box scale">
      <h3 class="milk-font--title10 milk--border--light-gray-01">Scale</h3>
      <div>
        <p class="milk-font--title30">
          <span class="title">Title 30</span>
          <span class="milk-font--body20">40px</span>
        </p>
        <p class="milk-font--title20">
          <span class="title">Title 20</span>
          <span class="milk-font--body20">32px</span>
        </p>
        <p class="milk-font--title10">
          <span class="title">Title 10</span>
          <span class="milk-font--body20">24px</span>
        </p>
        <p class="milk-font--body20">
          <span class="title">Body 20</span>
          <span class="milk-font--body20">16px</span>
        </p>
        <p class="milk-font--body10">
          <span class="title">Body 10</span>
          <span class="milk-font--body20">14px</span>
        </p>
        <p class="milk-font--caption20">
          <span class="title">Caption 20</span>
          <span class="milk-font--body20">12px</span>
        </p>
        <p class="milk-font--caption10">
          <span class="title">Caption 10</span>
          <span class="milk-font--body20">11px</span>
        </p>
      </div>
      <div class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
        <pre v-highlightjs="fontScale"><code class="html"></code></pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "typography",
  props: {},
  data() {
    return {
      fontFamily:
        'font-family: "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontWeight: `<span class="milk-font--bold">Bold</span>
<span class="milk-font--semi-bold">SemiBold</span>
<span>Regular</span>`,
      fontScale: `<p class="milk-font--title30">Title 30</p>
<p class="milk-font--title20">Title 20</p>
<p class="milk-font--title10">Title 10</p>
<p class="milk-font--body20">Body 20</p>
<p class="milk-font--body10">Body 10</p>
<p class="milk-font--caption20">Caption 20</p>
<p class="milk-font--caption10">Caption 10</p>
`
    };
  }
};
</script>
<style lang='scss'>
#content.milk-typography {
  h2 + p {
    margin-top: -33px;
    margin-bottom: -15px;
  }
  .typo-box {
    li {
      padding-bottom: 16px;
      span {
        width: 50%;
        display: inline-block;
      }
    }
    li.header {
      border-width: 0;
      border-bottom-width: 1px;
      margin-bottom: 24px;
    }
    p {
      margin: 0;
      margin-bottom: 48px;
    }
    .description {
      margin-top: 14px;
    }
  }
  .typo-box.weight {
    h3 {
      padding-bottom: 16px;
      border-width: 0;
      border-bottom-width: 1px;
    }
    p > span {
      display: inline-block;
      margin-right: 136px;
    }
  }
  .typo-box.scale {
    h3 {
      padding-bottom: 16px;
      border-width: 0;
      border-bottom-width: 1px;
    }
    p > span {
      display: inline-block;
      width: 400px;
    }
  }
  pre {
    padding-left: 17px;
    padding-right: 17px;
  }
}
</style>

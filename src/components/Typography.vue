<template>
  <div id="content" class="milk-typography">
    <h2 class="milk-font--title20">Typography</h2>
    <div class="typo-box">
      <h3 class="milk-font--title10">Typeface</h3>
      <div class="right">
        <p class="milk-font--title30">Noto sans</p>
      </div>
    </div>
    <div class="typo-box weight">
      <h3 class="milk-font--title10">Weight</h3>
      <div class="right">
        <p class="milk-font--title30 milk-font--bold">Bold</p>
        <p class="milk-font--title30 milk-font--semi-bold">SemiBold</p>
        <p class="milk-font--title30">Regular</p>
      </div>
    </div>
    <div class="typo-box weight">
      <h3 class="milk-font--title10">Scale</h3>
      <div class="right">
        <p class="milk-font--title30"><span class="title">Title 30</span> <span class="milk-font--body20">40px</span></p>
        <p class="milk-font--title20"><span class="title">Title 20</span> <span class="milk-font--body20">32px</span></p>
        <p class="milk-font--title10"><span class="title">Title 10</span> <span class="milk-font--body20">24px</span></p>
        <p class="milk-font--body20"><span class="title">Body 20</span> <span class="milk-font--body20">16px</span></p>
        <p class="milk-font--body10"><span class="title">Body 10</span> <span class="milk-font--body20">14px</span></p>
        <p class="milk-font--caption20"><span class="title">Caption 20</span> <span class="milk-font--body20">12px</span></p>
        <p class="milk-font--caption10"><span class="title">Caption 10</span> <span class="milk-font--body20">11px</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'typography',
  props: {},
  data(){
    return {}
  }
}
</script>
<style lang='scss'>
#content.milk-typography {
  .typo-box {
    display: grid;
    grid-template-columns: fit-content(257px) 1fr;
    
    h3  { margin: 0; width: 257px; }
    .right {
      padding-bottom: 22px;
      margin-bottom: 69px;
    }
    p { margin: 0; margin-bottom: 48px; }
    .title {
      width: 430px;
      display: inline-block;
    }
  }
  .typo-box.weight h3 {
    height: 222px;
  }
  .typo-box .right {
    border-bottom: 1px solid #dcdfe6;

  }
}
</style>

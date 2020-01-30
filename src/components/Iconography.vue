<template>
  <div id="content" class="milk-iconography">
    <h2 class="milk-font--title20">Iconography</h2>
    <template v-for="(icon, index) in icons">
      <div class="icon-wrap" :key="'iconbox'+icon.name">
        <div class="icon-box milk--bg--light-gray-03">
          <i :class="`mk-${icon.name}`"></i>
        </div>
        <div class="icon-name milk-font--body10 milk--black">{{icon.name}}</div>
      </div>
      <div class="clearboth" v-if="(index+1) % 7 === 0" :key="'clearboth'+icon.name"></div>
    </template>
  </div>
</template>
<script>
export default {
  name: "iconography",
  props: {},
  data() {
    return {
      icons: [
        { name: "lock" },
        { name: "lock-open" },
        { name: "pen" },
        { name: "edit" },
        { name: "search" },
        { name: "bell" },
        { name: "save" },
        { name: "calendar" },
        { name: "trash" },
        { name: "filter" },
        { name: "envelope" },
        { name: "eye" },
        { name: "settings" },
        { name: "warning-triangle" },
        { name: "information-circle" },
        { name: "plus" },
        { name: "minus" },
        { name: "closed" },
        { name: "chevron-left" },
        { name: "chevron-right" },
        { name: "chevron-up" },
        { name: "chevron-down" },
        { name: "arrow-circle-up" },
        { name: "arrow-circle-down" },
        { name: "arrow-circle-right" },
        { name: "arrow-circle-left" },
        { name: "sync" },
        { name: "redo" },
        { name: "share" },
        { name: "reply" },
        { name: "sign-out" },
        { name: "sign-in" },
        { name: "cloud" },
        { name: "cloud-upload" },
        { name: "cloud-download" },
        { name: "check" },
        { name: "file" },
        { name: "sticky-note" },
        { name: "folder" },
        { name: "folder-open" },
        { name: "ellipsis-h" },
        { name: "ellipsis-v" },
        { name: "expand-arrows" },
        { name: "globe" },
        { name: "user" },
        { name: "map-marker" },
        { name: "camera" },
        { name: "image" },
        { name: "lightbulb" },
        { name: "star" },
        { name: "heart" },
        { name: "bookmark" },
        { name: "smile" },
        { name: "sprout" },
        { name: "milk-drop" },
        { name: "cow" },
        { name: "tree-broadleaf" },
        { name: "tree-needleleaf" },
        { name: "glass-milk" },
        { name: "mug-milk-hot" },
        { name: "mug-milk-cold" },
        { name: "error-circle" },
        { name: "check-circle" },
        { name: "error-circle-fill" },
        { name: "check-circle-fill" },
        { name: "warning-triangle-fill" }
      ]
    };
  }
};
</script>
<style lang='scss'>
#content.milk-iconography {
  .icon-wrap {
    width: 119px;
    float: left;
    margin-right: 24px;
    margin-bottom: 32px;
  }
  .icon-box {
    width: 119px;
    height: 119px;
    font-size: 35px;
    padding: 39px;
    text-align: center;
    color: #253138;
  }
  .icon-name {
    padding-top: 16px;
  }
  .clearboth {
    clear: both;
    width: 1px;
    height: 1px;
  }
}
</style>

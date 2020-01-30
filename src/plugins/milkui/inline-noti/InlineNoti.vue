<template>
  <div class="milk-inline-noti mt-zindex--top" :class="'milk-inline-noti--'+type" v-if="visible">
    <i v-if="type !== 'basic'" :class="`milk-inline-noti__type mk-${iconName}`" />
    <span class="milk-inline-noti__title">{{title}}</span>
    <i @click="handleClickClose" :class="`milk-inline-noti__close mk-closed`" />
    <div class="milk-inline-noti__content">{{content}}</div>
  </div>
</template>
<script>
export default {
  name: "milk-inline-noti",
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "basic"
    }
  },
  data() {
    return {
      visible: true
    };
  },

  computed: {
    iconName() {
      let icon = "basic-circle";
      if (this.type == "error") icon = "error-circle-fill";
      if (this.type == "success") icon = "check-circle-fill";
      if (this.type == "warning") icon = "warning-triangle-fill";
      return icon;
    }
  },

  methods: {
    handleClickClose() {
      this.visible = false;
    }
  }
};
</script>
<style src="./InlineNoti.scss" lang="scss">
</style>
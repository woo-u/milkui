<template>
  <transition name="slide-fade">
    <div
      :id="`milk-toast-${toastId}`"
      v-if="visibleFlag"
      class="milk-toast mt-zindex--top"
      :class="'milk-toast--'+type"
      :style="{top:mtNotiPositionTop + 'px'}"
    >
      <i v-if="type !== 'basic'" :class="`milk-toast__icon mk-${iconName}`" />
      <span class="milk-toast__title">{{title}}</span>
      <i @click="handleClickClose" :class="`milk-toast__icon mk-closed`" />
      <div class="milk-toast__content">{{content}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "milk-toast",
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
    },
    visibleFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    iconName() {
      let icon = "basic-circle";
      if (this.type == "error") icon = "error-circle";
      if (this.type == "success") icon = "success-circle";
      if (this.type == "warning") icon = "warning-circle";
      return icon;
    }
  },

  methods: {
    handleClickClose() {
      this.close();
    }
  }
};
</script>
<style src="./Toast.scss" lang="scss">
</style>
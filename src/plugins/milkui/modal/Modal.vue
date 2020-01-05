<template>
  <transition name="dialog-fade">
    <div
      class="sg-modal sg-zindex--middle"
      v-if="visible"
      @click.self="handleWrapperClick"
      :class="['sg-modal--'+size, yScroll ? 'sg-modal--yscroll' : '']"
      data-selector="sg-modal"
    >
      <div class="sg-modal__dialog">
        <div class="sg-modal__header" v-if="headerVisible || title">
          <span>{{title}}</span>
          <slot name="header"></slot>
          <button
            v-if="closeButton"
            class="sg-modal__close"
            size="small"
            width="10"
            type="subtle"
            @click="$emit('update:visible', !visible)"
          >{{typeof closeButton === 'string' ? closeButton : '닫기'}}</button>
        </div>
        <div class="sg-modal__body">
          <slot></slot>
        </div>
        <footer class="sg-modal__footer" v-if="hasSlotFooter">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "sg-modal",
  props: {
    closeButton: {
      type: [Boolean, String],
      required: false,
      default: true
    },
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    headerVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      require: false,
      default: "medium"
    },
    title: {
      type: String,
      require: false
    },
    yScroll: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      hasSlotFooter: false
    };
  },

  methods: {
    handleWrapperClick() {
      this.$emit("update:visible", false);
    },
    handleClickKeydown(event) {
      if (event.keyCode === 27) this.$emit("update:visible", false);
    },
    resetFooter() {
      let that = this;
      setTimeout(function() {
        that.hasSlotFooter = !!that.$slots["footer"];
      });
    },
    open() {
      this.$emit("open");
      document.getElementsByTagName("body")[0].classList.add("modal-opened");
    },
    close() {
      this.$emit("close");
      let modals = document.querySelectorAll(".sg-modal");
      if (modals.length === 1) {
        document
          .getElementsByTagName("body")[0]
          .classList.remove("modal-opened");
      }
    }
  },

  mounted() {
    this.resetFooter();
    this.open();
    window.addEventListener("keydown", this.handleClickKeydown);
  },

  destroyed() {
    window.removeEventListener("keydown", this.handleClickKeydown);
  },

  watch: {
    visible: function(val, oldVal) {
      this.resetFooter();
      if (!val && !!oldVal) {
        this.close();
      } else {
        this.open();
      }
    }
  }
};
</script>
<style src="./Modal.scss" lang="scss" scoped>
</style>

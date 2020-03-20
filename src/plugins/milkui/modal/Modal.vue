<template>
  <transition name="dialog-fade">
    <div
      class="milk-modal milk-zindex--middle"
      v-if="visible"
      @click.self="handleWrapperClick"
      data-selector="milk-modal"
    >
      <div class="milk-modal__dialog">
        <div class="milk-modal__header" v-if="headerVisible || title">
          <span>{{title}}</span>
          <slot name="header"></slot>
          <milk-button
            v-if="typeof closeButton === 'string'"
            class="milk-modal__close"
            width="10"
            type="subtle"
            @click="$emit('update:visible', !visible)"
          >{{closeButton}}</milk-button>
          <milk-button
            v-if="closeButton && typeof closeButton === 'boolean'"
            class="milk-modal__close"
            width="10"
            type="subtle"
            @click="$emit('update:visible', !visible)"
          >
            <i :class="`mk-closed`"></i>
          </milk-button>
        </div>
        <div class="milk-modal__body">
          <slot></slot>
        </div>
        <footer class="milk-modal__footer" v-if="primaryButton || secondaryButton">
          <button
            v-if="secondaryButton"
            class="milk-modal__secondary-button"
            @click="handleClickSecondaryCallback"
          >{{secondaryButton}}</button>
          <button
            v-if="primaryButton"
            class="milk-modal__primary-button"
            @click="handleClickPrimaryCallback"
          >{{primaryButton}}</button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "milk-modal",
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
      default: true
    },
    title: {
      type: String,
      require: false
    },
    primaryButton: {
      type: String
    },
    secondaryButton: {
      type: String
    },
    secondaryCallback: {
      type: String,
      default: function() {}
    }
  },

  data() {
    return {};
  },

  methods: {
    handleWrapperClick() {
      this.$emit("update:visible", false);
    },
    handleClickKeydown(event) {
      if (event.keyCode === 27) this.$emit("update:visible", false);
    },

    open() {
      this.$emit("open");
      document.getElementsByTagName("body")[0].classList.add("modal-opened");
    },
    close() {
      this.$emit("close");
      let modals = document.querySelectorAll(".milk-modal");
      if (modals.length === 1) {
        document
          .getElementsByTagName("body")[0]
          .classList.remove("modal-opened");
      }
    },
    handleClickPrimaryCallback() {
      this.$emit("primaryCallback");
    },
    handleClickSecondaryCallback() {
      this.$emit("secondaryCallback");
    }
  },

  mounted() {
    this.open();
    window.addEventListener("keydown", this.handleClickKeydown);
  },

  destroyed() {
    window.removeEventListener("keydown", this.handleClickKeydown);
  },

  watch: {
    visible: function(val, oldVal) {
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

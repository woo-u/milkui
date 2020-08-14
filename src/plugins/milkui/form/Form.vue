<template>
  <div class="milk-form">
    <form action="#" :id="name" v-on:submit.prevent="handleSubmit">
      <slot />
    </form>
  </div>
</template>
<script>
import ValidationForm from "./ValidationForm";
export default {
  name: "milk-form",
  model: {
    prop: "formModel",
    event: "change",
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    formModel: {
      type: Object,
    },
  },
  data() {
    return {
      validation: null,
    };
  },
  methods: {
    isPassed() {
      return this.validation.allCheck();
    },

    handleSubmit(e) {
      this.$emit("onEnter", e);
    },
  },
  mounted() {
    this.validation = new ValidationForm(this.name, this.formModel);
  },
};
</script>
<style lang='scss' src="./Form.scss">
</style>

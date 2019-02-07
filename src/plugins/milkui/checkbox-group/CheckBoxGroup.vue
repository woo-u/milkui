<template>
  <div>
    <milk-checkbox v-if="indeterminate" :label="indeterminateLabel" :type="indeterminateValue ? 'indeterminate' : 'normal'" :checked="indeterminateChecked"  />
    <milk-checkbox v-for="checkbox in groups" @change="handleChangeCheckBox" :key="checkbox.id" :id="checkbox.id" :label="checkbox.label" v-model="checkbox.value"  />
  </div>
</template>
<script>
import MilkCheckbox from '../checkbox/CheckBox.vue'
export default {
  name: 'milk-checkbox-group',
  model: {
    prop: 'groups',
    event: 'change'
  },
  props: {
    groups: {
      type: Array,
      default: function(){
        return []
      }
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    indeterminateLabel: {
      type: String,
      default: 'Check all'
    }
  },
  components: {
    MilkCheckbox
  },
  data(){
    return {
      indeterminateValue: false,
      indeterminateChecked: true
    }
  },

  methods: {
    handleChange(){
      this.$emit('change', this.groups)
      this.checkIndeterminate()
    },
    handleChangeCheckBox(){
      this.handleChange()
    },
    checkIndeterminate(){
      let findChecked = this.groups.filter(checkbox => checkbox.value)
      this.indeterminateValue = false
      this.indeterminateChecked = true
      if(0 < findChecked.length && findChecked.length < this.groups.length){
        this.indeterminateValue = true
      }
      if(findChecked.length === 0) this.indeterminateChecked = false
    }
  },

  mounted(){
    this.checkIndeterminate()
  }
}
</script>
<style lang='scss'>

</style>

<template>
  <div class="milk-breadcrumb">
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="'breadcrumb-'+index" >{{breadcrumb.label}}<i v-if="(index+1) < breadcrumbs.length" :class="`mk-chevron-right`"></i></span>
  </div>
</template>
<script>
export default {
  name: 'milk-breadcrumb',
  model: {
    prop: 'breadcrumbs',
    event: 'change'
  },
  props: {
    breadcrumbs: {
      type: Array,
    }
  },
  data(){
    return {}
  }
}
</script>
<style src="./Breadcrumb.scss" lang="scss">
</style>

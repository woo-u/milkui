<template>
  <div id="app">
    <router-view/>
    <sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import '@/plugins/milkui/styles/Style.scss'
export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" src="./components/Style.scss">
</style>
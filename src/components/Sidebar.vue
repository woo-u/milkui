<template>
	<div id="sidebar">
		<h1>
      <router-link to="/">milk ui</router-link>
    </h1>

    <!-- <h2 class="mt--neutrals-dark-gray-02">Style</h2> -->
    <div
      class="menu mt--neutrals-dark-gray-02"
      @click="openStyleMenu = !openStyleMenu">
      Style
    </div>
    <ul :class="openStyleMenu? 'on' : 'off'" :style="stylesStyle">
      <li
        v-for="item in styles" :key="item.label"><router-link :to="`/${item.route}`">{{item.label}}</router-link>
      </li>
    </ul>
    <div
      class="menu mt--neutrals-dark-gray-02"
      @click="openComponentsMenu = !openComponentsMenu"
      >
      Components
    </div>
    <ul :class="openComponentsMenu? 'on' : 'off'" :style="componentsStyle">
      <li
        v-for="item in components" :key="item.label"><router-link :to="`/${item.route}`">{{item.label}}</router-link>
      </li>

    </ul>
	</div>
</template>

<script>

export default {
	name: 'sidebar',
	props: [],
	components: {

	},
	data () {
		return {
      openStyleMenu: true,
      openComponentsMenu: true,
      styles: [
        {label: 'Logos', route: 'logos'},
        {label: 'Colors', route: 'colors'},
        {label: 'Typography', route: 'typography'},
        {label: 'Iconography', route: 'iconography'},
      ],
      components: [
        {label: 'Buttons', route: 'buttons'},
        {label: 'Notification', route: 'notification'},
        {label: 'Modals', route: 'modals'},
        {label: 'Checkbox', route: 'checkbox'},
        {label: 'Radio Button', route: 'radiobutton'},
        {label: 'Confirm', route: 'confirm'},
        //{label: 'Select', route: 'select'},
        {label: 'Text Input', route: 'input'},
      ],
		}
	},
	computed: {
    styleToggleIcon() {
      let iconName = 'chevron-up'
      if(!this.openStyleMenu) iconName = 'chevron-down'
      return iconName
    },
    componentsToggleIcon() {
      let iconName = 'chevron-up'
      if(!this.openComponentsMenu) iconName = 'chevron-down'
      return iconName
    },
    componentsStyle(){
      return {height: 49*this.components.length + 'px'}
    },
    stylesStyle(){
      return {height: 49*this.styles.length + 'px'}
    },
	},

	methods: {

  }

}
</script>
<style scoped lang="scss">
@import "../plugins/milkui/styles/Variables.scss";
h1 {
  width: 106px;
  height: 30px;
  text-indent: -10000px;
  background-image: url('../assets/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin: 24px 85px 36px 24px;
}
.menu {
  padding-left: 20px;
  font-size: 14px;
  font-weight: 600;
  color: $c-black;
}
h3 {
  padding-left: 37px;
  padding-top: 20px;
  cursor: pointer;
  position: relative;
}
ul {
  display: block;
  overflow: hidden;
  transition: height 600ms ease-out;
  .router-link-active {
    color: $c-primary;
  }
}
ul.off {
  height: 0!important;
}
li a {
  color: $c-black;
  font-size: 14px;
  padding: 16px 44px;
  display: block;
  &:hover {
    background-color: #DCDFE6;
  }
}
</style>

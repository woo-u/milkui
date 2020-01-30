<template>
  <div id="sidebar">
    <router-link to="/">
      <h1>milk ui</h1>
    </router-link>

    <router-link
      to="/home"
      class="home"
      :class="$route.name === 'home' ? 'router-link-active' : ''"
    >
      <div class="menu mt--neutrals-dark-gray-02">Getting Started</div>
    </router-link>
    <div class="menu mt--neutrals-dark-gray-02" @click="openStyleMenu = !openStyleMenu">Style</div>
    <ul :class="openStyleMenu? 'on' : 'off'" :style="stylesStyle">
      <li v-for="item in styles" :key="item.label">
        <router-link :to="`/${item.route}`">{{item.label}}</router-link>
      </li>
    </ul>
    <div
      class="menu mt--neutrals-dark-gray-02"
      @click="openComponentsMenu = !openComponentsMenu"
    >Components</div>
    <ul :class="openComponentsMenu? 'on' : 'off'" :style="componentsStyle">
      <li v-for="item in components" :key="item.label">
        <router-link :to="`/${item.route}`">{{item.label}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: [],
  components: {},
  data() {
    return {
      openStyleMenu: true,
      openComponentsMenu: true,
      styles: [
        { label: "Colors", route: "colors" },
        { label: "Typography", route: "typography" },
        { label: "Iconography", route: "iconography" }
      ],
      components: [
        { label: "Buttons", route: "buttons" },
        // {label: 'Notification', route: 'notification'},
        // {label: 'Modals', route: 'modals'},
        { label: "Checkboxes", route: "checkboxes" },
        { label: "Radio Buttons", route: "radios" },
        { label: "Breadcrumbs", route: "breadcrumbs" },
        // {label: 'Confirm', route: 'confirm'},
        { label: "Select", route: "select" },
        { label: "Text field", route: "input" },
        { label: "Notification", route: "notification" }
      ]
    };
  },
  computed: {
    styleToggleIcon() {
      let iconName = "chevron-up";
      if (!this.openStyleMenu) iconName = "chevron-down";
      return iconName;
    },
    componentsToggleIcon() {
      let iconName = "chevron-up";
      if (!this.openComponentsMenu) iconName = "chevron-down";
      return iconName;
    },
    componentsStyle() {
      return { height: 49 * this.components.length + "px" };
    },
    stylesStyle() {
      return { height: 49 * this.styles.length + "px" };
    }
  },

  methods: {}
};
</script>
<style scoped lang="scss">
@import "../plugins/milkui/styles/Variables.scss";
h1 {
  width: 106px;
  height: 30px;
  text-indent: -10000px;
  background-image: url("../assets/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin: 24px 85px 36px 24px;
}
.home {
  &.router-link-active .menu {
    border-left: 4px solid $c-primary;
    color: $c-primary;
    font-weight: bold;
  }
  .menu {
    padding: 16px 20px;
  }
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
    font-weight: bold;
    border-left: 4px solid $c-primary;
    padding-left: 40px;
  }
}
ul.off {
  height: 0 !important;
}
li a {
  color: $c-black;
  font-size: 14px;
  padding: 16px 44px;
  display: block;
  &:hover {
    background-color: #f5f3f1;
  }
}
</style>

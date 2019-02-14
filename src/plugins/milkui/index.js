
import MilkButton from './button/Button.vue'
import MilkCheckBox from './checkbox/CheckBox.vue'
import MilkCheckBoxGroup from './checkbox-group/CheckBoxGroup.vue'
import MilkRadio from './radio/Radio.vue'
import MilkBreadcrumb from './breadcrumb/Breadcrumb.vue'

const components = [
  MilkButton,
  MilkCheckBox,
  MilkCheckBoxGroup,
  MilkRadio,
  MilkBreadcrumb,
]

const MilkUI = {
  install(Vue) {
    components.map(component => {
			Vue.component(component.name, component)
		})
  }
};

export default MilkUI

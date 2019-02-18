
import MilkButton from './button/Button.vue'
import MilkCheckBox from './checkbox/CheckBox.vue'
import MilkCheckBoxGroup from './checkbox-group/CheckBoxGroup.vue'
import MilkRadio from './radio/Radio.vue'
import MilkBreadcrumb from './breadcrumb/Breadcrumb.vue'
import MilkSelect from './select/MilkSelect.vue'
import Input from './input/Input.vue'

const components = [
  MilkButton,
  MilkCheckBox,
  MilkCheckBoxGroup,
  MilkRadio,
  MilkBreadcrumb,
  MilkSelect,
  Input
]

const MilkUI = {
  install(Vue) {
    components.map(component => {
			Vue.component(component.name, component)
		})
  }
};

export default MilkUI

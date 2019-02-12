
import MilkButton from './button/Button.vue'
import MilkCheckBox from './checkbox/CheckBox.vue'
import MilkCheckBoxGroup from './checkbox-group/CheckBoxGroup.vue'
import MilkRadio from './radio/Radio.vue'

const components = [
  MilkButton,
  MilkCheckBox,
  MilkCheckBoxGroup,
  MilkRadio,
]

const MilkUI = {
  install(Vue) {
    components.map(component => {
			Vue.component(component.name, component)
		})
  }
};

export default MilkUI

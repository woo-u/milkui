
import MilkButton from './button/Button.vue'
import MilkCheckBox from './checkbox/CheckBox.vue'

const components = [
  MilkButton,
  MilkCheckBox,
]

const MilkUI = {
  install(Vue) {
    components.map(component => {
			Vue.component(component.name, component)
		})
  }
};

export default MilkUI

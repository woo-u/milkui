
import MilkButton from './button/Button.vue'

const components = [
  MilkButton,
]

const MilkUI = {
  install(Vue) {
    components.map(component => {
			Vue.component(component.name, component)
		})
  }
};

export default MilkUI

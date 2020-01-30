
import MilkButton from './button/Button.vue'
import MilkCheckBox from './checkbox/CheckBox.vue'
import MilkCheckBoxGroup from './checkbox-group/CheckBoxGroup.vue'
import MilkRadio from './radio/Radio.vue'
import MilkBreadcrumb from './breadcrumb/Breadcrumb.vue'
import MilkSelect from './select/MilkSelect.vue'
import MilkInput from './input/Input.vue'
import MilkModal from './modal/Modal.vue'
import MilkToast from './toast/'
import MilkInlineNoti from './inline-noti/InlineNoti.vue'

const components = [
  MilkButton,
  MilkCheckBox,
  MilkCheckBoxGroup,
  MilkRadio,
  MilkBreadcrumb,
  MilkSelect,
  MilkInput,
  MilkModal,
  MilkInlineNoti,
]

const MilkUI = {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
    Vue.prototype.$milkToast = MilkToast.flag
  }
};

export default MilkUI

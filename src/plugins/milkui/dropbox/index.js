import Vue from 'vue'
import Dropbox from './Dropbox.vue'

const MilkDropboxConstructor = Vue.extend(Dropbox)

class MilkDropbox {
  constructor(){
    this.instance = null
  }

  open(){
    this.instance.visible = true
  }

  getVisible(){
    if(this.instance) return this.instance.visible
  }

  getValues(){
    return this.instance.selectedValue
  }

  create(options){
    this.instance = new MilkDropboxConstructor({
      el: document.createElement('div')
    });
  
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        this.instance[prop] = options[prop]
      }
    }
    document.body.appendChild(this.instance.$el)
  }

  toggle(){
    this.instance.visible = !this.instance.visible
  }

  destroy(){
    let self = document.getElementById(this.instance.id)
    if(self) self.parentNode.removeChild(self)
  }
}

export default MilkDropbox
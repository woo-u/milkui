import Vue from 'vue'
import Dropbox from './Dropbox.vue'

const MilkDropboxConstructor = Vue.extend(Dropbox)

const createDropbox = function(options) {
  this.instance = new MilkDropboxConstructor({
    el: document.createElement('div')
  });
  console.log('createDropbox', this)

  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      this.instance[prop] = options[prop]
    }
  }

  document.body.appendChild(this.instance.$el)
}

const MilkDropbox = {
  instance: null,
  create: createDropbox,
  open: function(){
    this.instance.visible = true
  },
  toggle: function(){
    this.instance.visible = !this.instance.visible
  },
  destroy: function(){
    let self = document.getElementById(MilkDropbox.instance.id)
    if(self) self.parentNode.removeChild(self)
  }
}

export default MilkDropbox
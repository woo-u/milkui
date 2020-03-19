import Vue from 'vue'
import Toast from './Toast.vue'

const defaults = {
  title: null,
  content: '',
  type: 'basic',
  autoClose: true,
};

const MilkToastConstructor = Vue.extend(Toast)


let currentMessage
let messageQueue = []
let countQ = 0
let positionTop = 24
let positionTopGap = 24 + 120

const showNextMessage = () => {

  let instance = new MilkToastConstructor({
    el: document.createElement('div')
  });
  instance.action = ''
  instance.close = function () {
    instance.visibleFlag = false
    MilkToast.rePosition(instance.toastId)
    if (instance.onClose) instance.onClose()
    if (instance.timeOut) clearTimeout(instance.timeOut)
  }

  if (!instance.visible) {
    if (messageQueue.length > 0) {

      currentMessage = messageQueue[messageQueue.length - 1]
      if (currentMessage.options.autoClose) instance.timeOut = setTimeout(function () { instance.close() }, 3000);
      positionTop = 24 + (messageQueue.length - 1) * positionTopGap

      let options = currentMessage.options
      options.positionTop = positionTop
      options.toastId = countQ
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      document.body.appendChild(instance.$el)

      Vue.nextTick(() => {
        instance.visibleFlag = true
      });
      messageQueue[messageQueue.length - 1]['instance'] = instance
      countQ++
    }
  }

}


const MilkToast = function (options) {
  messageQueue.push({
    options: Object.assign({}, defaults, options),
  });

  showNextMessage()
}

MilkToast.rePosition = (targetId) => {
  let newMessageQue = messageQueue.filter((message) => {
    if (message.instance.toastId !== targetId) return message
  })
  messageQueue = newMessageQue
  messageQueue.map((message, index) => {
    message.instance.positionTop = 24 + index * positionTopGap
    let ele = document.getElementById(`milk-toast-${message.instance.toastId}`)
    ele.style.top = 24 + index * positionTopGap + 'px'
  })
};

MilkToast.flag = (title, content, options) => {
  return MilkToast(Object.assign({}, {
    title: title,
    content: content,
  }, options));
};

export default MilkToast

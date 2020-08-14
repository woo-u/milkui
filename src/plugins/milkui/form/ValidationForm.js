

export default class ValidationForm {
  constructor(formId, model) {
    this.formElem = document.getElementById(formId);
    this.model = model;
    let that = this;
    var inputs = this.formElem.getElementsByTagName("input");
    this.isPassed = false;
    [].forEach.call(inputs, input => {
      input.addEventListener("blur", function () {
        // this.closest('.form-item').classList.remove('error');
        const formItem = this.closest('.milk-form-item')
        const inputName = formItem.id.replace(/form-item-/g, "");
        if (!that.model[inputName] || !that.model[inputName].validations) return true;

        that.model[inputName].validations.some((validation) => {
          return !that.checkValidation(validation, inputName, that.model[inputName].value)
        })
        // if (!this.dataset.validation) return true;
        // let validations = this.dataset.validation.split(',');

      });
    });
    // TODO: remove all blur events before destroy instance
  }

  allCheck() {
    let isNotValidArr = [];
    for (let inputName in this.model) {
      if (this.model.hasOwnProperty(inputName)) {
        const validations = this.model[inputName].validations;
        if (!validations) return true;
        const isNotValid = validations.some((validation) => {
          return !this.checkValidation(validation, inputName, this.model[inputName].value)
        });
        isNotValidArr.push(isNotValid);
      }
    }
    return !isNotValidArr.some(notValid => notValid);

  }

  // clearAllInput() {
  //   this.$form.find('input[type!=hidden]').each(function (i, val) {
  //     $(val).val('')
  //   })
  // }

  // oneCheck($this) {
  //   $this.closest('.required').removeClass('error');
  //   let validations = $this.data('validation') ? $this.data('validation').split(',') : [];
  //   validations.map(validation => {
  //     this.checkValidation(validation, $this);
  //   })
  // }

  checkValidation(validation, inputName, value) {
    /* eslint-disable */
    const thisForm = window.document.getElementById("form-item-" + inputName);
    const inputErrorElem = thisForm.querySelector('.milk-form-item__error');
    try {
      if (inputErrorElem) inputErrorElem.innerHTML = '';
      if (typeof validation === 'function') {
        return validation(value, this.model);
      }
      switch (validation) {
        case 'required':
          if (!value || (typeof value === 'string' && value.trim() === '')) {
            throw new Error('필수입력 사항입니다.')
          }
          break;
        case 'email':
          var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!regex.test(thisElem.val())) {
            throw new Error('이메일 형식에 맞게 입력해주세요. 예) something@something.com')
          }
          break;
        case 'number':
          if (value && !/^[0-9]+$/.test(value)) {
            throw new Error('숫자만 입력해주세요.')
          }
          break;
        case 'english':
          let i = value.length;
          while (--i) {
            if (!/^[A-Za-z0-9]+$/.test(value[i])) {
              throw new Error('영문/숫자만 입력해주세요.')
            }
          }

          break;
        case 'phone':
          if (!/^[0-9]+$/.test(value)) {
            throw new Error('숫자만 입력해주세요.')
          } else if (!/^\d{10,11}$/.test(value)) {
            throw new Error('올바른 전화번호를 입력해주세요. \n\r ex) 01011112222')
          }
          break;
        default:

      }
      return true
    } catch (e) {
      thisForm.classList.add('error');
      if (inputErrorElem) inputErrorElem.innerHTML = e.message;
      return false
    }
  }


}
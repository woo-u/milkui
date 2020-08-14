<!--split:basic-->
- `<sc-form-item>`으로 각 `input`을 감싸주어야 합니다. 에러가 발생한 경우 해당 `form-item`에 `error`클래스가 추가되며 `div.sc-form__error`이 활성화됩니다. 
- `myForm.validations`속성에 체크할 타입이나 함수를 배열로 등록합니다.
- `input`의 경우 `blur`이벤트가 발생될때마다 해당 인풋의 validation을 체크합니다. 
- 폼을 여러개 둘 경우 `name` 속성과 `ref`속성의 이름이 겹치지 않도록 주의해주세요. 
- `this.$refs["my-form"].isPassed()`을 실행할 경우 모든 `input`에 대한 validation이 실행됩니다.
- 현재는 `input`만 지원합니다. 

```html
<template>
  <sc-form name="my-form" ref="my-form" @onEnter="handleClickSubmit"
        v-model="myForm">
    <div class="form-item">
      <label>생년월일을 입력하세요.</label>
      <input type="text" />
      <div class="input-error"></div>
      <sc-button @click="handleClickSubmit" type="primary" size="lg">확인</sc-button>
    </div>
  </sc-form>
</template>
<script>
export default {
  name: "sc-form-story",
  data(){
    const customeValidation = (value) => {
      if(value.length > 8)  throw new Error(`8자 이하로 작성하세요.`);
      return true;
    }
    return {
      myForm: {
        value: null,
        validations: ["required", "number", customeValidation]
      }
    }
  },
  methods: {
    handleClickSubmit() {
      if (this.$refs["my-form"].isPassed()) {
        console.log("submit!");
      }
    }
  }
};
</script>
```

<!--split:validation-->
### Validation type
> myForm.validations에 세팅할 수 있는 타입. validation결과는 `this.$refs["my-form"].isPassed()`를 통해 알 수 있음.

| Type      | Description                                                           |
|-----------|-----------------------------------------------------------------------|
| required  | 값이 입력되지 않으면 false. |
| ~~length~~    | (삭제됨) value.length 가 `data-length`값과 다르면 false.              |
| email     | 이메일 포맷에 맞지 않으면 false.                     |
| number    | 숫자가 아니면 false. ~~`data-min`보다 작거나 `data-max`보다 크면 false.(`data-min`/`data-max`값이 있을경우)~~
| english  | 영문자나 숫자가 아니면 false.               |
| phone    | 전화번호 형식이 아니면 false.

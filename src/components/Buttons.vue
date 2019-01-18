<template>
  <div id="content" class="buttons">
    <h2>Buttons</h2>
    <div>
      <milk-button @click="handleClick">Default Button</milk-button>
      <milk-button disabled @click="handleClick">Milk Button</milk-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleClick(){
      //console.log('ddd')
    }
  }
}
</script>

<style scoped>


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

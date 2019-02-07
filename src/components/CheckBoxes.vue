<template>
  <div id="content" class="milk-checkboxes">
    <h2 class="milk-font--title20">Checkboxes</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>

    <div v-if="nav === 'code'">
      <!--Basic-->
      <h3 class="milk-font--title10">Basic</h3>
      <div class="checkbox-box milk--border--light-gray-01">
        <milk-checkbox id="item-0" label="Checked Item" v-model="checked1"  />
        <milk-checkbox id="item-1" label="Unchecked Item" v-model="checked2"  />
      </div>
      <app-code-box :code="basicCode" />

      <!--Group-->
      <h3 class="milk-font--title10">Group</h3>
      <div class="checkbox-box milk--border--light-gray-01">
        <milk-checkbox-group v-model="checkGroups"  />
      </div>
      <app-code-box :code="groupCode" />

      <!--Indeterminate-->
      <h3 class="milk-font--title10">Indeterminate</h3>
      <div class="checkbox-box milk--border--light-gray-01">
        <milk-checkbox-group v-model="checkGroups2" indeterminate />
      </div>
      <app-code-box :code="indeterminateCode" />

      <!--Disabled-->
      <h3 class="milk-font--title10">Disabled</h3>
      <div class="checkbox-box milk--border--light-gray-01">
        <milk-checkbox id="item-diabled-0" label="Checked Item" v-model="checkedDisable1" disabled />
        <milk-checkbox id="item-diabled-1" label="Unchecked Item" v-model="checkedDisable2" disabled />
      </div>
      <app-code-box :code="disabledCode" />
    </div>
  </div>
</template>
<script>
import CodeBox from './CodeBox'
export default {
  name: 'checkboxes',
  components: {
    AppCodeBox: CodeBox
  },
  props: {},
  data(){
    /* eslint-disable */
    return {
      nav: 'code',
      checked1: true,
      checked2: false,
      checkedDisable1: true,
      checkedDisable2: false,
      checkGroups: [
        { value: true, id: 'group1-A', label:"Option A" }, 
        { value: false, id: 'group1-B', label:"Option B" }, 
        { value: false, id: 'group1-C', label:"Option C" }, 
      ],
      checkGroups2: [
        { value: true, id: 'group2-A', label:"Option A" }, 
        { value: false, id: 'group2-B', label:"Option B" }, 
        { value: false, id: 'group2-C', label:"Option C" }, 
      ],
      basicCode: `<template>
  <div>
    <milk-checkbox id="item-0" label="Checked Item" v-model="checked1"  />
    <milk-checkbox id="item-1" label="Unchecked Item" v-model="checked2"  />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
<\/script>`,
      groupCode: `<template>
  <div>
    <milk-checkbox-group v-model="checkGroups" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkGroups: [
          { value: true, id: 'group1-A', label:"Option A" }, 
          { value: false, id: 'group1-B', label:"Option B" }, 
          { value: false, id: 'group1-C', label:"Option C" }, 
        ],
      };
    }
  };
<\/script>`,
      indeterminateCode: `<template>
  <div>
    <milk-checkbox-group v-model="checkGroups2" indeterminate />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkGroups2: [
          { value: true, id: 'group2-A', label:"Option A" }, 
          { value: false, id: 'group2-B', label:"Option B" }, 
          { value: false, id: 'group2-C', label:"Option C" }, 
        ],
      };
    }
  };
<\/script>`,
      disabledCode: `<template>
  <div>
    <milk-checkbox id="item-diabled-0" label="Checked Item" v-model="checkedDisable1" disabled />
    <milk-checkbox id="item-diabled-1" label="Unchecked Item" v-model="checkedDisable2" disabled />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkedDisable1: true,
        checkedDisable2: false,
      };
    }
  };
<\/script>`
    }
  }
}
</script>
<style lang='scss'>
#content.milk-checkboxes{

  .checkbox-box {
    padding-top: 85px;
    padding-bottom: 85px;
    text-align: center;
    border-width: 1px;
    border-style: solid;
  }

}
</style>

<template>
  <div id="content" class="milk-radios">
    <h2 class="milk-font--title20">Radio</h2>
    <nav>
      <div :class="nav === 'code' ? 'active': ''" @click="nav = 'code'">Code</div>
      <div :class="nav === 'style' ? 'active': ''" @click="nav = 'style'">Style</div>
    </nav>

    <div v-if="nav === 'code'">
      <!--Basic-->
      <h3 class="milk-font--title10">Basic</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-radio
          type="group"
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :label="item.item"
          :checked="item.checked"
        />
      </div>
      <app-code-box :code="basicCode" />
      <!--Disabled-->
      <h3 class="milk-font--title10">Disabled</h3>
      <div class="ui-box milk--border--light-gray-01">
        <milk-radio
          type="group"
          v-for="item in disabledItems"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :label="item.item"
          :checked="item.checked"
          disabled
        />
      </div>
      <app-code-box :code="disabledCode" />
    </div>

    <div v-if="nav === 'style'" class="nav-style">
      <h3 class="milk-font--title10">Colors</h3>
      <div>
        <img :src="imgColor" />
        <div class="style-box">
          <ul>
            <li>
              <strong>Checked</strong>
            </li>
            <li>Circle-fill: #87634D</li>
            <li>Circle-point: #FFFFFF</li>
            <li>Text color: #606266</li>
          </ul>
          <ul>
            <li>
              <strong>Hover</strong>
            </li>
            <li>Circle-border: #87634D</li>
            <li>Text color: #606266</li>
          </ul>
          <ul>
            <li>
              <strong>Unchecked</strong>
            </li>
            <li>Circle-border: #DCDFE6</li>
            <li>Text color: #606266</li>
          </ul>
          <ul>
            <li>
              <strong>Unchecked disable</strong>
            </li>
            <li>Circle-fill: #EBECF0</li>
            <li>Circle-border: #DCDFE6</li>
            <li>Text color: #909399</li>
          </ul>
          <ul>
            <li>
              <strong>Checked disable</strong>
            </li>
            <li>Circle-fill: #EBECF0</li>
            <li>Circle-border: #DCDFE6</li>
            <li>Circle-point: #909399</li>
            <li>Text color: #909399</li>
          </ul>
        </div>
      </div>

      <h3 class="milk-font--title10">Sizing</h3>
      <div>
        <img :src="imgSizing" />
        <div class="style-box">
          <ul>
            <li>
              <strong>Radio button size</strong>
            </li>
            <li>Width: 18px</li>
            <li>Height: 18px</li>
            <li>Border: 1px</li>
          </ul>
          <ul>
            <li>Font size: 14px</li>
            <li>Horizontal padding: 8px</li>
            <li>Vertical padding: 16px</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CodeBox from "./CodeBox";

export default {
  name: "radio",
  components: {
    AppCodeBox: CodeBox
  },
  props: {},
  data() {
    /* eslint-disable */
    return {
      nav: "code",
      items: [
        { id: "item-1", name: "itemGroup", item: "Label 01", checked: true },
        { id: "item-2", name: "itemGroup", item: "Label 02", checked: false },
        { id: "item-3", name: "itemGroup", item: "Label 03", checked: false }
      ],
      disabledItems: [
        {
          id: "disabled-item-1",
          name: "disabledItemGroup",
          item: "Label 01",
          checked: false
        },
        {
          id: "disabled-item-2",
          name: "disabledItemGroup",
          item: "Label 02",
          checked: true
        }
      ],
      imgColor: require("../assets/radios/img-radio-color.svg"),
      imgSizing: require("../assets/radios/img-radio-sizing.svg"),
      basicCode: `<template>
  <div>
    <milk-radio type="group" v-for="item in items" :key="item.id" :id="item.id" :name="item.name" :label="item.item" :checked="item.checked"  />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          { 'id': 'item-1', 'name': 'itemGroup', 'item': 'Label 01', 'checked': true },
          { 'id': 'item-2', 'name': 'itemGroup', 'item': 'Label 02', 'checked': false },
          { 'id': 'item-3', 'name': 'itemGroup', 'item': 'Label 03', 'checked': false },
        ]
      };
    }
  };
<\/script>`,
      disabledCode: `<template>
  <div>
    <milk-radio type="group" v-for="item in disabledItems" :key="item.id" :id="item.id" :name="item.name" :label="item.item" :checked="item.checked" disabled />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabledItems: [
          { 'id': 'disabled-item-1', 'name': 'disabledItemGroup', 'item': 'Label 01', 'checked': false },
          { 'id': 'disabled-item-2', 'name': 'disabledItemGroup', 'item': 'Label 02', 'checked': true },
        ]
      };
    }
  };
<\/script>`
    };
  }
};
</script>
<style lang='scss'>
#content.milk-radios {
}
</style>

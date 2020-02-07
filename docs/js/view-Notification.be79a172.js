(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Notification","view-CodeBox"],{"28ab":function(t,i,n){"use strict";var e=n("2f7a"),o=n.n(e);o.a},"2b9d":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"milk-notification",attrs:{id:"content"}},[n("h2",{staticClass:"milk-font--title20"},[t._v("Notification")]),n("nav",[n("div",{class:"code"===t.nav?"active":"",on:{click:function(i){t.nav="code"}}},[t._v("Code")]),n("div",{class:"style"===t.nav?"active":"",on:{click:function(i){t.nav="style"}}},[t._v("Style")])]),"code"===t.nav?n("div",[n("h3",{staticClass:"milk-font--title10"},[t._v("Toast")]),n("div",{staticClass:"ui-box milk--border--light-gray-01"},[n("milk-button",{attrs:{type:"primary"},on:{click:t.handleClickBasicToast}},[t._v("Basic toast")]),n("milk-button",{attrs:{type:"primary",color:"error"},on:{click:t.handleClickErrorToast}},[t._v("Error toast")]),n("milk-button",{attrs:{type:"primary",color:"success"},on:{click:t.handleClickSuccessToast}},[t._v("Success toast")]),n("milk-button",{attrs:{type:"primary",color:"warning"},on:{click:t.handleClickWarningToast}},[t._v("Warning toast")])],1),n("app-code-box",{attrs:{code:t.toastCode}}),n("h3",{staticClass:"milk-font--title10"},[t._v("Inline")]),n("div",{staticClass:"ui-box milk--border--light-gray-01"},[n("milk-inline-noti",{attrs:{title:"Notification title",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}}),n("milk-inline-noti",{attrs:{title:"Notification title",content:"Subtitle text",type:"error"}}),n("milk-inline-noti",{attrs:{title:"Notification title",content:"Subtitle text",type:"success"}}),n("milk-inline-noti",{attrs:{title:"Notification title",content:"Subtitle text",type:"warning"}})],1),n("app-code-box",{attrs:{code:t.inlineCode}})],1):t._e(),"style"===t.nav?n("div",{staticClass:"nav-style"},[n("h3",{staticClass:"milk-font--title10"},[t._v("Colors")]),n("div",[n("img",{attrs:{src:t.styleColor}}),t._m(0)]),n("h3",{staticClass:"milk-font--title10"},[t._v("Sizing")]),n("div",[n("img",{attrs:{src:t.styleSizing}}),t._m(1)])]):t._e()])},o=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"style-box"},[n("ul",[n("li",[n("strong",[t._v("Basic")])]),n("li",[t._v("Border: #87634D")]),n("li",[t._v("Background: #F3EFED")]),n("li",[t._v("Text(heading): #303133")]),n("li",[t._v("Text(paragraph): #606266")])]),n("ul",[n("li",[n("strong",[t._v("Error")])]),n("li",[t._v("Border: #F96580")]),n("li",[t._v("Background: #FEF0F2")]),n("li",[t._v("Text(heading): #303133")]),n("li",[t._v("Text(paragraph): #606266")]),n("li",[t._v("Icon: #F96580")])]),n("ul",[n("li",[n("strong",[t._v("Success")])]),n("li",[t._v("Border: #25CEA5")]),n("li",[t._v("Background: #E9FAF6")]),n("li",[t._v("Text(heading): #303133")]),n("li",[t._v("Text(paragraph): #606266")]),n("li",[t._v("Icon: #25CEA5")])]),n("ul",[n("li",[n("strong",[t._v("Warning")])]),n("li",[t._v("Border: #FCDC6B")]),n("li",[t._v("Background: #FFFBF0")]),n("li",[t._v("Text(heading): #303133")]),n("li",[t._v("Text(paragraph): #606266")]),n("li",[t._v("Icon: #606266")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"style-box"},[n("ul",[n("li",[n("strong",[t._v("Toast")])]),n("li",[t._v("Width: 400px")]),n("li",[t._v("Height: Varies")]),n("li",[t._v("Border: 2px")]),n("li",[t._v("Font size: 16px")]),n("li",[t._v("Line height(paragraph): 24px")])]),n("ul",[n("li",[n("strong",[t._v("Inline")])]),n("li",[t._v("Width: Varies")]),n("li",[t._v("Height: 56px")]),n("li",[t._v("Border: 2px")]),n("li",[t._v("Font size: 16px")])])])}],s=(n("cadf"),n("551c"),n("097d"),n("ae9b")),l={name:"notification",props:{},components:{AppCodeBox:s["default"]},data:function(){return{nav:"code",title:"Notification title",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",styleColor:n("35a1"),styleSizing:n("5c36"),toastCode:'<template>\n  <div>\n    <milk-button type="primary" @click="handleClickBasicToast">Basic toast</milk-button>\n    <milk-button type="primary" @click="handleClickErrorToast" color="error">Error toast</milk-button>\n    <milk-button type="primary" @click="handleClickSuccessToast" color="success">Success toast</milk-button>\n    <milk-button type="primary" @click="handleClickWarningToast" color="warning">Warning toast</milk-button>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleClickBasicToast(){\n        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."});\n      },\n      handleClickErrorToast() {\n        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", { type: "error" });\n      },\n      handleClickSuccessToast() {\n        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", { type: "success" });\n      },\n      handleClickWarningToast() {\n        this.$milkToast("Notification title", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", { type: "warning" });\n      }\n    }\n  };\n<\/script>',inlineCode:'<milk-inline-noti\n  title="Notification title"\n  content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s"\n/>\n<milk-inline-noti title="Notification title" content="Subtitle text" type="error" />\n<milk-inline-noti title="Notification title" content="Subtitle text" type="success" />\n<milk-inline-noti title="Notification title" content="Subtitle text" type="warning" />'}},methods:{handleClickBasicToast:function(){this.$milkToast(this.title,this.content)},handleClickErrorToast:function(){this.$milkToast(this.title,this.content,{type:"error",autoClose:!0})},handleClickSuccessToast:function(){this.$milkToast(this.title,this.content,{type:"success",autoClose:!0})},handleClickWarningToast:function(){this.$milkToast(this.title,this.content,{type:"warning",autoClose:!0})}}},a=l,r=(n("28ab"),n("2877")),c=Object(r["a"])(a,e,o,!1,null,null,null);c.options.__file="Notification.vue";i["default"]=c.exports},"2f7a":function(t,i,n){},"35a1":function(t,i,n){t.exports=n.p+"img/notification-milkui-style-colors.e4296e49.svg"},"5c36":function(t,i,n){t.exports=n.p+"img/noti_style_sizing.162c97a5.svg"},a0b9:function(t,i,n){},ae9b:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"code-box"},[n("div",{staticClass:"header milk--bg--light-gray-04 milk--border--light-gray-01",on:{click:function(i){t.open=!t.open}}},[t.open?t._e():n("i",{staticClass:"mk-chevron-down"}),t.open?n("i",{staticClass:"mk-chevron-up"}):t._e()]),t.open?n("div",{staticClass:"content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.code,expression:"code"}]},[n("code",{staticClass:"html"})])]):t._e()])},o=[],s={name:"",props:{code:{type:String,default:""}},data:function(){return{open:!1}}},l=s,a=(n("c37b"),n("2877")),r=Object(a["a"])(l,e,o,!1,null,null,null);r.options.__file="CodeBox.vue";i["default"]=r.exports},c37b:function(t,i,n){"use strict";var e=n("a0b9"),o=n.n(e);o.a}}]);
//# sourceMappingURL=view-Notification.be79a172.js.map
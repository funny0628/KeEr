(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53bebc4a"],{"1cfe":function(a,e,t){"use strict";var n=t("735a"),r=t.n(n);r.a},"2c27":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"Modifyname"}},[t("back",{attrs:{title:"Ubah namanya",color:"#fff"}}),t("div",{staticClass:"security"},[t("p",{staticClass:"title"},[a._v("Ubah namanya")]),t("ul",[t("li",[t("i",{staticClass:"iconfont icon-morentouxiang"}),t("p",[a._v(a._s(a.$route.params.username))])]),t("li",[t("i",{staticClass:"iconfont icon-haoyou"}),t("input",{directives:[{name:"model",rawName:"v-model",value:a.newName,expression:"newName"}],attrs:{type:"text",placeholder:"Silakan masukkan nama",maxlength:"18"},domProps:{value:a.newName},on:{input:function(e){e.target.composing||(a.newName=e.target.value)}}})])]),t("button",{on:{click:a.Submit}},[a._v("Mengirim")])])],1)},r=[],s=(t("6a61"),t("cf7f")),i=(t("aa8d"),t("b89e")),o={components:{Toast:i["a"]},data:function(){return{newName:""}},methods:{Submit:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.newName){e.next=2;break}return e.abrupt("return",a.$toast("! Harap masukkan nama baru."));case 2:return e.next=4,a.$axios.NameChange({username:a.newName});case 4:t=e.sent,n=t.data,1===n.code?(a.$router.go(-1),a.$toast(n.msg)):a.$toast(n.msg);case 7:case"end":return e.stop()}}),e)})))()}}},c=o,u=(t("1cfe"),t("9ca4")),m=Object(u["a"])(c,n,r,!1,null,"5b61792e",null);e["default"]=m.exports},"735a":function(a,e,t){}}]);
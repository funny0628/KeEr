(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d48bb82"],{8734:function(t,a,e){"use strict";e("b36c")},aaaf:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"mywallet"}},[e("back",{attrs:{title:"My Wallet",path:"/information",cor:"#000",color:"rgba(255,255,255,0)"}}),e("div",{staticClass:"user"},[e("p",{staticClass:"left"},[e("span",[t._v(t._s(t.userInfo.username))]),e("span",[t._v("Personal wallet")])]),t._m(0)]),e("div",{staticClass:"card"},[e("p",{staticClass:"num",on:{click:t.ToDetail}},[e("i",{staticClass:"iconfont icon-lubi"}),t._v(" "+t._s(t._f("FormatFloatNum")(t.userInfo.total_amount))+" ")]),e("p",{staticClass:"assets"},[t._v("Total assets")]),e("p",{staticClass:"assets"},[t._v("Cashable:"+t._s(t._f("FormatFloatNum")(t.userInfo.balance)))]),e("div",{staticClass:"btn"},[e("p",{staticClass:"Recharge",on:{click:function(a){return t.Topath("paylist")}}},[t._v("Recharge")]),e("p",{staticClass:"Recharge",on:{click:function(a){return t.TopathChange()}}},[t._v(" Withdrawal ")])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"right"},[e("i",{staticClass:"iconfont icon-morentouxiang"})])}],r=(e("6a61"),e("327b")),i={data:function(){return{banklist:"",userInfo:{}}},created:function(){this.initbanklist(),this.initUser()},methods:{ToDetail:function(){this.$router.push("/detailbalance")},Topath:function(t){this.$router.push("/".concat(t))},TopathChange:function(){this.$router.push("/Withdrawal/0")},initbanklist:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.GetBank();case 2:e=a.sent,n=e.data,1===n.code&&(t.banklist=n.data);case 5:case"end":return a.stop()}}),a)})))()},initUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.Home({recharge:""});case 2:e=a.sent,n=e.data,1===n.code&&(t.userInfo=n.data[0]);case 5:case"end":return a.stop()}}),a)})))()}}},c=i,o=(e("8734"),e("2c07")),u=Object(o["a"])(c,n,s,!1,null,"2cbe638d",null);a["default"]=u.exports},b36c:function(t,a,e){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b4cbbcc"],{"04b6":function(t,e,a){"use strict";a("a58b")},"2e2b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ToBalance"}},[a("back",{attrs:{title:"Apply ToBalance",path:"/promotion"}}),a("div",{staticClass:"Bonus"},[a("p",[t._v("My Bonus")]),a("p",[a("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(t._f("FormatFloatNum")(t.withdrawable)))]),t._m(0),t._m(1)]),a("div",{staticClass:"Amount"},[a("p",[t._v("Apply Amount")]),a("p",[a("i",{staticClass:"iconfont icon-lubi"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})])]),t._m(2),a("div",{staticClass:"btn"},[a("button",{on:{click:t.Submit}},[t._v("Submit")]),a("button",{on:{click:t.Records}},[t._v("Records")])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"small"},[t._v(" Max-Value of single Apply: "),a("i",{staticClass:"iconfont icon-lubi"}),t._v("200000 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"small"},[t._v(" Min-Value of single Apply: "),a("i",{staticClass:"iconfont icon-lubi"}),t._v("10 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Services"},[a("p",{staticClass:"limit"},[t._v("Limit 1 Times per day for Apply Bouns to Balance!")]),a("div",{staticClass:"Time"},[a("p",{staticClass:"title"},[t._v("Services Time")]),a("p",{staticClass:"Monday"},[t._v("Monday10:00-17:00")]),a("p",{staticClass:"Tuseday"},[t._v("Tuseday10:00-17:00")]),a("p",{staticClass:"Wednesday"},[t._v("Wednesday10:00-17:00")]),a("p",{staticClass:"Thursday"},[t._v("Thursday10:00-17:00")]),a("p",{staticClass:"Friday"},[t._v("Friday10:00-17:00")])])])}],i=(a("ecb4"),a("513c"),a("e18c"),a("1c2e"),a("6a61"),a("327b")),o=(a("a691"),a("01e2")),r={components:{Toast:o["a"]},data:function(){return{amount:"",userInfo:{},withdrawable:""}},created:function(){this.initUser()},methods:{Submit:function(){return Number(this.amount)>2e5?(this.$toast("！Amount of single Apply exceeding the Max-Value（₹200000）"),!1):Number(this.amount)<10?(this.$toast("！Amount of single Apply below the Min-Value（₹10）"),!1):-1!==String(this.amount).indexOf(".")?this.$toast("！The number must not be a decimal"):void this.initData()},Records:function(){this.$router.push("/ApplyRecord")},FormatFloat:function(t){if("."!=t){var e=Math.round(100*t)/100,a=e.toString(),n=a.indexOf(".");n<=0&&(n=a.length,a+=".");while(a.length<=n+2)a+="0";return a}return"0.00"},initUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.Home({recharge:""});case 2:a=e.sent,n=a.data,1===n.code&&(t.userInfo=n.data[0]||{},t.withdrawable=t.userInfo.withdrawable);case 5:case"end":return e.stop()}}),e)})))()},initData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.PostTobalance({amount:t.amount});case 2:a=e.sent,n=a.data,1===n.code?t.$router.push("/Withdrawalsuccess/".concat(t.FormatFloat(t.amount))):t.$toast(n.msg);case 5:case"end":return e.stop()}}),e)})))()}}},c=r,u=(a("04b6"),a("2c07")),l=Object(u["a"])(c,n,s,!1,null,"1becfaba",null);e["default"]=l.exports},a58b:function(t,e,a){}}]);
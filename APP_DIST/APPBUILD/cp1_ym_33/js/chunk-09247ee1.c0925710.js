(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09247ee1"],{"5da5":function(t,a,e){},"7a6a":function(t,a,e){"use strict";e("5da5")},c614:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Withdrawalcord"}},[e("back",{attrs:{title:"Withdrawal Record",path:"/Withdrawal/0",color:"#fff"}}),e("tabs",{attrs:{type:"card"},on:{click:t.onClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.tablist,(function(t,a){return e("tab",{key:a,attrs:{title:t.text,name:t.value}})})),1),e("div",{ref:"wrapper",staticClass:"wrapper"},[e("div",{staticClass:"conent"},[e("ul",t._l(t.List,(function(a,i){return e("li",{key:i},[e("p",{staticClass:"date"},[e("span",{staticClass:"left"},[t._v("No."+t._s(a.withdraw_no))]),e("span",{staticClass:"right"},[t._v(t._s(t._f("FormatTimeStamp")(a.create_time)))])]),e("p",{staticClass:"amount"},[e("span",[t._v("amount")]),e("span",[e("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(a.amount))])]),e("p",{staticClass:"amount"},[e("span",[t._v("Withdrawal fee")]),e("span",[e("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(a.fee))])]),0!==a.received_amount?e("p",{staticClass:"amount"},[e("span",[t._v("Actual amount received")]),e("span",[e("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(a.received_amount))])]):t._e(),e("p",{staticClass:"amount"},[e("span",[t._v("Payment method")]),e("span",[t._v(t._s(t._f("formatwithdraw")(a.withdraw_type)))])]),2===a.withdraw_type?e("p",{staticClass:"amount"},[e("span",[t._v("UPI ID")]),e("span",[t._v(t._s(a.upi))])]):t._e(),e("p",{staticClass:"option"},[e("span",[t._v("Option")]),e("span",{staticClass:"Complaint",on:{click:function(e){return t.ToComplaints(a.withdraw_id)}}},[t._v("Complaint >")])])])})),0),0===t.List.length?e("div",{staticClass:"nomore"},[t._v(" no more ")]):t._e()])])],1)},n=[],s=(e("b4fb"),e("513c"),e("6a61"),e("327b")),o=(e("d479"),e("6ada")),r=(e("ec4f"),e("b4a9")),c=e("ecd2"),l={components:{Tab:r["a"],Tabs:o["a"]},data:function(){return{activeName:0,tablist:[{text:"Pending",value:0},{text:"Success",value:1},{text:"Fail",value:2},{text:"Closed",value:3}],page:1,limit:10,total:0,type_id:0,List:[],nomore:!1}},created:function(){this.initData(),this.activeName=Number(this.$route.params.type)},mounted:function(){var t=this;this.scroll=new c["a"](this.$refs.wrapper,{click:!0,startY:0,pullDownRefresh:!1,pullUpLoad:{threshold:-50,moreTxt:"load more",noMoreTxt:"No more data"}}),this.$nextTick((function(){t.scroll.on("pullingUp",(function(){if(console.log("----"),t.List.length===t.total)return!1;t.page++,t.initData(),t.scroll.finishPullUp()})),t.scroll.refresh()}))},methods:{onClick:function(t,a){this.List=[],this.nomore=!1,this.type_id=t,this.initData()},ToComplaints:function(t){this.$router.push("/addnewComplaints/".concat(t,"/","Withdraw Problem"))},initData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.CheckWithdraw({page:t.page,limit:t.limit,type_id:t.type_id});case 2:e=a.sent,i=e.data,1===i.code&&(t.List=t.List.concat(i.data),t.total=i.total);case 5:case"end":return a.stop()}}),a)})))()}},filters:{formatwithdraw:function(t){return 1===t?"Card":2===t?"UPI":3===t?"Others":void 0}}},u=l,p=(e("7a6a"),e("2c07")),d=Object(p["a"])(u,i,n,!1,null,"37c65d8c",null);a["default"]=d.exports}}]);
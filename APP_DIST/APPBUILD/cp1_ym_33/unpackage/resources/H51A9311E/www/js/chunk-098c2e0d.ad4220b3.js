(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-098c2e0d"],{3156:function(t,e,a){"use strict";a("dff3")},a92f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"rechargerecord"}},[a("back",{attrs:{title:"recharge record",color:"#fff"}}),a("tabs",{attrs:{type:"card"},on:{click:t.onClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tablist,(function(t,e){return a("tab",{key:e,attrs:{title:t.text,name:t.value}})})),1),a("div",{ref:"wrapper",staticClass:"wrapper"},[a("div",{staticClass:"conent"},[a("ul",t._l(t.List,(function(e,i){return a("li",{key:i},[a("p",{staticClass:"date"},[a("span",{staticClass:"left"},[t._v("No."+t._s(e.order_id))]),a("span",{staticClass:"right"},[t._v(t._s(t._f("FormatTimeStamp")(e.create_time)))])]),a("p",{staticClass:"amount"},[a("span",[t._v("amount")]),a("span",[a("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(e.amount))])]),a("p",{staticClass:"option",on:{click:function(a){return t.ToComplaints(e.order_id)}}},[a("span",[t._v("Option")]),a("span",{staticClass:"Complaint"},[t._v("Complaint >")])])])})),0),0===t.List.length?a("div",{staticClass:"nomore"},[t._v(" no more ")]):t._e()])])],1)},n=[],s=(a("b4fb"),a("513c"),a("6a61"),a("327b")),o=(a("d479"),a("6ada")),r=(a("ec4f"),a("b4a9")),c=a("ecd2"),l={components:{Tab:r["a"],Tabs:o["a"]},data:function(){return{activeName:"",tablist:[{text:"Pending",value:0},{text:"Success",value:1},{text:"Fail",value:2},{text:"Closed",value:3}],page:1,limit:10,type_id:0,total:0,List:[],nomore:!1}},created:function(){this.initData(),this.activeName=Number(this.$route.params.type)},mounted:function(){var t=this;this.scroll=new c["a"](this.$refs.wrapper,{click:!0,startY:0,pullDownRefresh:!1,pullUpLoad:{threshold:-50,moreTxt:"load more",noMoreTxt:"No more data"}}),this.$nextTick((function(){t.scroll.on("pullingUp",(function(){if(console.log("----"),t.List.length===t.total)return!1;t.page++,t.initData(),t.scroll.finishPullUp()})),t.scroll.refresh()}))},methods:{onClick:function(t,e){this.List=[],this.nomore=!1,this.type_id=t,this.initData()},ToComplaints:function(t){this.$router.push("/addnewComplaints/".concat(t,"/","Recharge Problem"))},initData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.CheckRecharge({page:t.page,limit:t.limit,type_id:t.type_id});case 2:a=e.sent,i=a.data,1===i.code&&(t.List=t.List.concat(i.data)||[],t.total=i.total);case 5:case"end":return e.stop()}}),e)})))()}}},u=l,p=(a("3156"),a("2c07")),d=Object(p["a"])(u,i,n,!1,null,"7a39c33c",null);e["default"]=d.exports},dff3:function(t,e,a){}}]);
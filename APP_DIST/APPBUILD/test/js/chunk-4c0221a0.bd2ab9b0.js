(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c0221a0"],{a92f:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"rechargerecord"}},[e("back",{attrs:{title:"Isi ulang catatan Sejarah",color:"#fff"}}),e("tabs",{attrs:{type:"card"},on:{click:t.onClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.tablist,(function(t,a){return e("tab",{key:a,attrs:{title:t.text,name:t.value}})})),1),e("div",{ref:"wrapper",staticClass:"wrapper"},[e("div",{staticClass:"conent"},[e("ul",t._l(t.List,(function(a,i){return e("li",{key:i},[e("p",{staticClass:"date"},[e("span",{staticClass:"left"},[t._v("No."+t._s(a.order_id))]),e("span",{staticClass:"right"},[t._v(t._s(t._f("FormatTimeStamp")(a.create_time)))])]),e("p",{staticClass:"amount"},[e("span",[t._v("jumlah")]),e("span",[e("i",{staticClass:"iconfont "},[t._v("IDR")]),t._v(t._s(a.amount))])]),e("p",{staticClass:"option",on:{click:function(e){return t.ToComplaints(a.order_id)}}},[e("span",[t._v("Pilihan")]),e("span",{staticClass:"Complaint"},[t._v("Keluhan >")])])])})),0),0===t.List.length?e("div",{staticClass:"nomore"},[t._v(" tidak lagi ")]):t._e()])])],1)},n=[],s=(e("b4fb"),e("513c"),e("6a61"),e("cf7f")),c=(e("50c9"),e("ba01")),r=(e("3585"),e("c043")),o=e("ecd2"),l={components:{Tab:r["a"],Tabs:c["a"]},data:function(){return{activeName:"",tablist:[{text:"Untuk ditentukan",value:0},{text:"Sukses",value:1},{text:"Gagal",value:2},{text:"Tutup",value:3}],page:1,limit:10,type_id:0,total:0,List:[],nomore:!1}},created:function(){this.initData(),this.activeName=Number(this.$route.params.type)},mounted:function(){var t=this;this.scroll=new o["a"](this.$refs.wrapper,{click:!0,startY:0,pullDownRefresh:!1,pullUpLoad:{threshold:-50,moreTxt:"Memuatkan",noMoreTxt:"Tidak ada  data lagi"}}),this.$nextTick((function(){t.scroll.on("pullingUp",(function(){if(console.log("----"),t.List.length===t.total)return!1;t.page++,t.initData(),t.scroll.finishPullUp()})),t.scroll.refresh()}))},methods:{onClick:function(t,a){this.List=[],this.nomore=!1,this.type_id=t,this.initData()},ToComplaints:function(t){this.$router.push("/addnewComplaints/".concat(t,"/","Recharge Problem"))},initData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.CheckRecharge({page:t.page,limit:t.limit,type_id:t.type_id});case 2:e=a.sent,i=e.data,1===i.code&&(t.List=t.List.concat(i.data)||[],t.total=i.total);case 5:case"end":return a.stop()}}),a)})))()}}},u=l,p=(e("b526"),e("9ca4")),d=Object(p["a"])(u,i,n,!1,null,"178711a0",null);a["default"]=d.exports},b526:function(t,a,e){"use strict";var i=e("caea"),n=e.n(i);n.a},caea:function(t,a,e){}}]);
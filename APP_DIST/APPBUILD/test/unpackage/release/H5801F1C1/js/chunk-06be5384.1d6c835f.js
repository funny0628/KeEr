(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06be5384"],{"80f6":function(t,a,i){},c516:function(t,a,i){"use strict";i("80f6")},c614:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"Withdrawalcord"}},[i("back",{attrs:{title:"Catatan penarikan",color:"#fff"}}),i("tabs",{attrs:{type:"card"},on:{click:t.onClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.tablist,(function(t,a){return i("tab",{key:a,attrs:{title:t.text,name:t.value}})})),1),i("div",{ref:"wrapper",staticClass:"wrapper"},[i("div",{staticClass:"conent"},[i("ul",t._l(t.List,(function(a,e){return i("li",{key:e},[i("p",{staticClass:"date"},[i("span",{staticClass:"left"},[t._v("No."+t._s(a.withdraw_no))]),i("span",{staticClass:"right"},[t._v(t._s(t._f("FormatTimeStamp")(a.create_time)))])]),i("p",{staticClass:"amount"},[i("span",[t._v("jumlah")]),i("span",[i("i",{staticClass:"iconfont "},[t._v("IDR")]),t._v(t._s(a.amount))])]),i("p",{staticClass:"amount"},[i("span",[t._v("Biaya penarikan")]),i("span",[i("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(a.fee))])]),0!==a.received_amount?i("p",{staticClass:"amount"},[i("span",[t._v("Jumlah sebenarnya diterima")]),i("span",[i("i",{staticClass:"iconfont icon-lubi"}),t._v(t._s(a.received_amount))])]):t._e(),i("p",{staticClass:"amount"},[i("span",[t._v("Cara Pembayaran")]),i("span",[t._v(t._s(t._f("formatwithdraw")(a.withdraw_type)))])]),2===a.withdraw_type?i("p",{staticClass:"amount"},[i("span",[t._v("ID UPI")]),i("span",[t._v(t._s(a.upi))])]):t._e(),i("p",{staticClass:"option"},[i("span",[t._v("Pilihan")]),i("span",{staticClass:"Complaint",on:{click:function(i){return t.ToComplaints(a.withdraw_id)}}},[t._v("Keluhan >")])])])})),0),0===t.List.length?i("div",{staticClass:"nomore"},[t._v(" tidak lagi ")]):t._e()])])],1)},n=[],s=(i("b4fb"),i("513c"),i("6a61"),i("327b")),r=(i("d479"),i("6ada")),o=(i("ec4f"),i("b4a9")),c=i("ecd2"),l={components:{Tab:o["a"],Tabs:r["a"]},data:function(){return{activeName:0,tablist:[{text:"Untuk ditentukan",value:0},{text:"Sukses",value:1},{text:"Gagal",value:2},{text:"Tutup",value:3}],page:1,limit:10,total:0,type_id:0,List:[],nomore:!1}},created:function(){this.initData(),this.activeName=Number(this.$route.params.type)},mounted:function(){var t=this;this.scroll=new c["a"](this.$refs.wrapper,{click:!0,startY:0,pullDownRefresh:!1,pullUpLoad:{threshold:-50,moreTxt:"Memuatkan",noMoreTxt:"Tidak ada  data lagi"}}),this.$nextTick((function(){t.scroll.on("pullingUp",(function(){if(console.log("----"),t.List.length===t.total)return!1;t.page++,t.initData(),t.scroll.finishPullUp()})),t.scroll.refresh()}))},methods:{onClick:function(t,a){this.List=[],this.nomore=!1,this.type_id=t,this.initData()},ToComplaints:function(t){this.$router.push("/addnewComplaints/".concat(t,"/","Withdraw Problem"))},initData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.CheckWithdraw({page:t.page,limit:t.limit,type_id:t.type_id});case 2:i=a.sent,e=i.data,1===e.code&&(t.List=t.List.concat(e.data),t.total=e.total);case 5:case"end":return a.stop()}}),a)})))()}},filters:{formatwithdraw:function(t){return 1===t?"Card":2===t?"UPI":3===t?"Others":void 0}}},u=l,p=(i("c516"),i("c701")),d=Object(p["a"])(u,e,n,!1,null,"4af5e4f5",null);a["default"]=d.exports}}]);
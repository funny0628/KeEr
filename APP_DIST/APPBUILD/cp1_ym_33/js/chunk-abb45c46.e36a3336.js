(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abb45c46"],{3513:function(e,s,t){"use strict";t("8ece")},"8ece":function(e,s,t){},"9bf4":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"orderDetail"}},[t("p",{staticClass:"p-top"},[t("i",{staticClass:"iconfont icon-fanhui left",on:{click:e.golast}}),e._v("My Orders ")]),t("div",{staticClass:"detail"},[t("p",[e._v("Detail")]),t("p",[e._v(e._s(e._f("formatStatus")(e.orderDdesc.order_status)))])]),e.orderDdesc.receive_addr?t("div",{staticClass:"address"},[t("p",[t("span",{staticClass:"name"},[e._v(e._s(JSON.parse(e.orderDdesc.receive_addr).username))]),t("span",{staticClass:"phone"},[e._v(e._s(JSON.parse(e.orderDdesc.receive_addr).phone))])]),t("p",{staticClass:"b"},[e._v(e._s(JSON.parse(e.orderDdesc.receive_addr).address))])]):e._e(),t("div",{staticClass:"goodsMsg"},[t("p",{staticClass:"left"},[t("img",{attrs:{src:e.orderDdesc.goods_info}})]),t("p",{staticClass:"right"},[t("span",[e._v(e._s(e.orderDdesc.giftname))]),t("span",[e._v("Quantity: "+e._s(e.orderDdesc.order_goods_num))]),t("span",[e._v("Price: "),t("i",{staticClass:"iconfont icon-lubi"}),e._v(e._s(e.orderDdesc.cost))])])]),t("p",{staticClass:"line"}),t("div",{staticClass:"desc"},[t("p",[t("span",[e._v("No.")]),t("span",[t("span",{ref:"orderId"},[e._v(e._s(e.orderDdesc.order_number))]),t("i",{on:{click:e.CopyOrderId}},[e._v("copy")])])]),e._m(0),t("p",[t("span",[e._v("Actually Paid")]),t("span",[t("i",{staticClass:"iconfont icon-lubi"}),e._v(" "+e._s(e.orderDdesc.cost))])]),t("p",[t("span",[e._v("Create Time")]),t("span",[e._v(e._s(e._f("FormatTimeStamp")(e.orderDdesc.create_time)))])]),t("p",[t("span",[e._v("Payment Time")]),t("span",[e._v(e._s(e._f("FormatTimeStamp")(e.orderDdesc.create_time)))])])])])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("span",[e._v("Payment Method")]),t("span",[e._v("Available Balance")])])}],i=(t("513c"),t("6a61"),t("327b")),n={data:function(){return{orderId:0,orderDdesc:{}}},created:function(){this.orderId=Number(this.$route.params.id),this.initOrderDetail()},methods:{golast:function(){this.$router.go(-1)},CopyOrderId:function(){window.getSelection().selectAllChildren(this.$refs.orderId),document.execCommand("copy"),this.$toast("√ Copy success")},initOrderDetail:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var t,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$axios.Get_myorderDetail({id:e.orderId});case 2:t=s.sent,r=t.data,1===r.code&&(e.orderDdesc=r.data[0]||{});case 5:case"end":return s.stop()}}),s)})))()}},filters:{formatStatus:function(e){return 1===e?"Undeliver":2===e?"UnReceive":3===e?"Closed":"Success"}}},c=n,d=(t("3513"),t("2c07")),o=Object(d["a"])(c,r,a,!1,null,"2f602932",null);s["default"]=o.exports}}]);
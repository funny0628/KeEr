(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f97587"],{"1e69":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goodsbuy"}},[t.userInfo?e("div",{staticClass:"information"},[t._m(0),e("p",{staticClass:"name"},[t._v(t._s(t.userInfo.username))])]):t._e(),e("div",{staticClass:"bankmsg",on:{click:t.toAddresslist}},[t.iconl?e("i",{staticClass:"iconfont icon-dizhi b-left"}):e("div",{staticClass:"b-left"},[e("p",[e("span",{staticClass:"name"},[t._v(t._s(t.ChooseAddress.name))]),e("span",{staticClass:"phone"},[t._v(t._s(t.ChooseAddress.phone))])]),e("p",{staticClass:"b"},[t._v(" "+t._s(t.ChooseAddress.country)+t._s(t.ChooseAddress.city)+t._s(t.ChooseAddress.detail)+" ")])]),t._m(1)]),e("div",{staticClass:"goodsmsg"},[e("img",{staticClass:"g-left",attrs:{src:t.goods_info.giftimgurl,alt:""}}),e("div",{staticClass:"g-right"},[e("p",{staticClass:"msg"},[t._v(t._s(t.goods_info.giftname))]),e("p",{staticClass:"num"},[t._v(t._s(t.goods_info.quality))]),e("p",{staticClass:" quantity"},[t._v("Quantity: "+t._s(t.num))]),e("p",{staticClass:"col price"},[t._v(" Price:"),e("i",{staticClass:"iconfont icon-lubi"}),t._v(" "+t._s(t._f("FormatFloatNum")(t.price))+" ")])])]),e("div",{staticClass:"pay",on:{click:t.InputPassWord}},[t._v("Pay Now")]),e("popup",{model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"password"},[e("p",{staticClass:"Please"},[t._v("Please enter the payment password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.InputPassword,expression:"InputPassword"}],attrs:{type:"password",placeholder:"Please enter the payment password"},domProps:{value:t.InputPassword},on:{input:function(s){s.target.composing||(t.InputPassword=s.target.value)}}}),e("p",{staticClass:"btn"},[e("span",{staticClass:"Cancel",on:{click:t.Cancel}},[t._v("Cancel")]),e("span",{staticClass:"Confirm",on:{click:t.Confirm}},[t._v("Confirm")])])])])],1)},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"img"},[e("i",{staticClass:"iconfont icon-morentouxiang"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"b-right"},[e("i",{staticClass:"iconfont icon-next"})])}],a=(e("6a61"),e("327b")),i=(e("9b57"),e("dee3")),r=(e("8e2c"),e("70ab")),c={components:{Popup:r["a"],Toast:i["a"]},data:function(){return{show:!1,InputPassword:"",GoodsMsg:{},currentId:"",price:"",num:"",ChooseAddress:{},userInfo:{},goods_info:{},iconl:!1}},created:function(){this.currentId=this.$route.params.id,this.price=this.$route.params.price,this.num=this.$route.params.num,this.initData()},methods:{InputPassWord:function(){var t=this;if("{}"===JSON.stringify(this.ChooseAddress)){var s=1400,e=setInterval((function(){s-=200,t.$toast("！Please add an address"),s||(clearInterval(e),s=1400,t.$router.push("/addresslist"))}),200);return!1}if(!this.userInfo.pay_pwd){this.$toast({message:"！Please set your payment password"});var n=2,o=setInterval((function(){n--,n?t.$router.push("/Modifypayment"):(clearInterval(o),t.$toast.clear())}),1e3);return!1}this.show=!0},Cancel:function(){this.show=!1},Confirm:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var e,n,o,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t.InputPassword){s.next=3;break}return t.$toast("!Please enter the payment password"),s.abrupt("return",!1);case 3:return s.next=5,t.$axios.PayNow({goods_id:t.currentId,goods_num:t.num,goods_cost:t.price*t.num,addr_id:t.ChooseAddress.id,pay_pwd:t.InputPassword});case 5:e=s.sent,n=e.data,1===n.code?(t.$toast("✔ Successfully paid"),o=600,a=setInterval((function(){o-=200,o||(t.$router.push("/home"),t.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),clearInterval(a),o=600)}),200)):t.$toast(n.msg);case 8:case"end":return s.stop()}}),s)})))()},toAddresslist:function(){this.$router.push("/addresslist")},initData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var e,n,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$axios.Getgopay({goods_id:t.currentId});case 2:e=s.sent,n=e.data,1===n.code?(t.userInfo=n.user[0]||{},t.goods_info=n.goods_info[0]||{},o=n.address,0===o.length?t.iconl=!0:(t.iconl=!1,t.ChooseAddress=o[0])):(t.$toast(n.msg),t.$router.push("/login"));case 5:case"end":return s.stop()}}),s)})))()}}},u=c,l=(e("c77e"),e("2c07")),d=Object(l["a"])(u,n,o,!1,null,"44466558",null);s["default"]=d.exports},"70ab":function(t,s,e){"use strict";var n=e("2938"),o=e("5615"),a=e("3d73"),i=e("44bd"),r=Object(n["a"])("popup"),c=r[0],u=r[1];s["a"]=c({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,s=function(s){return function(e){return t.$emit(s,e)}};this.onClick=s("click"),this.onOpened=s("opened"),this.onClosed=s("closed")},render:function(){var t,s=arguments[0];if(this.shouldRender){var e=this.round,n=this.position,a=this.duration,r="center"===n,c=this.transition||(r?"van-fade":"van-popup-slide-"+n),l={};if(Object(o["c"])(a)){var d=r?"animationDuration":"transitionDuration";l[d]=a+"s"}return s("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[s("div",{directives:[{name:"show",value:this.value}],style:l,class:u((t={round:e},t[n]=n,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&s(i["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},"8e2c":function(t,s,e){"use strict";e("25e6"),e("d5e0"),e("05f1"),e("573e"),e("1abc")},c77e:function(t,s,e){"use strict";e("d7cc")},d7cc:function(t,s,e){}}]);
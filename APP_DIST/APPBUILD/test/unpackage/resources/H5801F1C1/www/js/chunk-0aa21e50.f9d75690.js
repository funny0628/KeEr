(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aa21e50"],{"0503":function(t,e,a){"use strict";var s=a("1af7"),n=a.n(s);n.a},"160e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"addnewComplaints"}},[a("back",{attrs:{title:"Keluhan & Saran",color:"#fff"}}),a("div",{staticClass:"security"},[a("p",{staticClass:"title"},[t._v("Tambah baru")]),a("ul",[a("li",{on:{click:t.Showpup}},[t._m(0),a("span",[t._v(t._s(t.valueType)+" > ")])]),a("li",[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Nocause,expression:"Nocause"}],attrs:{type:"text",placeholder:"Trade No.cause the problem"},domProps:{value:t.Nocause},on:{input:function(e){e.target.composing||(t.Nocause=e.target.value)}}})]),a("li",[t._m(2),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descproblems,expression:"descproblems"}],attrs:{maxlength:"500",rows:"5",placeholder:"Jelaskan masalah Anda"},domProps:{value:t.descproblems},on:{input:[function(e){e.target.composing||(t.descproblems=e.target.value)},t.descInput]}}),a("span",{staticClass:"numberV"},[t._v(t._s(t.txtVal)+"/500")])]),a("li",[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],attrs:{type:"text",placeholder:"Akun WhatsApp"},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})])]),a("button",{on:{click:t.Submit}},[t._v("Mengirim")]),t._m(4)]),a("popup",{style:{height:"60%"},attrs:{position:"bottom"},model:{value:t.showpup,callback:function(e){t.showpup=e},expression:"showpup"}},t._l(t.puplist,(function(e,s){return a("p",{key:s,on:{click:function(a){return t.Toset(e.text)}}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",[a("i",{staticClass:"iconfont icon-bitian tishi"}),t._v(" Tipe")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",[a("i",{staticClass:"iconfont icon-bitian tishi",staticStyle:{opacity:"0"}}),t._v(" OutId")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",[a("i",{staticClass:"iconfont icon-bitian tishi"}),t._v(" Deskripsi")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",[a("i",{staticClass:"iconfont icon-bitian tishi"}),t._v(" WhatsApp")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service"},[a("span",[t._v("Waktu Layanan")]),a("span",[t._v("10: 00-17: 00, Senin - Jumat sekitar 1-5 hari kerja. ")])])}],i=(a("dbb3"),a("6a61"),a("cf7f")),o=(a("aa8d"),a("b89e")),r=(a("6add"),a("8913")),c={components:{Popup:r["a"],Toast:o["a"]},data:function(){return{newname:"",txtVal:0,descproblems:"",Nocause:"",contact:"",showpup:!1,valueType:"",puplist:[{text:"Saran",value:5},{text:"Berkonsultasi",value:4},{text:"Masalah Isi Ulang",value:1},{text:"Masalah Penarikan",value:2},{text:"Masalah berarti",value:6},{text:"Masalah Amplop Merah",value:3},{text:"Lain",value:0}]}},created:function(){this.Nocause="0"!==this.$route.params.order_id?this.$route.params.order_id:"",this.valueType="NoMore"!==this.$route.params.type?this.$route.params.type:""},methods:{descInput:function(){this.txtVal=this.descproblems.length},Submit:function(){return this.valueType?this.descproblems?this.contact?void this.initData():(this.$toast("！Silakan masuk WhatsApp"),!1):(this.$toast("！Silakan masukkan Deskripsi"),!1):(this.$toast("！Pilih jenis"),!1)},Showpup:function(){this.showpup=!0},Toset:function(t){this.valueType=t,this.showpup=!1},initData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.puplist.filter((function(e){return e.text===t.valueType}))[0].value,e.next=3,t.$axios.PostComplaint({complaint_type:a,describe:t.descproblems,whatsapp:t.contact,order_id:t.Nocause});case 3:s=e.sent,n=s.data,1===n.code?(t.$toast("！Mengirim Sukses"),t.$router.go(-1)):t.$toast(n.msg);case 6:case"end":return e.stop()}}),e)})))()}}},l=c,u=(a("0503"),a("9ca4")),p=Object(u["a"])(l,s,n,!1,null,"a3d97cda",null);e["default"]=p.exports},"1af7":function(t,e,a){},"6add":function(t,e,a){"use strict";a("d595"),a("352e"),a("11f9"),a("0380"),a("fe29")},8913:function(t,e,a){"use strict";var s=a("92df"),n=a("9941"),i=a("5df2"),o=a("2767"),r=Object(s["a"])("popup"),c=r[0],l=r[1];e["a"]=c({mixins:[Object(i["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(a){return t.$emit(e,a)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var a=this.round,s=this.position,i=this.duration,r="center"===s,c=this.transition||(r?"van-fade":"van-popup-slide-"+s),u={};if(Object(n["c"])(i)){var p=r?"animationDuration":"transitionDuration";u[p]=i+"s"}return e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:u,class:l((t={round:a},t[s]=s,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(o["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);
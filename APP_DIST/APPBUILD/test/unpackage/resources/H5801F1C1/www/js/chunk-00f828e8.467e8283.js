(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00f828e8"],{4350:function(t,e,n){var r=n("90fb");e.f=r},"6c6d":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("f3dd"),n("dbb3"),n("fe59"),n("b73f"),n("bf84"),n("fe8a"),n("08ba");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"6d51":function(t,e,n){var r=n("1b99"),a=n("faa8"),o=n("4350"),i=n("d910").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},9215:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Modifypayment"}},[n("back",{attrs:{title:"Ubah kata sandi pembayaran",color:"#fff"}}),n("div",{staticClass:"security"},[n("p",{staticClass:"title"},[t._v("Ubah kata sandi pembayaran")]),n("ul",[n("li",[n("i",{staticClass:"iconfont icon-xunjia-fuben"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.payForm.code,expression:"payForm.code"}],attrs:{type:"text",placeholder:"Silakan masukkan kode verifikasi"},domProps:{value:t.payForm.code},on:{input:function(e){e.target.composing||t.$set(t.payForm,"code",e.target.value)}}}),n("p",{on:{click:function(e){t.passwordOpen&&t.CountDown()}}},[t._v(t._s(t.passwordDown?t.passwordTime+"s":"OTP"))])]),n("li",[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.payForm.new_pwd,expression:"payForm.new_pwd"}],attrs:{type:"password",placeholder:"Silakan masukkan sandi baru"},domProps:{value:t.payForm.new_pwd},on:{input:function(e){e.target.composing||t.$set(t.payForm,"new_pwd",e.target.value)}}})]),n("li",[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.payForm.confirm_pwd,expression:"payForm.confirm_pwd"}],attrs:{type:"password",placeholder:"Silakan masukkan sandi konfirmasi"},domProps:{value:t.payForm.confirm_pwd},on:{input:function(e){e.target.composing||t.$set(t.payForm,"confirm_pwd",e.target.value)}}})])]),n("button",{on:{click:t.Submit}},[t._v("Mengirim")]),n("p",{staticClass:"msg"},[t._v(" Cepat：Kata sandi transaksi tidak boleh sama dengan kata sandi login. Platform tidak akan bertanggung jawab atas kerugian yang disebabkan oleh pencurian kata sandi ")])])],1)},a=[],o=(n("6a61"),n("327b")),i=n("6c6d"),s=(n("a691"),n("01e2")),c=n("9f3a"),u={components:{Toast:s["a"]},data:function(){return{payForm:{code:"",new_pwd:"",confirm_pwd:""}}},computed:Object(i["a"])({},Object(c["b"])(["passwordDown","passwordTime","passwordtimeID","passwordOpen"])),methods:{ChangeTime:function(t,e,n,r,a,o){this.$store.commit(t,r),this.$store.commit(e,a),this.$store.commit(n,o),clearInterval(this.$store.state.passwordtimeID)},CountDown:function(){var t={methods1:"C_paymentDown",methods2:"C_paymentDownNum",methods3:"C_paymentDownOpen",time_id:"passwordtimeID",time:"passwordTime",num:""};this.$store.dispatch("Send_Code",t)},Submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.payForm.code){e.next=2;break}return e.abrupt("return",t.$toast("Harap masukkan kode verifikasi."));case 2:if(t.payForm.new_pwd){e.next=4;break}return e.abrupt("return",t.$toast("."));case 4:if(t.payForm.confirm_pwd){e.next=6;break}return e.abrupt("return",t.$toast("Silakan masukkan sandi konfirmasi."));case 6:if(t.payForm.new_pwd===t.payForm.confirm_pwd){e.next=8;break}return e.abrupt("return",t.$toast("Kata sandi buat tidak konsisten dengan kata sandi konfirmasi."));case 8:return e.next=10,t.$axios.PayChange(t.payForm);case 10:n=e.sent,r=n.data,1===r.code?(t.$router.go(-1),t.ChangeTime("C_paymentDown","C_paymentDownNum","C_paymentDownOpen",!1,60,!0),a=1400,o=setInterval((function(){a-=200,t.$toast("✔ Kirim dengan sukses"),a||(a=1400,clearInterval(o))}),200)):t.$toast(r.msg);case 13:case"end":return e.stop()}}),e)})))()}}},f=u,p=(n("e426"),n("c701")),d=Object(p["a"])(f,r,a,!1,null,"0ba9f355",null);e["default"]=d.exports},aeb4:function(t,e,n){},b73f:function(t,e,n){var r=n("1c8b"),a=n("efe2"),o=n("da10"),i=n("aa6b").f,s=n("1e2c"),c=a((function(){i(1)})),u=!s||c;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},bf84:function(t,e,n){var r=n("1c8b"),a=n("1e2c"),o=n("8d44"),i=n("da10"),s=n("aa6b"),c=n("1bbd");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),a=s.f,u=o(r),f={},p=0;while(u.length>p)n=a(r,e=u[p++]),void 0!==n&&c(f,e,n);return f}})},c051:function(t,e,n){var r=n("da10"),a=n("b338").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?s(t):a(r(t))}},e426:function(t,e,n){"use strict";n("aeb4")},f3dd:function(t,e,n){"use strict";var r=n("1c8b"),a=n("d890"),o=n("6d7a"),i=n("9b9d"),s=n("1e2c"),c=n("c54b"),u=n("74cb"),f=n("efe2"),p=n("faa8"),d=n("74e7"),m=n("a719"),b=n("857c"),l=n("3553"),y=n("da10"),w=n("9f67"),g=n("38b9"),v=n("6d60"),h=n("cbab"),k=n("b338"),O=n("c051"),j=n("0a60"),_=n("aa6b"),P=n("d910"),S=n("ef71"),F=n("0fc1"),C=n("1944"),D=n("6d28"),$=n("7db2"),x=n("d5a8"),N=n("7e8b"),T=n("90fb"),E=n("4350"),I=n("6d51"),J=n("27b5"),K=n("b702"),M=n("5dfd").forEach,R=$("hidden"),U="Symbol",H="prototype",Q=T("toPrimitive"),W=K.set,q=K.getterFor(U),z=Object[H],A=a.Symbol,B=o("JSON","stringify"),G=_.f,L=P.f,V=O.f,X=S.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),rt=a.QObject,at=!rt||!rt[H]||!rt[H].findChild,ot=s&&f((function(){return 7!=v(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(z,e);r&&delete z[e],L(t,e,n),r&&t!==z&&L(z,e,r)}:L,it=function(t,e){var n=Y[t]=v(A[H]);return W(n,{type:U,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof A},ct=function(t,e,n){t===z&&ct(Z,e,n),b(t);var r=w(e,!0);return b(n),p(Y,r)?(n.enumerable?(p(t,R)&&t[R][r]&&(t[R][r]=!1),n=v(n,{enumerable:g(0,!1)})):(p(t,R)||L(t,R,g(1,{})),t[R][r]=!0),ot(t,r,n)):L(t,r,n)},ut=function(t,e){b(t);var n=y(e),r=h(n).concat(bt(n));return M(r,(function(e){s&&!pt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?v(t):ut(v(t),e)},pt=function(t){var e=w(t,!0),n=X.call(this,e);return!(this===z&&p(Y,e)&&!p(Z,e))&&(!(n||!p(this,e)||!p(Y,e)||p(this,R)&&this[R][e])||n)},dt=function(t,e){var n=y(t),r=w(e,!0);if(n!==z||!p(Y,r)||p(Z,r)){var a=G(n,r);return!a||!p(Y,r)||p(n,R)&&n[R][r]||(a.enumerable=!0),a}},mt=function(t){var e=V(y(t)),n=[];return M(e,(function(t){p(Y,t)||p(x,t)||n.push(t)})),n},bt=function(t){var e=t===z,n=V(e?Z:y(t)),r=[];return M(n,(function(t){!p(Y,t)||e&&!p(z,t)||r.push(Y[t])})),r};if(c||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===z&&n.call(Z,t),p(this,R)&&p(this[R],e)&&(this[R][e]=!1),ot(this,e,g(1,t))};return s&&at&&ot(z,e,{configurable:!0,set:n}),it(e,t)},C(A[H],"toString",(function(){return q(this).tag})),C(A,"withoutSetter",(function(t){return it(N(t),t)})),S.f=pt,P.f=ct,_.f=dt,k.f=O.f=mt,j.f=bt,E.f=function(t){return it(T(t),t)},s&&(L(A[H],"description",{configurable:!0,get:function(){return q(this).description}}),i||C(z,"propertyIsEnumerable",pt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:A}),M(h(nt),(function(t){I(t)})),r({target:U,stat:!0,forced:!c},{for:function(t){var e=String(t);if(p(tt,e))return tt[e];var n=A(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(p(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(l(t))}}),B){var lt=!c||f((function(){var t=A();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));r({target:"JSON",stat:!0,forced:lt},{stringify:function(t,e,n){var r,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(r=e,(m(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),a[1]=e,B.apply(null,a)}})}A[H][Q]||F(A[H],Q,A[H].valueOf),J(A,U),x[R]=!0},fe8a:function(t,e,n){var r=n("1c8b"),a=n("3553"),o=n("cbab"),i=n("efe2"),s=i((function(){o(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return o(a(t))}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fecf13a"],{"22dc":function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},"2e86":function(e,t,n){},4350:function(e,t,n){var o=n("90fb");t.f=o},6653:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"red"}},[n("back",{attrs:{title:"Red-Envelope",color:"#fff"}}),e.protocol?n("div",{staticClass:"msg"},[n("p",{staticClass:"fixed"},[n("span",[e._v(e._s(e.change?"Fixed":"Lucky")+" red envelope")]),n("span",{on:{click:function(t){e.change=!e.change}}},[e._v("Click to change >")])]),n("p",{staticClass:"same"},[n("span",[e._v("TotalBouns in Red-Envelope")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.Bouns,expression:"Bouns"}],attrs:{type:"number",placeholder:"0.00"},domProps:{value:e.Bouns},on:{input:function(t){t.target.composing||(e.Bouns=t.target.value)}}})]),n("p",{staticClass:"same"},[n("span",[e._v("Numbers of Red-Envelope")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.Numbers,expression:"Numbers"}],attrs:{type:"tel",placeholder:"0"},domProps:{value:e.Numbers},on:{input:function(t){t.target.composing||(e.Numbers=t.target.value)}}})]),n("p",{staticClass:"please"},[n("i",{staticClass:"iconfont icon-xunjia-fuben"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.numcode,expression:"numcode"}],attrs:{placeholder:"Please enter verification code"},domProps:{value:e.numcode},on:{input:function(t){t.target.composing||(e.numcode=t.target.value)}}}),n("span",{on:{click:function(t){e.open&&e.CountDown()}}},[e._v(e._s(e.RedCountdown?e.RedCountdownTime+"s":"OTP"))])]),e.NoNumber?n("div",{staticClass:"out"},[e._v(e._s(e.hint))]):e._e(),n("div",{staticClass:"btn"},[n("button",{staticClass:"put",on:{click:e.Put}},[e._v("Put In")]),n("button",{staticClass:"Records",on:{click:e.Records}},[e._v("Records")])])]):n("div",{staticClass:"protocol"},[e._m(0),n("p",{staticClass:"check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Agreen,expression:"Agreen"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.Agreen)?e._i(e.Agreen,null)>-1:e.Agreen},on:{change:function(t){var n=e.Agreen,o=t.target,r=!!o.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);o.checked?s<0&&(e.Agreen=n.concat([a])):s>-1&&(e.Agreen=n.slice(0,s).concat(n.slice(s+1)))}else e.Agreen=r}}}),e._v("Please read and sign the agreement carefully ")]),n("p",{staticClass:"btn",on:{click:e.SUBMIT}},[e._v("SUBMIT")])]),n("popup",{model:{value:e.showpup,callback:function(t){e.showpup=t},expression:"showpup"}},[n("div",{staticClass:"password"},[n("p",{staticClass:"Please"},[e._v(e._s(e.change?"Fixed":"Lucky")+" red envelope")]),n("div",{staticClass:"state"},[n("p",{staticClass:"title"},[n("i",{staticClass:"iconfont icon-lubi"}),e._v(e._s(e.Bouns))]),n("p",{staticClass:"article"},[e._v(" The transaction password can`t be the same as the login password. The platform will not be responsible for the loss caused by password theft ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.InputPassword,expression:"InputPassword"}],attrs:{type:"password",placeholder:"Please enter the payment password"},domProps:{value:e.InputPassword},on:{input:function(t){t.target.composing||(e.InputPassword=t.target.value)}}}),n("p",{staticClass:"btn"},[n("span",{staticClass:"Cancel",on:{click:e.Cancel}},[e._v("Cancel")]),n("span",{staticClass:"Confirm",on:{click:e.Confirm}},[e._v("Confirm")])])])])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"msg"},[n("div",{staticClass:"title"},[e._v("Application protocol")]),n("div",{staticClass:"openrule"},[e._v("Open the red envelope function user use agreement")]),n("pre",[e._v("        1.Before using this function,please read and understand this statement carefully.You can choose not to use this function,but if you use this function,your behavior will be deemed to fully recognize the use of this function.\n        2.Before using this function,please make sure that the login password and payment password you set are different.\n        3.Please take good care of your login password,payment password and other important information.The platform will not bear any legal responsibility for the losses caused to you by the information leakage.\n        4.Red envelope sending function: After the operation is successful, the red envelope will be displayed on the WinGO page within 40 seconds, and the display time will be 40 seconds. After 40 seconds, the red envelope will expire and the money will be automatically refunded to the account. If the red envelope is received within 40 seconds, it will disappear . All loggings can receive red envelopes, and the red envelopes received are deposited into the balance.\n        5.If the user uses this function in violation of national laws and regulations or infringes the legal rights and interests of any third party,the platform has the right to suspend or terminate the provision of services to the user.\n        6.If the user uses this function to engage in any illegal or infringing behavior,the user bears all responsibility,and the platform does not assume any legal and joint liability,so the platform or any third party causes any loss,and the user should bear all losses.\n        ")])])])}],a=(n("513c"),n("6a61"),n("327b")),s=n("6c6d"),i=(n("a691"),n("01e2")),c=(n("c53d"),n("d724")),u=n("9f3a"),l={components:{Popup:c["a"],Toast:i["a"]},data:function(){return{TimeID:null,change:!0,Bouns:"",Numbers:"",hint:"",NoNumber:!1,numcode:"",protocol:!1,Agreen:"",InputPassword:"",showpup:!1,type_red:"1",balance:0,open:!0,pay_pwd:""}},created:function(){this.init_MyData()},computed:Object(s["a"])({},Object(u["b"])(["RedCountdown","RedCountdownTime"])),methods:{ChangeTime:function(e,t,n,o){this.$store.commit(e,n),this.$store.commit(t,o),clearInterval(this.TimeID),this.open=!0},CountDown:function(){var e=this;this.$store.commit("C_RedDown",!0),this.$store.dispatch("Send_Code",""),this.open=!1,this.TimeID=setInterval((function(){e.$store.state.RedCountdownTime--,e.$store.state.RedCountdownTime=e.$store.state.RedCountdownTime<10?"0"+e.$store.state.RedCountdownTime:e.$store.state.RedCountdownTime,e.$store.state.RedCountdownTime<1&&e.ChangeTime("C_RedDown","C_RedDownTime",!1,60)}),1e3)},Put:function(){if(Number(this.Bouns)<.01)this.NoNumber=!0,this.hint="On average, each Red-Envelope should be more than (0.01)";else if(Number(this.Numbers)<1)this.NoNumber=!0,this.hint="Numbers of Red-Envelope below the minimum(1)";else if(this.numcode){if(!this.pay_pwd)return this.$router.push("/Modifypayment"),this.$toast("！Please set your payment password"),!1;this.NoNumber=!1,this.showpup=!0}else this.NoNumber=!0,this.hint="Please enter verification code."},Cancel:function(){this.showpup=!1,this.InputPassword=""},Confirm:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(clearInterval(e.TimeID),e.countDown=!1,e.countTime=60,e.type_red=e.change?"1":"2",e.InputPassword){t.next=6;break}return t.abrupt("return",e.$toast("！Please enter the payment password"));case 6:if(!(e.balance<e.Bouns)){t.next=8;break}return t.abrupt("return",e.$toast("！Sorry，your balance is running low"));case 8:return t.next=10,e.$axios.Post_sendred({type_red:e.type_red,amount:e.Bouns,number:e.Numbers,pay_pwd:e.InputPassword,code:e.numcode});case 10:n=t.sent,o=n.data,1===o.code?(e.ChangeTime("C_RedDown","C_RedDownTime",!1,60),e.showpup=!1,e.change=!0,e.Bouns="",e.Numbers="",e.numcode="",e.InputPassword="",e.$router.push("/winGo"),e.$store.commit("Ch_increment",2),localStorage.setItem("COUNT",2)):e.$toast(o.msg);case 13:case"end":return t.stop()}}),t)})))()},Records:function(){this.$router.push("/redEnvelopelist/".concat(1))},SUBMIT:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.Agreen){t.next=2;break}return t.abrupt("return",e.$toast("！Please read and sign the agreement carefully"));case 2:return t.next=4,e.$axios.PatchAgreered({agree:1});case 4:n=t.sent,o=n.data,1===o.code&&(e.protocol=e.Agreen);case 7:case"end":return t.stop()}}),t)})))()},init_MyData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.Home({recharge:""});case 2:n=t.sent,o=n.data,1===o.code&&(e.protocol=o.data[0].agree_red||0,e.balance=o.data[0].balance||0,e.pay_pwd=o.data[0].pay_pwd);case 5:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.ChangeTime("C_RedDown","C_RedDownTime",!1,60)}},d=l,f=(n("9a5a"),n("c701")),p=Object(f["a"])(d,o,r,!1,null,"2e740880",null);t["default"]=p.exports},"6c6d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("f3dd"),n("dbb3"),n("fe59"),n("b73f"),n("bf84"),n("fe8a"),n("08ba");var o=n("22dc");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"6d51":function(e,t,n){var o=n("1b99"),r=n("faa8"),a=n("4350"),s=n("d910").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});r(t,e)||s(t,e,{value:a.f(e)})}},"9a5a":function(e,t,n){"use strict";n("2e86")},b73f:function(e,t,n){var o=n("1c8b"),r=n("efe2"),a=n("da10"),s=n("aa6b").f,i=n("1e2c"),c=r((function(){s(1)})),u=!i||c;o({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(e,t){return s(a(e),t)}})},bf84:function(e,t,n){var o=n("1c8b"),r=n("1e2c"),a=n("8d44"),s=n("da10"),i=n("aa6b"),c=n("1bbd");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,o=s(e),r=i.f,u=a(o),l={},d=0;while(u.length>d)n=r(o,t=u[d++]),void 0!==n&&c(l,t,n);return l}})},c051:function(e,t,n){var o=n("da10"),r=n("b338").f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return r(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==a.call(e)?i(e):r(o(e))}},c53d:function(e,t,n){"use strict";n("94f7"),n("84e8"),n("24a9"),n("6494"),n("0c3e")},d724:function(e,t,n){"use strict";var o=n("42d3"),r=n("fc6b"),a=n("6a98"),s=n("ef3f"),i=Object(o["a"])("popup"),c=i[0],u=i[1];t["a"]=c({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var e=this,t=function(t){return function(n){return e.$emit(t,n)}};this.onClick=t("click"),this.onOpened=t("opened"),this.onClosed=t("closed")},render:function(){var e,t=arguments[0];if(this.shouldRender){var n=this.round,o=this.position,a=this.duration,i="center"===o,c=this.transition||(i?"van-fade":"van-popup-slide-"+o),l={};if(Object(r["c"])(a)){var d=i?"animationDuration":"transitionDuration";l[d]=a+"s"}return t("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],style:l,class:u((e={round:n},e[o]=o,e["safe-area-inset-bottom"]=this.safeAreaInsetBottom,e)),on:{click:this.onClick}},[this.slots(),this.closeable&&t(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},f3dd:function(e,t,n){"use strict";var o=n("1c8b"),r=n("d890"),a=n("6d7a"),s=n("9b9d"),i=n("1e2c"),c=n("c54b"),u=n("74cb"),l=n("efe2"),d=n("faa8"),f=n("74e7"),p=n("a719"),h=n("857c"),m=n("3553"),b=n("da10"),v=n("9f67"),g=n("38b9"),w=n("6d60"),y=n("cbab"),C=n("b338"),O=n("c051"),_=n("0a60"),P=n("aa6b"),k=n("d910"),j=n("ef71"),N=n("0fc1"),R=n("1944"),T=n("6d28"),I=n("7db2"),S=n("d5a8"),x=n("7e8b"),D=n("90fb"),$=n("4350"),A=n("6d51"),B=n("27b5"),E=n("b702"),M=n("5dfd").forEach,F=I("hidden"),J="Symbol",U="prototype",L=D("toPrimitive"),G=E.set,W=E.getterFor(J),z=Object[U],H=r.Symbol,Q=a("JSON","stringify"),Y=P.f,q=k.f,K=O.f,V=j.f,X=T("symbols"),Z=T("op-symbols"),ee=T("string-to-symbol-registry"),te=T("symbol-to-string-registry"),ne=T("wks"),oe=r.QObject,re=!oe||!oe[U]||!oe[U].findChild,ae=i&&l((function(){return 7!=w(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var o=Y(z,t);o&&delete z[t],q(e,t,n),o&&e!==z&&q(z,t,o)}:q,se=function(e,t){var n=X[e]=w(H[U]);return G(n,{type:J,tag:e,description:t}),i||(n.description=t),n},ie=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},ce=function(e,t,n){e===z&&ce(Z,t,n),h(e);var o=v(t,!0);return h(n),d(X,o)?(n.enumerable?(d(e,F)&&e[F][o]&&(e[F][o]=!1),n=w(n,{enumerable:g(0,!1)})):(d(e,F)||q(e,F,g(1,{})),e[F][o]=!0),ae(e,o,n)):q(e,o,n)},ue=function(e,t){h(e);var n=b(t),o=y(n).concat(he(n));return M(o,(function(t){i&&!de.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?w(e):ue(w(e),t)},de=function(e){var t=v(e,!0),n=V.call(this,t);return!(this===z&&d(X,t)&&!d(Z,t))&&(!(n||!d(this,t)||!d(X,t)||d(this,F)&&this[F][t])||n)},fe=function(e,t){var n=b(e),o=v(t,!0);if(n!==z||!d(X,o)||d(Z,o)){var r=Y(n,o);return!r||!d(X,o)||d(n,F)&&n[F][o]||(r.enumerable=!0),r}},pe=function(e){var t=K(b(e)),n=[];return M(t,(function(e){d(X,e)||d(S,e)||n.push(e)})),n},he=function(e){var t=e===z,n=K(t?Z:b(e)),o=[];return M(n,(function(e){!d(X,e)||t&&!d(z,e)||o.push(X[e])})),o};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=x(e),n=function(e){this===z&&n.call(Z,e),d(this,F)&&d(this[F],t)&&(this[F][t]=!1),ae(this,t,g(1,e))};return i&&re&&ae(z,t,{configurable:!0,set:n}),se(t,e)},R(H[U],"toString",(function(){return W(this).tag})),R(H,"withoutSetter",(function(e){return se(x(e),e)})),j.f=de,k.f=ce,P.f=fe,C.f=O.f=pe,_.f=he,$.f=function(e){return se(D(e),e)},i&&(q(H[U],"description",{configurable:!0,get:function(){return W(this).description}}),s||R(z,"propertyIsEnumerable",de,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),M(y(ne),(function(e){A(e)})),o({target:J,stat:!0,forced:!c},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var n=H(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!i},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:fe}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pe,getOwnPropertySymbols:he}),o({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(e){return _.f(m(e))}}),Q){var me=!c||l((function(){var e=H();return"[null]"!=Q([e])||"{}"!=Q({a:e})||"{}"!=Q(Object(e))}));o({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var o,r=[e],a=1;while(arguments.length>a)r.push(arguments[a++]);if(o=t,(p(t)||void 0!==e)&&!ie(e))return f(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!ie(t))return t}),r[1]=t,Q.apply(null,r)}})}H[U][L]||N(H[U],L,H[U].valueOf),B(H,J),S[F]=!0},fe8a:function(e,t,n){var o=n("1c8b"),r=n("3553"),a=n("cbab"),s=n("efe2"),i=s((function(){a(1)}));o({target:"Object",stat:!0,forced:i},{keys:function(e){return a(r(e))}})}}]);
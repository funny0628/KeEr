(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71842cd9"],{"0201":function(e,t,n){"use strict";n("d250")},"0d7a":function(e,t,n){"use strict";var r=n("b2a2"),o=n("8a1c"),i=n("857c"),s=n("2732"),a=n("ef4c"),c=n("38eb"),l=n("d88d"),u=n("59da"),d=n("5139"),h=n("efe2"),f=[].push,p=Math.min,m=4294967295,g=!h((function(){return!RegExp(m,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),i=void 0===n?m:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);var a,c,l,u=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,h+"g");while(a=d.call(g,r)){if(c=g.lastIndex,c>p&&(u.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&f.apply(u,a.slice(1)),l=a[0].length,p=c,u.length>=i))break;g.lastIndex===a.index&&g.lastIndex++}return p===r.length?!l&&g.test("")||u.push(""):u.push(r.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var s=n(r,e,this,o,r!==t);if(s.done)return s.value;var d=i(e),h=String(this),f=a(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new f(g?d:"^(?:"+d.source+")",b),w=void 0===o?m:o>>>0;if(0===w)return[];if(0===h.length)return null===u(y,h)?[h]:[];var k=0,R=0,C=[];while(R<h.length){y.lastIndex=g?R:0;var x,S=u(y,g?h:h.slice(R));if(null===S||(x=p(l(y.lastIndex+(g?0:R)),h.length))===k)R=c(h,R,v);else{if(C.push(h.slice(k,R)),C.length===w)return C;for(var O=1;O<=S.length-1;O++)if(C.push(S[O]),C.length===w)return C;R=k=x}}return C.push(h.slice(k)),C}]}),!g)},"22dc":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"22ef":function(e,t,n){"use strict";var r=n("efe2");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"38eb":function(e,t,n){"use strict";var r=n("f62c").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},4350:function(e,t,n){var r=n("90fb");t.f=r},5139:function(e,t,n){"use strict";var r=n("99ad"),o=n("22ef"),i=RegExp.prototype.exec,s=String.prototype.replace,a=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(a=function(e){var t,n,o,a,d=this,h=l&&d.sticky,f=r.call(d),p=d.source,m=0,g=e;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,m++),n=new RegExp("^(?:"+p+")",f)),u&&(n=new RegExp("^"+p+"$(?!\\s)",f)),c&&(t=d.lastIndex),o=i.call(h?n:d,g),h?o?(o.input=o.input.slice(m),o[0]=o[0].slice(m),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:c&&o&&(d.lastIndex=d.global?o.index+o[0].length:t),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),e.exports=a},"59da":function(e,t,n){var r=n("2118"),o=n("5139");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"6c6d":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("f3dd"),n("dbb3"),n("fe59"),n("b73f"),n("bf84"),n("fe8a"),n("08ba");var r=n("22dc");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"6d51":function(e,t,n){var r=n("1b99"),o=n("faa8"),i=n("4350"),s=n("d910").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||s(t,e,{value:i.f(e)})}},"84c2":function(e,t,n){var r=n("1e2c"),o=n("d890"),i=n("e8d6"),s=n("7063"),a=n("d910").f,c=n("b338").f,l=n("8a1c"),u=n("99ad"),d=n("22ef"),h=n("1944"),f=n("efe2"),p=n("b702").set,m=n("403f"),g=n("90fb"),v=g("match"),b=o.RegExp,y=b.prototype,w=/a/g,k=/a/g,R=new b(w)!==w,C=d.UNSUPPORTED_Y,x=r&&i("RegExp",!R||C||f((function(){return k[v]=!1,b(w)!=w||b(k)==k||"/a/i"!=b(w,"i")})));if(x){var S=function(e,t){var n,r=this instanceof S,o=l(e),i=void 0===t;if(!r&&o&&e.constructor===S&&i)return e;R?o&&!i&&(e=e.source):e instanceof S&&(i&&(t=u.call(e)),e=e.source),C&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var a=s(R?new b(e,t):b(e,t),r?this:y,S);return C&&n&&p(a,{sticky:n}),a},O=function(e){e in S||a(S,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},I=c(b),P=0;while(I.length>P)O(I[P++]);y.constructor=S,S.prototype=y,h(o,"RegExp",S)}m("RegExp")},"8a1c":function(e,t,n){var r=n("a719"),o=n("2118"),i=n("90fb"),s=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},"9cf3":function(e,t,n){"use strict";var r=n("b2a2"),o=n("857c"),i=n("2732"),s=n("9d5c"),a=n("59da");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=o(e),c=String(this),l=i.lastIndex;s(l,0)||(i.lastIndex=0);var u=a(i,c);return s(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))},"9d5c":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},b2a2:function(e,t,n){"use strict";n("e35a");var r=n("1944"),o=n("efe2"),i=n("90fb"),s=n("5139"),a=n("0fc1"),c=i("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var p=i(e),m=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=m&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!m||!g||"replace"===e&&(!l||!u||h)||"split"===e&&!f){var v=/./[p],b=n(p,""[e],(function(e,t,n,r,o){return t.exec===s?m&&!o?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),y=b[0],w=b[1];r(String.prototype,e,y),r(RegExp.prototype,p,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&a(RegExp.prototype[p],"sham",!0)}},b73f:function(e,t,n){var r=n("1c8b"),o=n("efe2"),i=n("da10"),s=n("aa6b").f,a=n("1e2c"),c=o((function(){s(1)})),l=!a||c;r({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(i(e),t)}})},bf84:function(e,t,n){var r=n("1c8b"),o=n("1e2c"),i=n("8d44"),s=n("da10"),a=n("aa6b"),c=n("1bbd");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),o=a.f,l=i(r),u={},d=0;while(l.length>d)n=o(r,t=l[d++]),void 0!==n&&c(u,t,n);return u}})},c051:function(e,t,n){var r=n("da10"),o=n("b338").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return o(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==i.call(e)?a(e):o(r(e))}},c53d:function(e,t,n){"use strict";n("94f7"),n("84e8"),n("24a9"),n("6494"),n("0c3e")},d250:function(e,t,n){},d724:function(e,t,n){"use strict";var r=n("42d3"),o=n("fc6b"),i=n("6a98"),s=n("ef3f"),a=Object(r["a"])("popup"),c=a[0],l=a[1];t["a"]=c({mixins:[Object(i["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var e=this,t=function(t){return function(n){return e.$emit(t,n)}};this.onClick=t("click"),this.onOpened=t("opened"),this.onClosed=t("closed")},render:function(){var e,t=arguments[0];if(this.shouldRender){var n=this.round,r=this.position,i=this.duration,a="center"===r,c=this.transition||(a?"van-fade":"van-popup-slide-"+r),u={};if(Object(o["c"])(i)){var d=a?"animationDuration":"transitionDuration";u[d]=i+"s"}return t("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],style:u,class:l((e={round:n},e[r]=r,e["safe-area-inset-bottom"]=this.safeAreaInsetBottom,e)),on:{click:this.onClick}},[this.slots(),this.closeable&&t(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},e35a:function(e,t,n){"use strict";var r=n("1c8b"),o=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},eecd:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"my"},on:{click:function(t){return t.stopPropagation(),e.Close(t)}}},[n("div",{attrs:{id:"login"}},[n("div",{staticClass:"top"},[n("span",{class:{active:e.show},on:{click:function(t){return e.Active("Sign")}}},[e._v("Sign in")]),n("span",{staticClass:"line"},[e._v("|")]),n("span",{class:{active:!e.show},on:{click:function(t){return e.Active("Register")}}},[e._v("Register")])]),n("transition",{attrs:{name:"slide-Re"}},[e.show?n("div",{staticClass:"Signform"},[n("div",{staticClass:"msg"},[n("p",{staticClass:"name",on:{click:function(t){return t.stopPropagation(),e.showClose(t)}}},[n("i",{staticClass:"iconfont icon-morentouxiang"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.account,expression:"loginForm.account"}],attrs:{maxlength:"10",type:"tel",placeholder:"Mobile Number"},domProps:{value:e.loginForm.account},on:{blur:function(t){return e.Input("account")},input:function(t){t.target.composing||e.$set(e.loginForm,"account",t.target.value)}}}),e.qingchu?n("i",{staticClass:"iconfont icon-qingchu",on:{click:function(t){return t.stopPropagation(),e.ClearLoginName(t)}}}):e._e()]),n("p",{staticClass:"password"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.loginForm.password},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"password",t.target.value)}}})])]),n("p",{staticClass:"forget",on:{click:e.ToResetPassword}},[e._v("Forget password")]),n("div",{staticClass:"button"},[n("button",{staticClass:"btnlogin",on:{click:e.Login}},[e._v("Login Immediately")]),n("button",{staticClass:"btnhome",on:{click:e.Gohome}},[e._v("Back Home")])])]):e._e()]),n("transition",{attrs:{name:"slide-fade"}},[e.show?e._e():n("div",{staticClass:"Signform"},[n("div",{staticClass:"msg"},[n("p",{staticClass:"name"},[n("i",{staticClass:"iconfont icon-morentouxiang"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.RegisterForm.account,expression:"RegisterForm.account"}],attrs:{maxlength:"10",type:"tel",placeholder:"Registered Mobile Number"},domProps:{value:e.RegisterForm.account},on:{blur:function(t){return e.InputRe("account")},input:function(t){t.target.composing||e.$set(e.RegisterForm,"account",t.target.value)}}})]),n("p",{staticClass:"password"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.RegisterForm.password,expression:"RegisterForm.password"}],attrs:{type:"password",placeholder:"Create Password"},domProps:{value:e.RegisterForm.password},on:{input:function(t){t.target.composing||e.$set(e.RegisterForm,"password",t.target.value)}}})]),n("p",{staticClass:"Conpassword"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.RegisterForm.confirm_pwd,expression:"RegisterForm.confirm_pwd"}],attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.RegisterForm.confirm_pwd},on:{input:function(t){t.target.composing||e.$set(e.RegisterForm,"confirm_pwd",t.target.value)}}})]),n("p",{staticClass:"vercode"},[n("i",{staticClass:"iconfont icon-xinxi"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.RegisterForm.code,expression:"RegisterForm.code"}],attrs:{type:"text",placeholder:"Verification code"},domProps:{value:e.RegisterForm.code},on:{input:function(t){t.target.composing||e.$set(e.RegisterForm,"code",t.target.value)}}}),n("span",{on:{click:function(t){e.open&&e.CountDown()}}},[e._v(e._s(e.RegisterDown?e.RegisterTime+"s":"OTP"))])]),n("p",{staticClass:"code"},[n("i",{staticClass:"iconfont icon-icon"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.RegisterForm.invite_code,expression:"RegisterForm.invite_code"}],attrs:{disabled:e.codedisabled,type:"text",placeholder:"Recommendation code"},domProps:{value:e.RegisterForm.invite_code},on:{input:function(t){t.target.composing||e.$set(e.RegisterForm,"invite_code",t.target.value)}}})])]),n("p",{staticClass:"Policy"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkConfirm,expression:"checkConfirm"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkConfirm)?e._i(e.checkConfirm,null)>-1:e.checkConfirm},on:{change:function(t){var n=e.checkConfirm,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.checkConfirm=n.concat([i])):s>-1&&(e.checkConfirm=n.slice(0,s).concat(n.slice(s+1)))}else e.checkConfirm=o}}}),e._v(" I agree the "),n("i",{on:{click:e.ShowPup}},[e._v("Privacy Policy")])]),n("div",{staticClass:"button"},[n("button",{staticClass:"btnlogin zhuce",attrs:{id:"Register"},on:{click:e.Registery}},[e._v("Register")]),n("button",{staticClass:"btnhome btn",on:{click:e.Gohome}},[e._v("Back Home")])]),n("popup",{model:{value:e.Agreen,callback:function(t){e.Agreen=t},expression:"Agreen"}},[n("div",{staticClass:"xiazhushow"},[n("div",{staticClass:"top"},[n("pre",[e._v("                "),n("i",{staticClass:"title"},[e._v("Risk Disclosure Agreement")]),e._v("\n                "),n("i",{staticClass:"tag"},[e._v("Chapter 1.Booking/Collection Description")]),e._v("\n                  Prepayment Booking/Recycling Customer should read and understand the business content carefully before making prepayment bookings (prepayment lock price, payment settlement and shipment) /recovery or repurchase (prepayment lock price, shipping payment) before making prepayment bookings to Retty-Shop:\n                  1. Before making an appointment/restoring the prepayment business, the customer should complete the real name authentication in the mall and ensure that the name, ID number, bank account number, delivery address and other information filled in are true, accurate and valid; Otherwise, the user will be liable for the consequences of false information.\n                  2. Customers can order gold and silver products in advance at the shopping centre. Orders can be cancelled by 01:30 a.m. on the same Saturday. When the customer pays the end payment, the mall receives the final payment and arranges the delivery. If the customer does not pay the final pick-up by 01:30 a.m. on Saturday, the customer is deemed to have made the last offer before the inventory and the booking is cancelled.\n                  3. Customers can make an appointment to recycle gold and silver products purchased at the gold point. Pre-purchase recovery requires a credit margin and confirmation of actual possession of gold and silver products purchased from the mall. Customers can cancel their reservation at any time before 01:30 on Saturday and the credit mark will be refunded after deducting the increase or decrease in the value of the goods within the corresponding time.\n                  If the customer fails to deliver the goods to a shopping mall or shopping center at the designated collection point by Saturday within the same week, or if the goods delivered do not meet the recycling standard test, the customer will be deemed to have cancelled the reservation recovery and will bear the logistics and testing costs.\n                  4. Counting time: Daily 01:30-05:30 for the mall warehouse inventory time. During the inventory period, the mall stops accepting advance payments for reservations/receipts.\n                  5. For further details, please refer to the Business Guidelines in the front page of the mall, Understanding Retty Shop.\n                "),n("i",{staticClass:"tag"},[e._v("Chapter 2 Reveals the business model of Retty-Shop")]),e._v("\n                  Booking/repurchase orders, the business model for clearing balance shipments, uncertainties such as potential benefits and potential risks to the value of its merchandise due to real-time fluctuations in the gold and silver market, and the extent to which booking/repo risk stake is understood for customer booking/repo risk, Risk control ability and understanding of related products have high requirements. Customer selects pre-payment booking/repurchase, fully informed on behalf of the customer and understand the risks of prepayments/repurchase business and agree to and accept Retty-Shop current and future relevant booking/repurchase business processes and management systems (collectively, the Process Systems) to develop, modify and publish. This Risk Disclosure (Disclosure) is intended to fully disclose to the Client the risk of the prepayment booking/repurchase business and is intended only to provide reference for the client to assess and determine its own risk tolerance. The risk disclosures described in this disclosure are for example only. All risk factors associated with Retty Shop Advance Booking/Repurchase are not detailed. Customers should also carefully understand and understand other possible risk factors before starting or participating in Retty-Shop pre-payment booking/repurchase business. If the customer is not aware of or is not aware of this disclosure, they should consult Retty-Shop Customer Service or the relevant regional service provider in a timely manner. If the Customer ultimately clicks on Risk Disclosure, it is deemed that the Customer fully agrees and accepts the full contents of this disclosure.\n                "),n("i",{staticClass:"tag"},[e._v(" Warm tips")]),e._v("\n                1.Minors under the age of 18 are not permitted to participate in The Retty-Shop Advance Booking/Recycling.\n                2.Retty-Shop Advance Booking/Repo is only available to customers who meet all of the following criteria:\n                ①　Natural persons with full civil capacity, legal persons of enterprises or other economic organizations registered in accordance with the law.\n                ②　To fully understand all risks associated with Retty Shop Advance Booking/Repurchase business and have a certain risk tolerance.\n                ③　Have a certain understanding of gold and silver and its products:\n                A. Policy-related risk disclosure, such as changes in national laws, regulations and policies, contingency measures, implementation of appropriate regulatory measures, Retty-Shop regulatory system and changes in management methods and regulations, etc., all risks that may affect customer bookings/repurchases, etc., the customer must bear the losses incurred.\n                B. Price fluctuations, gold, silver and other precious metals and their accessories are affected by a variety of factors, such as the international economic situation, foreign exchange, related market trends, supply and demand, and political situation and energy prices. The pricing mechanism for gold, silver and other precious metals products is very complex, making it difficult for customers to fully grasp in practice, so decisions such as advance booking/buyback are possible Mistakes, if the risk cannot be effectively controlled, may suffer losses and the customer must bear all the losses incurred as a result.\n                ④　Retty-Shop has enabled the provision of services through electronic communication technology and Internet technology. Communication services and hardware and software services are provided by different vendors and may be at risk in terms of quality and stability. Interruptions or delays due to communication or network failures may affect customer prepayment bookings/repurchases. In addition, the customers computer system may be attacked by viruses and/or cyber-hackers, resulting in the customers advance payment booking/repurchase not being properly and/or timely. There is also a risk that the above uncertainties may affect the customer’s advance payment booking/repurchase.\n                A. The price quoted by the Retty-Shop Prepayment Booking/Repo System is based on the systems real-time trading price and may differ slightly from the commodity prices in other markets.\n                Retty-Shop cannot guarantee that the above prepayment booking//repurchase price is fully consistent with other markets.\n                B. At Retty-Shop, once the customers pre-payment booking/repurchase application submitted through the online terminal is completed, it cannot be withdrawn and the customer must accept the risks associated with such a subscription.\n                C. Retty-Shop prohibits regional service providers and their staff from providing any profit guarantee to customers, from engaging in prepaid bookings/repurchases on behalf of customers, or from sharing profits or risks with customers. Customer should be aware that any profit guarantee or commitment that Retty-Shop advance booking/repurchase does not have a loss, profit share or risk-sharing is impossible, unfounded, and incorrect.\n                D. The customers pre-paid booking / repurchase application must be based on the customers own decision. Retty-Shop and regional service providers and employees do not provide booking / buyback to the client, nor does it constitute any commitment if the client makes a booking / buyback decision accordingly.\n                E. In advance booking / buyback process, there may be occasional apparent errors in the offer.\n                ⑤　RISK-AGREEMENT\n                Typhoons, floods, fires, wars, disturbances, rule revisions, changes or adjustments in government regulatory policies and regulatory requirements, and electricity, To ensure that you fully understand the relevant provisions and risks of booking / repurchase business, customers should be based on their own booking experience, booking / repurchase / purchase of commodities, read all the contents of the advance booking / repurchase notice carefully, and fully understand and agree to all the contents, I am willing to take all risks to start or participate in Retty-Shop. In case of above mentioned condition I shall be him-self liable to any financial as well as monitory loss. By accepting this I shall be no more eligible to claims any statutory legal benefits given to Indian citizen by Law of India.\n              ")])]),n("div",{staticClass:"fixed"},[n("p",{staticClass:"fixedmsg"},[e._v(" Note: I have carefully read all contents of this app including Privacy Statement, Risk Disclosure Agreement and Risk Agreement and I am agreed to continue with my own risk. ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkConfirm,expression:"checkConfirm"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkConfirm)?e._i(e.checkConfirm,null)>-1:e.checkConfirm},on:{change:function(t){var n=e.checkConfirm,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.checkConfirm=n.concat([i])):s>-1&&(e.checkConfirm=n.slice(0,s).concat(n.slice(s+1)))}else e.checkConfirm=o}}}),n("button",{class:{active:e.checkConfirm},on:{click:function(t){e.checkConfirm&&e.ConFirm()}}},[e._v(" Confirm ")])])])])],1)])],1)])},o=[],i=(n("fe59"),n("ecb4"),n("84c2"),n("e35a"),n("1c2e"),n("9cf3"),n("0d7a"),n("08ba"),n("6a61"),n("327b")),s=n("6c6d"),a=(n("a691"),n("01e2")),c=(n("c53d"),n("d724")),l=n("9f3a"),u={components:{Popup:c["a"],Toast:a["a"]},data:function(){return{show:!0,loginForm:{account:"",password:""},RegisterForm:{account:"",password:"",confirm_pwd:"",code:"",invite_code:"",channel_id:31},codedisabled:!1,Agreen:!1,checkConfirm:!1,qingchu:!1,timeID:null,open:!0,reg:new RegExp("^[0-9]*$")}},created:function(){var e=this;this.currenthost=window.location.host,localStorage.getItem("IsUserName")&&(this.show=!0,this.loginForm.account=JSON.parse(localStorage.getItem("IsUserName")).account);var t=window.location.search;if(-1!==t.indexOf("&")){var n=t.split("&");n.forEach((function(t){e.formatValue(t)}))}else this.formatValue(t)},computed:Object(s["a"])({},Object(l["b"])(["RegisterDown","RegisterTime"])),methods:{Input:function(e){if("account"===e){if(!this.loginForm[e])return this.$toast("! Please enter your cell phone number.");if(this.loginForm[e].length<10||!this.reg.test(this.loginForm[e]))return this.$toast("! Must be a 10 digit number.")}},InputRe:function(e){if("account"===e){if(!this.RegisterForm[e])return this.$toast("! Please enter your cell phone number.");if(this.RegisterForm[e].length<10||!this.reg.test(this.RegisterForm[e]))return this.$toast("! Must be a 10 digit number.")}},ChangeTime:function(e,t,n,r){this.$store.commit(e,n),this.$store.commit(t,r),clearInterval(this.timeID),this.open=!0},CountDown:function(){var e=this;return this.RegisterForm.account?this.RegisterForm.account.length<10?this.$toast("! Must be a 10 digit number."):(this.$store.commit("C_RegisterDown",!0),this.$store.dispatch("Send_Code",this.RegisterForm.account),this.open=!1,void(this.timeID=setInterval((function(){e.$store.state.RegisterTime--,e.$store.state.RegisterTime=e.$store.state.RegisterTime<10?"0"+e.$store.state.RegisterTime:e.$store.state.RegisterTime,e.$store.state.RegisterTime<1&&e.ChangeTime("C_RegisterDown","C_RegisterDownNum",!1,60)}),1e3))):this.$toast("! Please enter your cell phone number.")},showClose:function(){this.qingchu=!0},Close:function(){this.qingchu=!1},ClearLoginName:function(){this.loginForm.account="",this.qingchu=!1},formatValue:function(e){-1!==e.indexOf("invite_code")&&(localStorage.getItem("IsUserName")?this.show=!0:this.show=!1,this.codedisabled=!0,this.RegisterForm.invite_code=e.split("=")[1]),-1!==e.indexOf("channel_id")&&(this.RegisterForm.channel_id=e.split("=")[1])},ConFirm:function(){this.checkConfirm=!0,this.Agreen=!1},ShowPup:function(){this.Agreen=!0},Active:function(e){"Register"===e?(this.show=!1,this.checkConfirm=!1):this.show=!0},ToResetPassword:function(){this.$router.push("/ResetPassword")},SuccessLogin:function(){"app.inors.in"===this.currenthost?(this.$router.push("/winGo"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.$store.dispatch("GetRedAsync")):(this.$router.push("/home"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.$store.dispatch("GetRedAsync"))},Login:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loginForm.account){t.next=2;break}return t.abrupt("return",e.$toast("! Please enter your cell phone number."));case 2:if(e.loginForm.password){t.next=4;break}return t.abrupt("return",e.$toast("! Please enter your password."));case 4:return t.next=6,e.$axios.Login(e.loginForm);case 6:n=t.sent,r=n.data,1===r.code?(o=Object(s["a"])({},e.loginForm),delete o.password,localStorage.setItem("IsUserName",JSON.stringify(o)),localStorage.setItem("HASCOOKIE",!0),e.SuccessLogin()):e.$toast(r.msg);case 9:case"end":return t.stop()}}),t)})))()},Gohome:function(){"app.inors.in"===this.currenthost?(this.$router.push("/winGo"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.checkConfirm=!1):(this.$router.push("/home"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.checkConfirm=!1)},Registery:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.RegisterForm.account){t.next=2;break}return t.abrupt("return",e.$toast("! Please enter your cell phone number."));case 2:if(e.RegisterForm.password){t.next=4;break}return t.abrupt("return",e.$toast("! Please enter your password."));case 4:if(e.RegisterForm.confirm_pwd){t.next=6;break}return t.abrupt("return",e.$toast("! Please enter the confirm password."));case 6:if(e.RegisterForm.password===e.RegisterForm.confirm_pwd){t.next=8;break}return t.abrupt("return",e.$toast("The create password is inconsistent with the confirm password."));case 8:if(e.RegisterForm.code){t.next=10;break}return t.abrupt("return",e.$toast("! Please enter the verification code."));case 10:if(e.checkConfirm){t.next=15;break}return e.$toast("! Please agree to the Privacy Policy first."),t.abrupt("return",!1);case 15:return t.next=17,e.$axios.Register(e.RegisterForm);case 17:n=t.sent,r=n.data,1===r.code?(e.show=!0,e.checkConfirm=!1,e.ChangeTime("C_RegisterDown","C_RegisterDownNum",!1,60),o={account:e.RegisterForm.account},localStorage.setItem("IsUserName",JSON.stringify(o)),localStorage.setItem("COUNT",0),localStorage.setItem("HASCOOKIE",!0),e.SuccessLogin(),"app.inors.in"===window.location.host&&(i=document.getElementsByClassName("zhuce")[0],i.addEventListener=e.tongji())):e.$toast(r.msg);case 20:case"end":return t.stop()}}),t)})))()},tongji:function(){dataLayer.push({event:"button1-click"})}},beforeDestroy:function(){this.ChangeTime("C_RegisterDown","C_RegisterDownNum",!1,60)}},d=u,h=(n("0201"),n("2c07")),f=Object(h["a"])(d,r,o,!1,null,"dab61462",null);t["default"]=f.exports},f3dd:function(e,t,n){"use strict";var r=n("1c8b"),o=n("d890"),i=n("6d7a"),s=n("9b9d"),a=n("1e2c"),c=n("c54b"),l=n("74cb"),u=n("efe2"),d=n("faa8"),h=n("74e7"),f=n("a719"),p=n("857c"),m=n("3553"),g=n("da10"),v=n("9f67"),b=n("38b9"),y=n("6d60"),w=n("cbab"),k=n("b338"),R=n("c051"),C=n("0a60"),x=n("aa6b"),S=n("d910"),O=n("ef71"),I=n("0fc1"),P=n("1944"),_=n("6d28"),F=n("7db2"),E=n("d5a8"),$=n("7e8b"),A=n("90fb"),N=n("4350"),T=n("6d51"),j=n("27b5"),D=n("b702"),B=n("5dfd").forEach,U=F("hidden"),L="Symbol",q="prototype",G=A("toPrimitive"),M=D.set,J=D.getterFor(L),K=Object[q],z=o.Symbol,H=i("JSON","stringify"),V=x.f,W=S.f,Y=R.f,Q=O.f,X=_("symbols"),Z=_("op-symbols"),ee=_("string-to-symbol-registry"),te=_("symbol-to-string-registry"),ne=_("wks"),re=o.QObject,oe=!re||!re[q]||!re[q].findChild,ie=a&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=V(K,t);r&&delete K[t],W(e,t,n),r&&e!==K&&W(K,t,r)}:W,se=function(e,t){var n=X[e]=y(z[q]);return M(n,{type:L,tag:e,description:t}),a||(n.description=t),n},ae=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof z},ce=function(e,t,n){e===K&&ce(Z,t,n),p(e);var r=v(t,!0);return p(n),d(X,r)?(n.enumerable?(d(e,U)&&e[U][r]&&(e[U][r]=!1),n=y(n,{enumerable:b(0,!1)})):(d(e,U)||W(e,U,b(1,{})),e[U][r]=!0),ie(e,r,n)):W(e,r,n)},le=function(e,t){p(e);var n=g(t),r=w(n).concat(pe(n));return B(r,(function(t){a&&!de.call(n,t)||ce(e,t,n[t])})),e},ue=function(e,t){return void 0===t?y(e):le(y(e),t)},de=function(e){var t=v(e,!0),n=Q.call(this,t);return!(this===K&&d(X,t)&&!d(Z,t))&&(!(n||!d(this,t)||!d(X,t)||d(this,U)&&this[U][t])||n)},he=function(e,t){var n=g(e),r=v(t,!0);if(n!==K||!d(X,r)||d(Z,r)){var o=V(n,r);return!o||!d(X,r)||d(n,U)&&n[U][r]||(o.enumerable=!0),o}},fe=function(e){var t=Y(g(e)),n=[];return B(t,(function(e){d(X,e)||d(E,e)||n.push(e)})),n},pe=function(e){var t=e===K,n=Y(t?Z:g(e)),r=[];return B(n,(function(e){!d(X,e)||t&&!d(K,e)||r.push(X[e])})),r};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=$(e),n=function(e){this===K&&n.call(Z,e),d(this,U)&&d(this[U],t)&&(this[U][t]=!1),ie(this,t,b(1,e))};return a&&oe&&ie(K,t,{configurable:!0,set:n}),se(t,e)},P(z[q],"toString",(function(){return J(this).tag})),P(z,"withoutSetter",(function(e){return se($(e),e)})),O.f=de,S.f=ce,x.f=he,k.f=R.f=fe,C.f=pe,N.f=function(e){return se(A(e),e)},a&&(W(z[q],"description",{configurable:!0,get:function(){return J(this).description}}),s||P(K,"propertyIsEnumerable",de,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),B(w(ne),(function(e){T(e)})),r({target:L,stat:!0,forced:!c},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var n=z(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!ae(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:ue,defineProperty:ce,defineProperties:le,getOwnPropertyDescriptor:he}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(m(e))}}),H){var me=!c||u((function(){var e=z();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));r({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var r,o=[e],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=t,(f(t)||void 0!==e)&&!ae(e))return h(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ae(t))return t}),o[1]=t,H.apply(null,o)}})}z[q][G]||I(z[q],G,z[q].valueOf),j(z,L),E[U]=!0},f62c:function(e,t,n){var r=n("3da3"),o=n("2732"),i=function(e){return function(t,n){var i,s,a=String(o(t)),c=r(n),l=a.length;return c<0||c>=l?e?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):i:e?a.slice(c,c+2):s-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},fe8a:function(e,t,n){var r=n("1c8b"),o=n("3553"),i=n("cbab"),s=n("efe2"),a=s((function(){i(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return i(o(e))}})}}]);
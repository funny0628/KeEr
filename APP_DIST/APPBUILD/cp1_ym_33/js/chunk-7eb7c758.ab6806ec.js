(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eb7c758"],{"22dc":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"22ef":function(e,t,n){"use strict";var r=n("efe2");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},4350:function(e,t,n){var r=n("90fb");t.f=r},5139:function(e,t,n){"use strict";var r=n("99ad"),o=n("22ef"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=c||l||u;f&&(s=function(e){var t,n,o,s,f=this,p=u&&f.sticky,d=r.call(f),m=f.source,b=0,h=e;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(m="(?: "+m+")",h=" "+h,b++),n=new RegExp("^(?:"+m+")",d)),l&&(n=new RegExp("^"+m+"$(?!\\s)",d)),c&&(t=f.lastIndex),o=a.call(p?n:f,h),p?o?(o.input=o.input.slice(b),o[0]=o[0].slice(b),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:c&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),l&&o&&o.length>1&&i.call(o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),e.exports=s},"553e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mybankcard"}},[n("div",{staticClass:"count"},[n("back",{attrs:{title:"UPI ID",color:"#fff"}}),n("div",{staticClass:"addform"},[n("ul",[n("li",[n("p",[e._v("Actual name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.name,expression:"bankForm.name"}],attrs:{type:"text",maxlength:"64",placeholder:"Please enter the actual name"},domProps:{value:e.bankForm.name},on:{blur:function(t){return e.Input("name")},input:function(t){t.target.composing||e.$set(e.bankForm,"name",t.target.value)}}})]),n("li",[n("p",[e._v("UPI ID:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.upi,expression:"bankForm.upi"}],attrs:{type:"text",maxlength:"64",placeholder:"Please enter the UPI Address"},domProps:{value:e.bankForm.upi},on:{blur:function(t){return e.Input("upi")},input:function(t){t.target.composing||e.$set(e.bankForm,"upi",t.target.value)}}})]),n("li",[n("p",[e._v("State:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.country,expression:"bankForm.country"}],attrs:{type:"text",maxlength:"64",placeholder:"Please enter the State"},domProps:{value:e.bankForm.country},on:{input:function(t){t.target.composing||e.$set(e.bankForm,"country",t.target.value)}}})]),n("li",[n("p",[e._v("City:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.city,expression:"bankForm.city"}],attrs:{type:"text",maxlength:"64",placeholder:"Please enter the city"},domProps:{value:e.bankForm.city},on:{input:function(t){t.target.composing||e.$set(e.bankForm,"city",t.target.value)}}})]),n("li",[n("p",[e._v("Address:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.address,expression:"bankForm.address"}],attrs:{type:"text",maxlength:"128",placeholder:"Please enter the address"},domProps:{value:e.bankForm.address},on:{input:function(t){t.target.composing||e.$set(e.bankForm,"address",t.target.value)}}})]),n("li",[n("p",[e._v("Mobile number:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.phone,expression:"bankForm.phone"}],attrs:{type:"text",placeholder:"Please enter the mobile number",maxlength:"10"},domProps:{value:e.bankForm.phone},on:{blur:function(t){return e.Input("phone")},input:function(t){t.target.composing||e.$set(e.bankForm,"phone",t.target.value)}}})]),n("li",[n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.email,expression:"bankForm.email"}],attrs:{type:"text",maxlength:"64",placeholder:"Please enter the email"},domProps:{value:e.bankForm.email},on:{blur:function(t){return e.Input("email")},input:function(t){t.target.composing||e.$set(e.bankForm,"email",t.target.value)}}})]),n("li",{staticClass:"OTP"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.bankForm.code,expression:"bankForm.code"}],attrs:{type:"text",placeholder:"Please enter verification code"},domProps:{value:e.bankForm.code},on:{input:function(t){t.target.composing||e.$set(e.bankForm,"code",t.target.value)}}}),n("p",{on:{click:function(t){e.open&&e.CountDown()}}},[e._v(" "+e._s(e.upiDown?e.upiTime+"s":"OTP")+" ")])])]),n("div",{staticClass:"btn"},[n("p",{staticClass:"Add",on:{click:e.Addbank}},[e._v("Add")]),n("p",{staticClass:"Cancel",on:{click:e.Add}},[e._v("Cancel")])])])],1)])},o=[],a=(n("053b"),n("84c2"),n("e35a"),n("1c2e"),n("6a61"),n("327b")),i=n("6c6d"),s=(n("9b57"),n("dee3")),c=(n("8e2c"),n("70ab")),u=n("9f3a"),l={components:{Popup:c["a"],Toast:s["a"]},data:function(){return{bankForm:{name:"",upi:"",country:"",city:"",address:"",phone:"",email:"",code:""},open:!0,timeID:null,regAmo:new RegExp("^[0-9]*$"),deletebank:!1}},created:function(){},computed:Object(i["a"])({},Object(u["b"])(["upiDown","upiTime"])),methods:{Input:function(e){var t=new RegExp("^.+\\@(\\[?)[a-zA-Zs0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");return"phone"===e&&this.bankForm[e]&&(this.bankForm[e].length<10||!this.regAmo.test(this.bankForm[e]))?this.$toast("Must be a 10 digit number."):"email"!==e||t.test(this.bankForm[e])?void 0:this.$toast("Format Error")},ChangeTime:function(e,t,n,r){this.$store.commit(e,n),this.$store.commit(t,r),clearInterval(this.timeID),this.timeID=null,this.open=!0},CountDown:function(){var e=this;return this.bankForm.phone?this.bankForm.phone.length<10?this.$toast("! The telephone number cannot be less than 10 digits"):(this.$store.commit("C_UpiDown",!0),this.$store.dispatch("Send_Code",this.bankForm.phone),this.open=!1,void(this.timeID=setInterval((function(){e.$store.state.upiTime--,e.$store.state.upiTime=e.$store.state.upiTime<10?"0"+e.$store.state.upiTime:e.$store.state.upiTime,e.$store.state.upiTime<1&&e.ChangeTime("C_UpiDown","C_UpiDownNum",!1,60)}),1e3))):this.$toast("! Please enter your cell phone number.")},Add:function(){this.bankForm={name:"",upi:"",country:"",city:"",address:"",phone:"",email:"",code:""},this.$router.push("/Withdrawal/0")},Addbank:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.bankForm.name){t.next=2;break}return t.abrupt("return",e.$toast("Please enter the actual name"));case 2:if(e.bankForm.upi){t.next=4;break}return t.abrupt("return",e.$toast("Please enter the upi code"));case 4:if(e.bankForm.country){t.next=6;break}return t.abrupt("return",e.$toast("Please enter the State"));case 6:if(e.bankForm.city){t.next=8;break}return t.abrupt("return",e.$toast("Please enter the city"));case 8:if(e.bankForm.address){t.next=10;break}return t.abrupt("return",e.$toast("Please enter the address"));case 10:if(e.bankForm.phone){t.next=12;break}return t.abrupt("return",e.$toast("Please enter the mobile number"));case 12:if(e.bankForm.email){t.next=14;break}return t.abrupt("return",e.$toast("Please enter the email"));case 14:if(e.bankForm.code){t.next=16;break}return t.abrupt("return",e.$toast("Please enter verification code"));case 16:return localStorage.setItem("UPI",JSON.stringify(e.bankForm)),t.next=19,e.$axios.Postcode({code:e.bankForm.code,phone:e.bankForm.phone});case 19:n=t.sent,r=n.data,1===r.code?e.$router.push("/Withdrawal/2"):e.$toast(r.msg),e.ChangeTime("C_UpiDown","C_UpiDownNum",!1,60);case 23:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.ChangeTime("C_UpiDown","C_UpiDownNum",!1,60)}},f=l,p=(n("6ab5"),n("2c07")),d=Object(p["a"])(f,r,o,!1,null,"cc8ed046",null);t["default"]=d.exports},"5d0e":function(e,t,n){},"6ab5":function(e,t,n){"use strict";n("5d0e")},"6c6d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("f3dd"),n("dbb3"),n("fe59"),n("b73f"),n("bf84"),n("fe8a"),n("08ba");var r=n("22dc");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"6d51":function(e,t,n){var r=n("1b99"),o=n("faa8"),a=n("4350"),i=n("d910").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||i(t,e,{value:a.f(e)})}},"70ab":function(e,t,n){"use strict";var r=n("2938"),o=n("5615"),a=n("3d73"),i=n("44bd"),s=Object(r["a"])("popup"),c=s[0],u=s[1];t["a"]=c({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var e=this,t=function(t){return function(n){return e.$emit(t,n)}};this.onClick=t("click"),this.onOpened=t("opened"),this.onClosed=t("closed")},render:function(){var e,t=arguments[0];if(this.shouldRender){var n=this.round,r=this.position,a=this.duration,s="center"===r,c=this.transition||(s?"van-fade":"van-popup-slide-"+r),l={};if(Object(o["c"])(a)){var f=s?"animationDuration":"transitionDuration";l[f]=a+"s"}return t("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],style:l,class:u((e={round:n},e[r]=r,e["safe-area-inset-bottom"]=this.safeAreaInsetBottom,e)),on:{click:this.onClick}},[this.slots(),this.closeable&&t(i["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},"84c2":function(e,t,n){var r=n("1e2c"),o=n("d890"),a=n("e8d6"),i=n("7063"),s=n("d910").f,c=n("b338").f,u=n("8a1c"),l=n("99ad"),f=n("22ef"),p=n("1944"),d=n("efe2"),m=n("b702").set,b=n("403f"),h=n("90fb"),v=h("match"),g=o.RegExp,y=g.prototype,k=/a/g,x=/a/g,w=new g(k)!==k,O=f.UNSUPPORTED_Y,P=r&&a("RegExp",!w||O||d((function(){return x[v]=!1,g(k)!=k||g(x)==x||"/a/i"!=g(k,"i")})));if(P){var F=function(e,t){var n,r=this instanceof F,o=u(e),a=void 0===t;if(!r&&o&&e.constructor===F&&a)return e;w?o&&!a&&(e=e.source):e instanceof F&&(a&&(t=l.call(e)),e=e.source),O&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var s=i(w?new g(e,t):g(e,t),r?this:y,F);return O&&n&&m(s,{sticky:n}),s},$=function(e){e in F||s(F,e,{configurable:!0,get:function(){return g[e]},set:function(t){g[e]=t}})},I=c(g),S=0;while(I.length>S)$(I[S++]);y.constructor=F,F.prototype=y,p(o,"RegExp",F)}b("RegExp")},"8a1c":function(e,t,n){var r=n("a719"),o=n("2118"),a=n("90fb"),i=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},"8e2c":function(e,t,n){"use strict";n("25e6"),n("d5e0"),n("05f1"),n("573e"),n("1abc")},b73f:function(e,t,n){var r=n("1c8b"),o=n("efe2"),a=n("da10"),i=n("aa6b").f,s=n("1e2c"),c=o((function(){i(1)})),u=!s||c;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})},bf84:function(e,t,n){var r=n("1c8b"),o=n("1e2c"),a=n("8d44"),i=n("da10"),s=n("aa6b"),c=n("1bbd");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),o=s.f,u=a(r),l={},f=0;while(u.length>f)n=o(r,t=u[f++]),void 0!==n&&c(l,t,n);return l}})},c051:function(e,t,n){var r=n("da10"),o=n("b338").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?s(e):o(r(e))}},e35a:function(e,t,n){"use strict";var r=n("1c8b"),o=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},f3dd:function(e,t,n){"use strict";var r=n("1c8b"),o=n("d890"),a=n("6d7a"),i=n("9b9d"),s=n("1e2c"),c=n("c54b"),u=n("74cb"),l=n("efe2"),f=n("faa8"),p=n("74e7"),d=n("a719"),m=n("857c"),b=n("3553"),h=n("da10"),v=n("9f67"),g=n("38b9"),y=n("6d60"),k=n("cbab"),x=n("b338"),w=n("c051"),O=n("0a60"),P=n("aa6b"),F=n("d910"),$=n("ef71"),I=n("0fc1"),S=n("1944"),j=n("6d28"),C=n("7db2"),D=n("d5a8"),E=n("7e8b"),_=n("90fb"),N=n("4350"),T=n("6d51"),R=n("27b5"),A=n("b702"),U=n("5dfd").forEach,B=C("hidden"),J="Symbol",W="prototype",Y=_("toPrimitive"),z=A.set,K=A.getterFor(J),M=Object[W],Z=o.Symbol,L=a("JSON","stringify"),Q=P.f,q=F.f,G=w.f,H=$.f,V=j("symbols"),X=j("op-symbols"),ee=j("string-to-symbol-registry"),te=j("symbol-to-string-registry"),ne=j("wks"),re=o.QObject,oe=!re||!re[W]||!re[W].findChild,ae=s&&l((function(){return 7!=y(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Q(M,t);r&&delete M[t],q(e,t,n),r&&e!==M&&q(M,t,r)}:q,ie=function(e,t){var n=V[e]=y(Z[W]);return z(n,{type:J,tag:e,description:t}),s||(n.description=t),n},se=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Z},ce=function(e,t,n){e===M&&ce(X,t,n),m(e);var r=v(t,!0);return m(n),f(V,r)?(n.enumerable?(f(e,B)&&e[B][r]&&(e[B][r]=!1),n=y(n,{enumerable:g(0,!1)})):(f(e,B)||q(e,B,g(1,{})),e[B][r]=!0),ae(e,r,n)):q(e,r,n)},ue=function(e,t){m(e);var n=h(t),r=k(n).concat(me(n));return U(r,(function(t){s&&!fe.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?y(e):ue(y(e),t)},fe=function(e){var t=v(e,!0),n=H.call(this,t);return!(this===M&&f(V,t)&&!f(X,t))&&(!(n||!f(this,t)||!f(V,t)||f(this,B)&&this[B][t])||n)},pe=function(e,t){var n=h(e),r=v(t,!0);if(n!==M||!f(V,r)||f(X,r)){var o=Q(n,r);return!o||!f(V,r)||f(n,B)&&n[B][r]||(o.enumerable=!0),o}},de=function(e){var t=G(h(e)),n=[];return U(t,(function(e){f(V,e)||f(D,e)||n.push(e)})),n},me=function(e){var t=e===M,n=G(t?X:h(e)),r=[];return U(n,(function(e){!f(V,e)||t&&!f(M,e)||r.push(V[e])})),r};if(c||(Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),n=function(e){this===M&&n.call(X,e),f(this,B)&&f(this[B],t)&&(this[B][t]=!1),ae(this,t,g(1,e))};return s&&oe&&ae(M,t,{configurable:!0,set:n}),ie(t,e)},S(Z[W],"toString",(function(){return K(this).tag})),S(Z,"withoutSetter",(function(e){return ie(E(e),e)})),$.f=fe,F.f=ce,P.f=pe,x.f=w.f=de,O.f=me,N.f=function(e){return ie(_(e),e)},s&&(q(Z[W],"description",{configurable:!0,get:function(){return K(this).description}}),i||S(M,"propertyIsEnumerable",fe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Z}),U(k(ne),(function(e){T(e)})),r({target:J,stat:!0,forced:!c},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var n=Z(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:pe}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:de,getOwnPropertySymbols:me}),r({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(e){return O.f(b(e))}}),L){var be=!c||l((function(){var e=Z();return"[null]"!=L([e])||"{}"!=L({a:e})||"{}"!=L(Object(e))}));r({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,n){var r,o=[e],a=1;while(arguments.length>a)o.push(arguments[a++]);if(r=t,(d(t)||void 0!==e)&&!se(e))return p(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!se(t))return t}),o[1]=t,L.apply(null,o)}})}Z[W][Y]||I(Z[W],Y,Z[W].valueOf),R(Z,J),D[B]=!0},fe8a:function(e,t,n){var r=n("1c8b"),o=n("3553"),a=n("cbab"),i=n("efe2"),s=i((function(){a(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(e){return a(o(e))}})}}]);
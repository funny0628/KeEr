(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0545b764"],{"0b81":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ResetPassword"}},[r("back",{attrs:{title:"Reset Password",color:"#eee"}}),r("h2",[t._v("Reset Password")]),r("div",{staticClass:"Signform"},[r("div",{staticClass:"msg"},[r("p",{staticClass:"name"},[r("i",{staticClass:"iconfont icon-morentouxiang"}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterForm.account,expression:"RegisterForm.account"}],attrs:{maxlength:"11",type:"tel",placeholder:"Nomor Ponsel Daftar"},domProps:{value:t.RegisterForm.account},on:{blur:function(e){return t.InputRe("account")},input:function(e){e.target.composing||t.$set(t.RegisterForm,"account",e.target.value)}}})]),r("p",{staticClass:"password"},[r("i",{staticClass:"iconfont icon-suo"}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterForm.password,expression:"RegisterForm.password"}],attrs:{type:"password",placeholder:"Buat Sandi"},domProps:{value:t.RegisterForm.password},on:{input:function(e){e.target.composing||t.$set(t.RegisterForm,"password",e.target.value)}}})]),r("p",{staticClass:"Conpassword"},[r("i",{staticClass:"iconfont icon-suo"}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterForm.confirm,expression:"RegisterForm.confirm"}],attrs:{type:"password",placeholder:"Konfirmasi kata Sandi"},domProps:{value:t.RegisterForm.confirm},on:{input:function(e){e.target.composing||t.$set(t.RegisterForm,"confirm",e.target.value)}}})]),r("p",{staticClass:"vercode"},[r("i",{staticClass:"iconfont icon-xinxi"}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.RegisterForm.code,expression:"RegisterForm.code"}],attrs:{type:"text",placeholder:"Silakan masukkan kode verifikasi"},domProps:{value:t.RegisterForm.code},on:{input:function(e){e.target.composing||t.$set(t.RegisterForm,"code",e.target.value)}}}),r("span",{on:{click:function(e){t.open&&t.GetCode()}}},[t._v(t._s(t.ForgetDown?t.ForgetTime+"s":"OTP"))])])]),r("div",{staticClass:"button"},[r("button",{staticClass:"btnlogin",on:{click:t.Continue}},[t._v("Lanjutkan")])])])],1)},o=[],a=(r("84c2"),r("e35a"),r("1c2e"),r("6a61"),r("327b")),i=r("6c6d"),s=r("9f3a"),c={data:function(){return{TimeId:null,RegisterForm:{account:"",password:"",confirm:"",code:""},reg:new RegExp("^[0-9]*$"),open:!0}},computed:Object(i["a"])({},Object(s["b"])(["ForgetDown","ForgetTime"])),methods:{InputRe:function(t){if("account"===t){if(!this.RegisterForm[t])return this.$toast("! Silakan masukkan nomor ponsel Anda.");if(this.RegisterForm[t].length<11)return this.$toast("! Harus 11 digit angka.");if(!this.reg.test(this.RegisterForm[t]))return this.$toast("! Harus bilangan murni")}},ChangeTime:function(t,e,r,n){this.$store.commit(t,r),this.$store.commit(e,n),clearInterval(this.TimeId),this.open=!1},GetCode:function(){var t=this;return this.RegisterForm.account?this.RegisterForm.account.length<11?this.$toast("! Harus 11 digit angka."):(this.$store.commit("C_ForgetDown",!0),this.$store.dispatch("Send_Code",this.RegisterForm.account),this.open=!1,void(this.TimeId=setInterval((function(){t.$store.state.ForgetTime--,t.$store.state.ForgetTime=t.$store.state.ForgetTime<10?"0"+t.$store.state.ForgetTime:t.$store.state.ForgetTime,t.$store.state.ForgetTime<1&&t.ChangeTime("C_ForgetDown","C_ForgetDownNum",!1,60)}),1e3))):this.$toast("! Silakan masukkan nomor ponsel Anda.")},Continue:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.RegisterForm.account){e.next=2;break}return e.abrupt("return",t.$toast("! Silakan masukkan nomor ponsel Anda."));case 2:if(!(t.RegisterForm.account.length<11)){e.next=4;break}return e.abrupt("return",t.$toast("! Harus 11 digit angka."));case 4:if(t.reg.test(t.RegisterForm.account)){e.next=6;break}return e.abrupt("return",t.$toast("! Harus bilangan murni"));case 6:if(t.RegisterForm.password){e.next=8;break}return e.abrupt("return",t.$toast("! Silakan masukkan kata sandi Anda."));case 8:if(t.RegisterForm.confirm){e.next=10;break}return e.abrupt("return",t.$toast("! Silakan masukkan sandi konfirmasi."));case 10:if(t.RegisterForm.password===t.RegisterForm.confirm){e.next=12;break}return e.abrupt("return",t.$toast("! Kata sandi buat tidak konsisten dengan kata sandi konfirmasi."));case 12:if(t.RegisterForm.code){e.next=14;break}return e.abrupt("return",t.$toast("! Silakan masukkan kode verifikasi."));case 14:return e.next=16,t.$axios.PayForgetpwd(t.RegisterForm);case 16:r=e.sent,n=r.data,1===n.code?(t.$router.go(-1),t.$toast("Reset password Successfully"),t.ChangeTime("C_ForgetDown","C_ForgetDownNum",!1,60)):t.$toast(n.msg);case 19:case"end":return e.stop()}}),e)})))()}},beforeDestroy:function(){this.ChangeTime("C_ForgetDown","C_ForgetDownNum",!1,60)}},u=c,f=(r("6895"),r("c701")),l=Object(f["a"])(u,n,o,!1,null,"ab689c4e",null);e["default"]=l.exports},"22ef":function(t,e,r){"use strict";var n=r("efe2");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"23d0":function(t,e,r){},4350:function(t,e,r){var n=r("90fb");e.f=n},5139:function(t,e,r){"use strict";var n=r("99ad"),o=r("22ef"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=c||f||u;l&&(s=function(t){var e,r,o,s,l=this,d=u&&l.sticky,g=n.call(l),p=l.source,m=0,b=t;return d&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),b=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(p="(?: "+p+")",b=" "+b,m++),r=new RegExp("^(?:"+p+")",g)),f&&(r=new RegExp("^"+p+"$(?!\\s)",g)),c&&(e=l.lastIndex),o=a.call(d?r:l,b),d?o?(o.input=o.input.slice(m),o[0]=o[0].slice(m),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:c&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),f&&o&&o.length>1&&i.call(o[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),t.exports=s},6895:function(t,e,r){"use strict";r("23d0")},"6c6d":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("f3dd"),r("dbb3"),r("fe59"),r("b73f"),r("bf84"),r("fe8a"),r("08ba");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6d51":function(t,e,r){var n=r("1b99"),o=r("faa8"),a=r("4350"),i=r("d910").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},"84c2":function(t,e,r){var n=r("1e2c"),o=r("d890"),a=r("e8d6"),i=r("7063"),s=r("d910").f,c=r("b338").f,u=r("8a1c"),f=r("99ad"),l=r("22ef"),d=r("1944"),g=r("efe2"),p=r("b702").set,m=r("403f"),b=r("90fb"),v=b("match"),h=o.RegExp,w=h.prototype,y=/a/g,R=/a/g,x=new h(y)!==y,k=l.UNSUPPORTED_Y,O=n&&a("RegExp",!x||k||g((function(){return R[v]=!1,h(y)!=y||h(R)==R||"/a/i"!=h(y,"i")})));if(O){var F=function(t,e){var r,n=this instanceof F,o=u(t),a=void 0===e;if(!n&&o&&t.constructor===F&&a)return t;x?o&&!a&&(t=t.source):t instanceof F&&(a&&(e=f.call(t)),t=t.source),k&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var s=i(x?new h(t,e):h(t,e),n?this:w,F);return k&&r&&p(s,{sticky:r}),s},P=function(t){t in F||s(F,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},S=c(h),$=0;while(S.length>$)P(S[$++]);w.constructor=F,F.prototype=w,d(o,"RegExp",F)}m("RegExp")},"8a1c":function(t,e,r){var n=r("a719"),o=r("2118"),a=r("90fb"),i=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},b73f:function(t,e,r){var n=r("1c8b"),o=r("efe2"),a=r("da10"),i=r("aa6b").f,s=r("1e2c"),c=o((function(){i(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},bf84:function(t,e,r){var n=r("1c8b"),o=r("1e2c"),a=r("8d44"),i=r("da10"),s=r("aa6b"),c=r("1bbd");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=s.f,u=a(n),f={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&c(f,e,r);return f}})},c051:function(t,e,r){var n=r("da10"),o=r("b338").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?s(t):o(n(t))}},e35a:function(t,e,r){"use strict";var n=r("1c8b"),o=r("5139");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},f3dd:function(t,e,r){"use strict";var n=r("1c8b"),o=r("d890"),a=r("6d7a"),i=r("9b9d"),s=r("1e2c"),c=r("c54b"),u=r("74cb"),f=r("efe2"),l=r("faa8"),d=r("74e7"),g=r("a719"),p=r("857c"),m=r("3553"),b=r("da10"),v=r("9f67"),h=r("38b9"),w=r("6d60"),y=r("cbab"),R=r("b338"),x=r("c051"),k=r("0a60"),O=r("aa6b"),F=r("d910"),P=r("ef71"),S=r("0fc1"),$=r("1944"),C=r("6d28"),j=r("7db2"),E=r("d5a8"),T=r("7e8b"),D=r("90fb"),I=r("4350"),_=r("6d51"),N=r("27b5"),A=r("b702"),U=r("5dfd").forEach,H=j("hidden"),J="Symbol",K="prototype",B=D("toPrimitive"),Y=A.set,G=A.getterFor(J),L=Object[K],Q=o.Symbol,W=a("JSON","stringify"),q=O.f,z=F.f,M=x.f,V=P.f,X=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=o.QObject,ot=!nt||!nt[K]||!nt[K].findChild,at=s&&f((function(){return 7!=w(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(L,e);n&&delete L[e],z(t,e,r),n&&t!==L&&z(L,e,n)}:z,it=function(t,e){var r=X[t]=w(Q[K]);return Y(r,{type:J,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,r){t===L&&ct(Z,e,r),p(t);var n=v(e,!0);return p(r),l(X,n)?(r.enumerable?(l(t,H)&&t[H][n]&&(t[H][n]=!1),r=w(r,{enumerable:h(0,!1)})):(l(t,H)||z(t,H,h(1,{})),t[H][n]=!0),at(t,n,r)):z(t,n,r)},ut=function(t,e){p(t);var r=b(e),n=y(r).concat(pt(r));return U(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?w(t):ut(w(t),e)},lt=function(t){var e=v(t,!0),r=V.call(this,e);return!(this===L&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,H)&&this[H][e])||r)},dt=function(t,e){var r=b(t),n=v(e,!0);if(r!==L||!l(X,n)||l(Z,n)){var o=q(r,n);return!o||!l(X,n)||l(r,H)&&r[H][n]||(o.enumerable=!0),o}},gt=function(t){var e=M(b(t)),r=[];return U(e,(function(t){l(X,t)||l(E,t)||r.push(t)})),r},pt=function(t){var e=t===L,r=M(e?Z:b(t)),n=[];return U(r,(function(t){!l(X,t)||e&&!l(L,t)||n.push(X[t])})),n};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===L&&r.call(Z,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),at(this,e,h(1,t))};return s&&ot&&at(L,e,{configurable:!0,set:r}),it(e,t)},$(Q[K],"toString",(function(){return G(this).tag})),$(Q,"withoutSetter",(function(t){return it(T(t),t)})),P.f=lt,F.f=ct,O.f=dt,R.f=x.f=gt,k.f=pt,I.f=function(t){return it(D(t),t)},s&&(z(Q[K],"description",{configurable:!0,get:function(){return G(this).description}}),i||$(L,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),U(y(rt),(function(t){_(t)})),n({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:gt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),W){var mt=!c||f((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=e,(g(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,W.apply(null,o)}})}Q[K][B]||S(Q[K],B,Q[K].valueOf),N(Q,J),E[H]=!0},fe8a:function(t,e,r){var n=r("1c8b"),o=r("3553"),a=r("cbab"),i=r("efe2"),s=i((function(){a(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return a(o(t))}})}}]);
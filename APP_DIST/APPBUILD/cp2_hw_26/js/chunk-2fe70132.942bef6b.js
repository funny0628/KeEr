(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fe70132"],{"00be":function(t,e,n){},"22ef":function(t,e,n){"use strict";var r=n("efe2");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"38eb":function(t,e,n){"use strict";var r=n("f62c").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},5139:function(t,e,n){"use strict";var r=n("99ad"),i=n("22ef"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||s;f&&(o=function(t){var e,n,i,o,f=this,p=s&&f.sticky,d=r.call(f),v=f.source,h=0,g=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",d)),u&&(n=new RegExp("^"+v+"$(?!\\s)",d)),l&&(e=f.lastIndex),i=a.call(p?n:f,g),p?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:l&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"59da":function(t,e,n){var r=n("2118"),i=n("5139");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"5e9f":function(t,e,n){"use strict";var r=n("b2a2"),i=n("857c"),a=n("3553"),c=n("d88d"),o=n("3da3"),l=n("2732"),s=n("38eb"),u=n("59da"),f=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,_=x?"$":"$0";return[function(n,r){var i=l(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(_)){var a=n(e,t,this,r);if(a.done)return a.value}var l=i(t),d=String(this),v="function"===typeof r;v||(r=String(r));var h=l.global;if(h){var b=l.unicode;l.lastIndex=0}var R=[];while(1){var N=u(l,d);if(null===N)break;if(R.push(N),!h)break;var S=String(N[0]);""===S&&(l.lastIndex=s(d,c(l.lastIndex),b))}for(var $="",w=0,I=0;I<R.length;I++){N=R[I];for(var y=String(N[0]),T=f(p(o(N.index),d.length),0),A=[],C=1;C<N.length;C++)A.push(g(N[C]));var P=N.groups;if(v){var U=[y].concat(A,T,d);void 0!==P&&U.push(P);var k=String(r.apply(void 0,U))}else k=m(y,d,T,A,P,r);T>=w&&($+=d.slice(w,T)+k,w=T+y.length)}return $+d.slice(w)}];function m(t,n,r,i,c,o){var l=r+t.length,s=i.length,u=h;return void 0!==c&&(c=a(c),u=v),e.call(o,u,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":o=c[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>s){var f=d(u/10);return 0===f?e:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}o=i[u-1]}return void 0===o?"":o}))}}))},"7f69":function(t,e,n){"use strict";n("00be")},b2a2:function(t,e,n){"use strict";n("e35a");var r=n("1944"),i=n("efe2"),a=n("90fb"),c=n("5139"),o=n("0fc1"),l=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),h=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!s||!u||p)||"split"===t&&!d){var x=/./[v],E=n(v,""[t],(function(t,e,n,r,i){return e.exec===c?h&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=E[0],m=E[1];r(String.prototype,t,_),r(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&o(RegExp.prototype[v],"sham",!0)}},d96a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"noticelist"}},[n("back",{attrs:{title:"Notice List"}}),n("div",{ref:"wrapper",staticClass:"wrapper"},[n("div",{staticClass:"product"},[n("ul",t._l(t.NoticeList,(function(e,r){return n("li",{key:r,on:{click:function(n){return t.toNotice(e.id)}}},[n("p",{staticClass:"top"},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),n("span",{staticClass:"date"},[t._v(t._s(t._f("FormatTimeStamp")(e.create_time)))])]),n("p",{staticClass:"bottom"},[t._v(t._s(t._f("matchReg")(e.contents)))])])})),0),0===t.NoticeList.length?n("div",{staticClass:"nomore"},[t._v(" no more ")]):t._e()])])],1)},i=[],a=(n("b4fb"),n("e35a"),n("5e9f"),n("6a61"),n("327b")),c=n("ecd2"),o={data:function(){return{NoticeList:[],page:1,limit:10,total:0,nomore:!1}},created:function(){this.initNotic()},mounted:function(){var t=this;this.scroll=new c["a"](this.$refs.wrapper,{click:!0,startY:0,pullDownRefresh:!1,pullUpLoad:{threshold:-50,moreTxt:"load more",noMoreTxt:"No more data"}}),this.$nextTick((function(){t.scroll.on("pullingUp",(function(){if(console.log("----"),t.NoticeList.length===t.total)return!1;t.page++,t.initNotic(),t.scroll.finishPullUp()})),t.scroll.refresh()}))},methods:{toNotice:function(t){this.$router.push("/noticeid/".concat(t))},golast:function(){this.$router.go(-1)},initNotic:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.Goods_Notice({page:t.page,limit:t.limit});case 2:n=e.sent,r=n.data,1===r.code&&(t.NoticeList=t.NoticeList.concat(r.data),t.total=r.total);case 5:case"end":return e.stop()}}),e)})))()}},filters:{matchReg:function(t){var e=/<\/?.+?\/?>/g;return t.replace(e,"")}}},l=o,s=(n("7f69"),n("c701")),u=Object(s["a"])(l,r,i,!1,null,"fca90966",null);e["default"]=u.exports},e35a:function(t,e,n){"use strict";var r=n("1c8b"),i=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},f62c:function(t,e,n){var r=n("3da3"),i=n("2732"),a=function(t){return function(e,n){var a,c,o=String(i(e)),l=r(n),s=o.length;return l<0||l>=s?t?"":void 0:(a=o.charCodeAt(l),a<55296||a>56319||l+1===s||(c=o.charCodeAt(l+1))<56320||c>57343?t?o.charAt(l):a:t?o.slice(l,l+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}}}]);
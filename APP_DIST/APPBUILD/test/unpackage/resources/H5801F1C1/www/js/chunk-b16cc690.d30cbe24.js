(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b16cc690"],{"0cdc":function(t,i,e){"use strict";function n(t,i,e){return Math.min(Math.max(t,i),e)}function r(t,i,e){var n=t.indexOf(i);return-1===n?t:"-"===i&&0!==n?t.slice(0,n):t.slice(0,n+1)+t.slice(n).replace(e,"")}function a(t,i,e){void 0===i&&(i=!0),void 0===e&&(e=!0),t=i?r(t,".",/\./g):t.split(".")[0],t=e?r(t,"-",/-/g):t.replace(/-/,"");var n=i?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(n,"")}e.d(i,"b",(function(){return n})),e.d(i,"a",(function(){return a}))},"3e33":function(t,i,e){"use strict";var n=e("42d3"),r=e("76f9"),a=e("2da0"),s=e("d8b3"),o=e("0cdc"),c=e("8092"),u=e("ba64"),h=e("6386"),l=Object(n["a"])("swipe"),d=l[0],f=l[1];i["a"]=d({mixins:[c["a"],Object(u["b"])("vanSwipe"),Object(h["a"])((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(r["a"])(this.$el)){clearTimeout(this.timer);var i=this.$el.getBoundingClientRect();this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=Math.floor(+this.width||i.width),this.computedHeight=Math.floor(+this.height||i.height),this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(a["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,n=i/e,r=Math.abs(n)>.25||Math.abs(i)>t/2;if(r&&this.isCorrectDirection){var a=this.vertical?this.offsetY:this.offsetX,s=0;s=this.loop?a>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:s,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,n=this.maxCount;return t?this.loop?Object(o["b"])(i+t,-1,e):Object(o["b"])(i+t,0,n):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(o["b"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,r=void 0===n?0:n,a=t.emitChange,s=this.loop,o=this.count,c=this.active,u=this.children,h=this.trackSize,l=this.minOffset;if(!(o<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,r);if(s){if(u[0]&&f!==l){var v=f<l;u[0].offset=v?h:0}if(u[o-1]&&0!==f){var m=f>0;u[o-1].offset=m?-h:0}}this.active=d,this.offset=f,a&&d!==c&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(s["b"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(s["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),Object(s["b"])((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?Object(s["b"])((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:n-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,r=this.slots("indicator");return r||(this.showIndicators&&e>1?i("div",{class:f("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,r){return i("i",{class:f("indicator",{active:r===n}),style:r===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:f()},[t("div",{ref:"track",style:this.trackStyle,class:f("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},"3fb2":function(t,i,e){},"4a76":function(t,i,e){},"4f84":function(t,i){t.exports="data:image/png;base64,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"},"560d":function(t,i,e){},"56f5":function(t,i,e){"use strict";var n=e("ebf5"),r=e("42d3"),a=e("ba64"),s=Object(r["a"])("swipe-item"),o=s[0],c=s[1];i["a"]=o({mixins:[Object(a["a"])("vanSwipe")],data:function(){return{offset:0,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,n=i.vertical;return t[n?"height":"width"]=e+"px",this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.parent,e=this.mounted;if(!i.lazyRender)return!0;if(!e)return!1;var n=i.activeIndicator,r=i.count-1,a=0===n?r:n-1,s=n===r?0:n+1;return t===n||t===a||t===s}},render:function(){var t=arguments[0];return t("div",{class:c(),style:this.style,on:Object(n["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}})},"5bac":function(t,i,e){"use strict";e("94f7"),e("3fb2")},"5e9f":function(t,i,e){"use strict";var n=e("b2a2"),r=e("857c"),a=e("3553"),s=e("d88d"),o=e("3da3"),c=e("2732"),u=e("38eb"),h=e("59da"),l=Math.max,d=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,i,e,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=n.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(e,n){var r=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,n){if(!g&&w||"string"===typeof n&&-1===n.indexOf(b)){var a=e(i,t,this,n);if(a.done)return a.value}var c=r(t),f=String(this),v="function"===typeof n;v||(n=String(n));var m=c.global;if(m){var A=c.unicode;c.lastIndex=0}var O=[];while(1){var I=h(c,f);if(null===I)break;if(O.push(I),!m)break;var S=String(I[0]);""===S&&(c.lastIndex=u(f,s(c.lastIndex),A))}for(var C="",y=0,E=0;E<O.length;E++){I=O[E];for(var R=String(I[0]),N=l(d(o(I.index),f.length),0),k=[],B=1;B<I.length;B++)k.push(p(I[B]));var T=I.groups;if(v){var j=[R].concat(k,N,f);void 0!==T&&j.push(T);var D=String(n.apply(void 0,j))}else D=x(R,f,N,k,T,n);N>=y&&(C+=f.slice(y,N)+D,y=N+R.length)}return C+f.slice(y)}];function x(t,e,n,r,s,o){var c=n+t.length,u=r.length,h=m;return void 0!==s&&(s=a(s),h=v),i.call(o,h,(function(i,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":o=s[a.slice(1,-1)];break;default:var h=+a;if(0===h)return i;if(h>u){var l=f(h/10);return 0===l?i:l<=u?void 0===r[l-1]?a.charAt(1):r[l-1]+a.charAt(1):i}o=r[h-1]}return void 0===o?"":o}))}}))},"71e3":function(t,i,e){"use strict";e("94f7"),e("4a76")},"76f9":function(t,i,e){"use strict";function n(t){var i=window.getComputedStyle(t),e="none"===i.display,n=null===t.offsetParent&&"fixed"!==i.position;return e||n}e.d(i,"a",(function(){return n}))},"7c1f":function(t,i,e){"use strict";e("560d")},"8ce1":function(t,i,e){"use strict";e("94f7"),e("24a9"),e("6494"),e("e6bf")},"9cf3":function(t,i,e){"use strict";var n=e("b2a2"),r=e("857c"),a=e("2732"),s=e("9d5c"),o=e("59da");n("search",1,(function(t,i,e){return[function(i){var e=a(this),n=void 0==i?void 0:i[t];return void 0!==n?n.call(i,e):new RegExp(i)[t](String(e))},function(t){var n=e(i,t,this);if(n.done)return n.value;var a=r(t),c=String(this),u=a.lastIndex;s(u,0)||(a.lastIndex=0);var h=o(a,c);return s(a.lastIndex,u)||(a.lastIndex=u),null===h?-1:h.index}]}))},"9d5c":function(t,i){t.exports=Object.is||function(t,i){return t===i?0!==t||1/t===1/i:t!=t&&i!=i}},ba64:function(t,i,e){"use strict";function n(t){var i=[];function e(t){t.forEach((function(t){i.push(t),t.componentInstance&&e(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&e(t.children)}))}return e(t),i}function r(t,i){var e=i.$vnode.componentOptions;if(e&&e.children){var r=n(e.children);t.sort((function(t,i){return r.indexOf(t.$vnode)-r.indexOf(i.$vnode)}))}}function a(t,i){var e,n;void 0===i&&(i={});var a=i.indexKey||"index";return{inject:(e={},e[t]={default:null},e),computed:(n={parent:function(){return this.disableBindRelation?null:this[t]}},n[a]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},n),watch:{disableBindRelation:function(t){t||this.bindRelation()}},mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(i){return i!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);r(t,this.parent),this.parent.children=t}}}}}function s(t){return{provide:function(){var i;return i={},i[t]=this,i},data:function(){return{children:[]}}}}e.d(i,"a",(function(){return a})),e.d(i,"b",(function(){return s}))},d30b:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"top"},[e("P",{staticClass:"wel"},[t._v("SELAMAT DATANG KEMBALI")]),e("P",[t._v("Jaminan Kualitas")])],1),e("div",{staticClass:"swiper"},[e("Swipe",{attrs:{autoplay:3e3}},t._l(t.images,(function(t,i){return e("SwipeItem",{key:i},[e("img",{attrs:{src:t.picture_url}})])})),1)],1),e("div",{staticClass:"grid"},[e("ul",[t._l(t.goodsClass,(function(i,n){return e("li",{key:n,on:{click:function(e){return t.tosearch(i.dump_url)}}},[e("img",{attrs:{src:i.picture_url}}),e("span",[t._v(t._s(i.name))])])})),t._l(t.grid,(function(i,n){return e("li",{key:"NO"+n,on:{click:function(e){return t.tosearchMore(i.text)}}},[e("img",{attrs:{src:i.image}}),e("span",[t._v(t._s(i.text))])])}))],2)]),e("p",{staticClass:"linetop"}),t._m(0),e("scroll",{attrs:{image:t.centerImage,list:t.centerData}}),e("scroll",{attrs:{image:t.bottomImage,list:t.bottomData}}),e("div",{staticClass:"product"},[e("item",{attrs:{list:t.itemvalue}})],1),e("div",{staticClass:"nomore"},[t._v(" tidak lagi ")])],1)},r=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"recommend"},[e("p",{staticClass:"title"},[t._v("SARANKAN")]),e("p",{staticClass:"line"})])}],a=(e("fe59"),e("ecb4"),e("513c"),e("e35a"),e("5e9f"),e("9cf3"),e("0d7a"),e("08ba"),e("6a61"),e("327b")),s=(e("8ce1"),e("fe0d")),o=(e("5bac"),e("56f5")),c=(e("71e3"),e("3e33")),u={name:"home",components:{Swipe:c["a"],SwipeItem:o["a"],NoticeBar:s["a"]},data:function(){return{itemvalue:[],listsOne:{},images:[],grid:[],goodsClass:[],gridN:[{image:e("4f84"),text:"Perhatian"}],gridM:[{image:e("4f84"),text:"Lebih"}],centerImage:"",bottomImage:"",centerData:[],bottomData:[],NoticeList:[],redDesc:""}},created:function(){var t=this,i=window.location.search.replace("?","");if(-1!==i.indexOf("&")){var e=i.split("&");e.forEach((function(i){t.formatValue(i)}))}else this.formatValue(i);this.initSwipeImage(),this.initCenterImage(),this.initBottomImage(),this.NewGoods(),this.initNotic(),this.initGoods()},methods:{formatValue:function(t){-1!==t.indexOf("red_id")&&(this.redDesc=t.split("=")[1],this.$store.commit("SET_URLREDID",55555555^Number(this.redDesc)),this.$store.commit("CHANGE_URLREDBG",!0))},tosearch:function(t){this.$router.push("/search/".concat(t)),this.$store.commit("Ch_increment",1),this.$parent.active=1,localStorage.setItem("COUNT",1)},tosearchMore:function(t){"Lebih"===t&&(this.$router.push("/search/4"),this.$store.commit("Ch_increment",1),this.$parent.active=1,localStorage.setItem("COUNT",1)),"Perhatian"==t&&this.$router.push("/noticelist")},initSwipeImage:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Getpicture({add_id:2});case 2:e=i.sent,n=e.data,1===n.code&&(t.images=n.data);case 5:case"end":return i.stop()}}),i)})))()},initCenterImage:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Getpicture({add_id:3});case 2:e=i.sent,n=e.data,1===n.code&&(t.centerImage=n.data[0]);case 5:case"end":return i.stop()}}),i)})))()},initBottomImage:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Getpicture({add_id:4});case 2:e=i.sent,n=e.data,1===n.code&&(t.bottomImage=n.data[0]);case 5:case"end":return i.stop()}}),i)})))()},Grecommend:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Goods_recommend({type_id:1});case 2:e=i.sent,n=e.data,1===n.code&&(t.centerData=n.data);case 5:case"end":return i.stop()}}),i)})))()},Srecommend:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Goods_recommend({type_id:2});case 2:e=i.sent,n=e.data,1===n.code&&(t.bottomData=n.data);case 5:case"end":return i.stop()}}),i)})))()},NewGoods:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Goods_new();case 2:e=i.sent,n=e.data,1===n.code&&(t.itemvalue=n.data);case 5:case"end":return i.stop()}}),i)})))()},initNotic:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.Goods_Notice({page:1,limit:10});case 2:e=i.sent,n=e.data,1===n.code&&(t.NoticeList=n.data,t.grid=t.NoticeList.length>0?t.gridN:t.gridM);case 5:case"end":return i.stop()}}),i)})))()},initGoods:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var e,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$axios.GetGoods_classify();case 2:e=i.sent,n=e.data,1===n.code&&(t.goodsClass=n.data);case 5:case"end":return i.stop()}}),i)})))()}}},h=u,l=(e("7c1f"),e("c701")),d=Object(l["a"])(h,n,r,!1,null,"40bcd1a4",null);i["default"]=d.exports},d8b3:function(t,i,e){"use strict";(function(t){e.d(i,"c",(function(){return u})),e.d(i,"b",(function(){return h})),e.d(i,"a",(function(){return l}));var n=e("fc6b"),r=Date.now();function a(t){var i=Date.now(),e=Math.max(0,16-(i-r)),n=setTimeout(t,e);return r=i+e,n}var s=n["g"]?t:window,o=s.requestAnimationFrame||a,c=s.cancelAnimationFrame||s.clearTimeout;function u(t){return o.call(s,t)}function h(t){u((function(){u(t)}))}function l(t){c.call(s,t)}}).call(this,e("0288"))},e6bf:function(t,i,e){},fe0d:function(t,i,e){"use strict";var n=e("42d3"),r=e("fc6b"),a=e("d8b3"),s=e("6386"),o=e("ef3f"),c=Object(n["a"])("notice-bar"),u=c[0],h=c[1];i["a"]=u({mixins:[Object(s["a"])((function(t){t(window,"pageshow",this.start)}))],props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:50}},data:function(){return{show:!0,offset:0,duration:0,wrapWidth:0,contentWidth:0}},watch:{scrollable:"start",text:{handler:"start",immediate:!0}},activated:function(){this.start()},methods:{onClickIcon:function(t){"closeable"===this.mode&&(this.show=!1,this.$emit("close",t))},onTransitionEnd:function(){var t=this;this.offset=this.wrapWidth,this.duration=0,this.$nextTick((function(){Object(a["b"])((function(){t.offset=-t.contentWidth,t.duration=(t.contentWidth+t.wrapWidth)/t.speed,t.$emit("replay")}))}))},reset:function(){this.offset=0,this.duration=0,this.wrapWidth=0,this.contentWidth=0},start:function(){var t=this,i=Object(r["c"])(this.delay)?1e3*this.delay:0;this.reset(),clearTimeout(this.startTimer),this.startTimer=setTimeout((function(){var i=t.$refs,e=i.wrap,n=i.content;if(e&&n&&!1!==t.scrollable){var r=e.getBoundingClientRect().width,s=n.getBoundingClientRect().width;(t.scrollable||s>r)&&Object(a["b"])((function(){t.offset=-s,t.duration=s/t.speed,t.wrapWidth=r,t.contentWidth=s}))}}),i)}},render:function(){var t=this,i=arguments[0],e=this.slots,n=this.mode,r=this.leftIcon,a=this.onClickIcon,s={color:this.color,background:this.background},c={transform:this.offset?"translateX("+this.offset+"px)":"",transitionDuration:this.duration+"s"};function u(){var t=e("left-icon");return t||(r?i(o["a"],{class:h("left-icon"),attrs:{name:r}}):void 0)}function l(){var t,r=e("right-icon");return r||("closeable"===n?t="cross":"link"===n&&(t="arrow"),t?i(o["a"],{class:h("right-icon"),attrs:{name:t},on:{click:a}}):void 0)}return i("div",{attrs:{role:"alert"},directives:[{name:"show",value:this.show}],class:h({wrapable:this.wrapable}),style:s,on:{click:function(i){t.$emit("click",i)}}},[u(),i("div",{ref:"wrap",class:h("wrap"),attrs:{role:"marquee"}},[i("div",{ref:"content",class:[h("content"),{"van-ellipsis":!1===this.scrollable&&!this.wrapable}],style:c,on:{transitionend:this.onTransitionEnd}},[this.slots()||this.text])]),l()])}})}}]);
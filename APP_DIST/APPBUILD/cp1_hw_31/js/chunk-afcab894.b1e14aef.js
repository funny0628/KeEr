(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afcab894"],{"280c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"red"}},[n("div",{style:{backgroundColor:"#fff"},attrs:{id:"back"}},[n("p",{staticClass:"p-top"},[n("i",{staticClass:"iconfont icon-fanhui",on:{click:t.golast}}),t._v("Red-Envelope ")])]),n("div",{ref:"wrapper",staticClass:"wrapper"},[n("div",{staticClass:"conent"},[n("div",{staticClass:"Records"},[n("div",{staticClass:"level"},[n("p",{staticClass:"tab"},[n("span",{class:{activelevel:1===t.showActive},on:{click:t.changeLevelf}},[t._v("Given Record")]),n("span",{class:{activelevel:0===t.showActive},on:{click:t.changeLevels}},[t._v("Recevied Record")])])])]),t.showActive?n("div",{staticClass:"msg"},[n("div",{staticClass:"user"},[n("p",{staticClass:"date",on:{click:t.ChangeYear}},[n("span",[t._v(t._s(t.year)+" year")]),n("i",{staticClass:"iconfont icon-down2-copy"})]),t._m(0),n("p",{staticClass:"name"},[t._v(t._s(t.user.username)+" have given")]),n("p",{staticClass:"amount"},[n("i",{staticClass:"iconfont icon-lubi"}),t._v(" "+t._s(t._f("FormatFloatNum")(t.total_num.total_amount)))]),n("p",{staticClass:"giveNum"},[n("span",{staticClass:"give"},[t._v(" Given "),n("i",[t._v(t._s(t.total_num.total_number))]),t._v(" red envelope ")])])]),n("ul",t._l(t.SendList,(function(e,i){return n("li",{key:i},[n("p",{staticClass:"type"},[n("span",[t._v(t._s(t._f("formatType")(e.type_red_envelopes)))]),n("span",[n("i",{staticClass:"iconfont icon-lubi",staticStyle:{backgroundColor:"#fff"}}),t._v(" "+t._s(e.amount))])]),n("p",{staticClass:"date"},[n("span",[t._v(t._s(t._f("formatTime")(e.create_time)))]),n("span",[t._v(t._s(t._f("formatRedType")(e))+t._s(e.get_number)+"/"+t._s(e.number))])])])})),0)]):n("div",{staticClass:"msg"},[n("div",{staticClass:"user"},[n("p",{staticClass:"date"},[n("span",{on:{click:t.ChangeYear}},[t._v(t._s(t.year)+" year")]),n("i",{staticClass:"iconfont icon-down2-copy"})]),t._m(1),n("p",{staticClass:"name"},[t._v(t._s(t.user.username)+" have Received")]),n("p",{staticClass:"amount"},[n("i",{staticClass:"iconfont icon-lubi"}),t._v(" "+t._s(t._f("FormatFloatNum")(t.total_num.total_amount)))]),n("p",{staticClass:"totalNum"},[n("span",[n("i",[t._v(t._s(t.total_num.total_number))]),n("i",[t._v("Received ")])])])]),n("ul",t._l(t.GiveList,(function(e,i){return n("li",{key:i},[n("p",{staticClass:"type"},[n("span",[t._v(t._s(e.send_nickname)+" "),e.lucky_time?n("i",[t._v("Lucky")]):t._e()]),n("span",[n("i",{staticClass:"iconfont icon-lubi",staticStyle:{backgroundColor:"#fff"}}),t._v(" "+t._s(e.amount_get)+" ")])]),n("p",{staticClass:"date"},[n("span",[t._v(t._s(t._f("formatTime")(e.create_time)))])])])})),0)]),0===t.SendList.length?n("div",{staticClass:"nomore"},[t._v(" no more ")]):t._e()])]),n("popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.YearShow,callback:function(e){t.YearShow=e},expression:"YearShow"}},[n("div",{staticClass:"pup"},[n("ul",t._l(t.YearList,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.CheckType(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"image"},[n("i",{staticClass:"iconfont icon-morentouxiang"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"image"},[n("i",{staticClass:"iconfont icon-morentouxiang"})])}],r=(n("b4fb"),n("513c"),n("6a61"),n("327b")),o=(n("c53d"),n("d724")),c=n("ecd2"),u=n("a0f6"),l=n.n(u),h={components:{Popup:o["a"]},data:function(){return{showActive:1,YearShow:!1,YearList:[2014,2015,2016,2017,2018,2019,2020],nomore:!1,SendList:[],GiveList:[],user:[],total_num:[],lucky_time:"",sendpage:1,givepage:1,limit:10,total:0,year:""}},beforeCreate:function(){this},created:function(){this.year=l()().year(),this.showActive=1===Number(this.$route.params.type)?1:0,this.showActive?this.checksend_Data():this.checkget_Data()},mounted:function(){var t=this;this.scroll=new c["a"](this.$refs.wrapper,{click:!0,startY:0,pullDownRefresh:!1,pullUpLoad:{threshold:-50,moreTxt:"load more",noMoreTxt:"No more data"}}),this.$nextTick((function(){t.scroll.on("pullingUp",(function(){if(console.log("----"),t.showActive){if(t.SendList.length===t.total)return!1;t.sendpage++,t.checksend_Data()}else{if(t.GiveList.length===t.total)return!1;t.givepage++,t.checkget_Data()}t.scroll.finishPullUp()})),t.scroll.refresh()}))},methods:{golast:function(){this.$router.go(-1)},changeLevelf:function(){this.showActive=1,this.SendList=[],this.GiveList=[],this.user=[],this.total_send=[],this.YearList=[],this.sendpage=1,this.givepage=1,this.year=l()().year(),this.checksend_Data()},changeLevels:function(){this.showActive=0,this.SendList=[],this.GiveList=[],this.user=[],this.total_send=[],this.YearList=[],this.sendpage=1,this.givepage=1,this.year=l()().year(),this.checkget_Data()},ChangeYear:function(){this.YearShow=!this.YearShow},CheckType:function(t){this.year=t,1===this.showActive?(this.SendList=[],this.checksend_Data()):0===this.showActive&&(this.GiveList=[],this.checkget_Data()),this.YearShow=!this.YearShow,s},checksend_Data:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.Get_checksend({page:t.sendpage,limit:t.limit,year:t.year});case 2:n=e.sent,i=n.data,1===i.code&&(t.SendList=t.SendList.concat(i.data),t.total=i.total,t.user=i.user[0],t.total_num=i.total_send[0],t.YearList=i.years);case 5:case"end":return e.stop()}}),e)})))()},checkget_Data:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.Get_checkget({page:t.givepage,limit:t.limit,year:t.year});case 2:n=e.sent,i=n.data,1===i.code&&(t.GiveList=t.GiveList.concat(i.data),t.total=i.total,t.user=i.user[0],t.total_num=i.total_get[0],t.lucky_time=i.lucky_time,t.YearList=i.years);case 5:case"end":return e.stop()}}),e)})))()}},filters:{formatType:function(t){return t?1===t?"Fixed red envelope":"Lucky red envelope":""},formatRedType:function(t){return t?t.get_number===t.number?"\tFinished ":t.get_number!==t.number&&0===t.is_show?"":t.get_number!==t.number&&1===t.is_show?" Expired ":void 0:" "},formatGetNumber:function(t){return t?t.get_number!==t.number&&1===t.is_show?t.number-t.get_number:t.get_number:" "},formatTime:function(t){if(!t)return"";function e(t){return t<10?"0"+t:t}var n=new Date(1e3*t),i=(n.getFullYear(),n.getMonth()+1),s=n.getDate(),a=n.getHours(),r=n.getMinutes(),o=n.getSeconds();return e(i)+"-"+e(s)+" "+e(a)+":"+e(r)+":"+e(o)}}},f=h,d=(n("f422"),n("2c07")),v=Object(d["a"])(f,i,a,!1,null,"7c323204",null);e["default"]=v.exports},3791:function(t,e,n){},a0f6:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",a="week",r="month",o="quarter",c="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+d(i,2,"0")+":"+d(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,r),a=n-s<0,o=e.clone().add(i+(a?-1:1),r);return+(-(i+(n-s)/(a?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:r,y:c,w:a,d:s,D:u,h:i,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",m={};m[p]=f;var _=function(t){return t instanceof w},g=function(t,e,n){var i;if(!t)return p;if("string"==typeof t)m[t]&&(i=t),e&&(m[t]=e,i=t);else{var s=t.name;m[s]=t,i=s}return!n&&i&&(p=i),i||!n&&p},y=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},$=v;$.l=g,$.i=_,$.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function f(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return $},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return y(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<y(t)},d.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var l=this,h=!!$.u(o)||o,f=$.p(t),d=function(t,e){var n=$.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?n:n.endOf(s)},v=function(t,e){return $.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},p=this.$W,m=this.$M,_=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case c:return h?d(1,0):d(31,11);case r:return h?d(1,m):d(0,m+1);case a:var y=this.$locale().weekStart||0,w=(p<y?p+7:p)-y;return d(h?_-w:_+(6-w),m);case s:case u:return v(g+"Hours",0);case i:return v(g+"Minutes",1);case n:return v(g+"Seconds",2);case e:return v(g+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(a,o){var l,h=$.p(a),f="set"+(this.$u?"UTC":""),d=(l={},l[s]=f+"Date",l[u]=f+"Date",l[r]=f+"Month",l[c]=f+"FullYear",l[i]=f+"Hours",l[n]=f+"Minutes",l[e]=f+"Seconds",l[t]=f+"Milliseconds",l)[h],v=h===s?this.$D+(o-this.$W):o;if(h===r||h===c){var p=this.clone().set(u,1);p.$d[d](v),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](v);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[$.p(t)]()},d.add=function(t,o){var u,l=this;t=Number(t);var h=$.p(o),f=function(e){var n=y(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(h===r)return this.set(r,this.$M+t);if(h===c)return this.set(c,this.$y+t);if(h===s)return f(1);if(h===a)return f(7);var d=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[h]||1,v=this.$d.getTime()+t*d;return $.w(v,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),s=this.$locale(),a=this.$H,r=this.$m,o=this.$M,c=s.weekdays,u=s.months,l=function(t,i,s,a){return t&&(t[i]||t(e,n))||s[i].substr(0,a)},f=function(t){return $.s(a%12||12,t,"0")},d=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:l(s.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,c,2),ddd:l(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:$.s(a,2,"0"),h:f(1),hh:f(2),a:d(a,r,!0),A:d(a,r,!1),m:String(r),mm:$.s(r,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||v[t]||i.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,u,l){var h,f=$.p(u),d=y(t),v=6e4*(d.utcOffset()-this.utcOffset()),p=this-d,m=$.m(this,d);return m=(h={},h[c]=m/12,h[r]=m,h[o]=m/3,h[a]=(p-v)/6048e5,h[s]=(p-v)/864e5,h[i]=p/36e5,h[n]=p/6e4,h[e]=p/1e3,h)[f]||p,l?m:$.a(m)},d.daysInMonth=function(){return this.endOf(r).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},d.clone=function(){return $.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}(),b=w.prototype;return y.prototype=b,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",r],["$y",c],["$D",u]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t(e,w,y),y},y.locale=g,y.isDayjs=_,y.unix=function(t){return y(1e3*t)},y.en=m[p],y.Ls=m,y.p={},y}))},c53d:function(t,e,n){"use strict";n("94f7"),n("84e8"),n("24a9"),n("6494"),n("0c3e")},d724:function(t,e,n){"use strict";var i=n("42d3"),s=n("fc6b"),a=n("6a98"),r=n("ef3f"),o=Object(i["a"])("popup"),c=o[0],u=o[1];e["a"]=c({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,i=this.position,a=this.duration,o="center"===i,c=this.transition||(o?"van-fade":"van-popup-slide-"+i),l={};if(Object(s["c"])(a)){var h=o?"animationDuration":"transitionDuration";l[h]=a+"s"}return e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:l,class:u((t={round:n},t[i]=i,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(r["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},f422:function(t,e,n){"use strict";n("3791")}}]);
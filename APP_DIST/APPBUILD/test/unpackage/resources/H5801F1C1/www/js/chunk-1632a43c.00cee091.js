(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1632a43c"],{"0d7a":function(a,e,n){"use strict";var t=n("b2a2"),i=n("8a1c"),r=n("857c"),s=n("2732"),o=n("ef4c"),u=n("38eb"),c=n("d88d"),l=n("59da"),m=n("5139"),d=n("efe2"),p=[].push,g=Math.min,k=4294967295,h=!d((function(){return!RegExp(k,"y")}));t("split",2,(function(a,e,n){var t;return t="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(a,n){var t=String(s(this)),r=void 0===n?k:n>>>0;if(0===r)return[];if(void 0===a)return[t];if(!i(a))return e.call(t,a,r);var o,u,c,l=[],d=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(a.sticky?"y":""),g=0,h=new RegExp(a.source,d+"g");while(o=m.call(h,t)){if(u=h.lastIndex,u>g&&(l.push(t.slice(g,o.index)),o.length>1&&o.index<t.length&&p.apply(l,o.slice(1)),c=o[0].length,g=u,l.length>=r))break;h.lastIndex===o.index&&h.lastIndex++}return g===t.length?!c&&h.test("")||l.push(""):l.push(t.slice(g)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(a,n){return void 0===a&&0===n?[]:e.call(this,a,n)}:e,[function(e,n){var i=s(this),r=void 0==e?void 0:e[a];return void 0!==r?r.call(e,i,n):t.call(String(i),e,n)},function(a,i){var s=n(t,a,this,i,t!==e);if(s.done)return s.value;var m=r(a),d=String(this),p=o(m,RegExp),f=m.unicode,b=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(h?"y":"g"),v=new p(h?m:"^(?:"+m.source+")",b),y=void 0===i?k:i>>>0;if(0===y)return[];if(0===d.length)return null===l(v,d)?[d]:[];var w=0,R=0,x=[];while(R<d.length){v.lastIndex=h?R:0;var C,S=l(v,h?d:d.slice(R));if(null===S||(C=g(c(v.lastIndex+(h?0:R)),d.length))===w)R=u(d,R,f);else{if(x.push(d.slice(w,R)),x.length===y)return x;for(var P=1;P<=S.length-1;P++)if(x.push(S[P]),x.length===y)return x;R=w=C}}return x.push(d.slice(w)),x}]}),!h)},"22ef":function(a,e,n){"use strict";var t=n("efe2");function i(a,e){return RegExp(a,e)}e.UNSUPPORTED_Y=t((function(){var a=i("a","y");return a.lastIndex=2,null!=a.exec("abcd")})),e.BROKEN_CARET=t((function(){var a=i("^r","gy");return a.lastIndex=2,null!=a.exec("str")}))},"38eb":function(a,e,n){"use strict";var t=n("f62c").charAt;a.exports=function(a,e,n){return e+(n?t(a,e).length:1)}},"3c77":function(a,e,n){},4350:function(a,e,n){var t=n("90fb");e.f=t},"4be8":function(a,e,n){"use strict";n("3c77")},5139:function(a,e,n){"use strict";var t=n("99ad"),i=n("22ef"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,u=function(){var a=/a/,e=/b*/g;return r.call(a,"a"),r.call(e,"a"),0!==a.lastIndex||0!==e.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],m=u||l||c;m&&(o=function(a){var e,n,i,o,m=this,d=c&&m.sticky,p=t.call(m),g=m.source,k=0,h=a;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(a).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==a[m.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,k++),n=new RegExp("^(?:"+g+")",p)),l&&(n=new RegExp("^"+g+"$(?!\\s)",p)),u&&(e=m.lastIndex),i=r.call(d?n:m,h),d?i?(i.input=i.input.slice(k),i[0]=i[0].slice(k),i.index=m.lastIndex,m.lastIndex+=i[0].length):m.lastIndex=0:u&&i&&(m.lastIndex=m.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),a.exports=o},"59da":function(a,e,n){var t=n("2118"),i=n("5139");a.exports=function(a,e){var n=a.exec;if("function"===typeof n){var r=n.call(a,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==t(a))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(a,e)}},"6c6d":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));n("f3dd"),n("dbb3"),n("fe59"),n("b73f"),n("bf84"),n("fe8a"),n("08ba");function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}},"6d51":function(a,e,n){var t=n("1b99"),i=n("faa8"),r=n("4350"),s=n("d910").f;a.exports=function(a){var e=t.Symbol||(t.Symbol={});i(e,a)||s(e,a,{value:r.f(a)})}},"84c2":function(a,e,n){var t=n("1e2c"),i=n("d890"),r=n("e8d6"),s=n("7063"),o=n("d910").f,u=n("b338").f,c=n("8a1c"),l=n("99ad"),m=n("22ef"),d=n("1944"),p=n("efe2"),g=n("b702").set,k=n("403f"),h=n("90fb"),f=h("match"),b=i.RegExp,v=b.prototype,y=/a/g,w=/a/g,R=new b(y)!==y,x=m.UNSUPPORTED_Y,C=t&&r("RegExp",!R||x||p((function(){return w[f]=!1,b(y)!=y||b(w)==w||"/a/i"!=b(y,"i")})));if(C){var S=function(a,e){var n,t=this instanceof S,i=c(a),r=void 0===e;if(!t&&i&&a.constructor===S&&r)return a;R?i&&!r&&(a=a.source):a instanceof S&&(r&&(e=l.call(a)),a=a.source),x&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var o=s(R?new b(a,e):b(a,e),t?this:v,S);return x&&n&&g(o,{sticky:n}),o},P=function(a){a in S||o(S,a,{configurable:!0,get:function(){return b[a]},set:function(e){b[a]=e}})},O=u(b),j=0;while(O.length>j)P(O[j++]);v.constructor=S,S.prototype=v,d(i,"RegExp",S)}k("RegExp")},"8a1c":function(a,e,n){var t=n("a719"),i=n("2118"),r=n("90fb"),s=r("match");a.exports=function(a){var e;return t(a)&&(void 0!==(e=a[s])?!!e:"RegExp"==i(a))}},"9cf3":function(a,e,n){"use strict";var t=n("b2a2"),i=n("857c"),r=n("2732"),s=n("9d5c"),o=n("59da");t("search",1,(function(a,e,n){return[function(e){var n=r(this),t=void 0==e?void 0:e[a];return void 0!==t?t.call(e,n):new RegExp(e)[a](String(n))},function(a){var t=n(e,a,this);if(t.done)return t.value;var r=i(a),u=String(this),c=r.lastIndex;s(c,0)||(r.lastIndex=0);var l=o(r,u);return s(r.lastIndex,c)||(r.lastIndex=c),null===l?-1:l.index}]}))},"9d5c":function(a,e){a.exports=Object.is||function(a,e){return a===e?0!==a||1/a===1/e:a!=a&&e!=e}},b2a2:function(a,e,n){"use strict";n("e35a");var t=n("1944"),i=n("efe2"),r=n("90fb"),s=n("5139"),o=n("0fc1"),u=r("species"),c=!i((function(){var a=/./;return a.exec=function(){var a=[];return a.groups={a:"7"},a},"7"!=="".replace(a,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),m=r("replace"),d=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),p=!i((function(){var a=/(?:)/,e=a.exec;a.exec=function(){return e.apply(this,arguments)};var n="ab".split(a);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a.exports=function(a,e,n,m){var g=r(a),k=!i((function(){var e={};return e[g]=function(){return 7},7!=""[a](e)})),h=k&&!i((function(){var e=!1,n=/a/;return"split"===a&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!k||!h||"replace"===a&&(!c||!l||d)||"split"===a&&!p){var f=/./[g],b=n(g,""[a],(function(a,e,n,t,i){return e.exec===s?k&&!i?{done:!0,value:f.call(e,n,t)}:{done:!0,value:a.call(n,e,t)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),v=b[0],y=b[1];t(String.prototype,a,v),t(RegExp.prototype,g,2==e?function(a,e){return y.call(a,this,e)}:function(a){return y.call(a,this)})}m&&o(RegExp.prototype[g],"sham",!0)}},b73f:function(a,e,n){var t=n("1c8b"),i=n("efe2"),r=n("da10"),s=n("aa6b").f,o=n("1e2c"),u=i((function(){s(1)})),c=!o||u;t({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(a,e){return s(r(a),e)}})},bf84:function(a,e,n){var t=n("1c8b"),i=n("1e2c"),r=n("8d44"),s=n("da10"),o=n("aa6b"),u=n("1bbd");t({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(a){var e,n,t=s(a),i=o.f,c=r(t),l={},m=0;while(c.length>m)n=i(t,e=c[m++]),void 0!==n&&u(l,e,n);return l}})},c051:function(a,e,n){var t=n("da10"),i=n("b338").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(a){try{return i(a)}catch(e){return s.slice()}};a.exports.f=function(a){return s&&"[object Window]"==r.call(a)?o(a):i(t(a))}},c53d:function(a,e,n){"use strict";n("94f7"),n("84e8"),n("24a9"),n("6494"),n("0c3e")},d724:function(a,e,n){"use strict";var t=n("42d3"),i=n("fc6b"),r=n("6a98"),s=n("ef3f"),o=Object(t["a"])("popup"),u=o[0],c=o[1];e["a"]=u({mixins:[Object(r["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var a=this,e=function(e){return function(n){return a.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var a,e=arguments[0];if(this.shouldRender){var n=this.round,t=this.position,r=this.duration,o="center"===t,u=this.transition||(o?"van-fade":"van-popup-slide-"+t),l={};if(Object(i["c"])(r)){var m=o?"animationDuration":"transitionDuration";l[m]=r+"s"}return e("transition",{attrs:{name:u},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:l,class:c((a={round:n},a[t]=t,a["safe-area-inset-bottom"]=this.safeAreaInsetBottom,a)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:c("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},e35a:function(a,e,n){"use strict";var t=n("1c8b"),i=n("5139");t({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},eecd:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"my"},on:{click:function(e){return e.stopPropagation(),a.Close(e)}}},[n("div",{attrs:{id:"login"}},[n("div",{staticClass:"top"},[n("span",{class:{active:a.show},on:{click:function(e){return a.Active("Sign")}}},[a._v("Masuk")]),n("span",{staticClass:"line"},[a._v("|")]),n("span",{class:{active:!a.show},on:{click:function(e){return a.Active("Register")}}},[a._v("Daftar")])]),n("transition",{attrs:{name:"slide-Re"}},[a.show?n("div",{staticClass:"Signform"},[n("div",{staticClass:"msg"},[n("p",{staticClass:"name",on:{click:function(e){return e.stopPropagation(),a.showClose(e)}}},[n("i",{staticClass:"iconfont icon-morentouxiang"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.loginForm.account,expression:"loginForm.account"}],attrs:{maxlength:"16",type:"tel",placeholder:"Nomor handphone"},domProps:{value:a.loginForm.account},on:{input:function(e){e.target.composing||a.$set(a.loginForm,"account",e.target.value)}}}),a.qingchu?n("i",{staticClass:"iconfont icon-qingchu",on:{click:function(e){return e.stopPropagation(),a.ClearLoginName(e)}}}):a._e()]),n("p",{staticClass:"password"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",placeholder:"Kata sandi"},domProps:{value:a.loginForm.password},on:{input:function(e){e.target.composing||a.$set(a.loginForm,"password",e.target.value)}}})])]),n("p",{staticClass:"forget",on:{click:a.ToResetPassword}},[a._v("Lupakan kata sandi")]),n("div",{staticClass:"button"},[n("button",{staticClass:"btnlogin",on:{click:a.Login}},[a._v("Masuk Segera")])])]):a._e()]),n("transition",{attrs:{name:"slide-fade"}},[a.show?a._e():n("div",{staticClass:"Signform"},[n("div",{staticClass:"msg"},[n("p",{staticClass:"name"},[n("i",{staticClass:"iconfont icon-morentouxiang"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.account,expression:"RegisterForm.account"}],attrs:{maxlength:"16",type:"tel",placeholder:"Nomor Ponsel Daftar"},domProps:{value:a.RegisterForm.account},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"account",e.target.value)}}})]),n("p",{staticClass:"password"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.password,expression:"RegisterForm.password"}],attrs:{type:"password",placeholder:"Buat Sandi"},domProps:{value:a.RegisterForm.password},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"password",e.target.value)}}})]),n("p",{staticClass:"Conpassword"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.confirm_pwd,expression:"RegisterForm.confirm_pwd"}],attrs:{type:"password",placeholder:"Konfirmasi kata Sandi"},domProps:{value:a.RegisterForm.confirm_pwd},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"confirm_pwd",e.target.value)}}})]),n("p",{staticClass:"vercode"},[n("i",{staticClass:"iconfont icon-xinxi"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.code,expression:"RegisterForm.code"}],attrs:{type:"text",placeholder:"Silakan masukkan kode verifikasi"},domProps:{value:a.RegisterForm.code},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"code",e.target.value)}}}),n("span",{on:{click:function(e){a.RegisterOpen&&a.CountDown()}}},[a._v(a._s(a.RegisterDown?a.RegisterTime+"s":"OTP"))])]),n("p",{staticClass:"code"},[n("i",{staticClass:"iconfont icon-icon"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.invite_code,expression:"RegisterForm.invite_code"}],attrs:{disabled:a.codedisabled,type:"text",placeholder:"Kode rekomendasi"},domProps:{value:a.RegisterForm.invite_code},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"invite_code",e.target.value)}}})])]),n("p",{staticClass:"Policy"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.checkConfirm,expression:"checkConfirm"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.checkConfirm)?a._i(a.checkConfirm,null)>-1:a.checkConfirm},on:{change:function(e){var n=a.checkConfirm,t=e.target,i=!!t.checked;if(Array.isArray(n)){var r=null,s=a._i(n,r);t.checked?s<0&&(a.checkConfirm=n.concat([r])):s>-1&&(a.checkConfirm=n.slice(0,s).concat(n.slice(s+1)))}else a.checkConfirm=i}}}),a._v(" Saya setuju dengan "),n("i",{on:{click:a.ShowPup}},[a._v("Rahasia pribadi")])]),n("div",{staticClass:"button"},[n("button",{staticClass:"btnlogin zhuce",on:{click:a.Registery}},[a._v("Daftar")])]),n("popup",{model:{value:a.Agreen,callback:function(e){a.Agreen=e},expression:"Agreen"}},[n("div",{staticClass:"xiazhushow"},[n("div",{staticClass:"top"},[n("pre",[a._v("                "),n("i",{staticClass:"title"},[a._v("Perjanjian Pengungkapan Risiko")]),a._v("\n                "),n("i",{staticClass:"tag"},[a._v("Bab 1. Deskripsi Pemesanan / Koleksi")]),a._v("\n                  Pemesanan Prabayar / Daur Ulang Pelanggan harus membaca dan memahami konten bisnis dengan cermat sebelum melakukan pemesanan prabayar (harga kunci prabayar, penyelesaian pembayaran dan pengiriman) / pemulihan atau pembelian kembali (harga kunci prabayar, pembayaran pengiriman) sebelum melakukan pemesanan prabayar ke Retty-Shop:\n                  1. Sebelum membuat janji temu / memulihkan bisnis prabayar, pelanggan harus melengkapi otentikasi nama asli di mal dan memastikan bahwa nama, nomor ID, nomor rekening bank, alamat pengiriman dan informasi lain yang diisi adalah benar, akurat dan valid; Jika tidak, pengguna akan bertanggung jawab atas konsekuensi informasi palsu.\n                  2. Pelanggan dapat memesan produk emas dan perak terlebih dahulu di pusat perbelanjaan. Pesanan dapat dibatalkan paling lambat 01:30 pada hari Sabtu yang sama. Saat pelanggan membayar pembayaran akhir, mal menerima pembayaran akhir dan mengatur pengiriman.Jika pelanggan tidak membayar pengambilan terakhir pada pukul 01:30 pada hari Sabtu, pelanggan dianggap telah membuat penawaran terakhir sebelum inventaris dan pemesanan dibatalkan.\n                  3. Pelanggan dapat membuat janji untuk mendaur ulang produk emas dan perak yang dibeli di titik emas. Pemulihan pra-pembelian memerlukan margin kredit dan konfirmasi kepemilikan aktual atas produk emas dan perak yang dibeli dari mal. Pelanggan dapat membatalkan reservasi mereka kapan saja sebelum 01:30 pada hari Sabtu dan tanda kredit akan dikembalikan setelah dikurangi kenaikan atau penurunan nilai barang dalam waktu yang sesuai.\n                  Jika pelanggan gagal mengirimkan barang ke pusat perbelanjaan atau pusat perbelanjaan di tempat pengambilan yang ditentukan pada hari Sabtu dalam minggu yang sama, atau jika barang yang dikirim tidak memenuhi tes standar daur ulang, pelanggan akan dianggap telah membatalkan reservasi pemulihan dan akan menanggung biaya logistik dan pengujian.  \n                  4. Menghitung waktu: Setiap hari 01: 30-05: 30 untuk waktu inventarisasi gudang mall. Selama periode inventaris, mal berhenti menerima pembayaran di muka untuk reservasi / tanda terima.\n                  5. Untuk lebih jelasnya lihat Panduan Bisnis di halaman depan mall, Memahami Retty Shop.\n                "),n("i",{staticClass:"tag"},[a._v("Bab 2 Mengungkap model bisnis Retty-Shop")]),a._v("\n                  Pemesanan / pemesanan kembali, model bisnis pengiriman saldo kliring, ketidakpastian seperti potensi manfaat dan potensi risiko terhadap nilai barang dagangannya karena fluktuasi waktu nyata di pasar emas dan perak, dan sejauh mana risiko pemesanan / repo yang dipertaruhkan dipahami untuk customer booking / repo risk, kemampuan pengendalian Risiko dan pemahaman produk terkait memiliki persyaratan yang tinggi. Pelanggan memilih pemesanan prabayar / pembelian kembali, diinformasikan sepenuhnya atas nama pelanggan dan memahami risiko bisnis prabayar / pembelian kembali dan menyetujui dan menerima proses bisnis pemesanan / pembelian kembali yang relevan saat ini dan di masa mendatang dan sistem manajemen (secara kolektif disebut Proses Sistem) untuk mengembangkan, memodifikasi, dan menerbitkan. Pengungkapan Risiko (Pengungkapan) ini dimaksudkan untuk mengungkapkan sepenuhnya kepada Klien risiko bisnis pemesanan / pembelian kembali prabayar dan dimaksudkan hanya untuk memberikan referensi bagi klien untuk menilai dan menentukan toleransi risikonya sendiri. Pengungkapan risiko yang dijelaskan dalam pengungkapan ini hanya sebagai contoh. Semua faktor risiko yang terkait dengan Retty Shop Advance Booking / Repurchase tidak dirinci. Pelanggan juga harus memahami dengan cermat dan memahami kemungkinan faktor risiko lainnya sebelum memulai atau berpartisipasi dalam bisnis pemesanan / pembelian kembali pra-pembayaran Retty-Shop. Jika pelanggan tidak mengetahui atau tidak mengetahui pengungkapan ini, mereka harus berkonsultasi dengan Retty-Shop Customer Service atau penyedia layanan regional yang relevan secara tepat waktu. Jika Pelanggan akhirnya mengklik Pengungkapan Risiko, maka dianggap bahwa Pelanggan sepenuhnya setuju dan menerima seluruh konten dari pengungkapan ini.\n                "),n("i",{staticClass:"tag"},[a._v(" Tips hangat")]),a._v("\n                1. Anak di bawah umur 18 tahun tidak diizinkan untuk berpartisipasi dalam Pemesanan / Daur Ulang Toko Retty-Shop.\n                2. Pemesanan di Muka / Repo Retty-Shop hanya tersedia untuk pelanggan yang memenuhi semua kriteria berikut:\n                ① Orang perseorangan dengan kapasitas sipil penuh, badan hukum perusahaan atau organisasi ekonomi lainnya yang terdaftar sesuai dengan hukum.\n                ② Untuk memahami sepenuhnya semua risiko yang terkait dengan bisnis Retty Shop Advance Booking / Repurchase dan memiliki toleransi risiko tertentu.\n                ③ Memiliki pemahaman tertentu tentang emas dan perak dan produknya:\n                A.Pengungkapan risiko terkait kebijakan, seperti perubahan dalam undang-undang, peraturan dan kebijakan nasional, tindakan kontingensi, penerapan tindakan regulasi yang tepat, sistem regulasi Retty-Shop dan perubahan dalam metode dan regulasi manajemen, dll., Semua risiko yang dapat memengaruhi pelanggan pemesanan / pembelian kembali, dll, pelanggan harus menanggung kerugian yang ditimbulkan.\n                B. Price fluctuations, gold, silver and other precious metals and their accessories are affected by a variety of factors, such as the international economic situation, foreign exchange, related market trends, supply and demand, and political situation and energy prices. The pricing mechanism for gold, silver and other precious metals products is very complex, making it difficult for customers to fully grasp in practice, so decisions such as advance booking/buyback are possible Mistakes, if the risk cannot be effectively controlled, may suffer losses and the customer must bear all the losses incurred as a result.\n                ④ Retty-Shop telah memungkinkan penyediaan layanan melalui teknologi komunikasi elektronik dan teknologi Internet. Layanan komunikasi dan layanan perangkat keras dan perangkat lunak disediakan oleh vendor yang berbeda dan mungkin berisiko dalam hal kualitas dan stabilitas. Gangguan atau penundaan karena komunikasi atau kegagalan jaringan dapat memengaruhi pemesanan / pembelian kembali pembayaran di muka oleh pelanggan. Selain itu, sistem komputer pelanggan dapat diserang oleh virus dan / atau cyber-hackers, yang mengakibatkan pemesanan / pembelian kembali pembayaran di muka pelanggan tidak berjalan sebagaimana mestinya dan / atau tepat waktu. Ada juga risiko bahwa ketidakpastian di atas dapat memengaruhi pemesanan / pembelian kembali pembayaran di muka pelanggan.\n                A. Harga yang dikutip oleh Sistem Pemesanan / Repo Pembayaran di Muka Retty-Shop didasarkan pada harga perdagangan sistem waktu nyata dan mungkin sedikit berbeda dari harga komoditas di pasar lain.\n                Retty-Shop tidak dapat menjamin bahwa harga pemesanan // pembelian kembali di muka sepenuhnya konsisten dengan pasar lain.\n                B. Di Retty-Shop, setelah aplikasi pemesanan / pembelian kembali pembayaran di muka yang diajukan melalui terminal online diselesaikan, aplikasi tidak dapat ditarik dan pelanggan harus menerima risiko yang terkait dengan langganan tersebut.\n                C. Retty-Shop melarang penyedia layanan regional dan stafnya untuk memberikan jaminan keuntungan kepada pelanggan, dari melakukan pemesanan prabayar / pembelian kembali atas nama pelanggan, atau dari berbagi keuntungan atau risiko dengan pelanggan. Pelanggan harus menyadari bahwa jaminan atau komitmen keuntungan apa pun yang pemesanan / pembelian kembali Retty-Shop di muka tidak mengalami kerugian, bagi hasil atau pembagian risiko adalah tidak mungkin, tidak berdasar, dan tidak benar.\n                D. Aplikasi pemesanan / pembelian kembali prabayar pelanggan harus berdasarkan keputusan pelanggan sendiri. Retty-Shop dan penyedia layanan regional dan karyawan tidak memberikan pemesanan / pembelian kembali kepada klien, juga bukan merupakan komitmen jika klien membuat keputusan pemesanan / pembelian kembali yang sesuai.\n                E. Dalam proses pemesanan / pembelian kembali sebelumnya, mungkin ada kesalahan yang terlihat sesekali dalam penawaran.\n                ⑤ PERJANJIAN RISIKO\n                Topan, banjir, kebakaran, perang, gangguan, revisi peraturan, perubahan atau penyesuaian dalam kebijakan peraturan pemerintah dan persyaratan peraturan, dan listrik, Untuk memastikan bahwa Anda sepenuhnya memahami ketentuan dan risiko yang relevan dari bisnis pemesanan / pembelian kembali, pelanggan harus didasarkan pada memiliki pengalaman memesan, memesan / membeli kembali / membeli komoditas, membaca semua isi pemberitahuan pemesanan awal / pembelian kembali dengan cermat, dan sepenuhnya memahami dan menyetujui semua konten, saya bersedia mengambil semua risiko untuk memulai atau berpartisipasi dalam Retty-Shop . Dalam kasus kondisi yang disebutkan di atas, saya akan bertanggung jawab sendiri atas kerugian finansial maupun keuangan. Dengan menerima ini, saya tidak lagi berhak untuk mengklaim manfaat hukum menurut undang-undang apa pun yang diberikan kepada warga negara India oleh Hukum India.\n              ")])]),n("div",{staticClass:"fixed"},[n("p",{staticClass:"fixedmsg"},[a._v(" Catatan: Saya telah membaca semua konten aplikasi ini dengan cermat termasuk Pernyataan Privasi, Perjanjian Pengungkapan Risiko, dan Perjanjian Risiko dan saya setuju untuk melanjutkan risiko saya sendiri. ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:a.checkConfirm,expression:"checkConfirm"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.checkConfirm)?a._i(a.checkConfirm,null)>-1:a.checkConfirm},on:{change:function(e){var n=a.checkConfirm,t=e.target,i=!!t.checked;if(Array.isArray(n)){var r=null,s=a._i(n,r);t.checked?s<0&&(a.checkConfirm=n.concat([r])):s>-1&&(a.checkConfirm=n.slice(0,s).concat(n.slice(s+1)))}else a.checkConfirm=i}}}),n("button",{class:{active:a.checkConfirm},on:{click:function(e){a.checkConfirm&&a.ConFirm()}}},[a._v(" Konfirmasi ")])])])])],1)])],1)])},i=[],r=(n("fe59"),n("ecb4"),n("84c2"),n("e35a"),n("1c2e"),n("9cf3"),n("0d7a"),n("08ba"),n("6a61"),n("327b")),s=n("6c6d"),o=(n("a691"),n("01e2")),u=(n("c53d"),n("d724")),c=n("9f3a"),l={components:{Popup:u["a"],Toast:o["a"]},data:function(){return{show:!0,loginForm:{account:"",password:"",uuid:""},RegisterForm:{account:"",password:"",confirm_pwd:"",code:"",invite_code:"",channel_id:8,uuid:""},codedisabled:!1,Agreen:!1,checkConfirm:!1,qingchu:!1,reg:new RegExp("^[0-9]*$"),currenthost:""}},created:function(){var a=this;this.currenthost=this.$store.state.domain,localStorage.getItem("IsUserName")&&(this.show=!0,this.loginForm.account=JSON.parse(localStorage.getItem("IsUserName")).account);var e=window.location.search;if(-1!==e.indexOf("&")){var n=e.split("&");n.forEach((function(e){a.formatValue(e)}))}else this.formatValue(e);if(!(navigator.userAgent.indexOf("Html5Plus")<0)){var t=plus.android.importClass("com.example.myapplication.aa"),i=new t;i.useAppContext()&&(this.RegisterForm.channel_id=i.useAppContext()),console.log("123"),console.log(plus.device.uuid),console.log("123"),this.loginForm.uuid=plus.device.uuid,this.RegisterForm.uuid=plus.device.uuid}},computed:Object(s["a"])({},Object(c["b"])(["RegisterDown","RegisterTime","RegisterOpen","RegistertimeID"])),methods:{ChangeTime:function(a,e,n,t,i,r){this.$store.commit(a,t),this.$store.commit(e,i),this.$store.commit(n,r),clearInterval(this.$store.state.RegistertimeID)},CountDown:function(){if(!this.RegisterForm.account)return this.$toast("! Silakan masukkan nomor ponsel Anda.");var a={methods1:"C_RegisterDown",methods2:"C_RegisterDownNum",methods3:"C_RegisterOpen",time_id:"RegistertimeID",time:"RegisterTime",num:this.RegisterForm.account};this.$store.dispatch("Send_Code",a)},showClose:function(){this.qingchu=!0},Close:function(){this.qingchu=!1},ClearLoginName:function(){this.loginForm.account="",this.qingchu=!1},formatValue:function(a){-1!==a.indexOf("invite_code")&&(localStorage.getItem("IsUserName")?this.show=!0:this.show=!1,this.codedisabled=!0,this.RegisterForm.invite_code=a.split("=")[1]),-1!==a.indexOf("channel_id")&&(this.RegisterForm.channel_id=a.split("=")[1])},ConFirm:function(){this.checkConfirm=!0,this.Agreen=!1},ShowPup:function(){this.Agreen=!0},Active:function(a){"Register"===a?(this.show=!1,this.checkConfirm=!1):this.show=!0},ToResetPassword:function(){this.$router.push("/ResetPassword")},SuccessLogin:function(){"app.igo1888.com"===this.currenthost?(this.$router.push("/winGo"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.$store.dispatch("GetRedAsync")):(this.$router.push("/home"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.$store.dispatch("GetRedAsync"))},Login:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.loginForm.account){e.next=2;break}return e.abrupt("return",a.$toast("! Silakan masukkan nomor ponsel Anda."));case 2:if(a.loginForm.password){e.next=4;break}return e.abrupt("return",a.$toast("! Silakan masukkan kata sandi Anda."));case 4:return e.next=6,a.$axios.Login(a.loginForm);case 6:n=e.sent,t=n.data,1===t.code?(i=Object(s["a"])({},a.loginForm),delete i.password,localStorage.setItem("IsUserName",JSON.stringify(i)),localStorage.setItem("HASCOOKIE",!0),a.SuccessLogin()):a.$toast(t.msg);case 9:case"end":return e.stop()}}),e)})))()},Gohome:function(){"app.igo1888.com"===this.currenthost?(this.$router.push("/winGo"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.checkConfirm=!1):(this.$router.push("/home"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.checkConfirm=!1)},Registery:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.RegisterForm.account){e.next=2;break}return e.abrupt("return",a.$toast("! Silakan masukkan nomor ponsel Anda."));case 2:if(a.RegisterForm.password){e.next=4;break}return e.abrupt("return",a.$toast("! Silakan masukkan kata sandi Anda."));case 4:if(a.RegisterForm.confirm_pwd){e.next=6;break}return e.abrupt("return",a.$toast("! Silakan masukkan sandi konfirmasi."));case 6:if(a.RegisterForm.password===a.RegisterForm.confirm_pwd){e.next=8;break}return e.abrupt("return",a.$toast("Kata sandi buat tidak konsisten dengan kata sandi konfirmasi."));case 8:if(a.RegisterForm.code){e.next=10;break}return e.abrupt("return",a.$toast("! Silakan masukkan kode verifikasi."));case 10:if(a.checkConfirm){e.next=15;break}return a.$toast("！Harap setujui Rahasia pribadi terlebih dahulu."),e.abrupt("return",!1);case 15:return e.next=17,a.$axios.Register(a.RegisterForm);case 17:n=e.sent,t=n.data,1===t.code?(a.show=!0,a.checkConfirm=!1,a.ChangeTime("C_RegisterDown","C_RegisterDownNum","C_RegisterOpen",!1,60,!0),i={account:a.RegisterForm.account},localStorage.setItem("IsUserName",JSON.stringify(i)),localStorage.setItem("COUNT",0),localStorage.setItem("HASCOOKIE",!0),a.SuccessLogin(),"app.igo1888.com"===a.$store.state.domain&&(r=document.getElementsByClassName("zhuce")[0],r.addEventListener=a.tongji())):a.$toast(t.msg);case 20:case"end":return e.stop()}}),e)})))()},tongji:function(){dataLayer.push({event:"button1-click"})}}},m=l,d=(n("4be8"),n("c701")),p=Object(d["a"])(m,t,i,!1,null,"70def1db",null);e["default"]=p.exports},f3dd:function(a,e,n){"use strict";var t=n("1c8b"),i=n("d890"),r=n("6d7a"),s=n("9b9d"),o=n("1e2c"),u=n("c54b"),c=n("74cb"),l=n("efe2"),m=n("faa8"),d=n("74e7"),p=n("a719"),g=n("857c"),k=n("3553"),h=n("da10"),f=n("9f67"),b=n("38b9"),v=n("6d60"),y=n("cbab"),w=n("b338"),R=n("c051"),x=n("0a60"),C=n("aa6b"),S=n("d910"),P=n("ef71"),O=n("0fc1"),j=n("1944"),_=n("6d28"),I=n("7db2"),E=n("d5a8"),F=n("7e8b"),A=n("90fb"),$=n("4350"),N=n("6d51"),D=n("27b5"),T=n("b702"),U=n("5dfd").forEach,B=I("hidden"),L="Symbol",J="prototype",K=A("toPrimitive"),M=T.set,G=T.getterFor(L),q=Object[J],H=i.Symbol,z=r("JSON","stringify"),V=C.f,Y=S.f,Q=R.f,W=P.f,X=_("symbols"),Z=_("op-symbols"),aa=_("string-to-symbol-registry"),ea=_("symbol-to-string-registry"),na=_("wks"),ta=i.QObject,ia=!ta||!ta[J]||!ta[J].findChild,ra=o&&l((function(){return 7!=v(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(a,e,n){var t=V(q,e);t&&delete q[e],Y(a,e,n),t&&a!==q&&Y(q,e,t)}:Y,sa=function(a,e){var n=X[a]=v(H[J]);return M(n,{type:L,tag:a,description:e}),o||(n.description=e),n},oa=c?function(a){return"symbol"==typeof a}:function(a){return Object(a)instanceof H},ua=function(a,e,n){a===q&&ua(Z,e,n),g(a);var t=f(e,!0);return g(n),m(X,t)?(n.enumerable?(m(a,B)&&a[B][t]&&(a[B][t]=!1),n=v(n,{enumerable:b(0,!1)})):(m(a,B)||Y(a,B,b(1,{})),a[B][t]=!0),ra(a,t,n)):Y(a,t,n)},ca=function(a,e){g(a);var n=h(e),t=y(n).concat(ga(n));return U(t,(function(e){o&&!ma.call(n,e)||ua(a,e,n[e])})),a},la=function(a,e){return void 0===e?v(a):ca(v(a),e)},ma=function(a){var e=f(a,!0),n=W.call(this,e);return!(this===q&&m(X,e)&&!m(Z,e))&&(!(n||!m(this,e)||!m(X,e)||m(this,B)&&this[B][e])||n)},da=function(a,e){var n=h(a),t=f(e,!0);if(n!==q||!m(X,t)||m(Z,t)){var i=V(n,t);return!i||!m(X,t)||m(n,B)&&n[B][t]||(i.enumerable=!0),i}},pa=function(a){var e=Q(h(a)),n=[];return U(e,(function(a){m(X,a)||m(E,a)||n.push(a)})),n},ga=function(a){var e=a===q,n=Q(e?Z:h(a)),t=[];return U(n,(function(a){!m(X,a)||e&&!m(q,a)||t.push(X[a])})),t};if(u||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var a=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=F(a),n=function(a){this===q&&n.call(Z,a),m(this,B)&&m(this[B],e)&&(this[B][e]=!1),ra(this,e,b(1,a))};return o&&ia&&ra(q,e,{configurable:!0,set:n}),sa(e,a)},j(H[J],"toString",(function(){return G(this).tag})),j(H,"withoutSetter",(function(a){return sa(F(a),a)})),P.f=ma,S.f=ua,C.f=da,w.f=R.f=pa,x.f=ga,$.f=function(a){return sa(A(a),a)},o&&(Y(H[J],"description",{configurable:!0,get:function(){return G(this).description}}),s||j(q,"propertyIsEnumerable",ma,{unsafe:!0}))),t({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),U(y(na),(function(a){N(a)})),t({target:L,stat:!0,forced:!u},{for:function(a){var e=String(a);if(m(aa,e))return aa[e];var n=H(e);return aa[e]=n,ea[n]=e,n},keyFor:function(a){if(!oa(a))throw TypeError(a+" is not a symbol");if(m(ea,a))return ea[a]},useSetter:function(){ia=!0},useSimple:function(){ia=!1}}),t({target:"Object",stat:!0,forced:!u,sham:!o},{create:la,defineProperty:ua,defineProperties:ca,getOwnPropertyDescriptor:da}),t({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pa,getOwnPropertySymbols:ga}),t({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(a){return x.f(k(a))}}),z){var ka=!u||l((function(){var a=H();return"[null]"!=z([a])||"{}"!=z({a:a})||"{}"!=z(Object(a))}));t({target:"JSON",stat:!0,forced:ka},{stringify:function(a,e,n){var t,i=[a],r=1;while(arguments.length>r)i.push(arguments[r++]);if(t=e,(p(e)||void 0!==a)&&!oa(a))return d(e)||(e=function(a,e){if("function"==typeof t&&(e=t.call(this,a,e)),!oa(e))return e}),i[1]=e,z.apply(null,i)}})}H[J][K]||O(H[J],K,H[J].valueOf),D(H,L),E[B]=!0},f62c:function(a,e,n){var t=n("3da3"),i=n("2732"),r=function(a){return function(e,n){var r,s,o=String(i(e)),u=t(n),c=o.length;return u<0||u>=c?a?"":void 0:(r=o.charCodeAt(u),r<55296||r>56319||u+1===c||(s=o.charCodeAt(u+1))<56320||s>57343?a?o.charAt(u):r:a?o.slice(u,u+2):s-56320+(r-55296<<10)+65536)}};a.exports={codeAt:r(!1),charAt:r(!0)}},fe8a:function(a,e,n){var t=n("1c8b"),i=n("3553"),r=n("cbab"),s=n("efe2"),o=s((function(){r(1)}));t({target:"Object",stat:!0,forced:o},{keys:function(a){return r(i(a))}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5882f5e3"],{"11f7":function(a,e,n){"use strict";var t=n("92df"),i=n("9941"),r=n("8371"),s=n("2767"),o=Object(t["a"])("notice-bar"),u=o[0],l=o[1];e["a"]=u({props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:50}},data:function(){return{show:!0,offset:0,duration:0,wrapWidth:0,contentWidth:0}},watch:{scrollable:"start",text:{handler:"start",immediate:!0}},activated:function(){this.start()},methods:{onClickIcon:function(a){"closeable"===this.mode&&(this.show=!1,this.$emit("close",a))},onTransitionEnd:function(){var a=this;this.offset=this.wrapWidth,this.duration=0,this.$nextTick((function(){Object(r["b"])((function(){a.offset=-a.contentWidth,a.duration=(a.contentWidth+a.wrapWidth)/a.speed,a.$emit("replay")}))}))},reset:function(){this.offset=0,this.duration=0,this.wrapWidth=0,this.contentWidth=0},start:function(){var a=this,e=Object(i["c"])(this.delay)?1e3*this.delay:0;this.reset(),setTimeout((function(){var e=a.$refs,n=e.wrap,t=e.content;if(n&&t&&!1!==a.scrollable){var i=n.getBoundingClientRect().width,s=t.getBoundingClientRect().width;(a.scrollable||s>i)&&Object(r["b"])((function(){a.offset=-s,a.duration=s/a.speed,a.wrapWidth=i,a.contentWidth=s}))}}),e)}},render:function(){var a=this,e=arguments[0],n=this.slots,t=this.mode,i=this.leftIcon,r=this.onClickIcon,o={color:this.color,background:this.background},u={transform:this.offset?"translateX("+this.offset+"px)":"",transitionDuration:this.duration+"s"};function c(){var a=n("left-icon");return a||(i?e(s["a"],{class:l("left-icon"),attrs:{name:i}}):void 0)}function d(){var a,i=n("right-icon");return i||("closeable"===t?a="cross":"link"===t&&(a="arrow"),a?e(s["a"],{class:l("right-icon"),attrs:{name:a},on:{click:r}}):void 0)}return e("div",{attrs:{role:"alert"},directives:[{name:"show",value:this.show}],class:l({wrapable:this.wrapable}),style:o,on:{click:function(e){a.$emit("click",e)}}},[c(),e("div",{ref:"wrap",class:l("wrap"),attrs:{role:"marquee"}},[e("div",{ref:"content",class:[l("content"),{"van-ellipsis":!1===this.scrollable&&!this.wrapable}],style:u,on:{transitionend:this.onTransitionEnd}},[this.slots()||this.text])]),d()])}})},"12b6":function(a,e,n){"use strict";var t=n("23c4"),i=n.n(t),r=n("92df"),s=n("9941"),o=n("e01d");function u(){return!s["g"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var l=n("c082"),c=u();function d(){c&&Object(l["g"])(Object(l["b"])())}var m=n("0ed0"),h=n("2f57"),p=n("5bce"),g={inject:{vanField:{default:null}},watch:{value:function(){var a=this.vanField;a&&(a.resetValidation(),a.validateWithTrigger("onChange"))}},created:function(){var a=this.vanField;a&&!a.children&&(a.children=this)}},k=Object(r["a"])("stepper"),f=k[0],b=k[1],v=600,y=200;function _(a,e){return String(a)===String(e)}function C(a,e){var n=Math.pow(10,10);return Math.round((a+e)*n)/n}e["a"]=f({mixins:[g],props:{value:null,theme:String,integer:Boolean,disabled:Boolean,allowEmpty:Boolean,inputWidth:[Number,String],buttonSize:[Number,String],asyncChange:Boolean,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,decimalLength:[Number,String],name:{type:[Number,String],default:""},min:{type:[Number,String],default:1},max:{type:[Number,String],default:1/0},step:{type:[Number,String],default:1},defaultValue:{type:[Number,String],default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},longPress:{type:Boolean,default:!0}},data:function(){var a=Object(s["c"])(this.value)?this.value:this.defaultValue,e=this.format(a);return _(e,this.value)||this.$emit("input",e),{currentValue:e}},computed:{minusDisabled:function(){return this.disabled||this.disableMinus||this.currentValue<=+this.min},plusDisabled:function(){return this.disabled||this.disablePlus||this.currentValue>=+this.max},inputStyle:function(){var a={};return this.inputWidth&&(a.width=Object(o["a"])(this.inputWidth)),this.buttonSize&&(a.height=Object(o["a"])(this.buttonSize)),a},buttonStyle:function(){if(this.buttonSize){var a=Object(o["a"])(this.buttonSize);return{width:a,height:a}}}},watch:{max:"check",min:"check",integer:"check",decimalLength:"check",value:function(a){_(a,this.currentValue)||(this.currentValue=this.format(a))},currentValue:function(a){this.$emit("input",a),this.$emit("change",a,{name:this.name})}},methods:{check:function(){var a=this.format(this.currentValue);_(a,this.currentValue)||(this.currentValue=a)},formatNumber:function(a){return Object(h["a"])(String(a),!this.integer)},format:function(a){return this.allowEmpty&&""===a||(a=this.formatNumber(a),a=""===a?0:+a,a=Object(p["a"])(a)?this.min:a,a=Math.max(Math.min(this.max,a),this.min),Object(s["c"])(this.decimalLength)&&(a=a.toFixed(this.decimalLength))),a},onInput:function(a){var e=a.target.value,n=this.formatNumber(e);if(Object(s["c"])(this.decimalLength)&&-1!==n.indexOf(".")){var t=n.split(".");n=t[0]+"."+t[1].slice(0,this.decimalLength)}_(e,n)||(a.target.value=n),this.emitChange(n)},emitChange:function(a){this.asyncChange?(this.$emit("input",a),this.$emit("change",a,{name:this.name})):this.currentValue=a},onChange:function(){var a=this.type;if(this[a+"Disabled"])this.$emit("overlimit",a);else{var e="minus"===a?-this.step:+this.step,n=this.format(C(+this.currentValue,e));this.emitChange(n),this.$emit(a)}},onFocus:function(a){this.disableInput&&this.$refs.input?this.$refs.input.blur():this.$emit("focus",a)},onBlur:function(a){var e=this.format(a.target.value);a.target.value=e,this.currentValue=e,this.$emit("blur",a),d()},longPressStep:function(){var a=this;this.longPressTimer=setTimeout((function(){a.onChange(),a.longPressStep(a.type)}),y)},onTouchStart:function(){var a=this;this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress=!1,this.longPressTimer=setTimeout((function(){a.isLongPress=!0,a.onChange(),a.longPressStep()}),v))},onTouchEnd:function(a){this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress&&Object(m["c"])(a))}},render:function(){var a=this,e=arguments[0],n=function(e){return{on:{click:function(n){n.preventDefault(),a.type=e,a.onChange()},touchstart:function(){a.type=e,a.onTouchStart()},touchend:a.onTouchEnd,touchcancel:a.onTouchEnd}}};return e("div",{class:b([this.theme])},[e("button",i()([{directives:[{name:"show",value:this.showMinus}],attrs:{type:"button"},style:this.buttonStyle,class:b("minus",{disabled:this.minusDisabled})},n("minus")])),e("input",{ref:"input",attrs:{type:this.integer?"tel":"text",role:"spinbutton",disabled:this.disabled,readonly:this.disableInput,inputmode:this.integer?"numeric":"decimal",placeholder:this.placeholder,"aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.currentValue},class:b("input"),domProps:{value:this.currentValue},style:this.inputStyle,on:{input:this.onInput,focus:this.onFocus,blur:this.onBlur}}),e("button",i()([{directives:[{name:"show",value:this.showPlus}],attrs:{type:"button"},style:this.buttonStyle,class:b("plus",{disabled:this.plusDisabled})},n("plus")]))])}})},"1baf":function(a,e,n){a.exports=n.p+"img/redicon.987f20c5.png"},"2f57":function(a,e,n){"use strict";function t(a,e,n){return Math.min(Math.max(a,e),n)}function i(a,e,n){var t=a.indexOf(e);return-1===t?a:"-"===e&&0!==t?a.slice(0,t):a.slice(0,t+1)+a.slice(t).replace(n,"")}function r(a,e){a=e?i(a,".",/\./g):a.split(".")[0],a=i(a,"-",/-/g);var n=e?/[^-0-9.]/g:/[^-0-9]/g;return a.replace(n,"")}n.d(e,"b",(function(){return t})),n.d(e,"a",(function(){return r}))},3645:function(a,e,n){a.exports=n.p+"img/rediconmask.efe5c83c.png"},"49c4":function(a,e,n){},5649:function(a,e,n){"use strict";n("d595"),n("82ed")},"6add":function(a,e,n){"use strict";n("d595"),n("352e"),n("11f9"),n("0380"),n("fe29")},"71f1":function(a,e,n){},"82ed":function(a,e,n){},8913:function(a,e,n){"use strict";var t=n("92df"),i=n("9941"),r=n("5df2"),s=n("2767"),o=Object(t["a"])("popup"),u=o[0],l=o[1];e["a"]=u({mixins:[Object(r["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var a=this,e=function(e){return function(n){return a.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var a,e=arguments[0];if(this.shouldRender){var n=this.round,t=this.position,r=this.duration,o="center"===t,u=this.transition||(o?"van-fade":"van-popup-slide-"+t),c={};if(Object(i["c"])(r)){var d=o?"animationDuration":"transitionDuration";c[d]=r+"s"}return e("transition",{attrs:{name:u},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:c,class:l((a={round:n},a[t]=t,a["safe-area-inset-bottom"]=this.safeAreaInsetBottom,a)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},"89b3":function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{ref:"winGo",attrs:{id:"winGo"}},[n("div",{staticClass:"member"},[a.hascookie?n("div",{staticClass:"left"},[n("p",[a._v("Saldo Tersedia")]),n("p",[n("i",{staticClass:"iconfont "},[a._v("IDR")]),a._v(" "+a._s(a._f("FormatFloatNum")(a.userForm.balance))+" ")]),n("p",[a._v(a._s(a.userForm.member_id))])]):n("div",{staticClass:"left"},[n("p",[a._v("Saldo Tersedia")]),a._m(0),n("p",{staticClass:"clicklogin"},[n("i",{on:{click:a.tologin}},[a._v("Silahkan masuk.")])])]),n("div",{staticClass:"right"},[n("button",{staticClass:"Recharge",on:{click:a.Recharge}},[a._v("Isi ulang >")]),n("button",{staticClass:"Rule",on:{click:a.Rule}},[n("i",{staticClass:"iconfont icon-wenjian"}),a._v("Aturan ")])])]),a.noticemsg?n("notice-bar",[a._v(" "+a._s(a.noticemsg)+" ")]):a._e(),n("tabs",{on:{click:a.onClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},a._l(a.totallist,(function(a,e){return n("tab",{key:e,attrs:{title:a.name,name:a.id}})})),1),n("div",{staticClass:"game"},[a.PeriodForm.lottery_number?n("div",{staticClass:"top"},[a._m(1),n("p",{staticClass:"num"},[n("span",[a._v(a._s(a.PeriodForm.lottery_number))]),n("span",{staticClass:"Count"},[a._v(a._s(a.countDown?a.countDownTime:"Lanjutkan"))])])]):a._e(),n("div",{staticClass:"bottom"},[n("ul",{ref:"UL1",staticClass:"type"},a._l(a.typelist,(function(e,t){return n("li",{key:t,class:{closeColor:a.close},on:{click:function(n){a.clickLi&&a.togame(e)}}},[a._v(" "+a._s(e.name)+" ")])})),0),n("ul",{ref:"UL2",staticClass:"typeNum"},a._l(a.typeNumlist,(function(e,t){return n("li",{key:t,class:{closeColor:a.close},on:{click:function(n){a.clickLi&&a.togame(e)}}},[a._v(" "+a._s(e.name)+" ")])})),0)])]),n("div",{staticClass:"sports"},[n("div",{staticClass:"t-sports"},[n("p",{staticClass:"left"},[a._v(a._s(a.tebName)+" Merekam")]),n("p",{staticClass:"right",on:{click:a.tosports}},[a._v("lebih >")])]),a.LotteryList?n("sportslog",{attrs:{list:a.LotteryList}}):a._e()],1),n("p",{staticClass:"line"}),n("div",{staticClass:"order"},[n("div",{staticClass:"t-sports"},[n("p",{staticClass:"left"},[a._v(" "+a._s(a.tebName)+" Perintahku")]),n("p",{staticClass:"right",on:{click:a.toorder}},[a._v("lebih >")])]),a.OrderList?n("orderlog",{attrs:{list:a.OrderList}}):a._e()],1),n("popup",{model:{value:a.show,callback:function(e){a.show=e},expression:"show"}},[n("div",{staticClass:"password"},[n("pre",[a._v("        "+a._s(a.RuleData)+"\n      ")])])]),n("popup",{style:{width:"100%",height:"45%"},attrs:{position:"bottom"},model:{value:a.Periodshow,callback:function(e){a.Periodshow=e},expression:"Periodshow"}},[n("div",{staticClass:"join"},[n("p",{style:a.activeColor},[a._v(" "+a._s(a.selet)+" "),n("i",{staticClass:"iconfont icon-juxingbeifen",style:a.activeI})])]),n("div",{staticClass:"money"},[n("div",{staticClass:"btn Contract"},[n("p",{staticClass:"con"},[a._v("Uang Kontrak")]),a.currents.money_list?n("ul",{ref:"ConUl"},a._l(a.currents.money_list,(function(e,t){return n("li",{key:t,on:{click:function(n){return a.checkcon(n,e)}}},[a._v(" "+a._s(e)+" ")])})),0):a._e()]),n("div",{staticClass:"btn number"},[n("p",{staticClass:"num"},[a._v("Jumlah")]),a.currents.number_list?n("ul",{ref:"NumUl"},a._l(a.currents.number_list,(function(e,t){return n("li",{key:t,on:{click:function(n){return a.checknum(n,e)}}},[a._v(" "+a._s(e)+" ")])})),0):a._e()])]),n("p",{staticClass:"step"},[n("Stepper",{on:{change:a.ChangeNum},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1),n("p",{staticClass:"max"},[a._v("Jumlah pesanan maksimum 999")]),n("p",{staticClass:"Policy"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.checkbox,expression:"checkbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.checkbox)?a._i(a.checkbox,null)>-1:a.checkbox},on:{change:function(e){var n=a.checkbox,t=e.target,i=!!t.checked;if(Array.isArray(n)){var r=null,s=a._i(n,r);t.checked?s<0&&(a.checkbox=n.concat([r])):s>-1&&(a.checkbox=n.slice(0,s).concat(n.slice(s+1)))}else a.checkbox=i}}}),a._v(" Saya setuju dengan "),n("i",{on:{click:a.ShowxiazhuPup}},[a._v("Aturan manajemen prapenjualan")])]),n("div",{staticClass:"Cbtn"},[n("button",{staticClass:"Cancel",on:{click:a.Cancel}},[a._v("Membatalkan")]),n("button",{staticClass:" Confirm",style:a.activeColor,on:{click:a.Confirm}},[a._v(" Konfirmasi ")])])]),n("popup",{model:{value:a.xiazhushow,callback:function(e){a.xiazhushow=e},expression:"xiazhushow"}},[n("div",{staticClass:"xiazhushow"},[n("div",{staticClass:"top"},[n("pre",[a._v("          "),n("i",[a._v("Aturan manajemen pra penjualan")]),a._v("\n          Untuk melindungi hak dan kepentingan yang sah dari pengguna yang berpartisipasi dalam presale dan mempertahankan urutan operasi normal presale, aturan dirumuskan sesuai dengan perjanjian dan aturan yang relevan dari hukum dan regulasi nasional.\n          "),n("i",[a._v("Bab 1 Definisi")]),a._v('\n          1.1 Definisi pra-penjualan: mengacu pada model penjualan di mana pedagang menyediakan produk atau rencana layanan, mengumpulkan pesanan konsumen melalui alat produk pra-penjualan, dan menyediakan barang dan / atau layanan kepada konsumen sesuai dengan kesepakatan sebelumnya.\n          1.2 Model presale adalah model "deposit". "Deposit" mengacu pada jumlah tetap dari harga komoditas pra-penjualan yang telah dikirim sebelumnya. "Setoran" dapat berpartisipasi dalam permainan kecil dan memiliki peluang untuk memenangkan lebih banyak setoran. Deposit dapat langsung ditukar dengan komoditas. Setoran tidak dapat ditebus.\n          1.3 Produk pra-penjualan: mengacu pada produk yang dirilis oleh pedagang menggunakan peralatan produk pra-penjualan. Hanya kata pra-penjualan yang ditandai pada judul produk atau halaman detail produk, dan produk yang tidak menggunakan peralatan produk pra-penjualan bukanlah produk pra-penjualan.\n          1.4 Sistem pra-penjualan: Mengacu pada alat produk sistem yang disediakan untuk mendukung pedagang untuk penjualan model pra-penjualan.\n          1.5 Harga komoditas presale: mengacu pada harga jual komoditas presale. Harga barang pra-penjualan terdiri dari dua bagian: deposit dan pembayaran akhir.\n          1.6 Setoran pra-penjualan: Mengacu pada sejumlah uang yang dibayarkan konsumen di muka saat membeli barang pra-penjualan, yang terutama digunakan sebagai jaminan untuk membeli barang pra-penjualan dan menentukan kuota pembelian.\n          1.7 Pembayaran akhir pra-penjualan: mengacu pada jumlah uang yang masih harus dibayar konsumen setelah harga komoditas pra-penjualan dikurangi deposit.\n          '),n("i",[a._v("Bab 2 Spesifikasi manajemen pra-penjualan")]),a._v("\n          "),n("i",[a._v("2.1 Manajemen komoditas")]),a._v("\n          2.1.1 Waktu deposit pra-penjualan: dapat diatur hingga 7 hari.\n          2.1.2 Waktu pembayaran akhir pra-penjualan: Waktu mulai pembayaran terakhir adalah dalam 7 hari.\n          2.1.3 Selama prapenjualan komoditas, sistem tidak mendukung pedagang untuk mengubah harga komoditas pra-jual (termasuk simpanan dan saldo), tetapi jumlah persediaan komoditas yang tersisa dapat dimodifikasi sesuai dengan situasi persediaan yang sebenarnya.\n          2.1.4 Untuk menghindari perselisihan yang tidak perlu, Jika produk pra-penjualan adalah produk yang disesuaikan, pedagang harus dengan jelas memberi tahu konsumen pada halaman produk tentang siklus produksi dan waktu pengiriman produk, dan menghubungi konsumen untuk mengkonfirmasi standar pengiriman, pengiriman waktu, dll.\n          2.1.5 Untuk produk yang disesuaikan, pedagang belum setuju dengan konsumen tentang waktu pengiriman dan standar pengiriman, standar pengiriman yang diusulkan oleh konsumen tidak jelas atau bertentangan dan setelah pedagang melakukan pemesanan, dia (dia) memulai produksi dan pengiriman tanpa konfirmasi dengan konsumen, jika konsumen memulai perselisihan sebagai akibatnya, platform akan memperlakukannya sebagai pemenuhan pesanan batas waktu pengiriman normal.\n          "),n("i",[a._v("2.2 Manajemen transaksi")]),a._v("\n          2.2.1 Konsumen yang menggunakan sistem pra-penjualan akan mengunci kuota pra-penjualan setelah melakukan pemesanan barang. Jika pre-sale order overtime, sistem akan otomatis membatalkannya.\n          2.2.2 Selama periode pra-penjualan, pedagang tidak akan membatalkan aktivitas pra-penjualan tanpa alasan. Untuk aktivitas pra-penjualan yang menghasilkan pesanan, pedagang tidak boleh membatalkan pesanan tanpa persetujuan konsumen. Jika konsumen setuju, pedagang harus mengembalikan uang jaminan yang dibayarkan konsumen dua kali lipat; Jika konsumen tidak setuju untuk membatalkan pesanan, maka pedagang harus melaksanakan kontrak sesuai pesanan.\n          2.2.3 Jika pembayaran akhir pesanan pra-penjualan tidak diselesaikan karena alasan konsumen, pedagang dapat mengurangi setoran yang dibayarkan oleh konsumen; Jika pedagang secara aktif bernegosiasi dengan konsumen untuk menghentikan pesanan sebelum membayar pembayaran akhir, pedagang akan menggandakan pengembalian deposit yang dibayarkan oleh konsumen.\n          "),n("i",[a._v("2.3 Manajemen Pengiriman")]),a._v("\n          2.3.1 Pengaturan batas waktu pengiriman\n          Jika merchant menetapkan batas waktu pengiriman melalui sistem presale, maka harus dikirim dalam batas waktu yang ditentukan.\n          2.3.2 Cara pengiriman\n          Pihak ketiga mengirimkan pesanan.\n          Pelanggan harus memberikan nama, alamat, dan nomor telepon Anda untuk memfasilitasi pesanan pengiriman pihak ketiga.\n          "),n("i",[a._v("2.4 Manajemen purna jual")]),a._v('\n          Produk pra-penjualan harus menyediakan layanan purna jual sesuai dengan "Peraturan untuk Layanan Purna Jual dari Pedagang Platform".\n          '),n("i",[a._v("Penjelasan")]),a._v("\n          Mode transaksi mal\n          Ada dua cara untuk membeli di mal, yang satu adalah pembelian penuh, dan yang lainnya adalah pembelian setoran.\n          Dalam mode pembelian penuh, Anda dapat memesan secara langsung dan membeli barang dengan pembayaran penuh.\n          Mode pembelian deposit akan membekukan deposit pelanggan, dan pelanggan akan menerima pengiriman setelah menyelesaikan pembayaran akhir dalam waktu 7 hari. Pengguna yang telah membayar deposit akan diberikan permainan kuis poin ekstra. Menurut analisis fluktuasi pasar, mereka memiliki peluang untuk memenangkan lebih banyak poin untuk mengurangi pembayaran atau mengirim amplop merah ke teman.\n          Model pre-order memiliki banyak keuntungan bagi pelanggan. Setoran tidak hanya menghasilkan pesanan untuk pelanggan, tetapi juga memberi pelanggan amplop merah dalam jumlah yang sama, yang dapat ditarik segera. Meskipun deposit tidak dapat dikembalikan, amplop merah yang dikonversi dari deposit dapat ditarik tanpa merugikan pelanggan.\n          1. Setelah pelanggan membayar deposit dan pesanan, pesanan barang dagangan dibuat, dan mal mulai menyiapkan pesanan ini. Deposit ini tidak dapat dikembalikan. Setelah pelanggan membayar saldo, mal akan mengirimkan barang. Jika pelanggan tidak membuat saldo, pesanan produk akan selalu ada.\n          2. Setelah membayar deposit, nasabah akan diberikan rekening amplop merah dengan jumlah deposit yang sama.\n          1. Amplop merah dapat ditarik secara langsung, sehingga bukannya kehilangan uang, pelanggan telah menambahkan pesanan komoditas yang dihasilkan dari deposit. Dan amplop merah juga bisa diberikan kepada teman.\n          2. Jika pelanggan menggunakan akun amplop merah untuk berpartisipasi dalam permainan, Anda bisa mendapatkan lebih banyak amplop merah, tetapi jika permainan kalah, amplop merah akan hilang, tetapi pesanan barang dagangannya masih ada.\n        ")])]),n("div",{staticClass:"fixed"},[n("p",{staticClass:"msg"},[a._v(" Catatan: Saya telah membaca dengan cermat semua konten dari aturan manajemen pra-penjualan ini, Perjanjian Pengungkapan Risiko, dan Perjanjian Risiko dan saya setuju untuk melanjutkan risiko saya sendiri. ")]),n("button",{on:{click:a.ConfirmPup}},[a._v("Konfirmasi")])])])]),a.ICONSHOW?n("div",{ref:"redIcon",staticClass:"redicon",on:{click:a.OpenRed}},[a._v(a._s(a.redTime)+"s "),1===a.redIconType?n("img",{attrs:{src:a.redicon}}):a._e(),0===a.redIconType?n("img",{attrs:{src:a.rediconmask}}):a._e()]):a._e()],1)},i=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("p",[n("i",{staticClass:"iconfont "},[a._v("IDR ")]),a._v(" 0.00 ")])},function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("p",{staticClass:"name"},[n("span",[a._v("Periode"),n("i",{staticClass:"iconfont icon-huangguan"})]),n("span",[a._v("Hitung Mundur")])])}],r=(n("b4fb"),n("dbb3"),n("fe59"),n("ecb4"),n("053b"),n("513c"),n("e35a"),n("5e9f"),n("9cf3"),n("0d7a"),n("08ba"),n("6a61"),n("cf7f")),s=n("e793"),o=(n("d0e6"),n("11f7")),u=(n("aa8d"),n("b89e")),l=(n("5649"),n("12b6")),c=(n("6add"),n("8913")),d=(n("50c9"),n("ba01")),m=(n("3585"),n("c043")),h=n("9f3a"),p={components:{Tab:m["a"],Tabs:d["a"],Popup:c["a"],Stepper:l["a"],Toast:u["a"],NoticeBar:o["a"]},data:function(){return{redStatus:"",redTimeId:null,iconimage:n("068b"),btnimage:n("6baf"),bgimage:n("6edb"),redicon:n("1baf"),rediconmask:n("3645"),noRed:!0,RuleData:"",tebName:"",activeName:"0",totallist:[],show:!1,Periodshow:!1,xiazhushow:!1,checkbox:!0,typelist:[{name:"Ikuti Hijau",value:1,jsonNum:[1,3,5,7,9]},{name:"Ikuti Ungu",value:3,jsonNum:[0,5]},{name:"Ikuti Merah",value:2,jsonNum:[0,2,4,6,8]}],typeNumlist:[{name:"0",value:4,type:"0",jsonNum:[0]},{name:"1",value:4,type:"1",jsonNum:[1]},{name:"2",value:4,type:"2",jsonNum:[2]},{name:"3",value:4,type:"3",jsonNum:[3]},{name:"4",value:4,type:"4",jsonNum:[4]},{name:"5",value:4,type:"5",jsonNum:[5]},{name:"6",value:4,type:"6",jsonNum:[6]},{name:"7",value:4,type:"7",jsonNum:[7]},{name:"8",value:4,type:"8",jsonNum:[8]},{name:"9",value:4,type:"9",jsonNum:[9]}],value:1,activeColor:{backgroundColor:" #009f70"},activeI:{color:" #147266"},selet:"Join Green Sports",conNum:"",Number:"",currents:{},OrderList:[],LotteryList:[],lotteryId:"",PeriodForm:{},PlayingNum:"",PlayJson:"",userForm:{},countDownTime:"",clickLi:!0,draw_id:"",close:!1,timeId:null,hascookie:JSON.parse(localStorage.getItem("HASCOOKIE")),redDesc:"",noticemsg:"",patlist:[]}},created:function(){var a=this,e=window.location.search.replace("?","");if(-1!==e.indexOf("&")){var n=e.split("&");n.forEach((function(e){a.formatValue(e)}))}else this.formatValue(e);this.initData(),this.hascookie&&this.init_MyData()},computed:Object(s["a"])({},Object(h["b"])(["ICONSHOW","countDown","redMsg","redOpen","redIconType","redTime"])),methods:{formatValue:function(a){-1!==a.indexOf("red_id")&&(this.redDesc=a.split("=")[1],this.$store.commit("SET_URLREDID",55555555^Number(this.redDesc)),this.$store.commit("CHANGE_URLREDBG",!0))},OpenRed:function(a){this.hascookie?this.$store.state.redOpen=!0:this.$toast("Silahkan masuk terlebih dahulu")},onClick:function(a,e){var n=this.totallist.filter((function(e){return e.id===a}));clearInterval(this.timeId),this.currents=n[0],this.tebName=e,this.lotteryId=a,this.timeId=a,this.hascookie&&this.initOrder(),this.initlottery(),this.initNowDrawLottery(),this.value=1},tosports:function(){this.$router.push("/sportsRecord/".concat(this.currents.id))},toorder:function(){this.hascookie?this.$router.push("/sportsOrder/".concat(this.currents.id,"/",2)):this.$toast("Silahkan masuk terlebih dahulu")},Rule:function(){this.show=!0},ShowxiazhuPup:function(){this.xiazhushow=!0},tologin:function(){this.$toast("Silahkan masuk terlebih dahulu"),this.$router.push("/login")},Recharge:function(){this.hascookie?1===this.patlist.length?this.$router.push("/recharge"):this.$router.push("/paylist"):(this.$toast("Silahkan masuk terlebih dahulu"),this.$router.push("/login"))},ConfirmPup:function(){this.checkbox=!0,this.xiazhushow=!1},changeColor:function(a,e){this.activeColor={backgroundColor:a},this.activeI={color:a},this.selet=e},togame:function(a){var e=this;if(!this.hascookie)return this.$toast("Silahkan masuk terlebih dahulu");switch(this.value=1,this.Periodshow=!0,this.$nextTick((function(){e.siblings(e.$refs.ConUl.children[0]),e.conNum=e.$refs.ConUl.children[0].innerText})),this.PlayingNum=a.value,this.PlayJson=a.jsonNum,a.value){case 1:this.changeColor("#41b349","Ikuti Hijau ".concat(this.tebName));break;case 3:this.changeColor("#ef498b","Ikuti Ungu");break;case 2:this.changeColor("#ee3f4d","Ikuti Merah ".concat(this.tebName));break;default:this.changeColor("#1772b4","Pilihan ".concat(a.type));break}},checkcon:function(a,e){this.siblings(a.target),this.conNum=e},checknum:function(a,e){this.siblings(a.target),this.value=e},siblings:function(a){for(var e=a.parentNode.children,n=0;n<e.length;n++)1==e[n].nodeType&&e[n]!=a?(e[n].style.color="black",e[n].style.backgroundColor="#e6e6e6"):(a.style.color="#fff",a.style.backgroundColor="#707070")},ChangeNum:function(a){for(var e=this.$refs.NumUl.children,n=0;n<e.length;n++)a==parseInt(e[n].innerHTML)?(e[n].style.color="#fff",e[n].style.backgroundColor="#707070"):(e[n].style.color="black",e[n].style.backgroundColor="#e6e6e6")},Cancel:function(a){this.Periodshow=!1},Confirm:function(a){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,t,i,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.checkbox){a.next=3;break}return e.$toast("Harap setujui aturan manajemen pra-penjualan terlebih dahulu."),a.abrupt("return");case 3:if(!(e.value*Number(e.conNum)>e.userForm.balance)){a.next=7;break}return n=1e3,t=setInterval((function(){e.$toast("！Maaf, saldo Anda hampir habis"),n-=200,n||(clearInterval(t),1===e.patlist.length?e.$router.push("/recharge"):e.$router.push("/paylist"),n=1e3)}),200),a.abrupt("return");case 7:return a.next=9,e.$axios.Plottery_order({lottery_id:e.currents.id,betting_number:JSON.stringify(e.PlayJson),betting_amount:Number(e.conNum),lottery_number:Number(e.PeriodForm.lottery_number),note_number:e.value,playing_num:e.PlayingNum});case 9:if(i=a.sent,r=i.data,1!==r.code){a.next=22;break}s=600,o=setInterval((function(){s-=200,e.$toast("✔ Berhasil dibayar"),s||(clearInterval(o),s=600)}),200),e.init_MyData(),e.hascookie&&e.initOrder(),e.$nextTick((function(){e.siblings(e.$refs.ConUl.children[0]),e.conNum=e.$refs.ConUl.children[0].innerText})),e.value=1,e.Periodshow=!1,e.checkbox=!0,a.next=27;break;case 22:if(1!==e.PeriodForm.is_refund){a.next=26;break}return a.abrupt("return",e.$toast("! Periode ".concat(e.PeriodForm.lottery_number," dari ").concat(e.PeriodForm.name," telah dihentikan")));case 26:return a.abrupt("return",e.$toast(r.msg));case 27:case"end":return a.stop()}}),a)})))()},formatData:function(a){return!(a.length<0)&&(a.forEach((function(a){a.number_list=JSON.parse(a.cathe_number),a.money_list=JSON.parse(a.cathe_money)})),a)},formatTime:function(a){var e=this;a.now_time>=a.start_time&&a.now_time<=a.end_time?(this.$store.commit("ChangeCountDown",!0),this.TimeCheck(a),a.end_time-a.now_time<a.end_long?(this.ColorChange(this.$refs.UL1.children,!0,!1),this.ColorChange(this.$refs.UL2.children,!0,!1)):(this.ColorChange(this.$refs.UL1.children,!1,!0),this.ColorChange(this.$refs.UL2.children,!1,!0)),this.timeId=setInterval((function(){a.end_time,a.now_time++,e.TimeCheck(a),a.end_time-a.now_time<a.end_long?(e.Periodshow=!1,e.ColorChange(e.$refs.UL1.children,!0,!1),e.ColorChange(e.$refs.UL2.children,!0,!1),a.end_time-a.now_time===0&&(e.$store.commit("ChangeCountDown",!1),clearInterval(e.timeId),e.hascookie&&e.initOrder(),e.initlottery(),e.initNext())):(e.ColorChange(e.$refs.UL1.children,!1,!0),e.ColorChange(e.$refs.UL2.children,!1,!0))}),1e3)):(this.ColorChange(this.$refs.UL1.children,!0,!1),this.ColorChange(this.$refs.UL2.children,!0,!1))},TimeCheck:function(a){var e=Math.floor((a.end_time-a.now_time)/60)>9?Math.floor((a.end_time-a.now_time)/60):"0"+Math.floor((a.end_time-a.now_time)/60),n=a.end_time-a.now_time-60*e>9?a.end_time-a.now_time-60*e:"0"+(a.end_time-a.now_time-60*e);return this.countDownTime="".concat(e," : ").concat(n)},ColorChange:function(a,e,n){var t=this;this.close=e,a.forEach((function(a){t.clickLi=n}))},initData:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axios.lottery_all();case 2:n=e.sent,t=n.data,1===t.code&&(a.totallist=a.formatData(t.data)||[],a.currents=a.totallist[0]||{},a.tebName=a.totallist[0].name||"",a.lotteryId=a.totallist[0].id,a.hascookie&&a.initOrder(),a.initlottery(),a.initNowDrawLottery());case 5:case"end":return e.stop()}}),e)})))()},initOrder:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axios.lottery_order_day({page:1,limit:10,lottery_id:a.lotteryId});case 2:n=e.sent,t=n.data,a.OrderList=t.data;case 5:case"end":return e.stop()}}),e)})))()},initlottery:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axios.draw_lottery({page:1,limit:10,lottery_id:a.lotteryId});case 2:n=e.sent,t=n.data,a.LotteryList=t.data;case 5:case"end":return e.stop()}}),e)})))()},initNowDrawLottery:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axios.now_draw_lottery({lottery_id:a.lotteryId});case 2:if(n=e.sent,t=n.data,1!==t.code){e.next=12;break}if("[]"!==JSON.stringify(t.data)){e.next=7;break}return e.abrupt("return",!1);case 7:a.PeriodForm=t.data[0]||{},a.draw_id=t.data[0].id,a.RuleData=t.data[0].rule,a.formatTime(a.PeriodForm),1===a.PeriodForm.is_refund&&(i=600,r=setInterval((function(){i-=200,a.$toast("! Periode  ".concat(a.PeriodForm.lottery_number," dari  ").concat(a.PeriodForm.name," telah dihentikan")),i||(clearInterval(r),i=600)}),200));case 12:case"end":return e.stop()}}),e)})))()},init_MyData:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axios.Home({recharge:""});case 2:n=e.sent,t=n.data,1===t.code&&(a.userForm=t.data[0],a.noticemsg=t.announcement||"",a.patlist=t.pay_list||[]);case 5:case"end":return e.stop()}}),e)})))()},initNext:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axios.next_draw_lottery({lottery_id:a.lotteryId});case 2:n=e.sent,t=n.data,1===t.code&&(a.PeriodForm=t.data[0],a.draw_id=t.data[0].id,a.RuleData=t.data[0].rule,a.formatTime(a.PeriodForm),1===a.PeriodForm.is_refund&&(i=600,r=setInterval((function(){i-=200,a.$toast("! Periode  ".concat(a.PeriodForm.lottery_number," dari  ").concat(a.PeriodForm.name," telah dihentikan")),i||(clearInterval(r),i=600)}),200)));case 5:case"end":return e.stop()}}),e)})))()}},beforeDestroy:function(){clearInterval(this.timeId),this.timeId=null}},g=p,k=(n("98ed"),n("9ca4")),f=Object(k["a"])(g,t,i,!1,null,"1901aa78",null);e["default"]=f.exports},"98ed":function(a,e,n){"use strict";var t=n("49c4"),i=n.n(t);i.a},d0e6:function(a,e,n){"use strict";n("d595"),n("11f9"),n("0380"),n("71f1")}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b9652f4"],{"0901":function(a,e,n){"use strict";n("2e2d")},"2e2d":function(a,e,n){},"6c6d":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));n("f3dd"),n("dbb3"),n("fe59"),n("b73f"),n("bf84"),n("fe8a"),n("08ba");function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function t(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}},"84c2":function(a,e,n){var i=n("1e2c"),t=n("d890"),r=n("e8d6"),s=n("7063"),o=n("d910").f,m=n("b338").f,u=n("8a1c"),c=n("99ad"),l=n("22ef"),d=n("1944"),p=n("efe2"),g=n("b702").set,k=n("403f"),h=n("90fb"),b=h("match"),f=t.RegExp,y=f.prototype,v=/a/g,w=/a/g,C=new f(v)!==v,R=l.UNSUPPORTED_Y,S=i&&r("RegExp",!C||R||p((function(){return w[b]=!1,f(v)!=v||f(w)==w||"/a/i"!=f(v,"i")})));if(S){var P=function(a,e){var n,i=this instanceof P,t=u(a),r=void 0===e;if(!i&&t&&a.constructor===P&&r)return a;C?t&&!r&&(a=a.source):a instanceof P&&(r&&(e=c.call(a)),a=a.source),R&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var o=s(C?new f(a,e):f(a,e),i?this:y,P);return R&&n&&g(o,{sticky:n}),o},j=function(a){a in P||o(P,a,{configurable:!0,get:function(){return f[a]},set:function(e){f[a]=e}})},_=m(f),O=0;while(_.length>O)j(_[O++]);y.constructor=P,P.prototype=y,d(t,"RegExp",P)}k("RegExp")},"9cf3":function(a,e,n){"use strict";var i=n("b2a2"),t=n("857c"),r=n("2732"),s=n("9d5c"),o=n("59da");i("search",1,(function(a,e,n){return[function(e){var n=r(this),i=void 0==e?void 0:e[a];return void 0!==i?i.call(e,n):new RegExp(e)[a](String(n))},function(a){var i=n(e,a,this);if(i.done)return i.value;var r=t(a),m=String(this),u=r.lastIndex;s(u,0)||(r.lastIndex=0);var c=o(r,m);return s(r.lastIndex,u)||(r.lastIndex=u),null===c?-1:c.index}]}))},"9d5c":function(a,e){a.exports=Object.is||function(a,e){return a===e?0!==a||1/a===1/e:a!=a&&e!=e}},b73f:function(a,e,n){var i=n("1c8b"),t=n("efe2"),r=n("da10"),s=n("aa6b").f,o=n("1e2c"),m=t((function(){s(1)})),u=!o||m;i({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(a,e){return s(r(a),e)}})},bf84:function(a,e,n){var i=n("1c8b"),t=n("1e2c"),r=n("8d44"),s=n("da10"),o=n("aa6b"),m=n("1bbd");i({target:"Object",stat:!0,sham:!t},{getOwnPropertyDescriptors:function(a){var e,n,i=s(a),t=o.f,u=r(i),c={},l=0;while(u.length>l)n=t(i,e=u[l++]),void 0!==n&&m(c,e,n);return c}})},c53d:function(a,e,n){"use strict";n("94f7"),n("84e8"),n("24a9"),n("6494"),n("0c3e")},d724:function(a,e,n){"use strict";var i=n("42d3"),t=n("fc6b"),r=n("6a98"),s=n("ef3f"),o=Object(i["a"])("popup"),m=o[0],u=o[1];e["a"]=m({mixins:[Object(r["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var a=this,e=function(e){return function(n){return a.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var a,e=arguments[0];if(this.shouldRender){var n=this.round,i=this.position,r=this.duration,o="center"===i,m=this.transition||(o?"van-fade":"van-popup-slide-"+i),c={};if(Object(t["c"])(r)){var l=o?"animationDuration":"transitionDuration";c[l]=r+"s"}return e("transition",{attrs:{name:m},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:c,class:u((a={round:n},a[i]=i,a["safe-area-inset-bottom"]=this.safeAreaInsetBottom,a)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},eecd:function(a,e,n){"use strict";n.r(e);var i=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"my"},on:{click:function(e){return e.stopPropagation(),a.Close(e)}}},[n("div",{attrs:{id:"login"}},[n("div",{staticClass:"top"},[n("span",{class:{active:a.show},on:{click:function(e){return a.Active("Sign")}}},[a._v("Masuk")]),n("span",{staticClass:"line"},[a._v("|")]),n("span",{class:{active:!a.show},on:{click:function(e){return a.Active("Register")}}},[a._v("Daftar")])]),n("transition",{attrs:{name:"slide-Re"}},[a.show?n("div",{staticClass:"Signform"},[n("div",{staticClass:"msg"},[n("p",{staticClass:"name",on:{click:function(e){return e.stopPropagation(),a.showClose(e)}}},[n("i",{staticClass:"iconfont icon-morentouxiang"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.loginForm.account,expression:"loginForm.account"}],attrs:{maxlength:"16",type:"tel",placeholder:"Nomor handphone"},domProps:{value:a.loginForm.account},on:{input:function(e){e.target.composing||a.$set(a.loginForm,"account",e.target.value)}}}),a.qingchu?n("i",{staticClass:"iconfont icon-qingchu",on:{click:function(e){return e.stopPropagation(),a.ClearLoginName(e)}}}):a._e()]),n("p",{staticClass:"password"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",placeholder:"Kata sandi"},domProps:{value:a.loginForm.password},on:{input:function(e){e.target.composing||a.$set(a.loginForm,"password",e.target.value)}}})])]),n("p",{staticClass:"forget",on:{click:a.ToResetPassword}},[a._v("Lupakan kata sandi")]),n("div",{staticClass:"button"},[n("button",{staticClass:"btnlogin",on:{click:a.Login}},[a._v("Masuk Segera")]),"app.igo1888.com"!==a.currenthost?n("button",{staticClass:"btnhome",on:{click:a.Gohome}},[a._v("Kembali ke beranda")]):a._e()])]):a._e()]),n("transition",{attrs:{name:"slide-fade"}},[a.show?a._e():n("div",{staticClass:"Signform"},[n("div",{staticClass:"msg"},[n("p",{staticClass:"name"},[n("i",{staticClass:"iconfont icon-morentouxiang"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.account,expression:"RegisterForm.account"}],attrs:{maxlength:"16",type:"tel",placeholder:"Nomor Ponsel Daftar"},domProps:{value:a.RegisterForm.account},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"account",e.target.value)}}})]),n("p",{staticClass:"password"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.password,expression:"RegisterForm.password"}],attrs:{type:"password",placeholder:"Buat Sandi"},domProps:{value:a.RegisterForm.password},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"password",e.target.value)}}})]),n("p",{staticClass:"Conpassword"},[n("i",{staticClass:"iconfont icon-suo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.confirm_pwd,expression:"RegisterForm.confirm_pwd"}],attrs:{type:"password",placeholder:"Konfirmasi kata Sandi"},domProps:{value:a.RegisterForm.confirm_pwd},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"confirm_pwd",e.target.value)}}})]),n("p",{staticClass:"vercode"},[n("i",{staticClass:"iconfont icon-xinxi"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.code,expression:"RegisterForm.code"}],attrs:{type:"text",placeholder:"Silakan masukkan kode verifikasi"},domProps:{value:a.RegisterForm.code},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"code",e.target.value)}}}),n("span",{on:{click:function(e){a.RegisterOpen&&a.CountDown()}}},[a._v(a._s(a.RegisterDown?a.RegisterTime+"s":"OTP"))])]),n("p",{staticClass:"code"},[n("i",{staticClass:"iconfont icon-icon"}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.RegisterForm.invite_code,expression:"RegisterForm.invite_code"}],attrs:{disabled:a.codedisabled,type:"text",placeholder:"Kode rekomendasi"},domProps:{value:a.RegisterForm.invite_code},on:{input:function(e){e.target.composing||a.$set(a.RegisterForm,"invite_code",e.target.value)}}})])]),n("p",{staticClass:"Policy"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.checkConfirm,expression:"checkConfirm"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.checkConfirm)?a._i(a.checkConfirm,null)>-1:a.checkConfirm},on:{change:function(e){var n=a.checkConfirm,i=e.target,t=!!i.checked;if(Array.isArray(n)){var r=null,s=a._i(n,r);i.checked?s<0&&(a.checkConfirm=n.concat([r])):s>-1&&(a.checkConfirm=n.slice(0,s).concat(n.slice(s+1)))}else a.checkConfirm=t}}}),a._v(" Saya setuju dengan "),n("i",{on:{click:a.ShowPup}},[a._v("Rahasia pribadi")])]),n("div",{staticClass:"button"},[n("button",{staticClass:"btnlogin zhuce",on:{click:a.Registery}},[a._v("Daftar")]),"app.igo1888.com"!==a.currenthost?n("button",{staticClass:"btnhome btn",on:{click:a.Gohome}},[a._v("Kembali ke beranda")]):a._e()]),n("popup",{model:{value:a.Agreen,callback:function(e){a.Agreen=e},expression:"Agreen"}},[n("div",{staticClass:"xiazhushow"},[n("div",{staticClass:"top"},[n("pre",[a._v("                "),n("i",{staticClass:"title"},[a._v("Perjanjian Pengungkapan Risiko")]),a._v("\n                "),n("i",{staticClass:"tag"},[a._v("Bab 1. Deskripsi Pemesanan / Koleksi")]),a._v("\n                  Pemesanan Prabayar / Daur Ulang Pelanggan harus membaca dan memahami konten bisnis dengan cermat sebelum melakukan pemesanan prabayar (harga kunci prabayar, penyelesaian pembayaran dan pengiriman) / pemulihan atau pembelian kembali (harga kunci prabayar, pembayaran pengiriman) sebelum melakukan pemesanan prabayar ke Retty-Shop:\n                  1. Sebelum membuat janji temu / memulihkan bisnis prabayar, pelanggan harus melengkapi otentikasi nama asli di mal dan memastikan bahwa nama, nomor ID, nomor rekening bank, alamat pengiriman dan informasi lain yang diisi adalah benar, akurat dan valid; Jika tidak, pengguna akan bertanggung jawab atas konsekuensi informasi palsu.\n                  2. Pelanggan dapat memesan produk emas dan perak terlebih dahulu di pusat perbelanjaan. Pesanan dapat dibatalkan paling lambat 01:30 pada hari Sabtu yang sama. Saat pelanggan membayar pembayaran akhir, mal menerima pembayaran akhir dan mengatur pengiriman.Jika pelanggan tidak membayar pengambilan terakhir pada pukul 01:30 pada hari Sabtu, pelanggan dianggap telah membuat penawaran terakhir sebelum inventaris dan pemesanan dibatalkan.\n                  3. Pelanggan dapat membuat janji untuk mendaur ulang produk emas dan perak yang dibeli di titik emas. Pemulihan pra-pembelian memerlukan margin kredit dan konfirmasi kepemilikan aktual atas produk emas dan perak yang dibeli dari mal. Pelanggan dapat membatalkan reservasi mereka kapan saja sebelum 01:30 pada hari Sabtu dan tanda kredit akan dikembalikan setelah dikurangi kenaikan atau penurunan nilai barang dalam waktu yang sesuai.\n                  Jika pelanggan gagal mengirimkan barang ke pusat perbelanjaan atau pusat perbelanjaan di tempat pengambilan yang ditentukan pada hari Sabtu dalam minggu yang sama, atau jika barang yang dikirim tidak memenuhi tes standar daur ulang, pelanggan akan dianggap telah membatalkan reservasi pemulihan dan akan menanggung biaya logistik dan pengujian.  \n                  4. Menghitung waktu: Setiap hari 01: 30-05: 30 untuk waktu inventarisasi gudang mall. Selama periode inventaris, mal berhenti menerima pembayaran di muka untuk reservasi / tanda terima.\n                  5. Untuk lebih jelasnya lihat Panduan Bisnis di halaman depan mall, Memahami Retty Shop.\n                "),n("i",{staticClass:"tag"},[a._v("Bab 2 Mengungkap model bisnis Retty-Shop")]),a._v("\n                  Pemesanan / pemesanan kembali, model bisnis pengiriman saldo kliring, ketidakpastian seperti potensi manfaat dan potensi risiko terhadap nilai barang dagangannya karena fluktuasi waktu nyata di pasar emas dan perak, dan sejauh mana risiko pemesanan / repo yang dipertaruhkan dipahami untuk customer booking / repo risk, kemampuan pengendalian Risiko dan pemahaman produk terkait memiliki persyaratan yang tinggi. Pelanggan memilih pemesanan prabayar / pembelian kembali, diinformasikan sepenuhnya atas nama pelanggan dan memahami risiko bisnis prabayar / pembelian kembali dan menyetujui dan menerima proses bisnis pemesanan / pembelian kembali yang relevan saat ini dan di masa mendatang dan sistem manajemen (secara kolektif disebut Proses Sistem) untuk mengembangkan, memodifikasi, dan menerbitkan. Pengungkapan Risiko (Pengungkapan) ini dimaksudkan untuk mengungkapkan sepenuhnya kepada Klien risiko bisnis pemesanan / pembelian kembali prabayar dan dimaksudkan hanya untuk memberikan referensi bagi klien untuk menilai dan menentukan toleransi risikonya sendiri. Pengungkapan risiko yang dijelaskan dalam pengungkapan ini hanya sebagai contoh. Semua faktor risiko yang terkait dengan Retty Shop Advance Booking / Repurchase tidak dirinci. Pelanggan juga harus memahami dengan cermat dan memahami kemungkinan faktor risiko lainnya sebelum memulai atau berpartisipasi dalam bisnis pemesanan / pembelian kembali pra-pembayaran Retty-Shop. Jika pelanggan tidak mengetahui atau tidak mengetahui pengungkapan ini, mereka harus berkonsultasi dengan Retty-Shop Customer Service atau penyedia layanan regional yang relevan secara tepat waktu. Jika Pelanggan akhirnya mengklik Pengungkapan Risiko, maka dianggap bahwa Pelanggan sepenuhnya setuju dan menerima seluruh konten dari pengungkapan ini.\n                "),n("i",{staticClass:"tag"},[a._v(" Tips hangat")]),a._v("\n                1. Anak di bawah umur 18 tahun tidak diizinkan untuk berpartisipasi dalam Pemesanan / Daur Ulang Toko Retty-Shop.\n                2. Pemesanan di Muka / Repo Retty-Shop hanya tersedia untuk pelanggan yang memenuhi semua kriteria berikut:\n                ① Orang perseorangan dengan kapasitas sipil penuh, badan hukum perusahaan atau organisasi ekonomi lainnya yang terdaftar sesuai dengan hukum.\n                ② Untuk memahami sepenuhnya semua risiko yang terkait dengan bisnis Retty Shop Advance Booking / Repurchase dan memiliki toleransi risiko tertentu.\n                ③ Memiliki pemahaman tertentu tentang emas dan perak dan produknya:\n                A.Pengungkapan risiko terkait kebijakan, seperti perubahan dalam undang-undang, peraturan dan kebijakan nasional, tindakan kontingensi, penerapan tindakan regulasi yang tepat, sistem regulasi Retty-Shop dan perubahan dalam metode dan regulasi manajemen, dll., Semua risiko yang dapat memengaruhi pelanggan pemesanan / pembelian kembali, dll, pelanggan harus menanggung kerugian yang ditimbulkan.\n                B. Price fluctuations, gold, silver and other precious metals and their accessories are affected by a variety of factors, such as the international economic situation, foreign exchange, related market trends, supply and demand, and political situation and energy prices. The pricing mechanism for gold, silver and other precious metals products is very complex, making it difficult for customers to fully grasp in practice, so decisions such as advance booking/buyback are possible Mistakes, if the risk cannot be effectively controlled, may suffer losses and the customer must bear all the losses incurred as a result.\n                ④ Retty-Shop telah memungkinkan penyediaan layanan melalui teknologi komunikasi elektronik dan teknologi Internet. Layanan komunikasi dan layanan perangkat keras dan perangkat lunak disediakan oleh vendor yang berbeda dan mungkin berisiko dalam hal kualitas dan stabilitas. Gangguan atau penundaan karena komunikasi atau kegagalan jaringan dapat memengaruhi pemesanan / pembelian kembali pembayaran di muka oleh pelanggan. Selain itu, sistem komputer pelanggan dapat diserang oleh virus dan / atau cyber-hackers, yang mengakibatkan pemesanan / pembelian kembali pembayaran di muka pelanggan tidak berjalan sebagaimana mestinya dan / atau tepat waktu. Ada juga risiko bahwa ketidakpastian di atas dapat memengaruhi pemesanan / pembelian kembali pembayaran di muka pelanggan.\n                A. Harga yang dikutip oleh Sistem Pemesanan / Repo Pembayaran di Muka Retty-Shop didasarkan pada harga perdagangan sistem waktu nyata dan mungkin sedikit berbeda dari harga komoditas di pasar lain.\n                Retty-Shop tidak dapat menjamin bahwa harga pemesanan // pembelian kembali di muka sepenuhnya konsisten dengan pasar lain.\n                B. Di Retty-Shop, setelah aplikasi pemesanan / pembelian kembali pembayaran di muka yang diajukan melalui terminal online diselesaikan, aplikasi tidak dapat ditarik dan pelanggan harus menerima risiko yang terkait dengan langganan tersebut.\n                C. Retty-Shop melarang penyedia layanan regional dan stafnya untuk memberikan jaminan keuntungan kepada pelanggan, dari melakukan pemesanan prabayar / pembelian kembali atas nama pelanggan, atau dari berbagi keuntungan atau risiko dengan pelanggan. Pelanggan harus menyadari bahwa jaminan atau komitmen keuntungan apa pun yang pemesanan / pembelian kembali Retty-Shop di muka tidak mengalami kerugian, bagi hasil atau pembagian risiko adalah tidak mungkin, tidak berdasar, dan tidak benar.\n                D. Aplikasi pemesanan / pembelian kembali prabayar pelanggan harus berdasarkan keputusan pelanggan sendiri. Retty-Shop dan penyedia layanan regional dan karyawan tidak memberikan pemesanan / pembelian kembali kepada klien, juga bukan merupakan komitmen jika klien membuat keputusan pemesanan / pembelian kembali yang sesuai.\n                E. Dalam proses pemesanan / pembelian kembali sebelumnya, mungkin ada kesalahan yang terlihat sesekali dalam penawaran.\n                ⑤ PERJANJIAN RISIKO\n                Topan, banjir, kebakaran, perang, gangguan, revisi peraturan, perubahan atau penyesuaian dalam kebijakan peraturan pemerintah dan persyaratan peraturan, dan listrik, Untuk memastikan bahwa Anda sepenuhnya memahami ketentuan dan risiko yang relevan dari bisnis pemesanan / pembelian kembali, pelanggan harus didasarkan pada memiliki pengalaman memesan, memesan / membeli kembali / membeli komoditas, membaca semua isi pemberitahuan pemesanan awal / pembelian kembali dengan cermat, dan sepenuhnya memahami dan menyetujui semua konten, saya bersedia mengambil semua risiko untuk memulai atau berpartisipasi dalam Retty-Shop . Dalam kasus kondisi yang disebutkan di atas, saya akan bertanggung jawab sendiri atas kerugian finansial maupun keuangan. Dengan menerima ini, saya tidak lagi berhak untuk mengklaim manfaat hukum menurut undang-undang apa pun yang diberikan kepada warga negara India oleh Hukum India.\n              ")])]),n("div",{staticClass:"fixed"},[n("p",{staticClass:"fixedmsg"},[a._v(" Catatan: Saya telah membaca semua konten aplikasi ini dengan cermat termasuk Pernyataan Privasi, Perjanjian Pengungkapan Risiko, dan Perjanjian Risiko dan saya setuju untuk melanjutkan risiko saya sendiri. ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:a.checkConfirm,expression:"checkConfirm"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.checkConfirm)?a._i(a.checkConfirm,null)>-1:a.checkConfirm},on:{change:function(e){var n=a.checkConfirm,i=e.target,t=!!i.checked;if(Array.isArray(n)){var r=null,s=a._i(n,r);i.checked?s<0&&(a.checkConfirm=n.concat([r])):s>-1&&(a.checkConfirm=n.slice(0,s).concat(n.slice(s+1)))}else a.checkConfirm=t}}}),n("button",{class:{active:a.checkConfirm},on:{click:function(e){a.checkConfirm&&a.ConFirm()}}},[a._v(" Konfirmasi ")])])])])],1)])],1)])},t=[],r=(n("fe59"),n("ecb4"),n("84c2"),n("e35a"),n("1c2e"),n("9cf3"),n("0d7a"),n("08ba"),n("6a61"),n("327b")),s=n("6c6d"),o=(n("a691"),n("01e2")),m=(n("c53d"),n("d724")),u=n("9f3a"),c={components:{Popup:m["a"],Toast:o["a"]},data:function(){return{show:!0,loginForm:{account:"",password:"",uuid:""},RegisterForm:{account:"",password:"",confirm_pwd:"",code:"",invite_code:"",channel_id:8,uuid:"",TEST:123},codedisabled:!1,Agreen:!1,checkConfirm:!1,qingchu:!1,reg:new RegExp("^[0-9]*$"),currenthost:"",ss:"",cc:"",zz:""}},created:function(){var a=this;this.currenthost=this.$store.state.domain,localStorage.getItem("IsUserName")&&(this.show=!0,this.loginForm.account=JSON.parse(localStorage.getItem("IsUserName")).account);var e=window.location.search;if(-1!==e.indexOf("&")){var n=e.split("&");n.forEach((function(e){a.formatValue(e)}))}else this.formatValue(e);if(navigator.userAgent.indexOf("Html5Plus")>=0){var i=plus.android.importClass("org.cocos2d.winggapp.GlobApplication"),t=new i;t.getChannleID()&&(this.RegisterForm.channel_id=t.getChannleID());var r=plus.android.importClass("org.cocos2d.winggapp.GlobApplication"),s=new r;s.getUUID()&&(this.loginForm.uuid=s.getUUID(),this.RegisterForm.uuid=s.getUUID())}},computed:Object(s["a"])({},Object(u["b"])(["RegisterDown","RegisterTime","RegisterOpen","RegistertimeID"])),methods:{ChangeTime:function(a,e,n,i,t,r){this.$store.commit(a,i),this.$store.commit(e,t),this.$store.commit(n,r),clearInterval(this.$store.state.RegistertimeID)},CountDown:function(){if(!this.RegisterForm.account)return this.$toast("! Silakan masukkan nomor ponsel Anda.");var a={methods1:"C_RegisterDown",methods2:"C_RegisterDownNum",methods3:"C_RegisterOpen",time_id:"RegistertimeID",time:"RegisterTime",num:this.RegisterForm.account};this.$store.dispatch("Send_Code",a)},showClose:function(){this.qingchu=!0},Close:function(){this.qingchu=!1},ClearLoginName:function(){this.loginForm.account="",this.qingchu=!1},formatValue:function(a){-1!==a.indexOf("invite_code")&&(localStorage.getItem("IsUserName")?this.show=!0:this.show=!1,this.codedisabled=!0,this.RegisterForm.invite_code=a.split("=")[1]),-1!==a.indexOf("channel_id")&&(this.RegisterForm.channel_id=a.split("=")[1])},ConFirm:function(){this.checkConfirm=!0,this.Agreen=!1},ShowPup:function(){this.Agreen=!0},Active:function(a){"Register"===a?(this.show=!1,this.checkConfirm=!1):this.show=!0},ToResetPassword:function(){this.$router.push("/ResetPassword")},SuccessLogin:function(){"app.igo1888.com"===this.currenthost?(this.$router.push("/winGo"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.$store.dispatch("GetRedAsync")):(this.$router.push("/home"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.$store.dispatch("GetRedAsync"))},Login:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.loginForm.account){e.next=2;break}return e.abrupt("return",a.$toast("! Silakan masukkan nomor ponsel Anda."));case 2:if(a.loginForm.password){e.next=4;break}return e.abrupt("return",a.$toast("! Silakan masukkan kata sandi Anda."));case 4:return e.next=6,a.$axios.Login(a.loginForm);case 6:n=e.sent,i=n.data,1===i.code?(t=Object(s["a"])({},a.loginForm),delete t.password,localStorage.setItem("IsUserName",JSON.stringify(t)),localStorage.setItem("HASCOOKIE",!0),a.SuccessLogin()):a.$toast(i.msg);case 9:case"end":return e.stop()}}),e)})))()},Gohome:function(){"app.igo1888.com"===this.currenthost?(this.$router.push("/winGo"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.checkConfirm=!1):(this.$router.push("/home"),this.$store.commit("Ch_increment",0),localStorage.setItem("COUNT",0),this.checkConfirm=!1)},Registery:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.RegisterForm.account){e.next=2;break}return e.abrupt("return",a.$toast("! Silakan masukkan nomor ponsel Anda."));case 2:if(a.RegisterForm.password){e.next=4;break}return e.abrupt("return",a.$toast("! Silakan masukkan kata sandi Anda."));case 4:if(a.RegisterForm.confirm_pwd){e.next=6;break}return e.abrupt("return",a.$toast("! Silakan masukkan sandi konfirmasi."));case 6:if(a.RegisterForm.password===a.RegisterForm.confirm_pwd){e.next=8;break}return e.abrupt("return",a.$toast("Kata sandi buat tidak konsisten dengan kata sandi konfirmasi."));case 8:if(a.RegisterForm.code){e.next=10;break}return e.abrupt("return",a.$toast("! Silakan masukkan kode verifikasi."));case 10:if(a.checkConfirm){e.next=15;break}return a.$toast("！Harap setujui Rahasia pribadi terlebih dahulu."),e.abrupt("return",!1);case 15:return e.next=17,a.$axios.Register(a.RegisterForm);case 17:n=e.sent,i=n.data,1===i.code?(a.show=!0,a.checkConfirm=!1,a.ChangeTime("C_RegisterDown","C_RegisterDownNum","C_RegisterOpen",!1,60,!0),t={account:a.RegisterForm.account},localStorage.setItem("IsUserName",JSON.stringify(t)),localStorage.setItem("COUNT",0),localStorage.setItem("HASCOOKIE",!0),a.SuccessLogin(),"app.igo1888.com"===a.$store.state.domain&&(r=document.getElementsByClassName("zhuce")[0],r.addEventListener=a.tongji())):a.$toast(i.msg);case 20:case"end":return e.stop()}}),e)})))()},tongji:function(){dataLayer.push({event:"button1-click"})}}},l=c,d=(n("0901"),n("c701")),p=Object(d["a"])(l,i,t,!1,null,"18059ba0",null);e["default"]=p.exports},fe8a:function(a,e,n){var i=n("1c8b"),t=n("3553"),r=n("cbab"),s=n("efe2"),o=s((function(){r(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(a){return r(t(a))}})}}]);
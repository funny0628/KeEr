(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0ec52ac"],{"0669":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"information"}},[a("div",{staticClass:"userMsg"},[a("div",{staticClass:"userInfo"},[a("div",{staticClass:"image"},[t._m(0),a("span",[a("i",[t._v(t._s(t.userForm.username)+" ")]),a("i",[t._v("ID: "+t._s(t.userForm.uid))]),a("i",[t._v(" "+t._s(t.userForm.channel_id))])])]),a("span",[a("p",[a("i",{staticClass:"iconfont icon-tongzhi",on:{click:function(e){return t.toNextPath("/messageCenter")}}}),t.noreadList?a("i",{staticClass:"circle "}):t._e()]),a("i",{staticClass:"iconfont icon-shezhi",on:{click:t.Toshezhi}})])]),a("div",{staticClass:"bankinfo"},[a("div",{staticClass:"left",on:{click:t.Towallet}},[a("p",[t._v(t._s(t._f("FormatFloatNum")(t.userForm.balance)))]),a("p",[t._v("Available Balance")])]),a("div",{staticClass:"right"},[a("p",[t._v(t._s(t._f("FormatFloatNum")(t.userForm.unable_balance)))]),a("p",[t._v("Integral")])])])]),"app.inors.in"!==t.currenthost?a("div",{staticClass:"order"},[a("div",{staticClass:"myorder",on:{click:function(e){return t.toorder(0)}}},[a("span",[t._v("My Orders")]),a("span",[t._v("More >")])]),a("ul",t._l(t.tablist,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.toorder(e.type)}}},[a("img",{attrs:{src:e.image,alt:""}}),a("p",[t._v(t._s(e.text))])])})),0)]):t._e(),a("p",{staticClass:"line"}),a("ul",{staticClass:"itme"},t._l(t.pathlist,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.toNextPath(e.path)}}},[a("p",[t._v(t._s(e.text))]),a("i",{staticClass:"iconfont icon-next"})])})),0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"iconfont icon-morentouxiang"})])}],r=(a("dbb3"),a("6a61"),a("327b")),s={data:function(){return{tablist:[{image:a("cd7c"),text:"Undeliver",type:"1"},{image:a("0ebf"),text:"UnReceive",type:"2"},{image:a("7b1d"),text:"Refund",type:"0"},{image:a("7bad"),text:"All Orders",type:"0"}],comppathlist:[{text:"Red Envelope",path:"/redEnvelope",id:1},{text:"My Promotion",path:"/promotion",id:2},{text:"My wallet",path:"/Mywallet",id:3},{text:"My bank",path:"/Mybank",id:4},{text:" My payment information",path:"/merchant",id:5},{text:"My address",path:"/Myaddress",id:6},{text:"Account security",path:"/Accountsecurity",id:7},{text:"Financial Details",path:"/detailbalance",id:8},{text:"About us",path:"/Aboutus",id:9},{text:"Complaints&Suggestions",path:"/Complaints",id:10},{text:"Sign out",path:"/Signout",id:11}],userForm:{member_id:"",username:"",user_icon_url:"",balance:0,unable_balance:0,total_assets:0,withdrawable:0,red_envelopes:0},noreadList:0,currenthost:"",payway:{},pathlist:""}},created:function(){this.currenthost=this.$store.state.domain,this.init_MyData(),this.initNoReadNum()},methods:{Towallet:function(){this.$router.push("/MyWallet")},toNextPath:function(t){if("/Signout"!==t&&"/Accountsecurity"!==t)this.$router.push(t);else{if("/Accountsecurity"!==t)return this.logout(),localStorage.setItem("HASCOOKIE",!1),!1;this.$router.push("/Accountsecurity/".concat(this.userForm.username))}},toorder:function(t){this.$router.push("/myorder/".concat(t))},Toshezhi:function(){this.$router.push("/Accountsecurity/".concat(this.userForm.username))},init_MyData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.Home({recharge:""});case 2:a=e.sent,n=a.data,1===n.code&&(t.userForm=n.data[0],t.payway=n.pay_way[0]||{},i=JSON.parse(JSON.stringify(t.comppathlist)),"app.inors.in"===t.currenthost&&t.payway.pay_channel>=21&&t.payway.pay_channel<=30?t.pathlist=i.filter((function(t){return 6!==t.id&&4!==t.id})):"app.inors.in"===t.currenthost&&(void 0===t.payway.pay_channel||t.payway.pay_channel<21||t.payway.pay_channel>=31&&t.payway.pay_channel<=40)?t.pathlist=i.filter((function(t){return 6!==t.id&&5!==t.id})):"app.inors.in"!==t.currenthost&&t.payway.pay_channel>=21&&t.payway.pay_channel<=30?t.pathlist=i.filter((function(t){return 4!==t.id})):"app.inors.in"!==t.currenthost&&(void 0===t.payway.pay_channel||t.payway.pay_channel<21||t.payway.pay_channel>=31&&t.payway.pay_channel<=40)&&(t.pathlist=i.filter((function(t){return 5!==t.id}))));case 5:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.Logout();case 2:a=e.sent,n=a.data,1===n.code&&(document.cookie="",localStorage.removeItem("COUNT"),t.$router.push("/login"));case 5:case"end":return e.stop()}}),e)})))()},initNoReadNum:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.GetUser_Message({page:t.page,limit:t.limit,message_type:1});case 2:a=e.sent,n=a.data,1===n.code&&(t.noreadList=n.no_read1+n.no_read2);case 5:case"end":return e.stop()}}),e)})))()}}},o=s,c=(a("9270"),a("2c07")),u=Object(c["a"])(o,n,i,!1,null,"6cc23c4d",null);e["default"]=u.exports},"0ebf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAADOklEQVRYhc3YS4hcRRQG4K97ejLJMMEoiSMzKuNjE0ISXwvFhRsVDBgcRUEURREMBBdZJeDCjTBgQFdBIroSFBSiCIoYxEVQA/H9yrgQTZwYCUg0McHntItTN7l2bt/09O2e9A9F0efWOfVXddU5p05N4Ao8jVEsRwNLsQw1rHAmVuAY5nOyX/F7aofxHb7BrjS2azRSP4wmjuIg/kmTNtP3k/gzp/cXTmAkLS7DmFjocoxjA7bgTmysQjTDkl4YaYMHxK6v7YWxfhJt4Ae82Atj/SQKm/E3pqoa6jfRZfgZz1c11G+i8Ji4pGuqGFkMosOYxW7h8rrCYhCFW4UH2LJQxWxlk7i/AoFjeLbDsTPYJoLBPnyF/fgU37dTyoiux3td02QO6xYw/mYRDNaltirJf8LreA6fFyku1l/fDhfidmwXPvdf7FDA61wTzWMIj4qQPdP6cZCIZngKP7YKB5HoLSIpugzq55ZLKT5J/VpOp3mrLJ576hS/4Igg+kZGdCW2VjA6p/dE4Vsp5GZE9+OCPkxUFbPCxw/0GSVu/SUMPtFDuAhLBp3onAjzk61EG3gIb+JrvC+iw2QPJ78KO/ERvsDLuK3N2MOpH8+I1jGBvSILH8LbIsN5RNy+6R6QfAIfC2e+TyRCV+ItvOLMwPNb6scywWgycADXtQwew0si9t5QgeQmEWked9rbZLhLPL9faJGfl3SmJaVN4plwdZtJhsRu7+mS5JioE5T52odFUr0+J6snovcR271bnMsy3J2UujmvG5PupSVj6uIB+GROVkt69zRE1WMKr51lsiyR3YnVCyT6mSjzHCwZM48vRVJ9b5ItTf3R7KycEGWYMpyf+j2pZTWqTjCS2rB435fNccj/N20eH2Q/doiLVJbuzYhzNtwhuTzWiL/wjpIxU+KePFhmaLVY6fY2368XhbJT56fZbHbUcnhHuLvxAvsjeFc4+NEi+3lsFtv8Km4UruFykVUdF85/pALRi0XsPiAKZxMiEdogfOpJ3NTOfiumxeOqmWt/4BlRljmFLohK5HalDcnPsRfXltkvqljUcY04M8fxoYIibNEqi1CrFRZFJhKxIZHKzZ7N/n8VTyjRuO5p2gAAAABJRU5ErkJggg=="},"7b1d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAqCAYAAAAwPULrAAAEEUlEQVRYhbXYXYiUdRTH8c/sLruuuu1mgqu76/vbUqJsUGn2YoKEbJZaFEhUJkGhN91m1xG9KAgS3hRRVHd2ExRZVkhZmUSR+ZL2ZuJmZKmltrldnGeYcdqZnXme2S8MMzzznPP8nv/LOf9zGtWPMZiASRibXLuYxWEug+3VuB234BpMQ0PJPb/hAPZgF97H4GiJa8aDeATXJtf+xH4cSsScxji0YU6RcBjAy9iK4zU+uyw5PISfMJQ4fgbXo7EK+xnYiL2J/Xlsw5VZhXXh3cTpD3hYjGBaluDtxN8JrEjr6GYxFYN4Cq0ZRJWyRoj7F0/Wanwn/sZJLKujqGI6xUYZwgv+v6GG5TZcwFHMHiVheZrxqhC4vfiP4XbrXHyKM2JajxX9twj3ldw/GVNwTkzTHyOIeQnfllxrwD1iZ+/EvuHEteAT9GKxCBHFrMKWkmutIvDmp+SCCCfnyojbIOJdzWwWw7uxBpuW5PsK9OPNxMcbsu3qy+jCX/hYlQuzAmvFCL6WVVSereKNF9fJ37rE3x1ZHbXhrAi29WQP3ktr3JR8rxH5cEcNtvPRPcI9n2ET7hIvn6emQdiZGI+pwWa7mLY0n6rIicR9SmyElTWImyh2aCW68QHWJ995jlbzgCbMRIdYH7VwKvlUIn9U2letoGIaMC/5fbBW4ypYL45XX6cxbhLpB76vk6A8a0U4eQyX0jp5XCzS3jqJyiWCLuJF2UqBEcVVmy1y4jTzoRiprao7JZelSZw+YHyZeypNySRch5tErJwlYttyKZN7Kf1i5O6u0a5DFDX54/YOccSqK3OSB2xOYduNwyJMTK2nqDyN+B1vpbTvxhF8h556iSomTfoqpkeIO2LkfFszD4ipvTeDj6lieg+rs8A2sWt3ZfQzTdQch8ThtW5sEaO3JKOfGaL4PigKn9QUR+8u8cZfCYGpU44YwY/EsX+ZCDVl6V84dczeowOzLw5emjW2pWnF2fP/LLo0ZKD0vifE6G3KICzPRNFbOSCK57KsXNDT297avF/hvHdBDNJltOAL0Wjpq4PAfrEGvxHZZFhunNPZPH9yx5TO9tafG3K5IdGiKK1tEUX1afHW9aj220VqW1Xhnka8jqEJ41qebW5qOCleaFjy7YhjidjRpDkvDNuW93ZZ2HPV+nmTOzZUMlolFvSA0W3k7FZo5ORW9023pm962+q+6W0jGS8VXaZBPK3Q660Ha2VogeXpxDsKzcMNsrUZlhb5Oy5D87CYdfgxcfoLnscNCrVvJWaK8PS5Qtv1OZGZypKmYX0/HlVoWJ/BlyIjnBItsPGiSJ8ruu7549QJvCKyUcXAnEZcMfNFq/9WLBBZofRY/qvLW/27xRqrikzFRwktYsTaRbv2rEIJkIr/AE0R+EG5yFjLAAAAAElFTkSuQmCC"},"7bad":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAArCAYAAAAdSFoKAAABeUlEQVRYhe3YPUscURSA4WdH0VgERBDEJmClEsEfYCc2ViLYiEVKsdHSVhshXX5ASJc2IFgo+ge01UIQRLFRRAWXiIgfxcz6MSw7sjuzO8W8cLgwtzjv/WDO4ZZ8pB390ZglZVxUm2jHCq7x3KTYx0RFoBSNfzCHX9jCU+OLrslXLGIMk1FOo5HhfMbJ4wTYFO4MWMIt2posAtPCTegN8AVXeGyBSOXCdgUtSF6VQiROIRInNyJJNWUEgynl+o+NekVmsZySyCm+1StyhO2URKpW28+K/I4ic3JzWQuROIVInCSRNen1qCeNiDSNpP/IKn6mlKtmQ54kchdF5uTmaAqROLkR+Uw/MpVSrkss1CsygpmURE5rTSaJ/MNxSiLlRkR2o8ic3FzWQiROIRInEDYtHS3K3xmNTwEO0YehFoiMC5/Nzgl34xAH+N4kgUBYPu6Fzdfr8+Yw1jGAMzxkLNKNHvzFDzyU3k12CgvcsLezy4ob7GCv8uEFZ4hj+8aIeQcAAAAASUVORK5CYII="},9270:function(t,e,a){"use strict";a("c14d")},c14d:function(t,e,a){},cd7c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAABJ0lEQVRYhe3YvytFYRzH8dfVNVA2P5JByoDBZmFRFoPdohjEf8Eg5S+RVUmSLCZFVlIWQpkUKe6N4TkizsmVw3PVedfTc/r2fOvd59Rzvp2SQD+a1ScnuINlPNfxOkdLCXu4xsovpPFTerGGwXJSuMFhPJ9MHl8fGmJafIdCNG8K0byJLVpCDzq+OhhTdBSnOBPu8R10Zh2OJdqNDVxhAjPCZ3w9y6mcVvwDplHFOO6T2iW2MYT9jw2xEm3DhTdJOE729rSGWKIH6MPIu9osKjhKa4j16lcxj11soRXDWBKS/kSsRJ8whkU0CUPRJBayGmIlCg/CaFnTeBn7wq+ZQjRvCtG8KUTzphDNm38jWhbmwgHMRXZJoyvZqzCFW/H/MaWtCjbR+AJHFXdZcHEDAAAAAABJRU5ErkJggg=="}}]);
"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[9045],{75813:function(e,t,o){o.d(t,{C:function(){return r},e:function(){return n}});var a=o(30048);function r(e){return(0,a.ZP)({url:"/api/e9b849a515a84327b424af7ccdbf2949/v1_0_0/base/funcs/image/upload",method:"post",data:e,auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"multipart/form-data"}})}function n(e){return(0,a.ZP)({url:"/api/e9b849a515a84327b424af7ccdbf2949/v1_0_0/base/funcs/send/email",method:"post",data:e,auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"}})}},30048:function(e,t,o){o.d(t,{I8:function(){return n},A:function(){return i},ZP:function(){return s}});var a=o(9669),r=o.n(a);const n={username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},i={"Content-Type":"application/json"};function s(e){const t=r().create({baseURL:"",timeout:6e4});return t.interceptors.request.use((e=>e),(e=>{console.log(e)})),t.interceptors.response.use((e=>e.data),(e=>{console.log(e)})),t(e)}},39045:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});var a=o(66252),r=o(49963);const n=e=>((0,a.dD)("data-v-f89537ca"),e=e(),(0,a.Cn)(),e),i={class:"register-submit"},s={class:"card"},c=n((()=>(0,a._)("h1",{style:{"font-weight":"bold","margin-bottom":"40px","font-size":"18px"}}," 填写申请人信息 ",-1))),l={class:"zone inputZone1"},u=n((()=>(0,a._)("p",{class:"title"},[(0,a._)("label",{for:"mobile"},"手机")],-1))),d={class:"zone inputZone2"},m=n((()=>(0,a._)("p",{class:"title"},[(0,a._)("label",{for:"email"},"邮箱")],-1))),b={class:"zone button-zone"};function f(e,t,o,n,f,p){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[c,(0,a._)("div",l,[u,(0,a.wy)((0,a._)("input",{type:"text",id:"mobile",placeholder:"请填写申请人手机号","onUpdate:modelValue":t[0]||(t[0]=e=>f.mobile=e),ref:"autofocusInput"},null,512),[[r.nr,f.mobile]])]),(0,a._)("div",d,[m,(0,a.wy)((0,a._)("input",{type:"text",id:"email",placeholder:"请填写申请人邮箱","onUpdate:modelValue":t[1]||(t[1]=e=>f.email=e),ref:"passwordInput"},null,512),[[r.nr,f.email]])]),(0,a._)("div",b,[(0,a._)("button",{class:"submit-button",onClick:t[2]||(t[2]=(...e)=>p.submitClick&&p.submitClick(...e))},"注 册")])])])}var p=o(75813),w={name:"e-SubmitProvider",activated(){},beforeRouteEnter(e,t,o){"true"===window.localStorage.getItem("isStaff")?(window.localStorage.setItem("currentIndex010001",5),o()):(o({path:"/tools/login"}),window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010001"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"),window.localStorage.removeItem("providerID"))},data(){return{mobile:"",email:""}},methods:{async submitClick(){if(""===this.mobile)return void this.$toast.error("手机号不能为空",240);if(""===this.email)return void this.$toast.error("邮箱不能为空",240);const e=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,t=e.test(this.mobile);if(!t)return void this.$toast.error("请输入正确的手机号",240);const o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=o.test(this.email);if(!a)return void this.$toast.error("请输入正确的邮箱",240);const r=await(0,p.e)({mobile:this.mobile,email:this.email});this.mobile="",this.email="",200===r.Code&&"success"===r.msg?this.$toast.success("邮件发送成功",240):this.$toast.error("邮件发送失败",240)}}},h=o(83744);const v=(0,h.Z)(w,[["render",f],["__scopeId","data-v-f89537ca"]]);var g=v}}]);
//# sourceMappingURL=9045.e59938c9.js.map
"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[2928],{5050:function(e,t,n){function i(e,t){let n=null;function i(...i){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this,i)}),t)}return i}function r(e){return String.fromCharCode(e)}function o(e=null){let t="";if(null!==e){for(let n=0;n<e.length;n+=1){const i=e.charAt(n);if("+"===i)t+=" ";else if("%"===i){const i=e.substring(n+1,n+3);parseInt(`0x${i}`)>127?(t+=decodeURI("%"+i.toString()+e.substring(n+3,n+9).toString()),n+=8):(t+=r(parseInt(`0x${i}`)),n+=2)}else t+=i}return t}}n.d(t,{Ds:function(){return i},EO:function(){return o},$i:function(){return c},lM:function(){return a},h3:function(){return u},mr:function(){return l},ss:function(){return m},v2:function(){return p},te:function(){return b},Zy:function(){return h},C_:function(){return w},Cj:function(){return g},HO:function(){return v},_e:function(){return y},d0:function(){return _}});var s="                                 \"$_#(=[>+.&']|~Ts2W5lzy0w!}*-;\\<bad7ouxHOZXvrjCQ9fp1NPnmRB@?^,`{YUASKigtMeGEL8hkIV4cJD36Fq)/%: ";function c(e){let t="";for(const n in t="",e)t+=s[e[n].charCodeAt(0)];return t}function a(e){let t="",n=null;for(const i in t="",n=new Map,s)n[s[i]]=i;for(const i in n[" "]=99,e)t+=String.fromCharCode(n[e[i]]);return t}function u(e){const t=e.split("").slice(0,10);return t[4]=".",t[7]=".",t.join("")}function l(e,t,n,i,r,o){const s=e,c=Number(t)<10?"0"+t:t,a=Number(n)<10?"0"+n:n,u=Number(i)<10?"0"+i.slice(1,2):i,l=Number(r)<10?"0"+r.slice(1,2):r,d=Number(o)<10?"0"+o.slice(1,2):o;return`${s}-${c}-${a}T${u}:${l}:${d}Z`}const d=e=>new Promise((t=>{setTimeout((()=>{e.style.backgroundColor="transparent",t()}),200)})),f=e=>new Promise((t=>{setTimeout((()=>{e.style.backgroundColor="red",t()}),200)}));async function m(e){return e.style.backgroundColor="red",await d(e),await f(e),await d(e),await f(e),await d(e),new Promise((e=>{e()}))}function p(e,t){const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++){const o=e[n[r]],s=t[i[r]],c=typeof o,a=typeof s;if(c!==a)return!1;if("object"===c&&"object"===a){const e=p(o,s);if(!e)return!1}else if("array"===c&&"array"===a){const e=b(o,s);if(!e)return!1}else if(o!==s)return!1}return!0}function b(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){if(typeof e[n]!==typeof t[n])return!1;if("object"===typeof e[n]&&"object"===typeof t[n]){const i=p(e[n],t[n]);if(!i)return!1}else if("array"===typeof e[n]&&"array"===typeof t[n]){const i=b(e[n],t[n]);if(!i)return!1}else if(e[n]!==t[n])return!1}return!0}const h=e=>{const t=e.split("\n"),n=t.filter((e=>e&&e.trim()));for(const i in n)n[i]=n[i].trim();return n};function w(e,t,n=.2){return new Promise(((i,r)=>{const o=new FileReader;o.readAsDataURL(e),o.onerror=()=>{r({code:"0000",msg:`图片读取失败，错误码为${o.error.code}`})},o.onload=()=>{const e=new Image;e.src=o.result,e.onload=()=>{const{width:r,height:o}=e,s=r/o;i(s<t-n||s>t+n?{code:"0010",msg:"图片长宽比例不符要求"}:{code:"1111",msg:"图片长宽比例符合要求"})}}}))}function g(e){const t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function v(e){const t=e.replace(/-/g,"."),n=t.replace("T"," ");return n.slice(0,16)}function y(e){return e.substring(0,e.lastIndexOf("."))}function _(){let e,t;return window.innerWidth?e=window.innerWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),window.innerHeight?t=window.innerHeight:document.body&&document.body.clientHeight&&(t=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(t=document.documentElement.clientHeight,e=document.documentElement.clientWidth),[e,t]}},61755:function(e,t,n){n.d(t,{Bb:function(){return r},RL:function(){return o},p0:function(){return s}});var i=n(30048);function r(e){return(0,i.ZP)({method:"post",url:"/api/e9b849a515a84327b424af7ccdbf2949/web/v1_0_0/workticketaudit/confirm",data:e,auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"}})}function o(e){return(0,i.ZP)({method:"post",url:"/api/e9b849a515a84327b424af7ccdbf2949/web/v1_0_0/workticketaudit/decline",data:e,auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"}})}function s(e){return(0,i.ZP)({method:"post",url:"/api/e9b849a515a84327b424af7ccdbf2949/web/v1_0_0/workticketaudit/list/filter",auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"},data:e})}},27623:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(66252),r=n(3577);const o={class:"empty-data-placeholder"};function s(e,t,n,s,c,a){const u=(0,i.up)("a-empty");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(u,null,{description:(0,i.w5)((()=>[(0,i._)("span",null,(0,r.zw)(n.description),1)])),_:1})])}var c={name:"e-EmptyDataPlaceholder",props:{description:{type:String,default:"暂无数据"}}},a=n(83744);const u=(0,a.Z)(c,[["render",s]]);var l=u},13004:function(e,t,n){n.d(t,{Z:function(){return I}});var i=n(66252);const r={id:"order-list"};function o(e,t,n,o,s,c){const a=(0,i.up)("list-item");return(0,i.wg)(),(0,i.iD)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.list,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"list-item"},[(0,i.Wm)(a,{item:e,index:t,operationText:n.operationText},null,8,["item","index","operationText"])])))),128))])}var s=n(3577),c=n(49963);const a=e=>((0,i.dD)("data-v-00ee71b7"),e=e(),(0,i.Cn)(),e),u={class:"list-item"},l={class:"order-content"},d={class:"date-created"},f={class:"user"},m=a((()=>(0,i._)("div",{class:"identity"},"Provider",-1))),p={class:"version"},b={class:"create-reason"},h={class:"audit-status"},w={class:"status"},g={class:"audit-operation"},v={class:"audit-operation"},y=a((()=>(0,i._)("div",{style:{cursor:"default"}},"已通过",-1))),_=[y],k={class:"audit-operation"},C=a((()=>(0,i._)("div",{style:{cursor:"default"}},"已拒绝",-1))),x=[C],$={class:"remark-content"},D=a((()=>(0,i._)("p",{class:"placeHolder1"},null,-1))),j={class:"remark"},T=a((()=>(0,i._)("p",{class:"placeHolder2"},null,-1)));function P(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",l,[(0,i._)("div",d,(0,s.zw)(a.setDate(n.item.date_created))+"-id:"+(0,s.zw)(n.item.id),1),(0,i._)("div",f,(0,s.zw)(n.item.content.brand)+"-userid: "+(0,s.zw)(n.item.user),1),m,(0,i._)("div",p,"V"+(0,s.zw)(n.item.version),1),(0,i._)("div",b,(0,s.zw)(n.item.create_reason),1),(0,i._)("div",h,[(0,i._)("div",w,(0,s.zw)(a.setStatus(n.item.status)),1),(0,i._)("div",{class:"check",onClick:t[0]||(t[0]=(...e)=>a.viewDetailsClick&&a.viewDetailsClick(...e)),title:"点击查看详情"},(0,s.zw)(n.operationText),1)]),(0,i.wy)((0,i._)("div",g,[(0,i._)("div",{title:"填写通过原因",onClick:t[1]||(t[1]=(...e)=>a.passClick&&a.passClick(...e))},"通过"),(0,i._)("div",{title:"填写拒绝理由",onClick:t[2]||(t[2]=(...e)=>a.rejectClick&&a.rejectClick(...e))},"拒绝")],512),[[c.F8,3200===n.item.status]]),(0,i.wy)((0,i._)("div",v,_,512),[[c.F8,3300===n.item.status]]),(0,i.wy)((0,i._)("div",k,x,512),[[c.F8,3400===n.item.status]])]),(0,i._)("div",$,[D,(0,i._)("p",j,"备注："+(0,s.zw)(n.item.review_comment),1),T])])}var Z=n(5050),N={name:"e-ListItem",props:{item:{type:Object,default(){return{}}},index:{type:Number},operationText:{type:String,default:"查看"}},data(){return{}},created(){console.log(this.item)},mounted(){this.$nextTick((()=>{}))},methods:{VMUrlDecode(e){return(0,Z.EO)(e)},viewDetailsClick(e){console.log("before emit this:"),console.log(this);const t={x:e.clientX,y:e.clientY,index:this.index};console.log("message",t),this.$bus.$emit("viewDetailsClick",t)},setStatus(e){return 3200===e?"待审核":3300===e?"已通过":"已拒绝"},setModuleName(e){if(1200===e)return"热门类别"},setDate(e){return(0,Z.h3)(e)},rejectClick(){this.$bus.$emit("rejectClick",this.index),this.$bus.$emit("passProduct",this.item.id)},passClick(){console.log("list item emit pass click:index : ",this.index),console.log(this.item.id),this.$bus.$emit("passClick",this.index),this.$bus.$emit("passProduct",this.item.id)}},components:{}},z=n(83744);const S=(0,z.Z)(N,[["render",P],["__scopeId","data-v-00ee71b7"]]);var A=S,H={name:"e-Orderlist",props:{list:{type:Array,default(){return[]}},operationText:{type:String,default:"查看"}},methods:{viewDetails(e){var t=e||window.event;t.clientX,t.clientY;console.log("client:")}},components:{ListItem:A}};const U=(0,z.Z)(H,[["render",o]]);var I=U},40483:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(66252),r=n(3577),o=n(49963),s=n(36423);const c={id:"reject-reason"},a={class:"title"},u=(0,i.Uk)(" 请填写"),l=(0,i.Uk)("原因 "),d={class:"buttonZone"},f={src:s},m=(0,i.Uk)(" 确认 ");function p(e,t,n,s,p,b){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("p",a,[u,(0,i._)("span",{style:(0,r.j5)({color:p.color}),class:"titleKeyWord"},(0,r.zw)(p.word),5),l]),(0,i._)("div",{class:"imageZone",onClick:t[0]||(t[0]=(...e)=>b.cancel&&b.cancel(...e))}),(0,i.wy)((0,i._)("textarea",{name:"reaason",ref:"textarea","onUpdate:modelValue":t[1]||(t[1]=e=>p.message=e)},null,512),[[o.nr,p.message]]),(0,i._)("div",d,[(0,i._)("button",{class:"cancel other-button",onClick:t[2]||(t[2]=(...e)=>b.cancel&&b.cancel(...e))},"取消"),(0,i._)("button",{class:"ensure other-button",onClick:t[3]||(t[3]=(...e)=>b.ensure&&b.ensure(...e))},[(0,i.wy)((0,i._)("img",f,null,512),[[o.F8,p.ifShowLoadingGif]]),m])])])}var b={name:"e-ReviewCommentDialog",updated(){this.$refs.textarea.focus()},data(){return{word:"",message:"",color:"var(--color-text-light-green)",ifShowLoadingGif:!1}},methods:{cancel(){this.$emit("cancel")},ensure(){this.$emit("ensure",this.message)}}},h=n(83744);const w=(0,h.Z)(b,[["render",p],["__scopeId","data-v-5c24b5d0"]]);var g=w},36423:function(e,t,n){e.exports=n.p+"static/img/loading-small.3dd3545f.svg"}}]);
//# sourceMappingURL=2928.39915daa.js.map
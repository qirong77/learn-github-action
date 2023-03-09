"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[9471],{9471:function(e,t,o){o.r(t),o.d(t,{default:function(){return D}});var a=o(66252),n=o(3577);const r={id:"basicFrame"},i={class:"left"},s={class:"left-top"},d={class:"accountName"},l={class:"right"};function u(e,t,o,u,c,m){const p=(0,a.up)("a-tooltip"),g=(0,a.up)("tab-navigation"),w=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a._)("div",s,[(0,a.Wm)(p,{getPopupContainer:e=>e.parentNode},{title:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(m.getAccount),1)])),default:(0,a.w5)((()=>[(0,a._)("p",d,(0,n.zw)(m.getAccount),1)])),_:1},8,["getPopupContainer"]),(0,a._)("p",{onClick:t[0]||(t[0]=(...e)=>m.logout&&m.logout(...e)),class:"logout"},"退出"),(0,a._)("p",{onClick:t[1]||(t[1]=(...e)=>m.reviewProgressClick&&m.reviewProgressClick(...e)),style:(0,n.j5)(-1===c.index?{color:"var(--color-background-button-green)"}:{}),class:"reviewProgress"}," 审核进度 ",4),(0,a._)("p",{onClick:t[2]||(t[2]=(...e)=>m.toAudit&&m.toAudit(...e))},"审核端")]),(0,a.Wm)(g,{list:c.list,onResetBasicFrameIndex:m.resetBasicFrameIndex,ref:"tabNavigation"},null,8,["list","onResetBasicFrameIndex"])]),(0,a._)("div",l,[(0,a.Wm)(w,null,{default:(0,a.w5)((({Component:e})=>[((0,a.wg)(),(0,a.j4)(a.Ob,null,[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))],1024))])),_:1})])])}var c=o(49963);const m=e=>((0,a.dD)("data-v-24e099c6"),e=e(),(0,a.Cn)(),e),p={class:"tab-navigation"},g=["onClick"],w={class:"cat-name"},h=["onClick"],I=m((()=>(0,a._)("p",{style:{width:"60px"}},null,-1)));function v(e,t,o,r,i,s){const d=(0,a.up)("tab-navigation-item");return(0,a.wg)(),(0,a.iD)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.list,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"navigation-cat",key:e.name,onClick:o=>s.setCatIndex(e,t)},[(0,a._)("div",w,(0,n.zw)(e.name),1),(0,a.Wm)(c.uT,{name:"fade"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{key:t.name},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,n.C_)(["item",t.routerIndex===i.currentIndex?"activeClass":""]),onClick:(0,c.iM)((e=>s.goto(t,t.routerIndex)),["stop"])},[I,(0,a._)("p",null,(0,n.zw)(t.name),1)],10,h)])),_:2},1024)),[[c.F8,e.show]]))),128))])])),_:2},1024)],8,g)))),128))])}const x={class:"tab-navigation-item"};function f(e,t,o,n,r,i){return(0,a.wg)(),(0,a.iD)("div",x,[(0,a.WI)(e.$slots,"default")])}var b={name:"e-TabNavigationItem"},C=o(83744);const _=(0,C.Z)(b,[["render",f]]);var k=_,$={name:"e-TabNavigation",props:{list:{type:Array,default(){return[]}}},data(){return{currentIndex:1,currentCatIndex:0}},methods:{setCatIndex(e,t){e.show=!e.show},goto(e,t){console.log("goto index: ",t),this.currentIndex=t,window.localStorage.setItem("currentIndex010001",t),this.$emit("resetBasicFrameIndex"),this.$router.replace(e.path).catch((e=>{}))}},components:{TabNavigationItem:k}};const S=(0,C.Z)($,[["render",v],["__scopeId","data-v-24e099c6"]]);var N=S,y={name:"AdminBasicLayout",created(){this.$nextTick((()=>{if(window.localStorage.getItem("currentIndex010001")){const e=parseInt(window.localStorage.getItem("currentIndex010001"));this.$refs.tabNavigation.currentIndex=e,-1===e&&(this.index=-1)}else window.localStorage.setItem("currentIndex010001",0);this.$bus.$on("setCurrentIndex010001To0",(()=>{this.$refs.tabNavigation.currentIndex=0})),this.$bus.$on("setCurrentIndex010001To1",(()=>{this.$refs.tabNavigation.currentIndex=1})),this.$bus.$on("setCurrentIndex010001To3",(()=>{this.$refs.tabNavigation.currentIndex=3}))}))},unmounted(){this.$bus.$off("setCurrentIndex010001To0")},data(){return{list:[{name:"商品管理",show:!1,children:[{name:"热门类别",path:"/tools/admin/category/update",routerIndex:1},{name:"活动特色",path:"/tools/admin/feature/update",routerIndex:2},{name:"资质荣誉",path:"/tools/admin/qualification/update",routerIndex:3}]},{name:"优惠券管理",show:!1,children:[{name:"优惠券管理",path:"/tools/admin/coupon/update",routerIndex:4},{name:"优惠券发放",path:"/tools/admin/coupon/assign",routerIndex:5}]},{name:"发布私信",show:!1,children:[{path:"/tools/admin/providermessage",name:"服务商私信",routerIndex:6},{path:"/tools/admin/usermessage",name:"用户私信",routerIndex:7}]},{name:"发布公告",show:!1,children:[{name:"服务商公告",path:"/tools/admin/info/provider",routerIndex:8},{name:"用户公告",path:"/tools/admin/info/user",routerIndex:9}]},{name:"注册审核",show:!1,children:[{name:"注册审核",path:"/tools/admin/submit/providerinfo",routerIndex:10}]},{name:"修改协议",show:!1,children:[{path:"/tools/admin/agreements/update",name:"修改协议",routerIndex:11}]}],routerList:[{name:"热门类别",path:"/tools/admin/category/update"},{name:"活动特色",path:"/tools/admin/feature/update"},{name:"资质荣誉",path:"/tools/admin/qualification/update"},{name:"优惠券管理",path:"/tools/admin/coupon/update"},{name:"优惠券发放",path:"/tools/admin/coupon/assign"},{name:"注册审核",path:"/tools/admin/submit/providerinfo"},{name:"发布公告",path:"/tools/admin/info/update"},{path:"/tools/admin/agreements/update",name:"修改协议"},{path:"/tools/admin/providermessage",name:"私信服务商"},{path:"/tools/admin/usermessage",name:"私信用户"}],index:999,isProvider:!0}},methods:{toAudit(){this.$router.replace("/tools/audit/category/update")},reviewProgressClick(){this.index=-1,this.$refs.tabNavigation.currentIndex=-1,window.localStorage.setItem("currentIndex010001",-1),this.$router.replace("/tools/admin/progress/review").catch((e=>{}))},resetBasicFrameIndex(){this.index=999},logout(){window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010001"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"),window.localStorage.removeItem("providerID"),this.$router.replace("/tools/login")}},computed:{getAccount(){return window.localStorage.getItem("userName")}},components:{TabNavigation:N}};const T=(0,C.Z)(y,[["render",u],["__scopeId","data-v-2de232fc"]]);var D=T}}]);
//# sourceMappingURL=9471.b6d13c03.js.map
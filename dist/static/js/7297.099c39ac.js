"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[7297],{42338:function(t,e,i){i.r(e),i.d(e,{default:function(){return M}});var s=i(66252),o=i(49963);const n=t=>((0,s.dD)("data-v-a26ce8c6"),t=t(),(0,s.Cn)(),t),a={id:"info"},l=n((()=>(0,s._)("div",{class:"tableHeader"},[(0,s._)("p",null,"创建日期"),(0,s._)("p",null,"用户"),(0,s._)("p",null,"身份"),(0,s._)("p",null,"版本"),(0,s._)("p",null,"申请理由"),(0,s._)("p",null,"状态"),(0,s._)("p",null,"审核")],-1))),r=n((()=>(0,s._)("div",{class:"divideLine"},null,-1))),c={class:"paginationZone"},h={class:"right-absolute-flex"},d={class:"fixedFullLoading"},u={class:"absoluteScrollDialogStore"},w={class:"itemcontent",style:{"background-color":"#000",width:"0px",height:"0px","margin-left":"10px","margin-bottom":"3px"}},g={class:"details",style:{width:"0px",height:"0px","background-color":"#fff","box-shadow":"var(--color-text-grey) 0 0 7px",overflow:"hidden",position:"absolute","z-index":"9"}};function f(t,e,i,n,f,v){const p=(0,s.up)("order-list"),m=(0,s.up)("a-pagination"),S=(0,s.up)("empty-data-placeholder"),C=(0,s.up)("Scroll"),k=(0,s.up)("review-comment-dialog"),$=(0,s.up)("a-spin"),I=(0,s.up)("a-space"),_=(0,s.up)("product-ticket-content");return(0,s.wg)(),(0,s.iD)("div",a,[l,r,(0,s.Wm)(C,{class:"content2","probe-type":3,ref:"scroll"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{list:f.listShow},null,8,["list"]),(0,s.wy)((0,s._)("div",c,[(0,s.Wm)(m,{total:f.listAll.length,"show-total":(t,e)=>`${e[0]}-${e[1]} of ${t} items`,"page-size":f.pageSize,"default-current":1,current:f.currentPage,"onUpdate:current":e[0]||(e[0]=t=>f.currentPage=t)},null,8,["total","show-total","page-size","current"])],512),[[o.F8,0!==f.listShow.length]]),0===f.listShow.length?((0,s.wg)(),(0,s.j4)(S,{key:0,description:"暂无工单数据"})):(0,s.kq)("",!0)])),_:1},512),(0,s.wy)((0,s._)("div",h,[(0,s.Wm)(k,{onCancel:v.cancelClick,onEnsure:v.ensureClick,ref:"inputReasonInfo"},null,8,["onCancel","onEnsure"])],512),[[o.F8,f.isShowRightCoverZone]]),(0,s.wy)((0,s._)("div",d,[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s.Wm)($,{size:"large"})])),_:1})],512),[[o.F8,f.isLoading]]),(0,s._)("div",u,[(0,s._)("div",w,[(0,s.wy)((0,s._)("div",g,[(0,s._)("p",{class:"imageZone",onClick:e[1]||(e[1]=t=>v.hideViewDialog())}),(0,s.Wm)(C,{ref:"roll",class:"content3"},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{ticketContent:f.activeViewItem},null,8,["ticketContent"])])),_:1},512)],512),[[o.F8,f.viewBoardVisible]])])])])}var v=i(467);i(30048);var p=i(61755),m=i(19755),S=i.n(m),C=i(13004),k=i(40483),$=i(3577);const I=t=>((0,s.dD)("data-v-5bc30c2a"),t=t(),(0,s.Cn)(),t),_={class:"boardContent"},x={class:"infocontentWrapper"},b=I((()=>(0,s._)("div",{class:"infotitle"},"删掉公告标题",-1))),y={class:"infocontent"},P={class:"infocontentWrapper"},R=I((()=>(0,s._)("div",{class:"infotitle"},"公告内容",-1))),A={class:"infocontent"},z={class:"infocontentWrapper"},D=I((()=>(0,s._)("div",{class:"infotitle"},"创建原因",-1))),Z={class:"infocontent"},W={class:"infocontentWrapper"},L=I((()=>(0,s._)("div",{class:"infotitle"},"发布平台",-1))),V={class:"infocontent"},F={class:"infocontentWrapper"},U=I((()=>(0,s._)("div",{class:"infotitle"},"发布状态",-1)));function j(t,e,i,n,a,l){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",x,[b,(0,s._)("div",y,(0,$.zw)(i.ticketContent.title),1)]),(0,s._)("div",P,[R,(0,s._)("div",A,(0,$.zw)(i.ticketContent.content),1)]),(0,s._)("div",z,[D,(0,s._)("div",Z,(0,$.zw)(i.ticketContent.create_reason),1)]),(0,s._)("div",W,[L,(0,s._)("div",V,(0,$.zw)(l.infoPlatform(i.ticketContent.platform)),1)]),(0,s._)("div",F,[U,(0,s.wy)((0,s._)("div",{class:"infocontentUrgent"},(0,$.zw)(l.infoStatus(i.ticketContent.status)),513),[[o.F8,a.isUrgent]]),(0,s.wy)((0,s._)("div",{class:"infocontentActivate"},(0,$.zw)(l.infoStatus(i.ticketContent.status)),513),[[o.F8,a.isActivate]]),(0,s.wy)((0,s._)("div",{class:"infocontentInActivate"},(0,$.zw)(l.infoStatus(i.ticketContent.status)),513),[[o.F8,a.isInActivate]])])])}var O={name:"e-ProductTicketContent",props:{ticketContent:{type:[Object,Array],default(){return[]}}},data(){return{isUrgent:!1,isActivate:!1,isInActivate:!1}},methods:{infoPlatform(t){return 1e4==t?"所有平台":10001==t?"IOS":10002==t?"小程序":void 0},infoStatus(t){return 11e3==t?(this.isUrgent=!0,this.isActivate=!1,this.isInActivate=!1,"紧 急"):11001==t?(this.isUrgent=!1,this.isActivate=!0,this.isInActivate=!1,"使用中"):11002==t?(this.isUrgent=!1,this.isActivate=!1,this.isInActivate=!0,"已停用"):void 0}}},T=i(83744);const B=(0,T.Z)(O,[["render",j],["__scopeId","data-v-5bc30c2a"]]);var E=B,J=i(27623),N={name:"e-info",data(){return{isLoading:!1,listAll:[],listShow:[],activeViewItem:[],isShowCoverPage:!1,viewBoardVisible:!1,isShowRightCoverZone:!1,activeRecordIndex:0,pageSize:8,currentPage:1,totalPage:0}},beforeRouteEnter(t,e,i){"true"===window.localStorage.getItem("isStaff")?(window.localStorage.setItem("currentIndex010003",7),i()):(i({path:"/tools/login"}),window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010003"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"))},async mounted(){let t={work_line_id:1600};this.isLoading=!0;try{const e=await(0,p.p0)(t);console.log(e);const{Code:i,msg:s}=e;if(200===i&&"success"===s){console.log(e.details.tickets),this.listAll=e.details.tickets.reverse(),this.totalPage=Math.ceil(this.listAll.length/this.pageSize);const t=window.JSON.parse(window.JSON.stringify(this.listAll));0===this.listShow.length&&(this.listShow=t.slice(0,this.pageSize)),this.currentPage===this.totalPage&&(this.listShow=t.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage))}else this.$toast.error("获取工单数据失败 ",240),console.log("获取工单数据失败 ")}catch(e){this.$toast.error("获取工单数据失败  ",240),console.log("获取工单数据失败 ")}this.isLoading=!1,this.$bus.$on("viewDetailsClick",this.viewDetailsClick),this.$bus.$on("passClick",this.passClick),this.$bus.$on("passProduct",this.passProduct),this.$bus.$on("rejectClick",this.rejectClick)},unmounted(){this.$bus.$off("viewDetailsClick",this.viewDetailsClick),this.$bus.$off("passClick",this.passClick),this.$bus.$off("passProduct",this.passProduct),this.$bus.$off("rejectClick",this.rejectClick)},methods:{passClick(t){this.activeRecordIndex=t,this.$refs.inputReasonInfo.word="通过",this.$refs.inputReasonInfo.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},passProduct(t){console.log("product passClick item id : ",t),this.activeRecordId=t},viewDetailsClick(t){const{x:e,y:i,index:s}=t;this.x=e,this.y=i;const o=this.x,n=this.y;this.activeViewItem=this.listShow[s].content;const a=this,l=".details";let r;this.isShowCoverPage=!0;const c=document.body.clientWidth;let h;r=c<1e3?0:c>1e3&&c<1240?(c-1e3)/2:240+(c-240-1e3)/2;let d=document.body.clientHeight;h=d<680?0:(d-680)/2,S()(l).animate({left:o,top:n},50,(function(){a.viewBoardVisible=!0})),S()(l).animate({left:r,top:h,width:"100px",height:"100px"},100,(function(){a.$refs.roll.refresh(),a.$refs.roll.scrollTo(0,0,0)})),S()(l).animate({width:"1000px",height:"680px"},150)},rejectClick(t){this.activeRecordIndex=t,this.$refs.inputReasonInfo.word="拒绝",this.$refs.inputReasonInfo.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},hideViewDialog(){const t=".details",e=this;S()(t).animate({width:"70px",height:"70px"},50),S()(t).animate({left:e.x,top:e.y,width:"0px",height:"0px"},200,(function(){e.isShowCoverPage=!1,e.viewBoardVisible=!1}))},cancelClick(){this.isShowCoverPage=!1,this.isShowRightCoverZone=!1},async ensureClick(t){if(""!==t){if(this.$refs.inputReasonInfo.ifShowLoadingGif=!0,console.log(this.$refs.inputReasonInfo.word),"通过"===this.$refs.inputReasonInfo.word){try{console.log("通过id和review comment"),console.log(this.listAll[this.activeRecordIndex].id,t);const e=await(0,p.Bb)({id:this.activeRecordId,review_comment:t});200==e.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(e.Msg,240))}catch(e){this.$toast.error("操作失败",240)}this.$refs.inputReasonInfo.ifShowLoadingGif=!1,this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}if("拒绝"===this.$refs.inputReasonInfo.word){try{console.log("通过id和review comment"),console.log(this.listAll[this.activeRecordIndex].id,t);const e=await(0,p.RL)({id:this.activeRecordId,review_comment:t});200==e.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(e.Msg,240))}catch(e){this.$toast.error("操作失败",240)}this.$refs.inputReasonInfo.ifShowLoadingGif=!1,this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}}else this.$toast.warn("编辑理由不能为空",240)}},watch:{currentPage(t){const e=window.JSON.parse(window.JSON.stringify(this.listAll));this.listShow=e.slice(this.pageSize*(t-1),this.pageSize*t),this.$refs.scroll.scrollTo(0,0,400),setTimeout((()=>{this.$refs.scroll.refresh()}),200)}},components:{Scroll:v.Z,OrderList:C.Z,ReviewCommentDialog:k.Z,ProductTicketContent:E,EmptyDataPlaceholder:J.Z}};const G=(0,T.Z)(N,[["render",f],["__scopeId","data-v-a26ce8c6"]]);var M=G}}]);
//# sourceMappingURL=7297.099c39ac.js.map
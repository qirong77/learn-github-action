"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[3586],{60281:function(e,t,i){i.r(t),i.d(t,{default:function(){return O}});var o=i(66252),s=i(49963);const r=e=>((0,o.dD)("data-v-9d9f850e"),e=e(),(0,o.Cn)(),e),n={id:"provider"},l=r((()=>(0,o._)("div",{class:"tableHeader"},[(0,o._)("p",null,"创建日期"),(0,o._)("p",null,"用户"),(0,o._)("p",null,"身份"),(0,o._)("p",null,"版本"),(0,o._)("p",null,"申请理由"),(0,o._)("p",null,"状态"),(0,o._)("p",null,"审核")],-1))),a=r((()=>(0,o._)("div",{class:"divideLine"},null,-1))),c=r((()=>(0,o._)("div",{class:"emptyDiv"},null,-1))),h={class:"paginationZone"},d={class:"right-absolute-flex"},w={key:0,class:"fixedCoverPage"},u={class:"absoluteScrollDialogStore"},g={class:"ticketContent",style:{"background-color":"#000",width:"0px",height:"0px","margin-left":"10px","margin-bottom":"3px"}},p={class:"details",style:{width:"0px",height:"0px","background-color":"#fff","box-shadow":"var(--color-text-grey) 0 0 7px",overflow:"hidden",position:"absolute","z-index":"9"}},v={class:"fixedFullLoading"};function f(e,t,i,r,f,m){const S=(0,o.up)("order-list"),C=(0,o.up)("a-pagination"),k=(0,o.up)("empty-data-placeholder"),$=(0,o.up)("Scroll"),P=(0,o.up)("review-comment-dialog"),_=(0,o.up)("provider-ticket-content"),x=(0,o.up)("a-spin"),I=(0,o.up)("a-space");return(0,o.wg)(),(0,o.iD)("div",n,[l,a,c,(0,o.Wm)($,{class:"content2","probe-type":3,ref:"scroll"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{list:f.listShow},null,8,["list"]),(0,o.wy)((0,o._)("div",h,[(0,o.Wm)(C,{total:f.listAll.length,"show-total":(e,t)=>`${t[0]}-${t[1]} of ${e} items`,"page-size":f.pageSize,"default-current":1,current:f.currentPage,"onUpdate:current":t[0]||(t[0]=e=>f.currentPage=e)},null,8,["total","show-total","page-size","current"])],512),[[s.F8,0!==f.listShow.length]]),0===f.listShow.length?((0,o.wg)(),(0,o.j4)(k,{key:0,description:"暂无工单数据"})):(0,o.kq)("",!0)])),_:1},512),(0,o.wy)((0,o._)("div",d,[(0,o.Wm)(P,{onCancel:m.cancelClick,onEnsure:m.ensureClick,ref:"inputReasonProvider"},null,8,["onCancel","onEnsure"])],512),[[s.F8,f.isShowRightCoverZone]]),f.isShowCoverPage?((0,o.wg)(),(0,o.iD)("div",w)):(0,o.kq)("",!0),(0,o._)("div",u,[(0,o._)("div",g,[(0,o.wy)((0,o._)("div",p,[(0,o.wy)((0,o._)("p",{class:"imageZone",onClick:t[1]||(t[1]=e=>m.hideViewDialog())},null,512),[[s.F8,f.ifShowCancelIcon]]),(0,o.Wm)($,{ref:"roll",class:"content3"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{ticketContent:f.activeViewItem},null,8,["ticketContent"])])),_:1},512)],512),[[s.F8,f.viewBoardVisible]])])]),(0,o.wy)((0,o._)("div",v,[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{size:"large"})])),_:1})],512),[[s.F8,f.isLoading]])])}var m=i(467),S=i(61755),C=i(13004),k=i(19755),$=i.n(k),P=i(5050),_=i(40483),x=i(27623),I=i(3577);const b=e=>((0,o.dD)("data-v-a5b2063e"),e=e(),(0,o.Cn)(),e),y={class:"boardContent"},R=b((()=>(0,o._)("p",null,"avatar_square:",-1))),D=b((()=>(0,o._)("p",null,"portrait:",-1)));function z(e,t,i,s,r,n){const l=(0,o.Q2)("lazy");return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("p",null,"name: "+(0,I.zw)(i.ticketContent.name),1),(0,o._)("p",null,"describe: "+(0,I.zw)(i.ticketContent.describe),1),R,(0,o.wy)((0,o._)("img",null,null,512),[[l,i.ticketContent.avatar_square]]),D,(0,o.wy)((0,o._)("img",null,null,512),[[l,i.ticketContent.portrait]])])}var Z={name:"e-ProviderTicketContent",props:{ticketContent:{type:Object,default(){return{}}}}},L=i(83744);const V=(0,L.Z)(Z,[["render",z],["__scopeId","data-v-a5b2063e"]]);var W=V,j={name:"e-Provider",beforeRouteEnter(e,t,i){"true"===window.localStorage.getItem("isStaff")?(window.localStorage.setItem("currentIndex010003",4),i()):(i({path:"/tools/login"}),window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010003"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"),window.localStorage.removeItem("providerID"))},async mounted(){console.log((new Date).getFullYear(),(new Date).getMonth());let e={work_line_id:1500};this.isLoading=!0;try{const t=await(0,S.p0)(e);console.log(t);const{Code:i,msg:o}=t;if(200===i&&"success"===o){console.log(t.details.tickets),this.listAll=t.details.tickets.reverse(),this.totalPage=Math.ceil(this.listAll.length/this.pageSize);const e=window.JSON.parse(window.JSON.stringify(this.listAll));0===this.listShow.length&&(this.listShow=e.slice(0,this.pageSize)),this.currentPage===this.totalPage&&(this.listShow=e.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage))}else this.$toast.error("获取工单数据失败 ",240),console.log("获取工单数据失败 ")}catch(t){this.$toast.error("获取工单数据失败  ",240),console.log("获取工单数据失败 ")}this.isLoading=!1,this.$bus.$on("viewDetailsClick",this.viewDetailsClick),this.$bus.$on("passClick",this.passClick),this.$bus.$on("passProduct",this.passProduct),this.$bus.$on("rejectClick",this.rejectClick)},unmounted(){this.$bus.$off("viewDetailsClick",this.viewDetailsClick),this.$bus.$off("passClick",this.passClick),this.$bus.$off("passProduct",this.passProduct),this.$bus.$off("rejectClick",this.rejectClick)},data(){return{listAll:[],listShow:[],pageSize:8,currentPage:1,totalPage:0,isShowCoverPage:!1,viewBoardVisible:!1,x:null,y:null,activeViewItem:{},isShowRightCoverZone:!1,activeRecordIndex:-1,indexInListShow:-1,isLoading:!1,ifShowCancelIcon:!1}},methods:{passClick(e){this.activeRecordIndex=e,this.$refs.inputReasonProvider.word="通过",this.$refs.inputReasonProvider.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},passProduct(e){console.log("product passClick item id : ",e),this.activeRecordId=e},viewDetailsClick(e){const{x:t,y:i,index:o}=e;this.x=t,this.y=i;const s=this.x,r=this.y;this.activeViewItem=this.listShow[o].content;const n=this,l=".details";let a;this.isShowCoverPage=!0,this.ifShowCancelIcon=!0;const c=document.body.clientWidth;let h;a=c<1e3?0:c>1e3&&c<1240?(c-1e3)/2:240+(c-240-1e3)/2;let d=document.body.clientHeight;h=d<680?0:(d-680)/2,$()(l).animate({left:s,top:r},50,(function(){n.viewBoardVisible=!0})),$()(l).animate({left:a,top:h,width:"100px",height:"100px"},100,(function(){n.$refs.roll.refresh(),n.$refs.roll.scrollTo(0,0,0)})),$()(l).animate({width:"1000px",height:"680px"},150)},rejectClick(e){this.activeRecordIndex=e,this.$refs.inputReasonProvider.word="拒绝",this.$refs.inputReasonProvider.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},VMUrlDecode(e){return(0,P.EO)(e)},hideViewDialog(){this.activeViewItem={},this.ifShowCancelIcon=!1;const e=".details",t=this;$()(e).animate({width:"70px",height:"70px"},50),$()(e).animate({left:t.x,top:t.y,width:"0px",height:"0px"},200,(function(){t.isShowCoverPage=!1,t.viewBoardVisible=!1}))},async ensureClick(e){if(""!==e){if(this.$refs.inputReasonProvider.ifShowLoadingGif=!0,console.log(this.$refs.inputReasonProvider.word),"通过"===this.$refs.inputReasonProvider.word){try{const t=await(0,S.Bb)({id:this.activeRecordId,review_comment:e});200==t.Code?this.$toast.success("操作成功a",240):(this.$toast.error("操作失败",240),this.$toast.error(t.Msg,240))}catch(t){this.$toast.error("操作失败",240),this.indexInListShow=-1}this.$refs.inputReasonProvider.ifShowLoadingGif=!1,this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}if("拒绝"===this.$refs.inputReasonProvider.word){try{const t=await(0,S.RL)({id:this.activeRecordId,review_comment:e});console.log(t),200==t.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(t.Msg,240))}catch(t){this.$toast.error("操作失败",240),this.indexInListShow=-1}this.$refs.inputReasonProvider.ifShowLoadingGif=!1,this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}}else this.$toast.error("编辑理由不能为空",240)},async cancelClick(){this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}},watch:{currentPage(e){const t=window.JSON.parse(window.JSON.stringify(this.listAll));this.listShow=t.slice(this.pageSize*(e-1),this.pageSize*e),this.$refs.scroll.scrollTo(0,0,400),setTimeout((()=>{this.$refs.scroll.refresh()}),200)}},components:{Scroll:m.Z,OrderList:C.Z,ReviewCommentDialog:_.Z,EmptyDataPlaceholder:x.Z,ProviderTicketContent:W}};const F=(0,L.Z)(j,[["render",f],["__scopeId","data-v-9d9f850e"]]);var O=F}}]);
//# sourceMappingURL=3586.8500b978.js.map
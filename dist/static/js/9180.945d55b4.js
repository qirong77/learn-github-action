"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[9180],{78541:function(e,t,i){i.r(t),i.d(t,{default:function(){return te}});var s=i(66252),o=i(49963);const l=e=>((0,s.dD)("data-v-661bb94c"),e=e(),(0,s.Cn)(),e),a={id:"feature"},n=l((()=>(0,s._)("div",{class:"tableHeader"},[(0,s._)("p",null,"创建日期"),(0,s._)("p",null,"用户"),(0,s._)("p",null,"身份"),(0,s._)("p",null,"版本"),(0,s._)("p",null,"申请理由"),(0,s._)("p",null,"状态"),(0,s._)("p",null,"审核")],-1))),r=l((()=>(0,s._)("div",{class:"divideLine"},null,-1))),c={class:"paginationZone"},d={class:"absoluteScrollDialogStore"},h={class:"ticketContent"},u={class:"details"},p={class:"right-absolute-flex"},w={key:0,class:"fixedCoverPage"},g={class:"fixedFullLoading"};function m(e,t,i,l,m,v){const f=(0,s.up)("order-list"),C=(0,s.up)("a-pagination"),k=(0,s.up)("empty-data-placeholder"),S=(0,s.up)("Scroll"),$=(0,s.up)("feature-ticket-content"),y=(0,s.up)("review-comment-dialog"),_=(0,s.up)("a-spin"),x=(0,s.up)("a-space");return(0,s.wg)(),(0,s.iD)("div",a,[n,r,(0,s.Wm)(S,{class:"content2","probe-type":3,ref:"scroll"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{list:m.listShow},null,8,["list"]),(0,s.wy)((0,s._)("div",c,[(0,s.Wm)(C,{total:m.listAll.length,"show-total":(e,t)=>`${t[0]}-${t[1]} of ${e} items`,"page-size":m.pageSize,"default-current":1,current:m.currentPage,"onUpdate:current":t[0]||(t[0]=e=>m.currentPage=e)},null,8,["total","show-total","page-size","current"])],512),[[o.F8,0!==m.listShow.length]]),0===m.listShow.length?((0,s.wg)(),(0,s.j4)(k,{key:0,description:"暂无工单数据"})):(0,s.kq)("",!0)])),_:1},512),(0,s._)("div",d,[(0,s._)("div",h,[(0,s.wy)((0,s._)("div",u,[(0,s._)("p",{class:"imageZone",onClick:t[1]||(t[1]=e=>v.hideViewDialog())}),(0,s.Wm)(S,{ref:"roll",class:"content3"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{ticketContent:m.activeViewItem},null,8,["ticketContent"])])),_:1},512)],512),[[o.F8,m.viewBoardVisible]])])]),(0,s.wy)((0,s._)("div",p,[(0,s.Wm)(y,{onCancel:v.cancelClick,onEnsure:v.ensureClick,ref:"inputReasonFeature"},null,8,["onCancel","onEnsure"])],512),[[o.F8,m.isShowRightCoverZone]]),m.isShowCoverPage?((0,s.wg)(),(0,s.iD)("div",w)):(0,s.kq)("",!0),(0,s.wy)((0,s._)("div",g,[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{size:"large"})])),_:1})],512),[[o.F8,m.isLoading]])])}var v=i(467),f=i(13004),C=i(61755),k=i(19755),S=i.n(k),$=i(3577);const y=e=>((0,s.dD)("data-v-c9c3ed6a"),e=e(),(0,s.Cn)(),e),_={class:"boardContent"},x={key:0,class:"module add"},b=y((()=>(0,s._)("p",{class:"moduleName"},"添加",-1))),R={style:{"font-size":"21px","font-weight":"bold",color:"#000"}},I={style:{"font-size":"20px"}},P={style:{"font-size":"20px"}},z=(0,s.Uk)(" 添加缩略图为："),D={alt:"",style:{width:"100px",height:"100px","border-radius":"10px"}},F={key:1,class:"module update"},Z=y((()=>(0,s._)("p",{class:"moduleName"},"更新",-1))),L={style:{"font-size":"21px","font-weight":"bold",color:"#000"}},W={style:{"font-size":"20px"}},A={style:{"font-size":"20px"}},V=(0,s.Uk)(" 修改缩略图为："),j={alt:"",style:{width:"100px",height:"100px","border-radius":"10px"}},q={key:2,class:"module delete"},N=y((()=>(0,s._)("p",{class:"moduleName"},"删除",-1))),U={style:{"font-size":"21px","font-weight":"bold",color:"#000"}},B={style:{"font-size":"20px"}},E={style:{"font-size":"20px"}},O=(0,s.Uk)(" 删除缩略图为："),T={alt:"",style:{width:"100px",height:"100px","border-radius":"10px"}};function G(e,t,i,o,l,a){const n=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",_,[0!==i.ticketContent.add.length?((0,s.wg)(),(0,s.iD)("div",x,[b,(0,s._)("p",R," id="+(0,$.zw)(i.ticketContent.add.id),1),(0,s._)("p",I,"添加特色名为："+(0,$.zw)(i.ticketContent.add.name),1),(0,s._)("p",P,[z,(0,s.wy)((0,s._)("img",D,null,512),[[n,i.ticketContent.add.thumbnail]])])])):(0,s.kq)("",!0),0!==i.ticketContent.update.length?((0,s.wg)(),(0,s.iD)("div",F,[Z,(0,s._)("p",L," id="+(0,$.zw)(i.ticketContent.update.id),1),(0,s._)("p",W," 修改特色名为："+(0,$.zw)(i.ticketContent.update.name),1),(0,s._)("p",A,[V,(0,s.wy)((0,s._)("img",j,null,512),[[n,i.ticketContent.update.thumbnail]])])])):(0,s.kq)("",!0),0!==i.ticketContent.delete.length?((0,s.wg)(),(0,s.iD)("div",q,[N,(0,s._)("p",U," id="+(0,$.zw)(i.ticketContent.delete.id),1),(0,s._)("p",B," 删除特色名为："+(0,$.zw)(i.ticketContent.delete.name),1),(0,s._)("p",E,[O,(0,s.wy)((0,s._)("img",T,null,512),[[n,i.ticketContent.delete.thumbnail]])])])):(0,s.kq)("",!0)])}var M={name:"e-FeatureTicketContent",props:{ticketContent:{type:Object,default(){return{add:[],update:[],delete:[]}}}}},H=i(83744);const J=(0,H.Z)(M,[["render",G],["__scopeId","data-v-c9c3ed6a"]]);var Q=J,K=i(40483),X=i(27623),Y={name:"e-Activity",beforeRouteEnter(e,t,i){"true"===window.localStorage.getItem("isStaff")?(window.localStorage.setItem("currentIndex010003",1),i()):(i({path:"/tools/login"}),window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010003"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"))},data(){return{isLoading:!1,viewBoardVisible:!1,isShowCoverPage:!1,isShowRightCoverZone:!1,listAll:[],listShow:[],activeViewItem:{add:[],update:[],delete:[]},pageSize:8,currentPage:1,totalPage:0}},async mounted(){let e={work_line_id:1300};this.isLoading=!0;try{const t=await(0,C.p0)(e);console.log(t);const{Code:i,msg:s}=t;if(200===i&&"success"===s){console.log(t.details.tickets),this.listAll=t.details.tickets.reverse(),this.totalPage=Math.ceil(this.listAll.length/this.pageSize);const e=window.JSON.parse(window.JSON.stringify(this.listAll));0===this.listShow.length&&(this.listShow=e.slice(0,this.pageSize)),this.currentPage===this.totalPage&&(this.listShow=e.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage))}else this.$toast.error("获取工单数据失败 ",240),console.log("获取工单数据失败 ")}catch(t){this.$toast.error("获取工单数据失败  ",240),console.log("获取工单数据失败 ")}this.isLoading=!1,this.$bus.$on("viewDetailsClick",this.viewDetailsClick),this.$bus.$on("passClick",this.passClick),this.$bus.$on("passProduct",this.passProduct),this.$bus.$on("rejectClick",this.rejectClick)},unmounted(){this.$bus.$off("viewDetailsClick",this.viewDetailsClick),this.$bus.$off("passClick",this.passClick),this.$bus.$off("passProduct",this.passProduct),this.$bus.$off("rejectClick",this.rejectClick)},methods:{passClick(e){this.activeRecordIndex=e,this.$refs.inputReasonFeature.word="通过",this.$refs.inputReasonFeature.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},passProduct(e){console.log("product passClick item id : ",e),this.activeRecordId=e},viewDetailsClick(e){const{x:t,y:i,index:s}=e;this.x=t,this.y=i;const o=this.x,l=this.y;this.activeViewItem=this.listShow[s].content;const a=this,n=".details";let r;this.isShowCoverPage=!0;const c=document.body.clientWidth;let d;r=c<1e3?0:c>1e3&&c<1240?(c-1e3)/2:240+(c-240-1e3)/2;let h=document.body.clientHeight;d=h<680?0:(h-680)/2,S()(n).animate({left:o,top:l},50,(function(){a.viewBoardVisible=!0})),S()(n).animate({left:r,top:d,width:"100px",height:"100px"},100,(function(){a.$refs.roll.refresh(),a.$refs.roll.scrollTo(0,0,0)})),S()(n).animate({width:"1000px",height:"680px"},150)},rejectClick(e){this.activeRecordIndex=e,this.$refs.inputReasonFeature.word="拒绝",this.$refs.inputReasonFeature.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},hideViewDialog(){const e=".details",t=this;S()(e).animate({width:"70px",height:"70px"},50),S()(e).animate({left:t.x,top:t.y,width:"0px",height:"0px"},200,(function(){t.isShowCoverPage=!1}))},cancelClick(){this.isShowCoverPage=!1,this.isShowRightCoverZone=!1},async ensureClick(e){if(""!==e){if(this.$refs.inputReasonFeature.ifShowLoadingGif=!0,console.log(this.$refs.inputReasonFeature.word),"通过"===this.$refs.inputReasonFeature.word){try{console.log("通过id和review comment"),console.log(this.listAll[this.activeRecordIndex].id,e);const t=await(0,C.Bb)({id:this.activeRecordId,review_comment:e});200==t.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(t.Msg,240))}catch(t){this.$toast.error("操作失败",240)}this.$refs.inputReasonFeature.ifShowLoadingGif=!1,this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}if("拒绝"===this.$refs.inputReasonFeature.word){try{console.log("通过id和review comment"),console.log(this.listAll[this.activeRecordIndex].id,e);const t=await(0,C.RL)({id:this.activeRecordId,review_comment:e});200==t.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(t.Msg,240))}catch(t){this.$toast.error("操作失败",240)}this.$refs.inputReasonFeature.ifShowLoadingGif=!1,this.isShowCoverPage=!1,this.isShowRightCoverZone=!1}}else this.$toast.warn("编辑理由不能为空",240)}},components:{Scroll:v.Z,OrderList:f.Z,FeatureTicketContent:Q,ReviewCommentDialog:K.Z,EmptyDataPlaceholder:X.Z}};const ee=(0,H.Z)(Y,[["render",m],["__scopeId","data-v-661bb94c"]]);var te=ee}}]);
//# sourceMappingURL=9180.945d55b4.js.map
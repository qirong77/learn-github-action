"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[6799],{90075:function(e,t,i){i.r(t),i.d(t,{default:function(){return Se}});var s=i(66252),o=i(49963);const a=e=>((0,s.dD)("data-v-4adc1609"),e=e(),(0,s.Cn)(),e),l={id:"comment"},n=a((()=>(0,s._)("div",{class:"tableHeader"},[(0,s._)("p",null,"创建日期"),(0,s._)("p",null,"用户"),(0,s._)("p",null,"身份"),(0,s._)("p",null,"版本"),(0,s._)("p",null,"申请理由"),(0,s._)("p",null,"状态"),(0,s._)("p",null,"审核")],-1))),r=a((()=>(0,s._)("div",{class:"divideLine"},null,-1))),c={class:"paginationZone"},d={class:"right-absolute-flex"},h={class:"absoluteScrollDialogStore"},u={class:"ticketContent",style:{"background-color":"#000",width:"0px",height:"0px","margin-left":"10px","margin-bottom":"3px"}},m={class:"details",style:{width:"0px",height:"0px","background-color":"#fff","box-shadow":"var(--color-text-grey) 0 0 7px",overflow:"hidden",position:"absolute","z-index":"9"}},p={class:"fixedFullLoading"};function w(e,t,i,a,w,v){const g=(0,s.up)("order-list"),C=(0,s.up)("a-pagination"),f=(0,s.up)("empty-data-placeholder"),_=(0,s.up)("Scroll"),b=(0,s.up)("review-comment-dialog"),k=(0,s.up)("comment-ticket-content"),y=(0,s.up)("a-spin"),S=(0,s.up)("a-space");return(0,s.wg)(),(0,s.iD)("div",l,[n,r,(0,s.Wm)(_,{class:"content2","probe-type":3,ref:"scroll"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{list:w.listShow},null,8,["list"]),(0,s.wy)((0,s._)("div",c,[(0,s.Wm)(C,{total:w.listAll.length,"show-total":(e,t)=>`${t[0]}-${t[1]} of ${e} items`,"page-size":w.pageSize,"default-current":1,current:w.currentPage,"onUpdate:current":t[0]||(t[0]=e=>w.currentPage=e)},null,8,["total","show-total","page-size","current"])],512),[[o.F8,0!==w.listShow.length]]),0===w.listShow.length?((0,s.wg)(),(0,s.j4)(f,{key:0,description:"暂无工单数据"})):(0,s.kq)("",!0)])),_:1},512),(0,s.wy)((0,s._)("div",d,[(0,s.Wm)(b,{onCancel:v.cancelClick,onEnsure:v.ensureClick,ref:"inputReasonComment"},null,8,["onCancel","onEnsure"])],512),[[o.F8,w.isShowRightCoverZone]]),(0,s._)("div",h,[(0,s._)("div",u,[(0,s.wy)((0,s._)("div",m,[(0,s._)("p",{class:"imageZone",onClick:t[1]||(t[1]=e=>v.hideViewDialog())}),(0,s.Wm)(_,{ref:"roll",class:"content3"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{ticketContent:e.activeViewItem},null,8,["ticketContent"])])),_:1},512)],512),[[o.F8,w.viewBoardVisible]])])]),(0,s.wy)((0,s._)("div",p,[(0,s.Wm)(S,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,{size:"large"})])),_:1})],512),[[o.F8,w.isLoading]])])}var v=i(467);const g={id:"comment-list"};function C(e,t,i,o,a,l){const n=(0,s.up)("comment-list-item");return(0,s.wg)(),(0,s.iD)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.list,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,class:"list-item"},[(0,s.Wm)(n,{item:e,index:t},null,8,["item","index"])])))),128))])}var f=i(3577);const _=e=>((0,s.dD)("data-v-03d973d6"),e=e(),(0,s.Cn)(),e),b={class:"list-item"},k={class:"comment-content"},y={class:"order-detail"},S={class:"comment-detail"},x={class:"comment-detail"},D={class:"audit-operation"},$={class:"audit-operation"},I=_((()=>(0,s._)("div",{style:{cursor:"default"}},"已通过",-1))),P=[I],z={class:"audit-operation"},R=_((()=>(0,s._)("div",{style:{cursor:"default"}},"已拒绝",-1))),Z=[R];function j(e,t,i,a,l,n){const r=(0,s.up)("order-detail-content");return(0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",k,[(0,s._)("div",y,[(0,s.Wm)(r,{detail:n.orderDetail(i.item.content.order_id),detailShow:l.orderDetailShow},null,8,["detail","detailShow"])]),(0,s._)("div",S,(0,f.zw)(i.item),1),(0,s._)("div",x,[(0,s._)("div",null,(0,f.zw)(i.item.content.text),1),(0,s._)("div",{class:"view-detail",onClick:t[0]||(t[0]=(...e)=>n.viewDetailsClick&&n.viewDetailsClick(...e)),title:"点击查看详情"},(0,f.zw)(i.operationText),1)]),(0,s.wy)((0,s._)("div",D,[(0,s._)("div",{title:"填写通过原因",onClick:t[1]||(t[1]=(...e)=>n.passClick&&n.passClick(...e))},"通过"),(0,s._)("div",{title:"填写拒绝理由",onClick:t[2]||(t[2]=(...e)=>n.rejectClick&&n.rejectClick(...e))},"拒绝")],512),[[o.F8,3200===i.item.status]]),(0,s.wy)((0,s._)("div",$,P,512),[[o.F8,3300===i.item.status]]),(0,s.wy)((0,s._)("div",z,Z,512),[[o.F8,3400===i.item.status]])])])}var A=i(30048);const L=e=>((0,s.dD)("data-v-9a2d2742"),e=e(),(0,s.Cn)(),e),W={class:"top"},F={class:"top-left"},N={class:"top-right"},O={class:"middle"},T={class:"img"},V={alt:"",style:{width:"150px",height:"100px","border-radius":"10px"}},U={class:"middle-right"},B={class:"title"},E={class:"activityDays"},H=L((()=>(0,s._)("div",{class:"bottom"},[(0,s._)("div",{class:"paid"},"实付款:")],-1)));function M(e,t,i,o,a,l){const n=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Uk)((0,f.zw)(l.show(i.detail))+" ",1),(0,s._)("div",W,[(0,s._)("div",F,"订单号:"+(0,f.zw)(a.orderDetail.order_id),1),(0,s._)("div",N," 下单时间:"+(0,f.zw)(l.timeProcess(a.orderDetail.date_created)),1)]),(0,s._)("div",O,[(0,s._)("div",T,[(0,s.wy)((0,s._)("img",V,null,512),[[n,a.orderDetail.horizontal_shows[0].url]])]),(0,s._)("div",U,[(0,s._)("div",B,(0,f.zw)(a.orderDetail.topic)+"}",1),(0,s._)("div",E,(0,f.zw)(l.activityDays(a.orderDetail.activity_start_time,a.orderDetail.activity_end_time)),1)])]),H])}var Y={name:"e-OrderDetailContent",props:{detail:{type:Promise},detailShow:{type:Array}},data(){return{orderDetail:{}}},activated(){},methods:{show(e){e.then((e=>{this.orderDetail=e}))},timeProcess(e){return void 0===e?"":(e=String(e.slice(0,4)+"."+e.slice(5,7)+"."+e.slice(8,10)+" "+e.slice(11,19)),e)},activityDays(e,t){e=String(e.slice(5,7)+"/"+e.slice(8,10)),t=String(t.slice(5,7)+"/"+t.slice(8,10));let i=e+"-"+t;return i}}},J=i(83744);const K=(0,J.Z)(Y,[["render",M],["__scopeId","data-v-9a2d2742"]]);var Q=K,q={name:"e-CommentListItem",props:{item:{type:Object,default(){return{}}},index:{type:Number},operationText:{type:String,default:"查看"}},data(){return{orderDetailShow:[],user_id:-1}},methods:{passClick(){this.$bus.$emit("passClick",this.index)},rejectClick(){this.$bus.$emit("rejectClick",this.index)},async orderDetail(e){const t=await(0,A.ZP)({method:"post",url:"/api/e9b849a515a84327b424af7ccdbf2949/v1_0_0/order/get",data:{id:e},auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"}}),i=await(0,A.ZP)({method:"post",url:"/api/e9b849a515a84327b424af7ccdbf2949/v1_0_0/product/get",data:{id:t.details.product},auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"}});let s=Object.assign(i.details,t.details);return console.log("📕",s),console.log(t.details,"order"),console.log(i.details,"product"),this.user_id=s.user,s},viewDetailsClick(e){const t={x:e.clientX,y:e.clientY,index:this.index,user_id:this.user_id};this.$bus.$emit("viewDetailsClick",t)}},components:{OrderDetailContent:Q}};const X=(0,J.Z)(q,[["render",j],["__scopeId","data-v-03d973d6"]]);var G=X,ee={name:"e-CommentList",props:{list:{type:Array,default(){return[]}}},methods:{},components:{CommentListItem:G,Scroll:v.Z}};const te=(0,J.Z)(ee,[["render",C]]);var ie=te,se=i(40483);const oe=e=>((0,s.dD)("data-v-e80c20bc"),e=e(),(0,s.Cn)(),e),ae={class:"boardContent"},le={class:"module"},ne=oe((()=>(0,s._)("div",{class:"moduleName"},"添加",-1))),re={class:"content100"},ce={class:"content100"},de={class:"content100"},he=(0,s.Uk)(" 评论图片为： "),ue={style:{width:"200px",height:"200px",float:"left"}};function me(e,t,i,o,a,l){const n=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",ae,[(0,s._)("div",le,[ne,(0,s._)("div",re,"评论id为："+(0,f.zw)(i.ticketContent.user_id),1),(0,s._)("div",ce,"评论内容为："+(0,f.zw)(i.ticketContent.text),1),(0,s._)("div",de,[he,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.ticketContent.images,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"commentImg",key:t},[(0,s.wy)((0,s._)("img",ue,null,512),[[n,e.url]])])))),128))])])])}var pe={name:"e-CommentTicketContent",props:{ticketContent:{type:Object,default(){return{}}}},data(){},methods:{}};const we=(0,J.Z)(pe,[["render",me],["__scopeId","data-v-e80c20bc"]]);var ve=we,ge=i(13004),Ce=i(27623),fe=i(61755),_e=i(19755),be=i.n(_e),ke={name:"e-Comment",beforeRouteEnter(e,t,i){"true"===window.localStorage.getItem("isStaff")?(window.localStorage.setItem("currentIndex010003",8),i()):(i({path:"/tools/login"}),window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010003"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"))},data(){return{listAll:[],listShow:[],isShowCoverPage:!1,isShowRightCoverZone:!1,activeRecordIndex:-1,x:null,y:null,viewBoardVisible:!1,pageSize:8,currentPage:1,totalPage:0,isLoading:!1}},unmounted(){this.$bus.$off("viewDetailsClick",this.viewDetailsClick),this.$bus.$off("passClick",this.passClick),this.$bus.$off("passProduct",this.passProduct),this.$bus.$off("rejectClick",this.rejectClick)},async mounted(){let e={work_line_id:1700};this.isLoading=!0;try{const t=await(0,fe.p0)(e);console.log(t);const{Code:i,msg:s}=t;if(200===i&&"success"===s){console.log(t.details.tickets),this.listAll=t.details.tickets.reverse(),this.totalPage=Math.ceil(this.listAll.length/this.pageSize);const e=window.JSON.parse(window.JSON.stringify(this.listAll));0===this.listShow.length&&(this.listShow=e.slice(0,this.pageSize)),this.currentPage===this.totalPage&&(this.listShow=e.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage))}else this.$toast.error("获取工单数据失败 ",240),console.log("获取工单数据失败 ")}catch(t){this.$toast.error("获取工单数据失败  ",240),console.log("获取工单数据失败 ")}this.isLoading=!1,this.$bus.$on("viewDetailsClick",this.viewDetailsClick),this.$bus.$on("passClick",this.passClick),this.$bus.$on("passProduct",this.passProduct),this.$bus.$on("rejectClick",this.rejectClick)},methods:{passClick(e){this.activeRecordIndex=e,this.$refs.inputReasonComment.word="通过",this.$refs.inputReasonComment.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},passProduct(e){console.log("product passClick item id : ",e),this.activeRecordId=e},viewDetailsClick(e){const{x:t,y:i,index:s}=e;this.x=t,this.y=i;const o=this.x,a=this.y;this.activeViewItem=this.listShow[s].content;const l=this,n=".details";let r;this.isShowCoverPage=!0;const c=document.body.clientWidth;let d;r=c<1e3?0:c>1e3&&c<1240?(c-1e3)/2:240+(c-240-1e3)/2;let h=document.body.clientHeight;d=h<680?0:(h-680)/2,be()(n).animate({left:o,top:a},50,(function(){l.viewBoardVisible=!0})),be()(n).animate({left:r,top:d,width:"100px",height:"100px"},100,(function(){l.$refs.roll.refresh(),l.$refs.roll.scrollTo(0,0,0)})),be()(n).animate({width:"1000px",height:"680px"},150)},rejectClick(e){this.activeRecordIndex=e,this.$refs.inputReasonComment.word="拒绝",this.$refs.inputReasonComment.message="",this.isShowRightCoverZone=!0,this.isShowCoverPage=!0},cancelClick(){this.isShowCoverPage=!1,this.isShowRightCoverZone=!1},async ensureClick(e){if(this.isShowCoverPage=!1,this.isShowRightCoverZone=!1,console.log(this.listAll),console.log(this.activeRecordIndex),"通过"===this.$refs.inputReasonComment.word)try{const t=await(0,fe.Bb)({id:this.activeRecordId,review_comment:e});console.log(t),200==t.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(t.Msg,240))}catch(t){this.$toast.error("操作失败",240)}if("拒绝"===this.$refs.inputReasonComment.word)try{const t=await(0,fe.RL)({id:this.activeRecordId,review_comment:e});200==t.Code?(this.$toast.success("操作成功",240),this.$router.go(0)):(this.$toast.error("操作失败",240),this.$toast.error(t.Msg,240))}catch(t){this.$toast.error("操作失败",240)}},hideViewDialog(){const e=".details",t=this;be()(e).animate({width:"70px",height:"70px"},50),be()(e).animate({left:t.x,top:t.y,width:"0px",height:"0px"},200,(function(){t.isShowCoverPage=!1}))}},components:{Scroll:v.Z,CommentList:ie,ReviewCommentDialog:se.Z,CommentTicketContent:ve,OrderList:ge.Z,EmptyDataPlaceholder:Ce.Z}};const ye=(0,J.Z)(ke,[["render",w],["__scopeId","data-v-4adc1609"]]);var Se=ye}}]);
//# sourceMappingURL=6799.562934ea.js.map
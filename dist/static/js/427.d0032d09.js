"use strict";(self["webpackChunkv3"]=self["webpackChunkv3"]||[]).push([[427],{8568:function(e,t,i){i.r(t),i.d(t,{default:function(){return Se}});var s=i(66252),o=i(49963);const a=e=>((0,s.dD)("data-v-2575e26d"),e=e(),(0,s.Cn)(),e),n={id:"feature"},l={class:"buttonZone"},r=a((()=>(0,s._)("p",{class:"simulatedLine"},null,-1))),d=a((()=>(0,s._)("p",{class:"simulatedLine"},null,-1))),c={key:0,class:"right-content-cover-absolute"},h={key:0,class:"right-content-cover-absolute"},u={class:"right-content-cover-absolute"},m={class:"absoluteFullLayout"};function g(e,t,i,a,g,p){const w=(0,s.up)("content-list"),f=(0,s.up)("Scroll"),C=(0,s.up)("add-one"),v=(0,s.up)("edit-one"),L=(0,s.up)("edit-reason-dialog"),b=(0,s.up)("back-top"),y=(0,s.up)("loading");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",l,[(0,s._)("p",{onClick:t[0]||(t[0]=(...e)=>p.showAddOneDialog&&p.showAddOneDialog(...e)),class:"addCategoryBtn"},"添加特色"),r,(0,s._)("p",{class:"submitBtn submit-button",onClick:t[1]||(t[1]=(...e)=>p.showEditReasonDialog&&p.showEditReasonDialog(...e))}," 提交审核 "),d,(0,s._)("p",{class:"giveUpModificationBtn",onClick:t[2]||(t[2]=(...e)=>p.resetListAndOrder&&p.resetListAndOrder(...e))},"清除修改")]),(0,s.Wm)(f,{class:"scroll-content",ref:"scroll",onScroll:p.printPosition,"probe-type":3},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{list:g.liveList,onDeleteCategoryClick:p.deleteCategoryItem,onNewImageUpload:p.newImageUpload,onEmptyNewTitle:p.emptyNewTitleToast,onFindSameTitle:p.findSameTitleToast,onUpdateTitle:p.updateTitle,onTitleNoChange:p.titleNoChange,onShowEditDialog:p.showEditDialog},null,8,["list","onDeleteCategoryClick","onNewImageUpload","onEmptyNewTitle","onFindSameTitle","onUpdateTitle","onTitleNoChange","onShowEditDialog"])])),_:1},8,["onScroll"]),(0,s.Wm)(o.uT,{name:"super"},{default:(0,s.w5)((()=>[g.isShowAddOneDialog?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(C,{list:g.list,onEnsureClick:p.addOneFeatureObj,onCancelClick:p.cancelClickOfAddOne,onEmptyCategoryName:p.emptyCategoryNameToast,onHadSameTitleFromList:p.hadSameTitleFromListToast,onImageUploadSuccess:p.imageUploadSuccessToast,ref:"addone"},null,8,["list","onEnsureClick","onCancelClick","onEmptyCategoryName","onHadSameTitleFromList","onImageUploadSuccess"])])):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(o.uT,{name:"super"},{default:(0,s.w5)((()=>[g.isShowEditOneDialog?((0,s.wg)(),(0,s.iD)("div",h,[(0,s.Wm)(v,{list:g.liveList,editIndex:g.editIndex,editContent:g.editContent,onCancelClick:p.cancelClickofEditOne,onEnsureClick:p.ensureClickofEditOne},null,8,["list","editIndex","editContent","onCancelClick","onEnsureClick"])])):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(o.uT,{name:"super"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",u,[(0,s.Wm)(L,{onEnsureClick:p.deployOrder,onCancelClick:p.cancelClickOfEditReasonDialog,ref:"editReasonDialog"},null,8,["onEnsureClick","onCancelClick"])],512),[[o.F8,g.isShowEditReasonDialog]])])),_:1}),(0,s.wy)((0,s._)("div",m,null,512),[[o.F8,g.isShowCoverPage]]),(0,s.wy)((0,s.Wm)(b,{onClick:p.scrollToTop,title:"返回顶部"},null,8,["onClick"]),[[o.F8,g.ifShowBackTop]]),(0,s.Wm)(y,{isLoading:g.isLoading},null,8,["isLoading"])])}var p=i(467),w=i(3577),f=i(26763);const C=e=>((0,s.dD)("data-v-f637945a"),e=e(),(0,s.Cn)(),e),v={class:"contentList"},L={class:"image"},b=["onClick"],y=C((()=>(0,s._)("div",{class:"error"},[(0,s._)("img",{src:f})],-1))),k=["data-image-id","onChange"],S=(0,s.Uk)("双击进行编辑，以回车结束"),I=["onDblclick"];function _(e,t,i,a,n,l){const r=(0,s.up)("a-popconfirm"),d=(0,s.up)("a-tooltip"),c=(0,s.up)("content-list-item"),h=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.list,((e,i)=>((0,s.wg)(),(0,s.j4)(c,{key:e.id,class:"contentListItem"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)("div",{class:"bigImage",key:e.thumbnail},[(0,s._)("div",L,[(0,s.wy)((0,s._)("img",{alt:"big image of category",onLoad:t[0]||(t[0]=(...e)=>l.imageLoad&&l.imageLoad(...e)),onClick:e=>l.imageClick(i),title:"单击上传图标"},null,40,b),[[h,e.thumbnail]])]),(0,s.Wm)(r,{title:"确认删除？","ok-text":"确认","cancel-text":"取消",onConfirm:e=>l.deleteIconClick(e,i)},{default:(0,s.w5)((()=>[y])),_:2},1032,["onConfirm"]),(0,s.wy)((0,s._)("input",{type:"file",class:"pictureUpload","data-image-id":i,onChange:e=>l.onFileChange(e,i)},null,40,k),[[o.F8,!1]])])),((0,s.wg)(),(0,s.iD)("div",{class:"titleZone",key:e.name},[(0,s.Wm)(d,null,{title:(0,s.w5)((()=>[S])),default:(0,s.w5)((()=>[(0,s._)("div",{class:"title",onDblclick:e=>l.onClickTitle(e,i)},(0,w.zw)(e.name),41,I)])),_:2},1024)]))])),_:2},1024)))),128))])}var D=i(19755),$=i.n(D);const O={class:"contentListItem"};function N(e,t,i,o,a,n){return(0,s.wg)(),(0,s.iD)("div",O,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var T={name:"e-ContentListItem"},E=i(83744);const x=(0,E.Z)(T,[["render",N],["__scopeId","data-v-5aef981c"]]);var F=x,A={name:"e-ContentList",data(){return{isShowBigImageEditButton:!1}},props:{list:{type:Array,default(){return[]}}},methods:{imageLoad(){this.$bus.$emit("itemImageLoad")},deleteIconClick(e,t){this.$emit("deleteCategoryClick",t)},imageClick(e){this.$emit("showEditDialog",e)},thumbClick(e){const t=`'${e.toString()}'`,i=document.querySelector(`input[data-thumb-id=${t}]`);i.click()},async onFileChange(e,t){let i=e.target.files||e.dataTransfer.files;if(!i.length)return;const s=await this.$print.getPrintedFile(i[0]);if(i=[s],!/image\/\w+/.test(i[0].type)){this.$toast.error("文件格式不符要求",240);const e=document.querySelectorAll(".pictureUpload");return void(e.value="")}const o=e.target.getAttribute("class"),a=new FormData;a.append("image",i[0]);const n={className:o,index:t,formData:a};this.$emit("newImageUpload",n)},onClickTitle(e,t){const i=this,s=$()(e.target),o=s.text(),a=1*s.width(),n=.9*s.height(),l=$()("<input type='text' style='width:"+a+"px;height:"+n+"px;background-color:var(--color-background-grey);border:1px solid var(--color-background-light-green);border-radius:30px;outline:none;'/>");s.html(l),l.trigger("focus"),l.val(o),l.blur((function(){const e=$()(this).val();if(""===e)s.html(o),i.$emit("emptyNewTitle");else if(e===o)s.html(o),i.$emit("titleNoChange");else{const a=i.list.find((t=>t.name===e));if(a)return i.$emit("findSameTitle"),void s.html(o);s.html(e);const n={index:t,newText:e};i.$emit("updateTitle",n)}})),l.keydown((e=>{13===e.keyCode&&l.blur()}))}},components:{ContentListItem:F}};const U=(0,E.Z)(A,[["render",_],["__scopeId","data-v-f637945a"]]);var P=U,R=i(5050),J=i(18470);const W=e=>((0,s.dD)("data-v-09a96d12"),e=e(),(0,s.Cn)(),e),Z={id:"addOneWrapper"},B={id:"addOne"},q={class:"flexLayout"},j=W((()=>(0,s._)("p",{class:"label"},[(0,s._)("label",{for:"categoryName"},"活动特色名称：")],-1))),M={class:"flexLayout",style:{"margin-top":"30px"}},H={class:"label"},V=(0,s.Uk)("上传图标："),z=W((()=>(0,s._)("img",{src:J,id:"thumb"},null,-1))),Q=[z],Y={class:"buttonZone"};function K(e,t,i,a,n,l){return(0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",B,[(0,s._)("p",{class:"cancel",onClick:t[0]||(t[0]=(...e)=>l.cancelClick&&l.cancelClick(...e))}),(0,s._)("div",q,[j,(0,s._)("p",null,[(0,s.wy)((0,s._)("input",{type:"text",id:"categoryName","onUpdate:modelValue":t[1]||(t[1]=e=>n.categoryName=e),ref:"autoFocusInput"},null,512),[[o.nr,n.categoryName]])])]),(0,s._)("div",M,[(0,s._)("p",H,[(0,s._)("label",null,[V,(0,s._)("input",{type:"file",id:"thumbFileInput",onChange:t[2]||(t[2]=(...e)=>l.onFileChange&&l.onFileChange(...e)),accept:"image/*"},null,32)])]),(0,s._)("div",{class:"thumbP",onClick:t[3]||(t[3]=(...e)=>l.thumbClick&&l.thumbClick(...e))},Q)]),(0,s._)("p",Y,[(0,s._)("button",{class:"cancel other-button",onClick:t[4]||(t[4]=(...e)=>l.cancelClick&&l.cancelClick(...e))},"取消"),(0,s._)("button",{class:"ensure other-button",onClick:t[5]||(t[5]=(...e)=>l.ensureClick&&l.ensureClick(...e))},"确认")])])])}var G=i(75813),X={name:"e-AddOne",props:{list:{type:Array,default(){return[]}}},data(){return{categoryName:"",thumbImage:null,tempThumbValue:null}},mounted(){this.$nextTick((()=>{this.$refs.autoFocusInput.focus()}))},methods:{cancelClick(){this.$emit("cancelClick")},ensureClick(){if(!this.categoryName||!this.thumbImage)return void this.$toast.warn("请完善表单",240);const e={id:+new Date,name:this.categoryName,date_created:new Date,thumbnail:this.thumbImage};this.$emit("ensureClick",e)},thumbClick(){if(""===this.categoryName)return void this.$emit("emptyCategoryName");const e=this.list.find((e=>e.name===this.categoryName));if(e)return void this.$emit("hadSameTitleFromList");const t=document.querySelector("#thumbFileInput");t.click()},async onFileChange(e){if(""===this.categoryName)return void this.$emit("emptyCategoryName");let t=e.target.files||e.dataTransfer.files;if(!t.length)return;const i=await this.$print.getPrintedFile(t[0]);if(t=[i],!/image\/\w+/.test(t[0].type)){this.$toast.error("本次上传文件不是图片",240,220);const e=document.getElementById(inputId);return void(e.value="")}const s=new FormData;s.append("image",t[0]);const o=await(0,G.C)(s),{details:a}=o,{image_url:n}=a;if(n){this.thumbImage=n;const e=document.querySelector("#thumb");e.setAttribute("src",""),e.style.width="100px",e.style.height="100px",e.setAttribute("src",n),this.$emit("imageUploadSuccess")}else alert("图片上传失败")}}};const ee=(0,E.Z)(X,[["render",K],["__scopeId","data-v-09a96d12"]]);var te=ee;const ie=e=>((0,s.dD)("data-v-38bd2d56"),e=e(),(0,s.Cn)(),e),se={id:"editOneWrapper"},oe={id:"editOne"},ae={class:"flexLayout"},ne=ie((()=>(0,s._)("p",{class:"label"},[(0,s._)("label",{for:"categoryName"},"活动特色名称：")],-1))),le={class:"flexLayout",style:{"margin-top":"30px"}},re={class:"label"},de=(0,s.Uk)("上传图标："),ce={id:"thumb"},he={class:"buttonZone"};function ue(e,t,i,a,n,l){const r=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",se,[(0,s._)("div",oe,[(0,s._)("p",{class:"cancel",onClick:t[0]||(t[0]=(...e)=>l.cancelClick&&l.cancelClick(...e))}),(0,s._)("div",ae,[ne,(0,s._)("p",null,[(0,s.wy)((0,s._)("input",{type:"text",id:"categoryName","onUpdate:modelValue":t[1]||(t[1]=e=>n.categoryName=e),ref:"autoFocusInput"},null,512),[[o.nr,n.categoryName]])])]),(0,s._)("div",le,[(0,s._)("p",re,[(0,s._)("label",null,[de,(0,s._)("input",{type:"file",id:"thumbFileInput",onChange:t[2]||(t[2]=(...e)=>l.onFileChange&&l.onFileChange(...e)),accept:"image/*"},null,32)])]),(0,s._)("div",{class:"thumbP",onClick:t[3]||(t[3]=(...e)=>l.thumbClick&&l.thumbClick(...e))},[(0,s.wy)((0,s._)("img",ce,null,512),[[r,i.editContent.thumbnail]])])]),(0,s._)("p",he,[(0,s._)("button",{class:"cancel other-button",onClick:t[4]||(t[4]=(...e)=>l.cancelClick&&l.cancelClick(...e))},"取消"),(0,s._)("button",{class:"ensure other-button",onClick:t[5]||(t[5]=(...e)=>l.ensureClick&&l.ensureClick(...e))},"确认")])])])}var me={name:"e-EditOne",props:{list:{type:Array,default(){return[]}},editIndex:{type:Number,default(){return 0}},editContent:{type:Object,default(){return{}}}},data(){return{categoryName:this.editContent.name,thumbImage:this.editContent.thumbnail}},methods:{cancelClick(){this.$emit("cancelClick")},thumbClick(){const e=document.querySelector("#thumbFileInput");e.click()},async onFileChange(e){let t=e.target.files||e.dataTransfer.files;if(!t.length)return;const i=await this.$print.getPrintedFile(t[0]);if(t=[i],!/image\/\w+/.test(t[0].type)){this.$toast.error("本次上传文件不是图片",240,220);const e=document.getElementById(inputId);return void(e.value="")}const s=new FormData;s.append("image",t[0]);const o=await(0,G.C)(s),{details:a}=o,{image_url:n}=a;if(n){this.thumbImage=n;const e=document.querySelector("#thumb");e.setAttribute("src",""),e.style.width="100px",e.style.height="100px",e.setAttribute("src",n),this.$emit("imageUploadSuccess")}else alert("图片上传失败")},ensureClick(){if(!this.categoryName||!this.thumbImage)return void this.$toast.warn("请完善表单",240);const e={id:+new Date,name:this.categoryName,date_created:new Date,thumbnail:this.thumbImage};this.$emit("ensureClick",e),console.log(e)}}};const ge=(0,E.Z)(me,[["render",ue],["__scopeId","data-v-38bd2d56"]]);var pe=ge,we=i(85534),fe=i(6819),Ce=i(2886),ve=i(92058),Le=i(30048);function be(e){return(0,Le.ZP)({method:"post",url:"/api/e9b849a515a84327b424af7ccdbf2949/v1_0_0/feature/all",data:e,auth:{username:"NginxAuthUsername16381efa069a90cbde99854c81183036a4bd2e4776eb770fa69740f1c5c06aa4",password:"NginxAuthPassworde0588e3b3c5b240fe3f5fb653d2990f34b52ee0b595acf6553a924b0716cb366"},headers:{"Content-Type":"application/json"}})}var ye={name:"e-Feature",beforeRouteEnter(e,t,i){"true"===window.localStorage.getItem("isStaff")?(window.localStorage.setItem("currentIndex010001",1),i()):(i({path:"/tools/login"}),window.localStorage.removeItem("list"),window.localStorage.removeItem("order"),window.localStorage.removeItem("currentIndex010001"),window.localStorage.removeItem("userID"),window.localStorage.removeItem("username"),window.localStorage.removeItem("authToken"),window.localStorage.removeItem("isStaff"),window.localStorage.removeItem("isSuperUser"),window.localStorage.removeItem("isProvider"))},async activated(){const e=await be();if(200===e.Code&&"success"===e.msg){const t=(0,R.te)(e.details,window.JSON.parse(window.JSON.stringify(this.originalList)));if(console.log(t),t)return;this.originalList=e.details,this.liveList=window.JSON.parse(window.JSON.stringify(this.originalList))}else this.$toast.error("获取列表失败",240);window.addEventListener("beforeunload",this.beforeUnloadHandler,!1)},mounted(){this.$refs.scroll&&(this.debounceRefresh=(0,R.Ds)(this.$refs.scroll.refresh,500)),this.$bus.$on("itemImageLoad",(()=>{this.debounceRefresh()}))},deactivated(){this.$bus.$off("itemImageLoad")},beforeRouteLeave(e,t,i){this.editMark?confirm("您有修改未提交，确认离开？")?(this.liveList=window.JSON.parse(window.JSON.stringify(this.originalList)),0!==this.orderList.add.length&&this.orderList.add.splice(0,this.orderList.add.length),0!==this.orderList.update.length&&this.orderList.add.splice(0,this.orderList.update.length),0!==this.orderList.delete.length&&this.orderList.add.splice(0,this.orderList.delete.length),i()):(window.localStorage.setItem("currentIndex010001",1),this.$bus.$emit("setCurrentIndex010001To1"),i(!1)):(this.liveList=window.JSON.parse(window.JSON.stringify(this.originalList)),0!==this.orderList.add.length&&this.orderList.add.splice(0,this.orderList.add.length),0!==this.orderList.update.length&&this.orderList.add.splice(0,this.orderList.update.length),0!==this.orderList.delete.length&&this.orderList.add.splice(0,this.orderList.delete.length),i())},data(){return{isLoading:!1,debounceRefresh:null,isShowAddOneDialog:!1,isShowEditOneDialog:!1,isShowCoverPage:!1,activeEditID:-1,isShowEditReasonDialog:!1,ifShowBackTop:!1,list:[],originalList:[],liveList:[],orderList:{add:[],update:[],delete:[]},editMark:!1,editIndex:0,editContent:[]}},methods:{deleteCategoryItem(e){const t=window.JSON.parse(window.JSON.stringify(this.liveList[e]));this.liveList.splice(e,1);const i=this.originalList.find((e=>e.id===t.id));if(i){this.orderList.delete.push(i);const e=this.orderList.update.find((e=>e.id===t.id));if(e){const t=this.orderList.add.indexOf(e);this.orderList.update.splice(t,1)}}else{const e=this.orderList.add.find((e=>e.id===t.id));if(e){const t=this.orderList.add.indexOf(e);this.orderList.add.splice(t,1)}}},showAddOneDialog(){this.isShowCoverPage=!0,this.isShowAddOneDialog=!0},showEditDialog(e){this.isShowCoverPage=!0,this.isShowEditOneDialog=!0,this.editIndex=e,this.editContent=this.liveList[e]},addOneFeatureObj(e){this.isShowAddOneDialog=!1,this.isShowCoverPage=!1;const{name:t}=e,i=this.liveList.find((e=>e.name===t));i?this.$toast.warn("该类别已存在",240):(this.liveList.push(e),this.$refs.scroll.refresh(),setTimeout((()=>{this.$refs.scroll.scrollTo(0,this.$refs.scroll.scroll.maxScrollY,500)}),1e3),this.orderList.add.push(e),this.isShowEditReasonDialog=!0,this.isShowCoverPage=!0)},ensureClickofEditOne(e){this.isShowEditOneDialog=!1,this.isShowCoverPage=!1,this.orderList.update.push(e),this.isShowEditReasonDialog=!0,this.isShowCoverPage=!0},cancelClickOfAddOne(){this.isShowAddOneDialog=!1,this.isShowCoverPage=!1},emptyCategoryNameToast(){this.$toast.error("请先填写类别名",240)},hadSameTitleFromListToast(){this.$toast.error("该类别名已存在",240)},imageUploadSuccessToast(){this.$toast.success("上传成功",240)},async newImageUpload(e){const{index:t,formData:i}=e,s=await(0,G.C)(i);if(200===s.Code&&"success"===s.msg){this.$toast.success("上传成功",240);const{details:e}=s,{image_url:i}=e;this.$set(this.liveList[t],"thumbnail",i),this.activeEditID=this.liveList[t].id;const o=this.orderList.add.find((e=>e.id===this.activeEditID));if(o)o.thumbnail=i;else{const e=this.orderList.update.find((e=>e.id===this.activeEditID));if(e)e.thumbnail=i;else{const e={id:this.activeEditID,thumbnail:i};this.orderList.update.push(e)}}this.activeEditID=-1}else alert("更新失败")},emptyNewTitleToast(){this.$toast.warn("类别名不能为空",240)},findSameTitleToast(){this.$toast.warn("该类别名已存在",240)},updateTitle(e){const{index:t,newText:i}=e;this.activeEditID=this.liveList[t].id,this.$set(this.liveList[t],"name",i);const s=this.orderList.add.find((e=>e.id===this.activeEditID));if(s)this.$toast.success("修改成功",240),s.name=i;else{const e=this.orderList.update.find((e=>e.id===this.activeEditID));if(e)if(e.name){const t=this.originalList.find((e=>e.id===this.activeEditID));if(t.name===i)if(this.$toast.warn("本次修改后与原类别名称一致",240,280),2===Object.keys(e).length){const t=this.orderList.update.indexOf(e);this.orderList.update.splice(t,1)}else delete e.name;else this.$toast.success("修改成功",240),e.name=i}else this.$toast.success("修改成功",240),e.name=i;else{this.$toast.success("修改成功",240);const e={id:this.activeEditID,name:i};this.orderList.update.push(e)}}this.activeEditID=-1},titleNoChange(){this.$toast.warn("未检查到更改",240)},showEditReasonDialog(){this.isShowEditReasonDialog=!0,this.isShowCoverPage=!0},async deployOrder(){console.log(this.orderList.update.length,"order");const{message:e}=this.$refs.editReasonDialog;if(!e)return void this.$toast.warn("请填写编辑理由",240);if(0===this.orderList.add.length&&0===this.orderList.update.length&&0===this.orderList.delete.length)return void this.$toast.warn("未有有效编辑",240);if(0!=this.orderList.update.length)var t={user:{id:Number(window.localStorage.getItem("userID"))},version:"1.0.0",create_reason:e,work_line_id:1300,work_operation:4300,content:{id:this.orderList.update[0].id,name:this.orderList.update[0].name,thumbnail:this.orderList.update[0].thumbnail}};if(0!=this.orderList.add.length)t={user:{id:Number(window.localStorage.getItem("userID"))},version:"1.0.0",create_reason:e,work_line_id:1300,work_operation:4200,content:window.JSON.parse(window.JSON.stringify(this.orderList.add))};if(0!=this.orderList.delete.length)t={user:{id:Number(window.localStorage.getItem("userID"))},version:"1.0.0",create_reason:e,work_line_id:1300,work_operation:4900,content:window.JSON.parse(window.JSON.stringify(this.orderList.delete[0]))};console.log(t,"ro");const i=await(0,we.U)(t);if(this.isShowEditReasonDialog=!1,i){const{Code:e,msg:t}=i;200===e&&"success"===t?(this.$toast.success("提交成功，请等待审核",240,200,1e3),this.isShowCoverPage=!1,this.isShowEditReasonDialog=!1,this.orderList={add:[],update:[],delete:[]},window.localStorage.setItem("order",window.JSON.stringify(this.order)),this.list=window.JSON.parse(window.JSON.stringify(this.originalList)),window.localStorage.setItem("list",window.JSON.stringify(this.list)),setTimeout((()=>{this.$toast.success("页面回退到修改前",240)}),1e3),this.$refs.scroll.scrollTo(0,0,300)):this.$toast.error("提交出错，请稍后再试",240)}else alert("提交失败")},cancelClickOfEditReasonDialog(){this.isShowEditReasonDialog=!1,this.isShowCoverPage=!1},cancelClickofEditOne(){this.isShowEditOneDialog=!1,this.isShowCoverPage=!1},resetListAndOrder(){0!==this.orderList.add.length||0!==this.orderList.update.length||0!==this.orderList.delete.length?(this.orderList.add.splice(0,this.orderList.add.length),this.orderList.update.splice(0,this.orderList.update.length),this.orderList.delete.splice(0,this.orderList.delete.length),this.liveList.splice(0,this.liveList.length),this.liveList=window.JSON.parse(window.JSON.stringify(this.originalList)),setTimeout((()=>{this.$toast.success("页面回退到修改前",240)}),100)):this.$toast.warn("当前没有修改",240)},scrollToTop(){this.$refs.scroll.scrollTo(0,0,500)},printPosition(e){this.ifShowBackTop=-e.y>400},beforeUnloadHandler(e){this.editMark&&(e.returnValue="离开此页面？")}},computed:{getAccount(){return window.localStorage.getItem("name")}},watch:{orderList:{handler(e){0!==e.add.length||0!==e.update.length||0!==e.delete.length?this.editMark=!0:this.editMark=!1},deep:!0}},components:{Scroll:p.Z,ContentList:P,AddOne:te,EditReasonDialog:fe.Z,BackTop:Ce.Z,Loading:ve.Z,EditOne:pe}};const ke=(0,E.Z)(ye,[["render",g],["__scopeId","data-v-2575e26d"]]);var Se=ke}}]);
//# sourceMappingURL=427.d0032d09.js.map
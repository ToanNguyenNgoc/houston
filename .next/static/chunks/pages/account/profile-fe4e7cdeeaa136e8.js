(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{97971:function(a,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/profile",function(){return l(16822)}])},37079:function(a,e,l){"use strict";l.d(e,{D:function(){return o},z:function(){return t}});var i=l(67294);function o(){let[a,e]=(0,i.useState)({load:!1,message:"",openAlert:!1,color:"info"}),l=()=>e({...a,load:!0}),o=a=>{var l;e({load:!1,message:null!==(l=a.message)&&void 0!==l?l:"",openAlert:!0,element:a.element,color:a.color})},n=()=>e({...a,openAlert:!1});return{noti:a,firstLoad:l,resultLoad:o,onCloseNoti:n}}var n=l(71697);function t(){let[a,e]=(0,i.useState)([]),l=async a=>{let{e:l,callBack:i}=a;if(l.target.files)try{var o;let a=[];for(var t=0;t<(null===(o=l.target.files)||void 0===o?void 0:o.length);t++){let e=l.target.files[t],i=new FormData,o={original_url:"",mediaId:t};i.append("file",e);let r=await n.h.uploadMedia(i);r&&(o={original_url:r.data.original_url,mediaId:r.data.id}),a.push(o)}e(a),i&&i(a)}catch(a){}};return{medias:a,handlePostMedia:l}}},29684:function(a,e,l){"use strict";l.r(e),l.d(e,{PageHeaderAccount:function(){return p}});var i=l(85893),o=l(63669),n=l(14833),t=l(71697),r=l(26394),c=l.n(r),s=l(59403),_=l(89583),d=l(30381),m=l.n(d),u=l(41664),v=l.n(u),h=l(64074),g=l(8987),x=l(11163);let p=a=>{let{title:e}=a,l=(0,x.useRouter)();return(0,i.jsxs)("div",{className:c().account_page_title,children:[(0,i.jsx)("button",{onClick:()=>l.back(),className:c().account_page_title_btn,children:(0,i.jsx)(_._HU,{size:26,color:"var(--primary)"})}),(0,i.jsx)("span",{children:e})]})},f=()=>{var a,e,l,n,r,d;let{data:u,fetchNextPage:x,isLoading:f,isFetchingNextPage:b}=(0,s.N)({queryKey:["BOOKINGS"],queryFn:a=>{let{pageParam:e=1}=a;return t.h.bookings({page:e,limit:10,includes:"full_address|villa_media"})},getNextPageParam:a=>a.current_page+1}),j=null!==(l=null===(a=null==u?void 0:u.pages[0])||void 0===a?void 0:a.total)&&void 0!==l?l:0,N=null!==(n=null==u?void 0:null===(e=u.pages)||void 0===e?void 0:e.map(a=>a.data).flat())&&void 0!==n?n:[];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.pQ,{title:"Lịch sử đặt ph\xf2ng",description:"",url:""}),(0,i.jsx)(p,{title:"Lịch sử đặt ph\xf2ng"}),(0,i.jsxs)("div",{className:c().account_page_body,children:[(0,i.jsx)("ul",{className:c().booking_list,children:N.map(a=>{var e,l,n,t,s,u,g,x,p,f,b,j;return(0,i.jsx)("li",{className:c().booking_list_item,children:(0,i.jsxs)(v(),{href:"/account/bookings/".concat(null!==(r=null===(e=a.payment_gateway)||void 0===e?void 0:e.txn_ref)&&void 0!==r?r:a.id),className:c().booking_item,children:[(0,i.jsx)("div",{className:c().booking_item_img,children:(0,i.jsx)("img",{src:null===(l=a.villa)||void 0===l?void 0:null===(n=l.thumbnail)||void 0===n?void 0:n.original_url,alt:""})}),(0,i.jsxs)("div",{className:c().booking_item_detail,children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:c().booking_item_detail_head_create,children:["ng\xe0y đặt: ",m()(a.created_at).format("HH:mm DD [thg] MM, YYYY")]}),(0,i.jsxs)("div",{className:c().booking_item_status_cnt,children:[(0,i.jsx)(o.gn,{status:a.status_booking}),(0,i.jsx)(o.gn,{status:null!==(d=null===(t=a.payment_gateway)||void 0===t?void 0:t.status)&&void 0!==d?d:"",statusType:"PAYMENT"})]}),(0,i.jsx)("div",{className:c().booking_item_detail_head,children:(0,i.jsx)("span",{children:null===(s=a.villa)||void 0===s?void 0:s.name})}),(0,i.jsxs)("span",{className:c().booking_item_detail_address,children:[(0,i.jsx)(_.Nh4,{color:"var(--primary)",size:12}),null===(u=a.branch)||void 0===u?void 0:u.address,",",null===(g=a.branch)||void 0===g?void 0:null===(x=g.ward)||void 0===x?void 0:x.name,",",null===(p=a.branch)||void 0===p?void 0:null===(f=p.district)||void 0===f?void 0:f.name,",",null===(b=a.branch)||void 0===b?void 0:null===(j=b.province)||void 0===j?void 0:j.name]}),(0,i.jsxs)("div",{className:c().range_date,children:[(0,i.jsxs)("div",{className:c().range_date_item,children:[(0,i.jsx)("p",{children:"Nhận ph\xf2ng"}),(0,i.jsx)("p",{children:m()(a.from_date_booking).format("DD [thg] MM, YYYY")})]}),(0,i.jsxs)("div",{className:c().range_date_item,children:[(0,i.jsx)("p",{children:"Trả ph\xf2ng"}),(0,i.jsx)("p",{children:m()(a.to_date_booking).format("DD [thg] MM, YYYY")})]})]})]}),(0,i.jsxs)("div",{className:c().booking_item_detail_amount,children:[(0,i.jsx)("span",{children:"Tổng cộng"}),(0,i.jsxs)("span",{children:[(0,h.BX)(a.amount)," / (",a.nights," đ\xeam)"]})]})]})]})},a.id)})}),(0,i.jsx)("div",{className:c().account_page_bot,children:N.length<j&&(0,i.jsx)(g.Z,{loading:b,onClick:()=>x(),style:{color:"var(--primary)"},children:"Xem th\xeam"})})]})]})};f.Layout=n.p0,e.default=f},16822:function(a,e,l){"use strict";l.r(e);var i=l(85893),o=l(63669),n=l(14833),t=l(29684),r=l(71697),c=l(66838),s=l(26394),_=l.n(s),d=l(8987),m=l(72890),u=l(50480),v=l(77781),h=l(68276),g=l(48228),x=l(67294),p=l(87536),f=l(30381),b=l.n(f),j=l(74231),N=l(64074),w=l(47533),k=l(37079);let y=j.Ry({fullname:j.Z_().required("Vui l\xf2ng nhập họ v\xe0 t\xean"),telephone:j.Z_().required("Vui l\xf2ng nhập số điện thoại").matches(N.Gu.phoneVn,{message:"Vui l\xf2ng nhập đ\xfang ddijng dạng"}),full_address:j.Z_().required("Vui l\xf2ng nhập địa chỉ")}),Y=()=>{let[a]=(0,c.O)(a=>[a.isLoading]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.pQ,{title:"T\xe0i khoản của t\xf4i",description:"",url:""}),(0,i.jsx)(t.PageHeaderAccount,{title:"T\xe0i khoản của t\xf4i"}),(0,i.jsx)("div",{className:_().account_page_body,children:!a&&(0,i.jsx)(D,{})})]})};Y.Layout=n.p0,e.default=Y;let D=()=>{var a,e,l,n;let[t,s]=(0,c.O)(a=>[a.profile,a.putProfile]),{resultLoad:f,noti:{openAlert:j,message:N,color:Y},onCloseNoti:D}=(0,k.D)(),{handlePostMedia:C}=(0,k.z)(),[M,P]=(0,x.useState)(null==t?void 0:t.sex),[Z,E]=(0,x.useState)((null==t?void 0:t.dob)?new Date(t.dob):new Date),{register:F,handleSubmit:T,formState:{errors:A}}=(0,p.cI)({resolver:(0,w.X)(y),defaultValues:{fullname:null==t?void 0:t.fullname,email:null==t?void 0:t.email,telephone:null==t?void 0:t.telephone,ccid:null==t?void 0:t.ccid,full_address:null==t?void 0:t.full_address}}),{mutate:L,isLoading:S}=(0,g.D)({mutationKey:["PUT_PROFILE"],mutationFn:a=>r.h.putProfile(a),onSuccess:a=>{s(a.data),f({message:"Đ\xe3 thay đổi th\xf4ng tin c\xe1 nh\xe2n",color:"success"})},onError:()=>{f({color:"error",message:"C\xf3 lỗi xảy ra"})}}),I=a=>{L({...a,telephone:a.telephone!==(null==t?void 0:t.telephone)?a.telephone:void 0,sex:M,dob:b()(Z).format("YYYY-MM-DD")})},q=async a=>{C({e:a,callBack:a=>{L({media_id:a[0].mediaId})}})},H=a=>{let e=!1;"true"===a.target.value&&(e=!0),P(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Ct,{open:j,message:N,severity:Y,close:D}),(0,i.jsxs)("form",{onSubmit:T(I),children:[(0,i.jsxs)("div",{className:"".concat(_().acc_form_row," ").concat(_().row_avatar),children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Avatar"}),(0,i.jsxs)("div",{className:_().form_avatar,children:[(0,i.jsx)("img",{src:null==t?void 0:null===(a=t.avatar)||void 0===a?void 0:a.original_url,alt:""}),(0,i.jsx)(o.Zy,{onChange:q,className:_().form_avatar_btn,iconColor:"var(--white)"})]})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Họ & t\xean"}),(0,i.jsxs)("div",{className:_().acc_form_row_ip,children:[(0,i.jsx)("input",{...F("fullname"),type:"text",className:"app-input"}),(0,i.jsx)("span",{className:_().acc_form_row_ip_error,children:null==A?void 0:null===(e=A.fullname)||void 0===e?void 0:e.message})]})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Email"}),(0,i.jsx)("div",{className:_().acc_form_row_ip,children:(0,i.jsx)("input",{...F("email"),disabled:!0,type:"text",className:"app-input"})})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Số điện thoại"}),(0,i.jsxs)("div",{className:_().acc_form_row_ip,children:[(0,i.jsx)("input",{...F("telephone"),type:"text",className:"app-input"}),(0,i.jsx)("span",{className:_().acc_form_row_ip_error,children:null==A?void 0:null===(l=A.telephone)||void 0===l?void 0:l.message})]})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"M\xe3 CCCD"}),(0,i.jsx)("div",{className:_().acc_form_row_ip,children:(0,i.jsx)("input",{...F("ccid"),type:"text",className:"app-input"})})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Địa chỉ"}),(0,i.jsxs)("div",{className:_().acc_form_row_ip,children:[(0,i.jsx)("input",{...F("full_address"),type:"text",className:"app-input"}),(0,i.jsx)("span",{className:_().acc_form_row_ip_error,children:null==A?void 0:null===(n=A.full_address)||void 0===n?void 0:n.message})]})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Giới t\xednh"}),(0,i.jsx)("div",{className:_().acc_form_row_ip,children:(0,i.jsxs)(m.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",onChange:H,value:M,children:[(0,i.jsx)(u.Z,{value:!0,control:(0,i.jsx)(v.Z,{style:{color:"var(--primary)"}}),label:"Nam"}),(0,i.jsx)(u.Z,{value:!1,control:(0,i.jsx)(v.Z,{style:{color:"var(--primary)"}}),label:"Nữ"})]})})]}),(0,i.jsxs)("div",{className:_().acc_form_row,children:[(0,i.jsx)("label",{className:_().acc_form_row_label,children:"Ng\xe0y sinh"}),(0,i.jsx)("div",{className:_().acc_form_row_ip,children:(0,i.jsx)(h.M,{value:Z,disableFuture:!0,onChange:a=>E(a)})})]}),(0,i.jsx)("div",{className:_().acc_form_bot,children:(0,i.jsx)(d.Z,{style:{backgroundColor:"var(--primary)"},variant:"contained",size:"large",type:"submit",loading:S,children:"Lưu thay đổi"})})]})]})}},26394:function(a){a.exports={account_page_title:"account_account_page_title__cFga2",account_page_body:"account_account_page_body__Fsv84",acc_form_row:"account_acc_form_row__lIrx_",acc_form_row_label:"account_acc_form_row_label__vcEod",acc_form_row_ip:"account_acc_form_row_ip__qR_vq",acc_form_row_ip_error:"account_acc_form_row_ip_error__XacFg",acc_form_bot:"account_acc_form_bot__M4cAl",row_avatar:"account_row_avatar__ge_Na",form_avatar:"account_form_avatar__tTEgY",form_avatar_btn:"account_form_avatar_btn__qwwkH",booking_item:"account_booking_item__oALVH",booking_item_detail:"account_booking_item_detail__reDxw",booking_item_detail_head:"account_booking_item_detail_head__Dc_An",booking_item_detail_amount:"account_booking_item_detail_amount__hPeZT",booking_item_img:"account_booking_item_img__hSbjz",booking_item_detail_head_create:"account_booking_item_detail_head_create__0_9rt",booking_item_status_cnt:"account_booking_item_status_cnt__e_XaL",booking_item_detail_address:"account_booking_item_detail_address__kKbUr",range_date:"account_range_date__C1LDC",range_date_item:"account_range_date_item__jRXps",account_page_bot:"account_account_page_bot__NIbYI",booking_list_item:"account_booking_list_item__QiWar"}}},function(a){a.O(0,[885,828,466,880,641,774,888,179],function(){return a(a.s=97971)}),_N_E=a.O()}]);
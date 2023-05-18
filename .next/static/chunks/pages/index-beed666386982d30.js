(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{83321:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var n=a(63366),i=a(87462),o=a(67294),r=a(86010),l=a(47925),c=a(94780),s=a(41796),d=a(90948),_=a(71657),m=a(49990),h=a(98216),u=a(1588),v=a(34867);function p(e){return(0,v.Z)("MuiButton",e)}let x=(0,u.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=o.createContext({});var g=a(85893);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],w=e=>{let{color:t,disableElevation:a,fullWidth:n,size:o,variant:r,classes:l}=e,s={root:["root",r,`${r}${(0,h.Z)(t)}`,`size${(0,h.Z)(o)}`,`${r}Size${(0,h.Z)(o)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(o)}`]},d=(0,c.Z)(s,p,l);return(0,i.Z)({},l,d)},f=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(m.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,h.Z)(a.color)}`],t[`size${(0,h.Z)(a.size)}`],t[`${a.variant}Size${(0,h.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var a,n;let o="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,i.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,s.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(n=e.palette).getContrastText)?void 0:a.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:o,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),j=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},f(e))),N=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},f(e))),z=o.forwardRef(function(e,t){let a=o.useContext(b),c=(0,l.Z)(a,e),s=(0,_.Z)({props:c,name:"MuiButton"}),{children:d,color:m="primary",component:h="button",className:u,disabled:v=!1,disableElevation:p=!1,disableFocusRipple:x=!1,endIcon:f,focusVisibleClassName:z,fullWidth:C=!1,size:Z="medium",startIcon:k,type:I,variant:T="text"}=s,$=(0,n.Z)(s,y),E=(0,i.Z)({},s,{color:m,component:h,disabled:v,disableElevation:p,disableFocusRipple:x,fullWidth:C,size:Z,type:I,variant:T}),R=w(E),B=k&&(0,g.jsx)(j,{className:R.startIcon,ownerState:E,children:k}),L=f&&(0,g.jsx)(N,{className:R.endIcon,ownerState:E,children:f});return(0,g.jsxs)(S,(0,i.Z)({ownerState:E,className:(0,r.Z)(a.className,R.root,u),component:h,disabled:v,focusRipple:!x,focusVisibleClassName:(0,r.Z)(R.focusVisible,z),ref:t,type:I},$,{classes:R,children:[B,d,L]}))});var C=z},48312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(93890)}])},43250:function(e,t,a){"use strict";a.d(t,{C:function(){return n}});let n=9e5},93890:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return T},default:function(){return $}});var n=a(85893),i=a(85701),o=a(46066),r=a(35451),l=a.n(r),c=a(83321),s=a(11163),d=a(64074),_=a(67294);let m=e=>{let{banners:t}=e,[a,i]=(0,_.useState)(0),r={customPaging:e=>(0,n.jsx)("button",{style:e===a?{backgroundColor:"var(--primary)"}:{},className:l().dot_item_btn}),dotsClass:l().banner_dot,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2500,arrows:!1,dots:!0,afterChange:e=>i(e)},m=(0,s.useRouter)(),h=e=>{switch(e.type){case"BRANCH":m.push("/branches/".concat((0,d.lV)(e.name),"&id=").concat(e.original_id));break;case"VILLA":m.push("/danh-sach-villa/".concat((0,d.lV)(e.name),"&id=").concat(e.original_id))}};return(0,n.jsx)("div",{className:l().banner_cnt,children:(0,n.jsx)(o.Z,{...r,children:t.map((e,t)=>{var a;return(0,n.jsxs)("div",{className:l().banner_item_cnt,children:[(0,n.jsx)("img",{style:""!==e.content?{filter:"brightness(70%)"}:{},src:null===(a=e.media)||void 0===a?void 0:a.original_url,className:l().banner_item_img,alt:""}),(0,n.jsx)("div",{className:l().banner_item,children:(0,n.jsxs)("div",{className:l().banner_item_content,children:[0==t&&(0,n.jsx)("h1",{className:l().banner_item_name,children:e.name}),(0,n.jsx)("span",{className:l().banner_item_content,children:e.content}),"HOME"!==e.type&&(0,n.jsx)("div",{className:l().banner_item_btn,children:(0,n.jsx)(c.Z,{onClick:()=>h(e),variant:"contained",size:"large",style:{backgroundColor:"var(--primary)"},children:"Kh\xe1m ph\xe1 ngay"})})]})})]},e.id)})})})};var h=a(53156),u=a(7780),v=a(25675),p=a.n(v),x=a(41664),b=a.n(x),g=a(89583);let y=()=>{let e=[{link:"https://www.youtube.com/watch?v=o0mSrIedcq8",icon:(0,n.jsx)(g.V2E,{color:"var(--primary)",size:18})},{link:"https://www.facebook.com/houston.garden01",icon:(0,n.jsx)(g.Am9,{color:"var(--primary)",size:18})},{link:"https://www.instagram.com/houston.garden/",icon:(0,n.jsx)(g.Zf_,{color:"var(--primary)",size:18})},{link:"https://www.tiktok.com/@houstongarden",icon:(0,n.jsx)(g.nTm,{color:"var(--primary)",size:18})}],t=[{name:"Lễ t\xe2n 24/7",icon:u.q.foodCate},{name:"Nh\xe0 h\xe0ng",icon:u.q.dinnerCate},{name:"Dịch vụ vận chuyển",icon:u.q.transportCate},{name:"Spa Suites",icon:u.q.spaCate}];return(0,n.jsx)(h.Z,{children:(0,n.jsxs)("div",{className:l().welcome_cnt,children:[(0,n.jsxs)("div",{className:l().welcome_cnt_content,children:[(0,n.jsx)("div",{className:l().welcome_cnt_content_left,children:(0,n.jsx)("div",{className:l().welcome_cnt_video,children:(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/o0mSrIedcq8?autoplay=1&mute=1&loop=1&color=white&controls=0",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"YouTube video player",style:{width:"100%",height:"100%"}})})}),(0,n.jsxs)("div",{className:l().welcome_cnt_content_right,children:[(0,n.jsx)("h1",{children:"BIỆT THỰ NGHỈ DƯỠNG TỐT NHẤT Ở VŨNG T\xc0U"}),(0,n.jsx)("h3",{children:"Thức dậy với niềm hạnh ph\xfac, nhẹ nh\xe0ng v\xe0 s\xe2u lắng trong t\xe2m hồn. Sự pha trộn của lối sống hiện đại, ẩm thực tuyệt vời với sự đa dạng của ẩm thực 3 miền v\xe0 đội ngũ nh\xe2n vi\xean sẽ vượt qu\xe1 mọi sự mong đợi. Houston Garden Villa l\xe0 chuỗi nghỉ dưỡng kiểu Indochine sẽ mang đến trải nghiệm nghỉ ngơi thư gi\xe3n, độc đ\xe1o – thực sự l\xe0 ng\xf4i nh\xe0 của bạn khi xa nh\xe0."}),(0,n.jsx)(b(),{href:"/",className:l().welcome_right_more,children:"Kh\xe1m ph\xe1m th\xeam"}),(0,n.jsx)("ul",{className:l().welcome_right_social,children:e.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)(b(),{href:e.link,target:"_blank",children:e.icon})},t))})]})]}),(0,n.jsx)("div",{className:l().welcome_cnt_utils,children:(0,n.jsx)("ul",{className:l().util_list,children:t.map((e,t)=>(0,n.jsxs)("li",{className:l().util_item,children:[(0,n.jsx)(p(),{src:e.icon,alt:e.name,width:100,height:100}),(0,n.jsx)("span",{className:l().util_item_name,children:e.name})]},t))})})]})})},w=e=>{let{branches:t}=e;return(0,n.jsx)("div",{className:l().home_section_item,children:t.map((e,t)=>{var a,i;return(0,n.jsxs)("div",{className:l().branch_item,children:[(0,n.jsx)("img",{className:l().branch_item_bg,src:null===(a=e.image)||void 0===a?void 0:a.original_url,alt:""}),(0,n.jsxs)("div",{className:t%2!=0?"".concat(l().branch_cnt," ").concat(l().branch_cnt_re):l().branch_cnt,children:[(0,n.jsx)("img",{src:null===(i=e.image)||void 0===i?void 0:i.original_url,alt:"",className:l().branch_cnt_img}),(0,n.jsxs)("div",{className:l().branch_detail,children:[(0,n.jsxs)("div",{className:l().branch_detail_head,children:[(0,n.jsx)("h1",{className:l().branch_detail_name,children:e.name}),(0,n.jsx)("span",{className:l().branch_detail_desc,children:e.content})]}),(0,n.jsx)("div",{className:l().branch_detail_bot,children:(0,n.jsxs)(b(),{href:"/branches/".concat((0,d.lV)(e.name),"&id=").concat(e.id),className:l().branch_detail_bot_btn,children:["T\xecm hiểu th\xeam",(0,n.jsx)(g.Z1Y,{})]})})]})]})]},e.id)})})};var f=a(36492),S=a(71697),j=a(64485),N=a(30618),z=a(43250);let C=()=>{var e,t;let[a,i]=(0,_.useState)(),{data:o}=(0,f.a)({queryKey:["HOME_VILLA_CATE"],queryFn:()=>S.h.villaCates({page:1,limit:15,status:!0})}),r=null!==(e=null==o?void 0:o.data)&&void 0!==e?e:[],{data:c,isLoading:s}=(0,f.a)({queryKey:["HOME_VILLA",a],queryFn:()=>S.h.villas({page:1,limit:12,villa_cate_id:a,includes:"full_address"}),staleTime:z.C}),d=null!==(t=null==c?void 0:c.data)&&void 0!==t?t:[];return(0,n.jsxs)(h.Z,{children:[(0,n.jsx)("div",{className:l().villa_title,children:"Biệt thự nổi bật"}),(0,n.jsx)("div",{className:l().villa_cate_cnt,children:(0,n.jsxs)("ul",{className:l().villa_cate_list,children:[(0,n.jsx)("li",{style:a?{}:{backgroundColor:"var(--primary)",color:"var(--white)"},onClick:()=>i(void 0),className:l().villa_cate_item,children:"Tất cả"}),r.map(e=>(0,n.jsx)("li",{style:e.id===a?{backgroundColor:"var(--primary)",color:"var(--white)"}:{},onClick:()=>i(e.id),className:l().villa_cate_item,children:e.villa_cate_name},e.id))]})}),(0,n.jsxs)("div",{className:l().villa_cnt,children:[s&&(0,n.jsx)(Z,{}),(0,n.jsx)("ul",{className:l().villa_list,children:d.map(e=>(0,n.jsx)("li",{className:l().villa_item,children:(0,n.jsx)(j.J,{villa:e})},e.id))})]})]})},Z=()=>{let e=[];for(var t=0;t<4;t++){let a=(0,n.jsx)("li",{className:l().villa_item,children:(0,n.jsx)(N.G,{})},t);e.push(a)}return(0,n.jsx)("ul",{className:l().villa_list,children:e})};var k=a(14833);let I=e=>{let{branches:t,banners:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.pQ,{title:"Trang chủ",description:"Trang chủ Houston Garden",url:""}),(0,n.jsxs)("main",{children:[(0,n.jsx)(m,{banners:a}),(0,n.jsx)(y,{}),(0,n.jsx)(C,{}),(0,n.jsx)(w,{branches:t})]})]})};var T=!0,$=I;I.Layout=k.Zn},35451:function(e){e.exports={home_section_item:"home_home_section_item__ZSGtt",banner_item_cnt:"home_banner_item_cnt__dU639",banner_item_img:"home_banner_item_img__HOrhs",banner_item:"home_banner_item__vFqTH",banner_item_content:"home_banner_item_content___wgoM",banner_item_name:"home_banner_item_name__iDdyO",banner_item_btn:"home_banner_item_btn__i0a4v",banner_dot:"home_banner_dot__bk3FL",dot_item_btn:"home_dot_item_btn__AiTj4",branch_item:"home_branch_item__s_wIG",branch_item_bg:"home_branch_item_bg__VtwMo",branch_cnt:"home_branch_cnt__Av3a2",branch_detail_bot:"home_branch_detail_bot__pliND",branch_cnt_re:"home_branch_cnt_re__qbV_x",branch_detail:"home_branch_detail__h7Fy8",branch_detail_head:"home_branch_detail_head__dTBcT",branch_detail_name:"home_branch_detail_name__7RiOa",branch_detail_desc:"home_branch_detail_desc___i9WI",branch_detail_bot_btn:"home_branch_detail_bot_btn__B2O8G",villa_title:"home_villa_title__PptEM",villa_cate_cnt:"home_villa_cate_cnt__dFrzo",villa_cate_list:"home_villa_cate_list__YSChb",villa_cate_item:"home_villa_cate_item__o_by_",villa_cnt:"home_villa_cnt__XXG5u",villa_list:"home_villa_list__xl46i",welcome_cnt_content:"home_welcome_cnt_content__KLmQC",welcome_cnt_content_left:"home_welcome_cnt_content_left__b_0hy",welcome_cnt_video:"home_welcome_cnt_video__zZaAg",welcome_cnt_content_right:"home_welcome_cnt_content_right__rgxYe",welcome_right_more:"home_welcome_right_more__bIfBl",welcome_right_social:"home_welcome_right_social__tzmFN",util_list:"home_util_list__CoSdx",util_item:"home_util_item__EaAJb",util_item_name:"home_util_item_name__VzciO",banner_cnt:"home_banner_cnt__bKP9T"}},464:function(e,t,a){"use strict";a.d(t,{$:function(){return i}});var n=a(61688);let i=n.useSyncExternalStore},24798:function(e,t,a){"use strict";function n(e,t){return"function"==typeof e?e(...t):!!e}a.d(t,{L:function(){return n}})}},function(e){e.O(0,[828,583,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{6659:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return s(5161)}])},7079:function(e,r,s){"use strict";s.d(r,{D:function(){return a}});var o=s(7294);function a(){let[e,r]=(0,o.useState)({load:!1,message:"",openAlert:!1,color:"info"}),s=()=>r({...e,load:!0}),a=e=>{var s;r({load:!1,message:null!==(s=e.message)&&void 0!==s?s:"",openAlert:!0,element:e.element,color:e.color})},n=()=>r({...e,openAlert:!1});return{noti:e,firstLoad:s,resultLoad:a,onCloseNoti:n}}s(1697)},5161:function(e,r,s){"use strict";s.r(r);var o=s(5893),a=s(6699),n=s(7294),l=s(263),i=s.n(l),t=s(5673),m=s(2673),c=s(1697),p=s(7536),d=s(4231),u=s(2644),_=s(7533),f=s(7079),h=s(999),x=s(3321),g=s(1163);let w=n.memo(function(){let[e,r]=(0,n.useState)(1),s=(0,g.useRouter)(),{noti:a,resultLoad:l,onCloseNoti:w}=(0,f.D)(),j=d.Ry({email:d.Z_().required("Vui l\xf2ng nhập email").matches(u.Gu.email,{message:"Vui l\xf2ng nhập đ\xfang định dạng"}),fullname:1===e?d.Z_():d.Z_().required("Vui l\xf2ng nhập họ v\xe0 t\xean"),telephone:1===e?d.Z_():d.Z_().required("Vui l\xf2ng nhập số điện thoại"),password:1===e?d.Z_():d.Z_().required("Vui l\xf2ng nhập mật khẩu"),confirm_password:1===e?d.Z_():d.Z_().required("Vui l\xf2ng nhập lại mật khẩu").oneOf([d.iH("password"),null],"Mật khẩu nhập lại kh\xf4ng đ\xfang"),code:1===e?d.Z_():d.Z_().required("Vui l\xf2ng nhập m\xe3 OTP")}),{handleSubmit:v,formState:{errors:N},register:y}=(0,p.cI)({resolver:(0,_.X)(j),defaultValues:{email:"",password:"",fullname:"",telephone:"",code:"",confirm_password:""}}),{mutate:b,isLoading:k}=(0,m.D)({mutationKey:["REGISTER"],mutationFn:e=>c.h.register(e),onSuccess:()=>{l({message:1===e?"Đ\xe3 gửi email":"Đăng k\xfd th\xe0nh c\xf4ng",color:"success"}),r(2),2===e&&setTimeout(()=>{s.push("/auth/login")})},onError:e=>{var r,s,o;l({message:null!==(o=null===(r=e.response)||void 0===r?void 0:null===(s=r.data)||void 0===s?void 0:s.message)&&void 0!==o?o:"",color:"error"})}}),Z=e=>{b(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Ct,{open:a.openAlert,close:w,severity:a.color,message:a.message}),1===e?(0,o.jsxs)("form",{autoComplete:"off",onSubmit:v(Z),children:[(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{...y("email"),type:"text",className:"app-input",placeholder:"Email"}),N.email&&(0,o.jsx)("p",{className:i().form_row_error,children:N.email.message})]}),(0,o.jsx)("div",{className:i().form_btn,children:(0,o.jsx)(t.Z,{style:{backgroundColor:"var(--primary)"},variant:"contained",loading:k,type:"submit",children:"Lấy m\xe3 x\xe1c thực"})})]}):(0,o.jsxs)("form",{onSubmit:v(Z),children:[(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{disabled:!0,...y("email"),type:"text",className:"app-input",placeholder:"Email"}),(0,o.jsx)(x.Z,{onClick:()=>r(1),variant:"text",className:i().form_row_change_mail,size:"small",children:"Đổi email"})]}),(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{...y("fullname"),type:"text",className:"app-input",placeholder:"Họ v\xe0 t\xean"}),N.fullname&&(0,o.jsx)("p",{className:i().form_row_error,children:N.fullname.message})]}),(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{...y("telephone"),type:"text",className:"app-input",placeholder:"Số điện thoại"}),N.telephone&&(0,o.jsx)("p",{className:i().form_row_error,children:N.telephone.message})]}),(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{...y("password"),type:"password",className:"app-input",placeholder:"Mật khẩu"}),N.password&&(0,o.jsx)("p",{className:i().form_row_error,children:N.password.message})]}),(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{...y("confirm_password"),type:"password",className:"app-input",placeholder:"Nhập lại mật khẩu"}),N.confirm_password&&(0,o.jsx)("p",{className:i().form_row_error,children:N.confirm_password.message})]}),(0,o.jsxs)("div",{className:i().form_row,children:[(0,o.jsx)("input",{...y("code"),type:"text",className:"app-input",placeholder:"M\xe3 x\xe1c thực"}),N.code&&(0,o.jsx)("p",{className:i().form_row_error,children:N.code.message})]}),(0,o.jsx)("div",{className:i().form_btn,children:(0,o.jsx)(t.Z,{style:{backgroundColor:"var(--primary)"},variant:"contained",loading:k,type:"submit",children:"Đăng k\xfd"})})]})]})});w.Layout=a.Ef,r.default=w},263:function(e){e.exports={form_row:"login_form_row__FlaK7",form_row_change_mail:"login_form_row_change_mail__Oj8Mc",form_row_error:"login_form_row_error__OjLUG",form_btn_forgot:"login_form_btn_forgot__LbQvU",form_btn:"login_form_btn__QU4OW"}}},function(e){e.O(0,[474,774,888,179],function(){return e(e.s=6659)}),_N_E=e.O()}]);
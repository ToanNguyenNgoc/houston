export const validate = {
  email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i,
  phoneVn: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
  ccid: /^\d{9}$/
}
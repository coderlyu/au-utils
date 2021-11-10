// 数字
export const number = /^\d+$/;
// 电话号码
export const phone = /^(\(\d{3,4}-\)|\d{3.4}-)?\d{7,8}$/;
// 手机号码
export const mobilePhone = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
// email
export const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// 域名
export const domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/;
// ip
export const ip = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/;
// 汉字
export const hanzi = /^[\u4e00-\u9fa5]{0,}$/;

export default {
  number,
  phone,
  mobilePhone,
  email,
  domain,
  ip,
  hanzi,
};

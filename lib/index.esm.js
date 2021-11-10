// 数字
var number = /^\d+$/; // 电话号码

var phone = /^(\(\d{3,4}-\)|\d{3.4}-)?\d{7,8}$/; // 手机号码

var mobilePhone = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/; // email

var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // 域名

var domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/; // ip

var ip = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/; // 汉字

var hanzi = /^[\u4e00-\u9fa5]{0,}$/;

/**
 *
 * @param val 需要获取类型的值
 * @returns 返回 类型 后缀
 */
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
function isObject(val) {
  return getType(val) === 'object';
}
function isArray(val) {
  return getType(val) === 'array';
}
function isNumber(val) {
  return getType(val) === 'number';
}
function isString(val) {
  return getType(val) === 'string';
}
function isError(val) {
  return getType(val) === 'error';
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

function isPromsie(p) {
  return isFunction(p) && isFunction(p.then) && isFunction(p["catch"]);
}
/**
 * 判断变量是否为空
 * @param  val
 * @returns 是否为空
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function isEmpty(val) {
  return val === undefined || val === null || val === '' || isArray(val) && val.length === 0 || isObject(val) && Object.keys(val) === 0;
}
function isFunction(val) {
  return typeof val === 'function';
}
var test = function test() {
  console.log('wo shi test');
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('');
    }, 200);
  });
};

export { domain, email, getType, hanzi, ip, isArray, isEmpty, isError, isFunction, isNumber, isObject, isPromsie, isString, mobilePhone, number, phone, test };
